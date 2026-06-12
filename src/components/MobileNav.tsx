import { useEffect, useState } from "react";
import { List, Phone, ChatCircle, X } from "@phosphor-icons/react";
import { Logo } from "@/components/Logo";

type NavLink = readonly [string, string];

type MobileNavProps = {
  links: readonly NavLink[];
  phone: string;
  phoneHref: string;
  waHref: string;
};

/** Lightweight mobile nav — avoids Radix Sheet on the critical path. */
export function MobileNav({ links, phone, phoneHref, waHref }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
        aria-label="Menü öffnen"
        aria-expanded={open}
      >
        <List className="h-5 w-5" weight="regular" />
      </button>

      <div
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/60"
          aria-label="Menü schließen"
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute top-0 right-0 h-full w-[min(100vw,20rem)] bg-[var(--color-brand-bar)] border-l border-white/15 text-white flex flex-col shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          aria-label="Mobile Navigation"
        >
          <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-white/10">
            <Logo className="h-10 max-w-[11rem]" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Menü schließen"
            >
              <X className="h-5 w-5" weight="regular" />
            </button>
          </div>
          <div className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-4 text-lg font-medium hover:bg-white/10 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="px-4 pb-8 pt-4 border-t border-white/10 space-y-3">
            <a
              href={phoneHref}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-medium text-primary-foreground min-h-[52px]"
            >
              <Phone className="h-5 w-5" weight="light" />
              {phone} anrufen
            </a>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 text-base font-medium min-h-[52px]"
            >
              <ChatCircle className="h-5 w-5" weight="light" />
              WhatsApp schreiben
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
