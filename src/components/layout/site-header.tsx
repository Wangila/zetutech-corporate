import Link from "next/link";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { bookingHref, bookingLinkProps, nav } from "@/content/site";

export function Wordmark() {
  return (
    <Link href="/" className="flex items-center gap-2.5 font-semibold tracking-tight text-slate-50">
      <span className="grid size-7 place-items-center rounded-md border border-amber-500/40 bg-amber-500/10 font-mono text-xs text-amber-500">
        Z
      </span>
      ZetuTech
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-7 text-sm text-slate-400 lg:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-slate-50">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ButtonLink href={bookingHref} {...bookingLinkProps} className="px-4 py-2">
              Book a Call
            </ButtonLink>
          </div>
          <MobileMenu items={nav} ctaHref={bookingHref} ctaLinkProps={bookingLinkProps} />
        </div>
      </Container>
    </header>
  );
}
