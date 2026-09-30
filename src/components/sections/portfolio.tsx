import { ArrowRight, CircleDollarSign, ShieldCheck, type LucideIcon } from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionHeading } from "@/components/ui/section-heading";
import { work, type FeatureIcon } from "@/content/site";

const icons: Record<FeatureIcon, LucideIcon> = {
  "shield-check": ShieldCheck,
  "circle-dollar-sign": CircleDollarSign,
};

export function Portfolio() {
  const { flagship, features } = work;

  return (
    <section id="work" className="scroll-mt-16 border-t border-slate-800 py-24 md:py-32">
      <Container>
        <SectionHeading eyebrow={work.eyebrow} title={work.title} description={work.description} />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BentoCard className="col-span-full flex flex-col justify-between gap-10 md:p-12 lg:col-span-2 lg:row-span-2">
            <div>
              <Eyebrow className="text-xs">{flagship.eyebrow}</Eyebrow>
              <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
                {flagship.title}
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
                {flagship.description}
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <ButtonLink href={flagship.caseStudy.href} className="w-full sm:w-fit">
                {flagship.caseStudy.cta}
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-emerald-400">
                <span className="size-2 rounded-full bg-emerald-400" aria-hidden />
                {flagship.status}
              </p>
            </div>
          </BentoCard>

          {features.map((feature) => {
            const Icon = icons[feature.icon];
            return (
              <BentoCard key={feature.title}>
                <div className="flex size-11 items-center justify-center rounded-lg border border-slate-800 bg-slate-950">
                  <Icon className="size-5 text-amber-500" aria-hidden />
                </div>
                <h4 className="mt-6 text-lg font-semibold tracking-tight">{feature.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </BentoCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
