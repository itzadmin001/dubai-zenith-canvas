import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Phone,
  MessageCircle,
  ArrowUpRight,
  ArrowRight,
  MapPin,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Sparkles,
  Award,
  Hammer,
  Users,
  Building2,
  Timer,
  Plus,
  Minus,
} from "lucide-react";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Reveal } from "@/components/Reveal";
import { Navbar } from "@/components/site/Navbar";
import { FloatingActions, ScrollProgress } from "@/components/site/FloatingActions";

import heroImg from "@/assets/hero-living.jpg";
import sofaImg from "@/assets/service-sofa.jpg";
import bedroomImg from "@/assets/service-bedroom.jpg";
import closetImg from "@/assets/service-closet.jpg";
import kitchenImg from "@/assets/service-kitchen.jpg";
import diningImg from "@/assets/project-dining.jpg";
import villaImg from "@/assets/project-villa.jpg";
import officeImg from "@/assets/project-office.jpg";
import aboutImg from "@/assets/about-studio.jpg";
import renovationImg from "@/assets/renovation.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jhalak Technicals — Professional Technical Services & Solutions" },
      {
        name: "description",
        content:
          "Jhalak Technicals - Professional technical services and solutions for all your technical needs.",
      },
      { property: "og:title", content: "Jhalak Technicals — Professional Services" },
      {
        property: "og:description",
        content: "Bespoke interiors and custom furniture crafted in Dubai.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImg },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Manrope:wght@300;400;500;600;700&display=swap",
      },
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" } as never,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Jhalak Technicals",
          description:
            "Professional technical services and solutions based in Dubai.",
          areaServed: "Dubai, UAE",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Boulevard Plaza, Tower 1",
            addressLocality: "Downtown Dubai",
            addressCountry: "AE",
          },
          telephone: "+971 4 000 0000",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="bg-background text-ink overflow-x-clip">
      <SmoothScroll />
      <ScrollProgress />
      <Navbar />
      <FloatingActions />
      <main>
        <Hero />
        <Marquee />
        <WhyUs />
        <Services />
        <Projects />
        <ApartmentSplit />
        <Stats />
        <Testimonials />
        <About />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative h-[100svh] min-h-[680px] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img
          src={heroImg}
          alt="Luxury Dubai penthouse living room at golden hour"
          className="h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/60 to-ink/70" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 h-full flex items-end pb-20 md:pb-28">
        <div className="container-luxe w-full">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow eyebrow-line text-gold-soft "
          >
            Est. Dubai · Atelier of Interiors
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-5xl text-bone font-display text-[clamp(2.6rem,8vw,7rem)] leading-[0.95] tracking-tight"
          >
            Crafting timeless
            <br />
            <em className="not-italic text-gold-soft">luxury</em> interiors in Dubai.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 max-w-xl text-bone/80 text-base md:text-lg leading-relaxed"
          >
            Bespoke furniture and full residential fit-outs for the city's most
            considered homes. Every detail measured, made, and finished by hand.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#contact" className="btn-gold">
              <span>Book Consultation</span>
              <ArrowRight size={14} />
            </a>
            <a
              href="#projects"
              className="btn-ghost-luxe !border-bone/40 !text-bone hover:!bg-bone hover:!text-ink"
            >
              View Portfolio
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 right-6 md:right-12 z-10 hidden md:flex flex-col items-center gap-3 text-bone/70"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180">
          Scroll
        </span>
        <div className="h-12 w-px bg-bone/40 relative overflow-hidden">
          <motion.div
            animate={{ y: [-48, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 h-6 bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ---------- TRUSTED MARQUEE ---------- */
function Marquee() {
  const partners = [
    "Luxury Villas",
    "Interior Designers",
    "Hotels",
    "Restaurants",
    "Corporate Offices",
    "Apartments",
    "Private Residences",
  ];
  const row = [...partners, ...partners];
  return (
    <section className="border-y border-border bg-bone py-10 overflow-hidden">
      <div className="container-luxe">
        <p className="eyebrow mb-6">TRUSTED BY LUXURY HOMES & INTERIOR DESIGNERS</p>
      </div>
      <div className="flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-16 px-8 whitespace-nowrap">
          {row.map((p, i) => (
            <span
              key={i}
              className="font-display text-2xl uppercase md:text-3xl text-ink/30 tracking-[0.25em]"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const items = [
    { icon: Award, t: "10+ Years", s: "Of bespoke craftsmanship across Dubai's most discerning homes." },
    { icon: Hammer, t: "In-House Atelier", s: "Designers, craftsmen, joinery — under one roof, end to end." },
    { icon: Sparkles, t: "Premium Materials", s: "Italian fabrics, calacatta marble, walnut, brass, hand-finished." },
    { icon: Users, t: "Dedicated Team", s: "One project lead. One promise. No layers, no compromise." },
    { icon: Building2, t: "Dubai Based", s: "Sourced and serviced locally with global supply relationships." },
    { icon: Timer, t: "On-Time Delivery", s: "Phased programs that honor your move-in date." },
  ];
  return (
    <section className="py-28 md:py-40 bg-sand">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow eyebrow-line">Why choose us</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-6xl leading-[1.05] text-ink">
            A studio built for the few <em className="not-italic text-gold">who notice</em> everything.
          </h2>
        </Reveal>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.05}>
              <div className="group bg-sand p-10 md:p-12 h-full transition-colors duration-500 hover:bg-bone">
                <it.icon
                  size={28}
                  className="text-gold transition-transform duration-700 group-hover:rotate-12"
                  strokeWidth={1.2}
                />
                <h3 className="mt-8 font-display text-3xl text-ink">{it.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{it.s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const services = [
    { t: "Custom Sofas", s: "Hand-built seating tailored to scale, fabric and posture.", img: sofaImg },
    { t: "Luxury Beds & Suites", s: "Master bedrooms with bespoke joinery and lighting layers.", img: bedroomImg },
    { t: "Walk-In Closets", s: "Architectural wardrobes finished in walnut and brass.", img: closetImg },
    { t: "Kitchen Interiors", s: "Matte cabinetry, stone, and integrated appliances.", img: kitchenImg },
    { t: "Villa Interiors", s: "Full-home design programs from concept to handover.", img: villaImg },
    { t: "Commercial Fit-Out", s: "Offices, lounges, and hospitality with editorial finish.", img: officeImg },
  ];
  return (
    <section id="services" className="py-28 md:py-40 bg-background">
      <div className="container-luxe">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div>
            <Reveal>
              <p className="eyebrow eyebrow-line">Our services</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-6xl leading-[1.05]">
                From a single sofa to an entire <em className="not-italic text-gold">villa</em>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <a href="#contact" className="btn-ghost-luxe shrink-0">
              Request scope <ArrowUpRight size={14} />
            </a>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06}>
              <a href="#contact" className="group block hover-zoom-img">
                <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                  <img
                    src={s.img}
                    alt={s.t}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="font-display text-3xl text-bone">{s.t}</h3>
                        <p className="mt-2 text-bone/80 text-sm leading-relaxed max-w-xs">
                          {s.s}
                        </p>
                      </div>
                      <span className="grid place-items-center h-11 w-11 rounded-full bg-bone/90 text-ink translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted-foreground">
            {[
              "Wardrobes & Cabinets",
              "TV Units",
              "Wall Panels",
              "Custom Carpentry",
              "Space Planning",
              "Luxury Home Styling",
              "Apartment Renovations",
              "Dining Tables",
              "Office Furniture",
            ].map((t) => (
              <span key={t} className="before:content-['—'] before:mr-3 before:text-gold">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  const cats = ["All", "Residential", "Villa", "Apartment", "Commercial"] as const;
  type Cat = (typeof cats)[number];
  const [active, setActive] = useState<Cat>("All");
  const projects = [
    { t: "Palm Jumeirah Penthouse", c: "Residential", loc: "Dubai · 2024", img: heroImg },
    { t: "Emirates Hills Villa", c: "Villa", loc: "Dubai · 2024", img: villaImg },
    { t: "Downtown Sky Residence", c: "Apartment", loc: "Dubai · 2023", img: aboutImg },
    { t: "Business Bay Office", c: "Commercial", loc: "Dubai · 2024", img: officeImg },
    { t: "Marina Apartment", c: "Apartment", loc: "Dubai · 2023", img: renovationImg },
    { t: "Hills Dining Pavilion", c: "Residential", loc: "Dubai · 2024", img: diningImg },
  ];
  const filtered = projects.filter((p) => active === "All" || p.c === active);

  return (
    <section id="projects" className="py-28 md:py-40 bg-ink text-bone">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow eyebrow-line">Featured projects</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl font-display text-4xl md:text-6xl leading-[1.05] text-bone">
            Spaces that wear their <em className="not-italic text-gold">restraint</em> beautifully.
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 text-xs tracking-[0.2em] uppercase border transition-all duration-500 ${active === c
                  ? "bg-gold border-gold text-ink"
                  : "border-bone/20 text-bone/70 hover:border-bone hover:text-bone"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6">
          {filtered.map((p, i) => (
            <Reveal
              key={p.t}
              delay={i * 0.05}
              className={
                i % 5 === 0
                  ? "md:col-span-4"
                  : i % 5 === 1
                    ? "md:col-span-2"
                    : i % 5 === 2
                      ? "md:col-span-3"
                      : i % 5 === 3
                        ? "md:col-span-3"
                        : "md:col-span-6"
              }
            >
              <a href="#contact" className="group block hover-zoom-img">
                <div className="relative aspect-[5/4] overflow-hidden bg-ink/60">
                  <img
                    src={p.img}
                    alt={p.t}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-70" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between">
                    <div>
                      <p className="text-xs tracking-[0.25em] uppercase text-gold">{p.loc}</p>
                      <h3 className="mt-2 font-display text-2xl md:text-4xl text-bone">{p.t}</h3>
                    </div>
                    <span className="grid place-items-center h-11 w-11 rounded-full border border-bone/40 text-bone group-hover:bg-gold group-hover:text-ink group-hover:border-gold transition-all duration-500">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- APARTMENT SPLIT ---------- */
function ApartmentSplit() {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <Reveal>
          <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[420px] overflow-hidden hover-zoom-img">
            <img
              src={renovationImg}
              alt="Dubai apartment renovation"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
        <div className="flex items-center bg-sand py-20 md:py-32 px-6 md:px-16 lg:px-24">
          <div>
            <Reveal>
              <p className="eyebrow eyebrow-line">Apartment renovations</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05]">
                Modern apartment renovations, tailored to your vision.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-lg">
                We re-imagine Dubai apartments — from a single room to a complete
                transformation. Drawings, joinery, finishes, and styling, managed
                under one roof.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="btn-gold">
                  <span>Book Free Consultation</span> <ArrowRight size={14} />
                </a>
                <a href="#projects" className="nav-link text-ink mt-4">
                  See recent work
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- STATS ---------- */
function Stats() {
  const stats = [
    { v: "1000+", l: "Bespoke pieces delivered" },
    { v: "250+", l: "Luxury homes designed" },
    { v: "15+", l: "Years of atelier craft" },
    { v: "98%", l: "Repeat & referred clients" },
  ];
  return (
    <section className="py-24 md:py-32 bg-bone border-y border-border">
      <div className="container-luxe grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.08}>
            <div className="text-center md:text-left md:border-l md:first:border-l-0 md:pl-8 md:first:pl-0">
              <p className="font-display text-5xl md:text-7xl text-ink leading-none">
                {s.v.replace(/[+%]/g, "")}
                <span className="text-gold">{s.v.match(/[+%]/)?.[0] ?? ""}</span>
              </p>
              <p className="mt-4 text-xs md:text-sm tracking-[0.15em] uppercase text-muted-foreground">
                {s.l}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    {
      q: "Jhalak Technicals provided exceptional service with attention to every detail. Highly professional and reliable.",
      n: "H. Al Marri",
      r: "CEO · Dubai Tech Solutions",
    },
    {
      q: "Punctual, discreet, and obsessive in the best way. The joinery is genuinely the best we've ever commissioned.",
      n: "Sophie Laurent",
      r: "Founder · Maison de Mode",
    },
    {
      q: "From the first sketch to the last finish, the team behaved like custodians of our home. Rare.",
      n: "R. Kapoor",
      r: "Villa owner · Emirates Hills",
    },
  ];
  return (
    <section className="py-28 md:py-40 bg-sand">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow eyebrow-line">In their words</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl font-display text-4xl md:text-6xl leading-[1.05]">
            Quietly spoken, often <em className="not-italic text-gold">repeated</em>.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.1}>
              <figure className="h-full bg-bone/60 backdrop-blur border border-border p-10 md:p-12 flex flex-col">
                <span className="font-display text-7xl leading-none text-gold">"</span>
                <blockquote className="mt-2 font-display text-xl md:text-2xl leading-snug text-ink flex-1">
                  {t.q}
                </blockquote>
                <figcaption className="mt-8 pt-6 border-t border-border">
                  <p className="font-medium text-ink">{t.n}</p>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                    {t.r}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const milestones = [
    { y: "2010", t: "Founded in Dubai as a private joinery atelier." },
    { y: "2015", t: "Opened studio in Downtown serving private clients." },
    { y: "2020", t: "Full-service interior design across UAE." },
    { y: "2026", t: "250+ homes, ongoing residencies in Palm & Hills." },
  ];
  return (
    <section id="about" className="py-28 md:py-40 bg-background">
      <div className="container-luxe grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden hover-zoom-img">
            <img src={aboutImg} alt="Jhalak Technicals team" loading="lazy" className="h-full w-full object-cover" />
          </div>
        </Reveal>
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow eyebrow-line">About the atelier</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
              A Dubai studio devoted to <em className="not-italic text-gold">considered</em> living.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              We design and build interiors for people who care about how a room
              feels at 7am as much as it looks at 8pm. Our mission is quiet
              luxury — earned, not staged.
            </p>
          </Reveal>

          <div className="mt-14 space-y-px bg-border">
            {milestones.map((m, i) => (
              <Reveal key={m.y} delay={i * 0.06}>
                <div className="bg-background py-6 flex items-baseline gap-8">
                  <span className="font-display text-3xl text-gold w-20 shrink-0">{m.y}</span>
                  <span className="text-ink/80">{m.t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="relative py-28 md:py-44 overflow-hidden">
      <div className="absolute inset-0">
        <img src={diningImg} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-ink/75" />
      </div>
      <div className="container-luxe relative z-10 text-center max-w-4xl">
        <Reveal>
          <p className="eyebrow eyebrow-line justify-center text-gold-soft">Let's begin</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-5xl md:text-7xl leading-[1] text-bone">
            Let's build your <em className="not-italic text-gold-soft">dream interior</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-bone/80 text-lg max-w-xl mx-auto">
            A 30-minute consultation, no obligation. We'll listen first, then
            show you what's possible.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/97140000000" className="btn-gold">
              <MessageCircle size={14} /> <span> WhatsApp Us</span>
            </a>
            <a
              href="tel:+97140000000"
              className="btn-ghost-luxe !border-bone/50 !text-bone hover:!bg-bone hover:!text-ink"
            >
              <Phone size={14} /> <span>Call Now</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    {
      q: "Do you handle full villa fit-outs or only furniture?",
      a: "Both. We deliver full residential fit-outs — from technical drawings and joinery to the final styled handover — as well as standalone bespoke furniture commissions.",
    },
    {
      q: "How long does a typical project take?",
      a: "A bespoke furniture commission runs 6–10 weeks. A villa fit-out is typically 4–9 months depending on scope. We share a phased program before any commitment.",
    },
    {
      q: "Do you work outside Dubai?",
      a: "Yes — across the UAE, with select commissions in KSA, Qatar, and Europe through our trusted logistics partners.",
    },
    {
      q: "What is the minimum project budget?",
      a: "Bespoke furniture from AED 25,000. Full interior programs from AED 350,000. We tailor scope to budget — transparently.",
    },
    {
      q: "How do consultations work?",
      a: "Complimentary 30-minute call to understand your space, taste, and timeline. From there we propose a paid design phase if there is fit.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 md:py-40 bg-bone">
      <div className="container-luxe grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="eyebrow eyebrow-line">Questions</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.05]">
              Frequently <em className="not-italic text-gold">asked</em>.
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <div className="border-t border-border">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full py-7 flex items-center justify-between gap-6 text-left group"
                  >
                    <span className="font-display text-xl md:text-2xl text-ink group-hover:text-gold transition-colors duration-500">
                      {f.q}
                    </span>
                    <span className="shrink-0 grid place-items-center h-10 w-10 rounded-full border border-ink/20 text-ink">
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground leading-relaxed max-w-2xl">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Jhalak Technicals,%0A%0AName: ${encodeURIComponent(
      form.name,
    )}%0APhone: ${encodeURIComponent(form.phone)}%0A%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/97140000000?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-background">
      <div className="container-luxe grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow eyebrow-line">Begin a project</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
              Tell us about your <em className="not-italic text-gold">space</em>.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <form onSubmit={onSubmit} className="mt-12 space-y-8">
              <Field
                label="Your name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Phone number"
                type="tel"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                required
              />
              <Field
                label="Tell us about your project"
                textarea
                value={form.message}
                onChange={(v) => setForm({ ...form, message: v })}
                required
              />
              <button type="submit" className="btn-gold">
                <span>Send via WhatsApp</span> <ArrowRight size={14} />
              </button>
            </form>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:pl-12 lg:border-l border-border">
          <Reveal>
            <div className="space-y-10">
              <ContactRow icon={MapPin} title="Studio">
                Boulevard Plaza, Tower 1<br />
                Downtown Dubai, UAE
              </ContactRow>
              <ContactRow icon={Phone} title="Telephone">
                <a href="tel:+97140000000" className="hover:text-gold transition-colors">
                  +971 4 000 0000
                </a>
              </ContactRow>
              <ContactRow icon={MessageCircle} title="WhatsApp">
                <a href="https://wa.me/97140000000" className="hover:text-gold transition-colors">
                  +971 50 000 0000
                </a>
              </ContactRow>
              <ContactRow icon={Mail} title="Email">
                <a
                  href="mailto:manishswami4056@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  manishswami4056@gmail.com
                </a>
              </ContactRow>
              <ContactRow icon={Clock} title="Working hours">
                Monday – Saturday
                <br />
                10:00 — 19:00 GST
              </ContactRow>

              <div className="aspect-[5/4] overflow-hidden border border-border">
                <iframe
                  title="Studio location"
                  src="https://www.google.com/maps?q=Boulevard+Plaza+Downtown+Dubai&output=embed"
                  className="h-full w-full grayscale contrast-110"
                  loading="lazy"
                />
              </div>

              <div className="flex gap-3 pt-2">
                {[Instagram, Facebook, Linkedin, Youtube].map((I, i) => (
                  <a
                    key={i}
                    href="#"
                    aria-label="Social"
                    className="grid place-items-center h-11 w-11 border border-border text-ink hover:bg-ink hover:text-bone transition-all duration-500"
                  >
                    <I size={16} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  return (
    <label className="block group">
      <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea
          required={required}
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-3 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-lg text-ink transition-colors resize-none"
        />
      ) : (
        <input
          required={required}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="mt-3 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-lg text-ink transition-colors"
        />
      )}
    </label>
  );
}

function ContactRow({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-5">
      <span className="shrink-0 grid place-items-center h-11 w-11 border border-border text-gold">
        <Icon size={16} strokeWidth={1.4} />
      </span>
      <div>
        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">{title}</p>
        <div className="mt-2 text-ink leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="bg-ink text-bone/80">
      <div className="container-luxe py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl md:text-4xl text-bone">
              Jhalak<span className="text-gold">·</span>Technicals
            </p>
            <p className="mt-6 max-w-md text-bone/60 leading-relaxed">
              Professional technical services and solutions based in Dubai.
              Delivering quality, reliability, and expertise.
            </p>
          </div>
          <FooterCol
            title="Services"
            items={["Custom Furniture", "Villa Interiors", "Apartment Renovation", "Commercial Fit-Out"]}
          />
          <FooterCol title="Company" items={["About", "Projects", "Process", "Contact"]} />
          <FooterCol
            title="Support"
            items={["Privacy Policy", "Terms & Conditions", "Cookies", "Sitemap"]}
          />
        </div>

        <div className="mt-20 h-px bg-bone/10" />

        <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-xs tracking-[0.18em] uppercase text-bone/40">
            © 2026 Jhalak Technicals. All rights reserved.
          </p>
          <div className="flex gap-3">
            {[Instagram, Facebook, Linkedin, Youtube].map((I, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="grid place-items-center h-10 w-10 border border-bone/15 text-bone/70 hover:bg-gold hover:text-ink hover:border-gold transition-all duration-500"
              >
                <I size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="md:col-span-2">
      <p className="text-xs tracking-[0.22em] uppercase text-gold">{title}</p>
      <ul className="mt-6 space-y-3">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="text-bone/70 hover:text-bone transition-colors">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
