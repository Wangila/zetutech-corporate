"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

type MobileMenuProps = {
  items: readonly { label: string; href: string }[];
  ctaHref: string;
};

export function MobileMenu({ items, ctaHref }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-10 place-items-center rounded-lg border border-slate-800 text-slate-300"
      >
        {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-800 bg-slate-900 p-2 shadow-2xl shadow-black/50"
        >
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="block rounded-lg px-3 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-slate-50"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            onClick={close}
            className="mt-2 block rounded-lg bg-amber-500 px-3 py-2.5 text-center text-sm font-semibold text-slate-950"
          >
            Book a Call
          </Link>
        </nav>
      )}
    </div>
  );
}
