import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-ocean-900/40 bg-neutral-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" className="font-semibold tracking-wide">STERLING.DEV</a>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 text-sm sm:flex">
          {nav.map((i) => (
            <a key={i.href} href={i.href} className="hover:text-ocean-300">{i.label}</a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl bg-kelp-400 px-4 py-2 text-sm font-semibold text-black hover:bg-kelp-300"
          >
            Get a Quote
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="sm:hidden inline-flex items-center rounded-md border border-ocean-900/40 px-3 py-2 hover:bg-white/5"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0 w-0 border-b-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="sm:hidden border-t border-ocean-900/40 bg-neutral-950/95">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3 text-sm">
            {nav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 hover:bg-white/5"
              >
                {i.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-kelp-400 px-4 py-2 font-semibold text-black hover:bg-kelp-300"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
