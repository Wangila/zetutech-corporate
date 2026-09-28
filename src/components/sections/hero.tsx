import Image from "next/image";
import { ArrowRight } from "lucide-react";
// Photo by X (@disruptxn) on Unsplash (Unsplash License): unsplash.com/photos/IgUR1iX0mqM
import heroPhoto from "@/assets/hero-engineers.jpg";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroDiagram } from "@/components/sections/hero-diagram";
import { bookingHref, hero } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-800">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-amber-500/5 blur-3xl"
      />

      {/*
        Black-and-white photo: on phones it sits behind the top of the hero and fades out
        downward; from lg up it hugs the right edge and fades out toward the text.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] [mask-image:linear-gradient(to_bottom,black_40%,transparent)] sm:h-[30rem] lg:inset-x-auto lg:right-0 lg:h-full lg:w-[58%] lg:[mask-image:linear-gradient(to_left,black_40%,transparent)]"
      >
        <Image
          src={heroPhoto}
          alt=""
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          loading="eager"
          fetchPriority="high"
          placeholder="blur"
          className="object-cover object-[85%_25%] grayscale lg:object-[80%_center]"
        />
        <div className="absolute inset-0 bg-slate-950/55" />
      </div>
      <Container className="relative grid grid-cols-1 items-center gap-16 py-24 md:py-32 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        <div className="text-center lg:text-left">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="mt-6 mb-6 text-5xl font-bold tracking-tighter md:text-7xl lg:text-5xl xl:text-6xl">
            <span className="block">{hero.headline[0]}</span>
            <span className="block text-slate-500">{hero.headline[1]}</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl lg:mx-0 lg:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <ButtonLink href={bookingHref} className="w-full sm:w-auto">
              {hero.primaryCta}
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-slate-500 lg:justify-start">
            {hero.proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-amber-500" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <HeroDiagram className="mx-auto max-w-xl lg:max-w-none" />
      </Container>
    </section>
  );
}
