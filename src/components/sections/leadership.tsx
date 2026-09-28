import { GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { TerminalReadout } from "@/components/ui/terminal-readout";
import { leadership } from "@/content/site";

export function Leadership() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-slate-800 py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{leadership.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold tracking-tighter md:text-5xl">
            {leadership.title}
          </h2>
          {leadership.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-lg leading-relaxed text-slate-400">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-6 lg:pt-14">
          <TerminalReadout
            title={leadership.terminal.title}
            command={leadership.terminal.command}
            rows={leadership.terminal.rows}
          />

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-500">
              Certificates
            </h3>
            <ul className="mt-4 space-y-4">
              {leadership.credentials.map((credential) => (
                <li key={credential.title} className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 size-5 shrink-0 text-amber-500" aria-hidden />
                  <div>
                    <p className="font-medium text-slate-100">{credential.title}</p>
                    <p className="text-sm text-slate-500">{credential.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
