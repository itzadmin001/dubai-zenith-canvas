import { useEffect, useState } from "react";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-bone/75 backdrop-blur-xl border-b border-border/60 py-4"
          : "bg-transparent py-7"
      }`}
    >
      <div className="container-luxe grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:grid-cols-3">
        <a href="#home" className="flex items-center gap-2 min-w-0">
          <span className="font-display text-2xl md:text-3xl tracking-tight text-ink">
            Maison<span className="text-gold">·</span>Atelier
          </span>
        </a>

        <nav className="hidden lg:flex items-center justify-center gap-10">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="nav-link text-ink/80 hover:text-ink">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center justify-end gap-3">
          <a
            href="tel:+97140000000"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs tracking-[0.18em] uppercase text-ink/80 hover:text-ink transition-colors"
          >
            <Phone size={14} /> Call
          </a>
          <a
            href="https://wa.me/97140000000"
            target="_blank"
            rel="noreferrer"
            className="btn-gold !py-3 !px-5 text-[11px]"
          >
            <MessageCircle size={14} /> WhatsApp
          </a>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden justify-self-end p-2 text-ink"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-bone border-t border-border mt-4">
          <div className="container-luxe py-8 flex flex-col gap-5">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="nav-link text-ink"
              >
                {n.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              <a href="tel:+97140000000" className="btn-ghost-luxe flex-1">
                <Phone size={14} /> Call
              </a>
              <a href="https://wa.me/97140000000" className="btn-gold flex-1">
                <MessageCircle size={14} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
