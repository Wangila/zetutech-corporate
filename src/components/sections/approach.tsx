import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { approach } from "@/content/site";

export function Approach() {
  return (
    <section id="approach" className="scroll-mt-16 border-t border-slate-800 py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow={approach.eyebrow} title={approach.title} />

        <ol className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-slate-800 bg-slate-800 md:grid-cols-2 lg:grid-cols-4">
          {approach.steps.map((step, index) => (
            <li key={step.title} className="relative bg-slate-950 p-8">
              <span className="font-mono text-sm text-amber-500">
                {String(index + 1).padStart(2, "0")}
                <span className="text-slate-600"> /{String(approach.steps.length).padStart(2, "0")}</span>
              </span>
              <h3 className="mt-6 text-2xl font-bold tracking-tighter">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">{step.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
