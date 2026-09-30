import type { Metadata } from "next";
import { ArrowUpRight, CalendarDays, Clock, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { company, contactOptions } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a consultation or send ZetuTech LLC a message about cloud architecture, legacy modernization, AI integration, or platform engineering.",
};

export default function ContactPage() {
  return (
    <main id="main" className="flex-1 py-20 md:py-28">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-5xl font-bold tracking-tight md:text-6xl">Let’s talk architecture.</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">
            Tell us where your system is today and where it needs to be. Every enquiry is read personally by
            our founder, and you’ll get a straight answer on whether we’re the right fit.
          </p>

          <div className="mt-10 space-y-4">
            {company.bookingUrl && (
              <a
                href={company.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-xl border border-amber-500/40 bg-amber-500/5 p-5 transition-colors hover:border-amber-500"
              >
                <CalendarDays className="mt-0.5 size-5 shrink-0 text-amber-500" aria-hidden />
                <span className="flex-1">
                  <span className="flex items-center gap-1 font-semibold text-slate-50">
                    Book a consultation
                    <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                  </span>
                  <span className="mt-1 block text-sm text-slate-400">
                    Pick a time for a free 30-minute intro call.
                  </span>
                </span>
              </a>
            )}

            <ul className="space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-sm">
              <li className="flex items-center gap-3 text-slate-300">
                <Mail className="size-4 shrink-0 text-amber-500" aria-hidden />
                <a href={`mailto:${company.contactEmail}`} className="break-all hover:text-slate-50">
                  {company.contactEmail}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <MapPin className="size-4 shrink-0 text-amber-500" aria-hidden />
                {company.location} · Serving clients remotely
              </li>
              <li className="flex items-center gap-3 text-slate-300">
                <Clock className="size-4 shrink-0 text-amber-500" aria-hidden />
                Replies within one business day
              </li>
            </ul>
          </div>
        </div>

        <div className="relative rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-10">
          <ContactForm
            services={contactOptions.services}
            budgets={contactOptions.budgets}
            timelines={contactOptions.timelines}
          />
        </div>
      </Container>
    </main>
  );
}
