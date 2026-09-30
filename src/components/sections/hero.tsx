import Image from "next/image";
import { ArrowRight, Landmark, Layers, type LucideIcon } from "lucide-react";
// Photo by X (@disruptxn) on Unsplash (Unsplash License): unsplash.com/photos/IgUR1iX0mqM
import heroPhoto from "@/assets/hero-engineers.jpg";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { HeroDiagram } from "@/components/sections/hero-diagram";
import { bookingHref, bookingLinkProps, hero } from "@/content/site";
import { cn } from "@/lib/cn";

/** One headline line ending in an icon (in the line's own colour), kept on the same line as the last word. */
function HeadlineLine({ text, icon: Icon, className }: { text: string; icon: LucideIcon; className?: string }) {
  const split = text.lastIndexOf(" ");
  return (
    <span className={cn("block", className)}>
      {text.slice(0, split + 1)}
      <span className="whitespace-nowrap">
        {text.slice(split + 1)}
        <Icon
          aria-hidden
          strokeWidth={2.25}
          className="ml-[0.2em] inline-block size-[0.7em] -translate-y-[0.06em] align-baseline"
        />
      </span>
    </span>
  );
}

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
          {/* One band spanning the text column (within the page margins) lifts the headline off the photo. */}
          {/* Each line needs ~10.4em (text, icon, band padding); below sm, size to the viewport so neither line wraps. */}
          <h1 className="mt-6 mb-8 rounded-[0.2em] bg-slate-900/70 px-[0.28em] pt-[0.14em] pb-[0.2em] text-[length:min(2.6rem,calc((100vw_-_3rem)/11))] leading-tight font-bold tracking-tight shadow-lg shadow-black/30 backdrop-blur-sm sm:text-5xl md:text-6xl lg:text-[2.6rem] xl:text-[3.25rem]">
            {/* Icons stand in for full stops: layers for scale, pillars for decisions that hold. */}
            <HeadlineLine text={hero.headline[0]} icon={Layers} />
            <HeadlineLine text={hero.headline[1]} icon={Landmark} className="text-slate-500" />
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl lg:mx-0 lg:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <ButtonLink href={bookingHref} {...bookingLinkProps} className="w-full sm:w-auto">
              {hero.primaryCta}
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href={hero.secondaryCta.href} variant="secondary" className="w-full sm:w-auto">
              {hero.secondaryCta.label}
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-slate-400 lg:justify-start">
            {hero.proofPoints.map((point) => (
              <li key={point} className="flex items-center gap-2">
                <span className="size-1 rounded-full bg-amber-500" aria-hidden />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Phones skip the diagram so services follow the hero directly. */}
        <HeroDiagram className="mx-auto hidden max-w-xl sm:block lg:max-w-none" />
      </Container>
    </section>
  );
}
