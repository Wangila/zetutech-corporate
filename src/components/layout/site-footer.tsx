import Link from "next/link";
import { Wordmark } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { company, footer, nav } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800">
      <Container className="grid grid-cols-1 gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
            Boutique software architecture, advisory, and engineering talent. {company.shortLocation}, serving
            clients remotely.
          </p>
        </div>
        <nav aria-label="Footer" className="text-sm">
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-500">Company</h2>
          <ul className="mt-4 space-y-3">
            {nav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-400 transition-colors hover:text-slate-50">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Connect" className="text-sm">
          <h2 className="font-mono text-xs uppercase tracking-widest text-slate-500">Connect</h2>
          <ul className="mt-4 space-y-3">
            {footer.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-slate-400 transition-colors hover:text-slate-50">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <Container className="border-t border-slate-800/60 py-6 text-xs text-slate-600">
        {footer.copyright}
      </Container>
    </footer>
  );
}
