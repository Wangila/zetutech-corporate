import { Approach } from "@/components/sections/approach";
import { CtaBand } from "@/components/sections/cta-band";
import { Engagements } from "@/components/sections/engagements";
import { Hero } from "@/components/sections/hero";
import { Leadership } from "@/components/sections/leadership";
import { Portfolio } from "@/components/sections/portfolio";
import { Services } from "@/components/sections/services";
import { TalentTeaser } from "@/components/sections/talent";

export default function Home() {
  return (
    <main id="main" className="flex-1">
      <Hero />
      <Services />
      <Engagements />
      <TalentTeaser />
      <Approach />
      <Portfolio />
      <Leadership />
      <CtaBand />
    </main>
  );
}
