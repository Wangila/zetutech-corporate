"use client";

import { useActionState } from "react";
import { CircleCheck, LoaderCircle, Send } from "lucide-react";
import { submitContact, type ContactState } from "@/app/contact/actions";
import { cn } from "@/lib/cn";

type ContactFormProps = {
  services: readonly string[];
  budgets: readonly string[];
  timelines: readonly string[];
};

const initialState: ContactState = { status: "idle" };

const inputClass =
  "mt-2 block w-full rounded-lg border bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500/60";

function fieldClass(hasError: boolean) {
  return cn(inputClass, hasError ? "border-red-500/70" : "border-slate-800 focus:border-amber-500/60");
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 text-xs text-red-400">
      {message}
    </p>
  );
}

export function ContactForm({ services, budgets, timelines }: ContactFormProps) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const errors = state.errors ?? {};
  const values = state.values ?? {};

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-emerald-500/30 bg-emerald-500/5 px-8 py-16 text-center">
        <CircleCheck className="size-10 text-emerald-400" aria-hidden />
        <h2 className="mt-6 text-2xl font-bold tracking-tight">Message sent.</h2>
        <p className="mt-3 max-w-sm leading-relaxed text-slate-400" role="status">
          {state.message}
        </p>
      </div>
    );
  }

  const labelClass = "text-sm font-medium text-slate-200";

  return (
    <form action={formAction} noValidate className="space-y-6">
      {/* Honeypot field — hidden from people, tempting to bots. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-amber-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            defaultValue={values.name}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass(!!errors.name)}
          />
          <FieldError id="name-error" message={errors.name} />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Work email <span className="text-amber-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            defaultValue={values.email}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass(!!errors.email)}
          />
          <FieldError id="email-error" message={errors.email} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className={labelClass}>
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          autoComplete="organization"
          maxLength={150}
          defaultValue={values.company}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "company-error" : undefined}
          className={fieldClass(!!errors.company)}
        />
        <FieldError id="company-error" message={errors.company} />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>
          What do you need help with? <span className="text-amber-500">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          defaultValue={values.service ?? ""}
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? "service-error" : undefined}
          className={fieldClass(!!errors.service)}
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <FieldError id="service-error" message={errors.service} />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className={labelClass}>
            Budget range
          </label>
          <select
            id="budget"
            name="budget"
            defaultValue={values.budget ?? ""}
            aria-invalid={!!errors.budget}
            className={fieldClass(!!errors.budget)}
          >
            <option value="">Prefer not to say</option>
            {budgets.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="budget-error" message={errors.budget} />
        </div>

        <div>
          <label htmlFor="timeline" className={labelClass}>
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            defaultValue={values.timeline ?? ""}
            aria-invalid={!!errors.timeline}
            className={fieldClass(!!errors.timeline)}
          >
            <option value="">Not sure</option>
            {timelines.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError id="timeline-error" message={errors.timeline} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Tell us about your project <span className="text-amber-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={20}
          maxLength={5000}
          defaultValue={values.message}
          placeholder="Where is your system today, and where does it need to be?"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClass(!!errors.message), "resize-y")}
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      {state.status === "error" && state.message && (
        <p role="alert" className="rounded-lg border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-300">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-amber-400 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {pending ? (
          <>
            <LoaderCircle className="size-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-4" aria-hidden />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}
