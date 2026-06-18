import { MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="https://wa.me/97140000000"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-40 grid place-items-center h-14 w-14 rounded-full bg-ink text-bone shadow-luxe hover:bg-gold hover:text-ink transition-all duration-500 hover:scale-110"
      >
        <MessageCircle size={20} />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-24 right-6 z-40 grid place-items-center h-12 w-12 rounded-full border border-ink/30 bg-bone/80 backdrop-blur text-ink hover:bg-ink hover:text-bone transition-all duration-500"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setP(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className="fixed top-0 left-0 z-[60] h-[2px] bg-gold transition-[width] duration-150"
      style={{ width: `${p}%` }}
    />
  );
}
