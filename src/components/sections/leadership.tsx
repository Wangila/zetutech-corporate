import Image from "next/image";
import { GraduationCap } from "lucide-react";
import founderPhoto from "@/assets/brian-wangila-headshot.jpg";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { LinkedInIcon } from "@/components/ui/linkedin-icon";
import { TerminalReadout } from "@/components/ui/terminal-readout";
import { company, leadership } from "@/content/site";

export function Leadership() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-slate-800 py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Eyebrow>{leadership.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            {leadership.title}
          </h2>
          {leadership.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-lg leading-relaxed text-slate-400">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-6 lg:pt-14">
          <figure className="flex items-center gap-5 rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:gap-7">
            <Image
              src={founderPhoto}
              alt={`${leadership.founder.name}, founder of ZetuTech`}
              sizes="(min-width: 640px) 144px, 96px"
              placeholder="blur"
              // LinkedIn-style avatar: circular crop framed by a ring, head and shoulders centered.
              className="aspect-square w-24 shrink-0 rounded-full object-cover object-[50%_12%] ring-2 ring-slate-700 ring-offset-4 ring-offset-slate-900 sm:w-36"
            />
            <figcaption>
              <p className="text-xl font-bold tracking-tight text-slate-50">{leadership.founder.name}</p>
              <p className="mt-1 text-sm text-slate-400">{leadership.founder.role}</p>
              <a
                href={company.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 whitespace-nowrap text-sm font-semibold text-amber-500 transition-colors hover:text-amber-400"
              >
                <LinkedInIcon className="size-4" />
                Connect on LinkedIn
              </a>
            </figcaption>
          </figure>

          <TerminalReadout
            title={leadership.terminal.title}
            command={leadership.terminal.command}
            rows={leadership.terminal.rows}
          />

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-slate-400">
              Certificates
            </h3>
            <ul className="mt-4 space-y-4">
              {leadership.credentials.map((credential) => (
                <li key={credential.title} className="flex items-start gap-3">
                  <GraduationCap className="mt-0.5 size-5 shrink-0 text-amber-500" aria-hidden />
                  <div>
                    <p className="font-medium text-slate-100">{credential.title}</p>
                    <p className="text-sm text-slate-400">{credential.issuer}</p>
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
