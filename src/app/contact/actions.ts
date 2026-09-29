"use server";

import { company, contactOptions } from "@/content/site";

const fields = ["name", "email", "company", "service", "budget", "timeline", "message"] as const;
type Field = (typeof fields)[number];

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<Field, string>>;
  values?: Partial<Record<Field, string>>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function read(formData: FormData, field: string) {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const values = Object.fromEntries(fields.map((field) => [field, read(formData, field)])) as Record<Field, string>;

  // Honeypot: real visitors never see or fill this field.
  if (read(formData, "website")) {
    return { status: "success", message: "Thanks — your message has been received." };
  }

  const errors: Partial<Record<Field, string>> = {};
  if (!values.name) errors.name = "Please enter your name.";
  else if (values.name.length > 100) errors.name = "Name must be 100 characters or fewer.";

  if (!EMAIL_PATTERN.test(values.email) || values.email.length > 200) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.company.length > 150) errors.company = "Company must be 150 characters or fewer.";

  if (!contactOptions.services.includes(values.service)) errors.service = "Please choose a service.";
  if (values.budget && !contactOptions.budgets.includes(values.budget)) errors.budget = "Please choose a budget range.";
  if (values.timeline && !contactOptions.timelines.includes(values.timeline)) {
    errors.timeline = "Please choose a timeline.";
  }

  if (values.message.length < 20) errors.message = "Please share a little more detail (at least 20 characters).";
  else if (values.message.length > 5000) errors.message = "Message must be 5,000 characters or fewer.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set; message was not delivered.");
    return {
      status: "error",
      message: `Our contact form is temporarily unavailable. Please email us directly at ${company.contactEmail}.`,
      values,
    };
  }

  const text = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company: ${values.company || "—"}`,
    `Service: ${values.service}`,
    `Budget: ${values.budget || "—"}`,
    `Timeline: ${values.timeline || "—"}`,
    "",
    values.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "ZetuTech Website <website@mail.zetutech.com>",
        to: [process.env.CONTACT_TO_EMAIL ?? company.contactEmail],
        reply_to: values.email,
        subject: `New enquiry: ${values.service} — ${values.name}`,
        text,
      }),
    });

    if (!response.ok) {
      console.error("[contact] Resend rejected the message:", response.status, await response.text());
      throw new Error("Email provider error");
    }
  } catch (error) {
    console.error("[contact] Failed to send message:", error);
    return {
      status: "error",
      message: `Something went wrong sending your message. Please try again, or email us at ${company.contactEmail}.`,
      values,
    };
  }

  return {
    status: "success",
    message: "Thanks — your message is on its way. Expect a reply within one business day.",
  };
}
