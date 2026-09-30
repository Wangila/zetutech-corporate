import type { Metadata } from "next";
import { TalentOffer } from "@/components/sections/talent";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { talent } from "@/content/site";

export const metadata: Metadata = {
  title: "Engineering Talent",
  description:
    "Architect-vetted software engineers from the United States and Kenya, on contract as a team extension or as direct hires, from ZetuTech LLC.",
};

export default function TalentPage() {
  return (
    <main id="main" className="flex-1 py-20 md:py-28">
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{talent.eyebrow}</Eyebrow>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{talent.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-400">{talent.description}</p>
        </div>
        <div className="mt-14">
          <TalentOffer />
        </div>
      </Container>
    </main>
  );
}
