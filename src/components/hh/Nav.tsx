import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#coverage", label: "Coverage" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#tools", label: "Tools" },
  { href: "/#why", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors"
      style={{
        background: scrolled ? "rgba(16,19,24,0.85)" : "rgba(16,19,24,0.55)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${scrolled ? "var(--hh-border)" : "transparent"}`,
      }}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2.5">
          <span
            className="grid h-8 w-8 place-items-center rounded-md text-sm font-bold text-white"
            style={{ background: "var(--hh-orange)" }}
          >
            HH
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-hh-text-primary">
            Horizon Haulers
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[13px] font-medium text-hh-text-body transition-colors hover:text-hh-text-primary"
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-0 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"
                style={{ background: "var(--hh-orange)" }}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+13074436094"
            className="flex items-center gap-1.5 font-mono text-[12px] text-hh-text-body hover:text-hh-text-primary"
          >
            <Phone className="h-3.5 w-3.5" />
            (307) 443-6094
          </a>
          <a href="#cta" className="hh-btn-primary h-10 text-[13px]">
            Get Started →
          </a>
        </div>

        <button
          className="md:hidden text-hh-text-primary"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          className="border-t md:hidden"
          style={{ background: "var(--hh-surface-2)", borderColor: "var(--hh-border)" }}
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-[14px] text-hh-text-body hover:text-hh-text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="hh-btn-primary mt-3 h-11"
            >
              Get Started →
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
