import { CircleDollarSign, Lock, ShieldCheck, type LucideIcon } from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
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
              <h3 className="mt-4 text-3xl font-bold tracking-tighter md:text-4xl">
                {flagship.title}
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
                {flagship.description}
              </p>
            </div>
            <button
              type="button"
              disabled
              className="inline-flex w-fit cursor-not-allowed items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-5 py-3 text-sm font-semibold text-slate-400"
            >
              <Lock className="size-4 text-amber-500" aria-hidden />
              {flagship.status}
            </button>
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
