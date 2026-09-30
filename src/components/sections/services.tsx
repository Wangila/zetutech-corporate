import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Check,
  Cloud,
  Compass,
  Network,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";
import { BentoCard } from "@/components/ui/bento-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { bookingHref, bookingLinkProps, services, type ServiceIcon } from "@/content/site";

const icons: Record<ServiceIcon, LucideIcon> = {
  cloud: Cloud,
  modernization: RefreshCw,
  ai: BrainCircuit,
  marketplace: Network,
  advisory: Compass,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow={services.eyebrow}
          title={services.title}
          description={services.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service) => {
            const Icon = icons[service.icon];
            return (
              <BentoCard key={service.title} className="flex flex-col">
                <div className="flex size-11 items-center justify-center rounded-lg border border-slate-800 bg-slate-950">
                  <Icon className="size-5 text-amber-500" aria-hidden />
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>
                <ul className="mt-6 space-y-2 border-t border-slate-800 pt-6 text-sm text-slate-300">
                  {service.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </BentoCard>
            );
          })}

          <Link
            href={bookingHref}
            {...bookingLinkProps}
            className="group flex flex-col justify-between gap-8 rounded-2xl border border-dashed border-slate-700 p-8 transition-colors hover:border-amber-500/60 hover:bg-amber-500/[0.03]"
          >
            <div>
              <h3 className="text-lg font-semibold tracking-tight">Not sure where to start?</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Most engagements begin with a short conversation about where your system is today. We’ll tell
                you honestly which of these fits — or whether none do.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-amber-500">
              Book a consultation
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
}
