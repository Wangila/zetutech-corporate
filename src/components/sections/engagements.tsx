import { Check } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { bookingHref, bookingLinkProps, engagements } from "@/content/site";
import { cn } from "@/lib/cn";

export function Engagements() {
  return (
    <section id="engagements" className="scroll-mt-16 border-t border-slate-800 py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow={engagements.eyebrow}
          title={engagements.title}
          description={engagements.description}
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {engagements.items.map((item) => (
            <article
              key={item.name}
              className={cn(
                "relative flex flex-col rounded-2xl border p-8",
                item.featured
                  ? "border-amber-500/50 bg-gradient-to-b from-amber-500/[0.07] to-slate-900"
                  : "border-slate-800 bg-slate-900",
              )}
            >
              {item.featured && (
                <span className="absolute -top-3 left-8 rounded-full border border-amber-500/50 bg-slate-950 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-amber-500">
                  Recommended start
                </span>
              )}
              <h3 className="text-xl font-semibold tracking-tight">{item.name}</h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-widest text-slate-400">
                {item.duration}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-slate-400">{item.description}</p>
              <ul className="mt-6 flex-1 space-y-3 border-t border-slate-800 pt-6 text-sm text-slate-300">
                {item.includes.map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-amber-500" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href={bookingHref}
                {...bookingLinkProps}
                variant={item.featured ? "primary" : "secondary"}
                className="mt-8 w-full"
              >
                Discuss this engagement
              </ButtonLink>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
