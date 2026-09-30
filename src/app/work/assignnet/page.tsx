import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Check } from "lucide-react";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { assignnetCaseStudy as study } from "@/content/site";

export const metadata: Metadata = {
  title: "AssignNet Case Study",
  description:
    "How ZetuTech architected, built, and operates AssignNet: integrity gates as a state machine, an internal payments ledger, Stripe and Paystack payout rails, and deterministic moderation.",
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{children}</h2>;
}

export default function AssignNetCaseStudyPage() {
  return (
    <main id="main" className="flex-1">
      <div className="py-20 md:py-28">
        <Container>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-slate-50"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to our work
          </Link>

          <header className="mt-10 max-w-3xl">
            <Eyebrow>{study.eyebrow}</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{study.title}</h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">{study.summary}</p>
          </header>

          <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 sm:grid-cols-2 lg:grid-cols-4">
            {study.facts.map((fact) => (
              <div key={fact.label} className="bg-slate-900 p-6">
                <dt className="font-mono text-xs uppercase tracking-widest text-amber-500">{fact.label}</dt>
                <dd className="mt-2 text-sm text-slate-200">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <section className="mt-24 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <SectionTitle>{study.challenge.title}</SectionTitle>
            <div className="space-y-6 text-lg leading-relaxed text-slate-400">
              {study.challenge.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="mt-24">
            <div className="max-w-2xl">
              <SectionTitle>{study.architecture.title}</SectionTitle>
              <p className="mt-6 text-lg leading-relaxed text-slate-400">{study.architecture.description}</p>
            </div>
            <ol className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {study.architecture.layers.map((layer, index) => (
                <li key={layer.name} className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
                  <p className="font-mono text-xs text-amber-500">
                    {String(index + 1).padStart(2, "0")}
                    <span className="text-slate-500"> /{String(study.architecture.layers.length).padStart(2, "0")}</span>
                  </p>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{layer.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{layer.detail}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-24">
            <SectionTitle>{study.decisions.title}</SectionTitle>
            <ol className="mt-10 divide-y divide-slate-800 border-y border-slate-800">
              {study.decisions.items.map((decision, index) => (
                <li key={decision.title} className="grid grid-cols-1 gap-3 py-8 md:grid-cols-[4rem_1fr_2fr] md:gap-8">
                  <span className="font-mono text-sm text-amber-500">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="text-xl font-semibold tracking-tight text-slate-50">{decision.title}</h3>
                  <p className="leading-relaxed text-slate-400">{decision.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-24 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <h2 className="text-2xl font-bold tracking-tight">{study.practice.title}</h2>
              <ul className="mt-6 space-y-3 text-slate-300">
                {study.practice.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="mt-1 size-4 shrink-0 text-amber-500" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8">
              <h2 className="text-2xl font-bold tracking-tight">{study.takeaway.title}</h2>
              <p className="mt-6 leading-relaxed text-slate-300">{study.takeaway.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {study.takeaway.services.map((service) => (
                  <li key={service}>
                    <Link
                      href="/#services"
                      className="block rounded-md border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-slate-500 hover:text-slate-50"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </Container>
      </div>
      <CtaBand />
    </main>
  );
}
