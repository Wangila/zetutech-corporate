import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <main id="main" className="relative flex flex-1 items-center overflow-hidden py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_75%)]"
      />
      <Container className="relative text-center">
        <Eyebrow>Error 404</Eyebrow>
        <h1 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">This route doesn’t resolve.</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-400">
          The page you’re looking for has moved or never existed. Let’s get you back to a known-good state.
        </p>
        <p className="mt-8 font-mono text-sm text-slate-400">
          <span className="text-amber-500">$</span> curl -I zetutech.com/this-page{" "}
          <span className="text-slate-600">→</span> <span className="text-red-400">404 Not Found</span>
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href="/" className="w-full sm:w-auto">
            <ArrowLeft className="size-4" aria-hidden />
            Back to Home
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary" className="w-full sm:w-auto">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
