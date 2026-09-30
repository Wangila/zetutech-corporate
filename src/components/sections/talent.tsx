import { ArrowRight, Check, MapPin } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { talent } from "@/content/site";

/** Home-page summary; the full offer lives on /talent so consulting stays the focus here. */
export function TalentTeaser() {
  return (
    <section id="talent" className="scroll-mt-16 border-t border-slate-800 py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <Eyebrow>{talent.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">{talent.title}</h2>
            <p className="mt-4 leading-relaxed text-slate-400">{talent.teaser.description}</p>
          </div>
          <div>
            <ul className="divide-y divide-slate-800 border-y border-slate-800">
              {talent.models.map((model) => (
                <li key={model.name} className="flex items-baseline justify-between gap-4 py-4">
                  <span className="font-semibold text-slate-100">{model.name}</span>
                  <span className="font-mono text-xs uppercase tracking-widest text-amber-500">{model.type}</span>
                </li>
              ))}
            </ul>
            <ButtonLink href="/talent" variant="secondary" className="mt-6 w-full">
              {talent.teaser.cta}
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

/** Engagement models, hubs, roles, and vetting, shown on /talent. */
export function TalentOffer() {
  return (
    <>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {talent.models.map((model) => (
          <article key={model.name} className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-amber-500">{model.type}</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">{model.name}</h2>
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
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400">Talent hubs</h2>
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
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400">Roles we staff</h2>
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
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400">How we vet</h2>
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
    </>
  );
}
