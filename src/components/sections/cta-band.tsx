import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { bookingHref, ctaBand } from "@/content/site";

export function CtaBand() {
  return (
    <section className="border-t border-slate-800 py-24 md:py-32">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 px-8 py-16 text-center md:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.035)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
          />
          <div className="relative">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{ctaBand.title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
              {ctaBand.description}
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={bookingHref} className="w-full sm:w-auto">
                {ctaBand.primary}
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href={ctaBand.secondary.href} variant="secondary" className="w-full sm:w-auto">
                {ctaBand.secondary.label}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
