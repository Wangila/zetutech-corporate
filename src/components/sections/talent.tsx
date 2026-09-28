import { Check, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { talent } from "@/content/site";

export function Talent() {
  return (
    <section id="talent" className="scroll-mt-16 border-t border-slate-800 py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow={talent.eyebrow} title={talent.title} description={talent.description} />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {talent.models.map((model) => (
            <article key={model.name} className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-8">
              <p className="font-mono text-xs uppercase tracking-widest text-amber-500">{model.type}</p>
              <h3 className="mt-3 text-2xl font-bold tracking-tighter">{model.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">{model.description}</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-slate-800 pt-6 text-sm text-slate-300">
                {model.includes.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
              <ButtonLink href="/contact" variant="secondary" className="mt-8 w-full sm:w-fit">
                {model.cta}
              </ButtonLink>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">Talent hubs</h3>
            <ul className="mt-6 space-y-6">
              {talent.hubs.map((hub) => (
                <li key={hub.region}>
                  <p className="flex items-center gap-2 font-semibold text-slate-100">
                    <MapPin className="size-4 text-amber-500" aria-hidden />
                    {hub.region}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{hub.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">Roles we staff</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {talent.roles.map((role) => (
                <li
                  key={role}
                  className="rounded-md border border-slate-800 bg-slate-950 px-3 py-1.5 text-xs text-slate-300"
                >
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-8">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">How we vet</h3>
            <ol className="mt-6 space-y-4">
              {talent.vetting.map((step, index) => (
                <li key={step} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="font-mono text-amber-500">{String(index + 1).padStart(2, "0")}</span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
}
