import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Eyebrow } from "@/components/ui/eyebrow";
import { legal } from "@/content/site";

type LegalPageProps = {
  title: string;
  summary: string;
  children: React.ReactNode;
};

export function LegalPage({ title, summary, children }: LegalPageProps) {
  return (
    <main id="main" className="flex-1 px-6 py-16 md:px-8 md:py-24">
      <article className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-amber-500 transition-colors hover:text-amber-400"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to ZetuTech
        </Link>

        <header className="mt-12 border-b border-slate-800 pb-10">
          <Eyebrow className="text-xs">Legal</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold tracking-tighter md:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">{summary}</p>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-slate-500">
            Effective: {legal.effectiveDate}
          </p>
        </header>

        <div className="mt-10 space-y-12">{children}</div>
      </article>
    </main>
  );
}

type LegalSectionProps = {
  number: number;
  title: string;
  children: React.ReactNode;
};

export function LegalSection({ number, title, children }: LegalSectionProps) {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="flex items-baseline gap-3 text-xl font-semibold tracking-tight md:text-2xl">
        <span className="font-mono text-sm text-amber-500">
          {String(number).padStart(2, "0")}
        </span>
        {title}
      </h2>
      <div className="mt-4 space-y-4 leading-relaxed text-slate-400 [&_a]:text-amber-500 [&_a]:underline-offset-4 hover:[&_a]:underline [&_h3]:mt-6 [&_h3]:font-semibold [&_h3]:text-slate-200 [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-slate-200 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6 [&_ul]:marker:text-slate-600">
        {children}
      </div>
    </section>
  );
}
