import { o as __toESM } from "../_runtime.mjs";
import { t as hero_living_default } from "./hero-living-Ct61hpBU.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useScroll, r as motion, t as useTransform } from "../_libs/framer-motion.mjs";
import { S as ArrowRight, _ as Clock, a as Sparkles, b as ArrowUp, c as Minus, d as MapPin, f as Mail, g as Facebook, h as Hammer, i as Timer, l as MessageCircle, m as Instagram, n as X, o as Plus, p as Linkedin, r as Users, s as Phone, t as Youtube, u as Menu, v as Building2, x as ArrowUpRight, y as Award } from "../_libs/lucide-react.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-O7mTcLs2.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function SmoothScroll() {
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.4,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		let rafId;
		const raf = (time) => {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		};
		rafId = requestAnimationFrame(raf);
		return () => {
			cancelAnimationFrame(rafId);
			lenis.destroy();
		};
	}, []);
	return null;
}
var variants = {
	hidden: {
		opacity: 0,
		y: 32,
		filter: "blur(8px)"
	},
	show: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: {
			duration: 1,
			ease: [
				.16,
				1,
				.3,
				1
			]
		}
	}
};
function Reveal({ children, delay = 0, className, as: Tag = "div" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion(Tag), {
		className,
		variants,
		initial: "hidden",
		whileInView: "show",
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: { delay },
		children
	});
}
var NAV = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "Services",
		href: "#services"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-700 ${scrolled ? "bg-bone/75 backdrop-blur-xl border-b border-border/60 py-4" : "bg-transparent py-7"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					className: "flex items-center gap-2 min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-2xl md:text-3xl tracking-tight text-ink",
						children: [
							"Jhalak",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "·"
							}),
							"Technicals"
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden lg:flex items-center justify-center gap-10",
					children: NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: n.href,
						className: "nav-link text-ink/80 hover:text-ink",
						children: n.label
					}, n.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden lg:flex items-center justify-end gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+97140000000",
						className: "inline-flex items-center gap-2 px-4 py-2.5 text-xs tracking-[0.18em] uppercase text-ink/80 hover:text-ink transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }), " Call"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://wa.me/97140000000",
						target: "_blank",
						rel: "noreferrer",
						className: "btn-gold !py-3 !px-5 text-[11px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 14 }),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp" })
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Menu",
					onClick: () => setOpen((v) => !v),
					className: "lg:hidden justify-self-end p-2 text-ink",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 22 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 22 })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden bg-bone border-t border-border mt-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-luxe py-8 flex flex-col gap-5",
				children: [NAV.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: n.href,
					onClick: () => setOpen(false),
					className: "nav-link text-ink",
					children: n.label
				}, n.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3 pt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "tel:+97140000000",
						className: "btn-ghost-luxe flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }), " Call"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "https://wa.me/97140000000",
						className: "btn-gold flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 14 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp" })]
					})]
				})]
			})
		})]
	});
}
function FloatingActions() {
	const [show, setShow] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setShow(window.scrollY > 600);
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: "https://wa.me/97140000000",
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "WhatsApp",
		className: "fixed bottom-6 right-6 z-40 grid place-items-center h-14 w-14 rounded-full bg-ink text-bone shadow-luxe hover:bg-gold hover:text-ink transition-all duration-500 hover:scale-110",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 20 })
	}), show && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: () => window.scrollTo({
			top: 0,
			behavior: "smooth"
		}),
		"aria-label": "Back to top",
		className: "fixed bottom-24 right-6 z-40 grid place-items-center h-12 w-12 rounded-full border border-ink/30 bg-bone/80 backdrop-blur text-ink hover:bg-ink hover:text-bone transition-all duration-500",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { size: 18 })
	})] });
}
function ScrollProgress() {
	const [p, setP] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const h = document.documentElement;
			setP(h.scrollTop / (h.scrollHeight - h.clientHeight) * 100);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed top-0 left-0 z-[60] h-[2px] bg-gold transition-[width] duration-150",
		style: { width: `${p}%` }
	});
}
var service_sofa_default = "/assets/service-sofa-DdaLFv7z.jpg";
var service_bedroom_default = "/assets/service-bedroom-C3IUR8fK.jpg";
var service_closet_default = "/assets/service-closet-BxZ8FtlO.jpg";
var service_kitchen_default = "/assets/service-kitchen-Dcqkc9ZX.jpg";
var project_dining_default = "/assets/project-dining-l8nBakD0.jpg";
var project_villa_default = "/assets/project-villa-Rgp-VM47.jpg";
var project_office_default = "/assets/project-office-CLYEI0ho.jpg";
var about_studio_default = "/assets/about-studio-BcgznxRA.jpg";
var renovation_default = "/assets/renovation-DJBmB0UZ.jpg";
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-background text-ink overflow-x-clip",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingActions, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Marquee, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApartmentSplit, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTA, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		ref,
		className: "relative h-[100svh] min-h-[680px] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y,
					scale
				},
				className: "absolute inset-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_living_default,
					alt: "Luxury Dubai penthouse living room at golden hour",
					className: "h-full w-full object-cover",
					width: 1920,
					height: 1280
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/20 to-ink/70" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				style: { opacity },
				className: "relative z-10 h-full flex items-end pb-20 md:pb-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-luxe w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "eyebrow eyebrow-line text-gold-soft",
							children: "Est. Dubai · Atelier of Interiors"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
							initial: {
								opacity: 0,
								y: 40,
								filter: "blur(12px)"
							},
							animate: {
								opacity: 1,
								y: 0,
								filter: "blur(0px)"
							},
							transition: {
								duration: 1.2,
								delay: .2,
								ease: [
									.16,
									1,
									.3,
									1
								]
							},
							className: "mt-6 max-w-5xl text-bone font-display text-[clamp(2.6rem,8vw,7rem)] leading-[0.95] tracking-tight",
							children: [
								"Crafting timeless",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "not-italic text-gold-soft",
									children: "luxury"
								}),
								" interiors in Dubai."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								delay: .5
							},
							className: "mt-8 max-w-xl text-bone/80 text-base md:text-lg leading-relaxed",
							children: "Bespoke furniture and full residential fit-outs for the city's most considered homes. Every detail measured, made, and finished by hand."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								y: 20
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: {
								duration: 1,
								delay: .7
							},
							className: "mt-10 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "btn-gold",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book Consultation" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#projects",
								className: "btn-ghost-luxe !border-bone/40 !text-bone hover:!bg-bone hover:!text-ink",
								children: "View Portfolio"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.4,
					duration: 1
				},
				className: "absolute bottom-8 right-6 md:right-12 z-10 hidden md:flex flex-col items-center gap-3 text-bone/70",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-rl] rotate-180",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-12 w-px bg-bone/40 relative overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: { y: [-48, 48] },
						transition: {
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut"
						},
						className: "absolute inset-x-0 h-6 bg-gold"
					})
				})]
			})
		]
	});
}
function Marquee() {
	const partners = [
		"Luxury Villas",
		"Interior Designers",
		"Hotels",
		"Restaurants",
		"Corporate Offices",
		"Apartments",
		"Private Residences"
	];
	const row = [...partners, ...partners];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "border-y border-border bg-bone py-10 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-luxe",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mb-6",
				children: "TRUSTED BY LUXURY HOMES & INTERIOR DESIGNERS"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex shrink-0 animate-marquee gap-16 px-8 whitespace-nowrap",
				children: row.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl uppercase md:text-3xl text-ink/30 tracking-[0.25em]",
					children: p
				}, i))
			})
		})]
	});
}
function WhyUs() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 md:py-40 bg-sand",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow eyebrow-line",
					children: "Why choose us"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 max-w-3xl font-display text-4xl md:text-6xl leading-[1.05] text-ink",
						children: [
							"A studio built for the few ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "not-italic text-gold",
								children: "who notice"
							}),
							" everything."
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border",
					children: [
						{
							icon: Award,
							t: "10+ Years",
							s: "Of bespoke craftsmanship across Dubai's most discerning homes."
						},
						{
							icon: Hammer,
							t: "In-House Atelier",
							s: "Designers, craftsmen, joinery — under one roof, end to end."
						},
						{
							icon: Sparkles,
							t: "Premium Materials",
							s: "Italian fabrics, calacatta marble, walnut, brass, hand-finished."
						},
						{
							icon: Users,
							t: "Dedicated Team",
							s: "One project lead. One promise. No layers, no compromise."
						},
						{
							icon: Building2,
							t: "Dubai Based",
							s: "Sourced and serviced locally with global supply relationships."
						},
						{
							icon: Timer,
							t: "On-Time Delivery",
							s: "Phased programs that honor your move-in date."
						}
					].map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "group bg-sand p-10 md:p-12 h-full transition-colors duration-500 hover:bg-bone",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.icon, {
									size: 28,
									className: "text-gold transition-transform duration-700 group-hover:rotate-12",
									strokeWidth: 1.2
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-8 font-display text-3xl text-ink",
									children: it.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-muted-foreground leading-relaxed",
									children: it.s
								})
							]
						})
					}, it.t))
				})
			]
		})
	});
}
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "services",
		className: "py-28 md:py-40 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow eyebrow-line",
						children: "Our services"
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 max-w-3xl font-display text-4xl md:text-6xl leading-[1.05]",
							children: [
								"From a single sofa to an entire ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "not-italic text-gold",
									children: "villa"
								}),
								"."
							]
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "btn-ghost-luxe shrink-0",
							children: ["Request scope ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 14 })]
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
					children: [
						{
							t: "Custom Sofas",
							s: "Hand-built seating tailored to scale, fabric and posture.",
							img: service_sofa_default
						},
						{
							t: "Luxury Beds & Suites",
							s: "Master bedrooms with bespoke joinery and lighting layers.",
							img: service_bedroom_default
						},
						{
							t: "Walk-In Closets",
							s: "Architectural wardrobes finished in walnut and brass.",
							img: service_closet_default
						},
						{
							t: "Kitchen Interiors",
							s: "Matte cabinetry, stone, and integrated appliances.",
							img: service_kitchen_default
						},
						{
							t: "Villa Interiors",
							s: "Full-home design programs from concept to handover.",
							img: project_villa_default
						},
						{
							t: "Commercial Fit-Out",
							s: "Offices, lounges, and hospitality with editorial finish.",
							img: project_office_default
						}
					].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .06,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "group block hover-zoom-img",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[4/5] overflow-hidden bg-muted",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: s.img,
										alt: s.t,
										loading: "lazy",
										className: "h-full w-full object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-x-0 bottom-0 p-8",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-end justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-3xl text-bone",
												children: s.t
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-bone/80 text-sm leading-relaxed max-w-xs",
												children: s.s
											})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "grid place-items-center h-11 w-11 rounded-full bg-bone/90 text-ink translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })
											})]
										})
									})
								]
							})
						})
					}, s.t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 flex flex-wrap gap-x-10 gap-y-3 text-sm text-muted-foreground",
					children: [
						"Wardrobes & Cabinets",
						"TV Units",
						"Wall Panels",
						"Custom Carpentry",
						"Space Planning",
						"Luxury Home Styling",
						"Apartment Renovations",
						"Dining Tables",
						"Office Furniture"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "before:content-['—'] before:mr-3 before:text-gold",
						children: t
					}, t))
				}) })
			]
		})
	});
}
function Projects() {
	const cats = [
		"All",
		"Residential",
		"Villa",
		"Apartment",
		"Commercial"
	];
	const [active, setActive] = (0, import_react.useState)("All");
	const filtered = [
		{
			t: "Palm Jumeirah Penthouse",
			c: "Residential",
			loc: "Dubai · 2024",
			img: hero_living_default
		},
		{
			t: "Emirates Hills Villa",
			c: "Villa",
			loc: "Dubai · 2024",
			img: project_villa_default
		},
		{
			t: "Downtown Sky Residence",
			c: "Apartment",
			loc: "Dubai · 2023",
			img: about_studio_default
		},
		{
			t: "Business Bay Office",
			c: "Commercial",
			loc: "Dubai · 2024",
			img: project_office_default
		},
		{
			t: "Marina Apartment",
			c: "Apartment",
			loc: "Dubai · 2023",
			img: renovation_default
		},
		{
			t: "Hills Dining Pavilion",
			c: "Residential",
			loc: "Dubai · 2024",
			img: project_dining_default
		}
	].filter((p) => active === "All" || p.c === active);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "projects",
		className: "py-28 md:py-40 bg-ink text-bone",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow eyebrow-line",
					children: "Featured projects"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 max-w-4xl font-display text-4xl md:text-6xl leading-[1.05] text-bone",
						children: [
							"Spaces that wear their ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "not-italic text-gold",
								children: "restraint"
							}),
							" beautifully."
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 flex flex-wrap gap-2",
						children: cats.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActive(c),
							className: `px-5 py-2.5 text-xs tracking-[0.2em] uppercase border transition-all duration-500 ${active === c ? "bg-gold border-gold text-ink" : "border-bone/20 text-bone/70 hover:border-bone hover:text-bone"}`,
							children: c
						}, c))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6",
					children: filtered.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .05,
						className: i % 5 === 0 ? "md:col-span-4" : i % 5 === 1 ? "md:col-span-2" : i % 5 === 2 ? "md:col-span-3" : i % 5 === 3 ? "md:col-span-3" : "md:col-span-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#contact",
							className: "group block hover-zoom-img",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative aspect-[5/4] overflow-hidden bg-ink/60",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.img,
										alt: p.t,
										loading: "lazy",
										className: "h-full w-full object-cover"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-70" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "absolute inset-x-0 bottom-0 p-6 md:p-8 flex items-end justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs tracking-[0.25em] uppercase text-gold",
											children: p.loc
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-2 font-display text-2xl md:text-4xl text-bone",
											children: p.t
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "grid place-items-center h-11 w-11 rounded-full border border-bone/40 text-bone group-hover:bg-gold group-hover:text-ink group-hover:border-gold transition-all duration-500",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { size: 16 })
										})]
									})
								]
							})
						})
					}, p.t))
				})
			]
		})
	});
}
function ApartmentSplit() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-1 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[4/3] lg:aspect-auto lg:h-full min-h-[420px] overflow-hidden hover-zoom-img",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: renovation_default,
					alt: "Dubai apartment renovation",
					loading: "lazy",
					className: "h-full w-full object-cover"
				})
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center bg-sand py-20 md:py-32 px-6 md:px-16 lg:px-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow eyebrow-line",
						children: "Apartment renovations"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-6 font-display text-4xl md:text-5xl leading-[1.05]",
							children: "Modern apartment renovations, tailored to your vision."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-muted-foreground text-lg leading-relaxed max-w-lg",
							children: "We re-imagine Dubai apartments — from a single room to a complete transformation. Drawings, joinery, finishes, and styling, managed under one roof."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .3,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#contact",
								className: "btn-gold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Book Free Consultation" }),
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#projects",
								className: "nav-link text-ink mt-4",
								children: "See recent work"
							})]
						})
					})
				] })
			})]
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32 bg-bone border-y border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-luxe grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6",
			children: [
				{
					v: "1000+",
					l: "Bespoke pieces delivered"
				},
				{
					v: "250+",
					l: "Luxury homes designed"
				},
				{
					v: "15+",
					l: "Years of atelier craft"
				},
				{
					v: "98%",
					l: "Repeat & referred clients"
				}
			].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: i * .08,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center md:text-left md:border-l md:first:border-l-0 md:pl-8 md:first:pl-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-display text-5xl md:text-7xl text-ink leading-none",
						children: [s.v.replace(/[+%]/g, ""), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: s.v.match(/[+%]/)?.[0] ?? ""
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-xs md:text-sm tracking-[0.15em] uppercase text-muted-foreground",
						children: s.l
					})]
				})
			}, s.l))
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 md:py-40 bg-sand",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow eyebrow-line",
					children: "In their words"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 max-w-3xl font-display text-4xl md:text-6xl leading-[1.05]",
						children: [
							"Quietly spoken, often ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "not-italic text-gold",
								children: "repeated"
							}),
							"."
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-6",
					children: [
						{
							q: "Jhalak Technicals provided exceptional service with attention to every detail. Highly professional and reliable.",
							n: "H. Al Marri",
							r: "CEO · Dubai Tech Solutions"
						},
						{
							q: "Punctual, discreet, and obsessive in the best way. The joinery is genuinely the best we've ever commissioned.",
							n: "Sophie Laurent",
							r: "Founder · Maison de Mode"
						},
						{
							q: "From the first sketch to the last finish, the team behaved like custodians of our home. Rare.",
							n: "R. Kapoor",
							r: "Villa owner · Emirates Hills"
						}
					].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "h-full bg-bone/60 backdrop-blur border border-border p-10 md:p-12 flex flex-col",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-7xl leading-none text-gold",
									children: "\""
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
									className: "mt-2 font-display text-xl md:text-2xl leading-snug text-ink flex-1",
									children: t.q
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "mt-8 pt-6 border-t border-border",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-medium text-ink",
										children: t.n
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1",
										children: t.r
									})]
								})
							]
						})
					}, t.n))
				})
			]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-28 md:py-40 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "lg:col-span-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative aspect-[4/5] overflow-hidden hover-zoom-img",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: about_studio_default,
						alt: "Jhalak Technicals team",
						loading: "lazy",
						className: "h-full w-full object-cover"
					})
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow eyebrow-line",
						children: "About the atelier"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl md:text-6xl leading-[1.05]",
							children: [
								"A Dubai studio devoted to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "not-italic text-gold",
									children: "considered"
								}),
								" living."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl",
							children: "We design and build interiors for people who care about how a room feels at 7am as much as it looks at 8pm. Our mission is quiet luxury — earned, not staged."
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-14 space-y-px bg-border",
						children: [
							{
								y: "2010",
								t: "Founded in Dubai as a private joinery atelier."
							},
							{
								y: "2015",
								t: "Opened studio in Downtown serving private clients."
							},
							{
								y: "2020",
								t: "Full-service interior design across UAE."
							},
							{
								y: "2026",
								t: "250+ homes, ongoing residencies in Palm & Hills."
							}
						].map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * .06,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-background py-6 flex items-baseline gap-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-3xl text-gold w-20 shrink-0",
									children: m.y
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-ink/80",
									children: m.t
								})]
							})
						}, m.y))
					})
				]
			})]
		})
	});
}
function CTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative py-28 md:py-44 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute inset-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project_dining_default,
				alt: "",
				className: "h-full w-full object-cover",
				loading: "lazy"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/75" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe relative z-10 text-center max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow eyebrow-line justify-center text-gold-soft",
					children: "Let's begin"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-5xl md:text-7xl leading-[1] text-bone",
						children: [
							"Let's build your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "not-italic text-gold-soft",
								children: "dream interior"
							}),
							"."
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .2,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-bone/80 text-lg max-w-xl mx-auto",
						children: "A 30-minute consultation, no obligation. We'll listen first, then show you what's possible."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .3,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/97140000000",
							className: "btn-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { size: 14 }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: " WhatsApp Us" })
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:+97140000000",
							className: "btn-ghost-luxe !border-bone/50 !text-bone hover:!bg-bone hover:!text-ink",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 14 }),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call Now" })
							]
						})]
					})
				})
			]
		})]
	});
}
function FAQ() {
	const faqs = [
		{
			q: "Do you handle full villa fit-outs or only furniture?",
			a: "Both. We deliver full residential fit-outs — from technical drawings and joinery to the final styled handover — as well as standalone bespoke furniture commissions."
		},
		{
			q: "How long does a typical project take?",
			a: "A bespoke furniture commission runs 6–10 weeks. A villa fit-out is typically 4–9 months depending on scope. We share a phased program before any commitment."
		},
		{
			q: "Do you work outside Dubai?",
			a: "Yes — across the UAE, with select commissions in KSA, Qatar, and Europe through our trusted logistics partners."
		},
		{
			q: "What is the minimum project budget?",
			a: "Bespoke furniture from AED 25,000. Full interior programs from AED 350,000. We tailor scope to budget — transparently."
		},
		{
			q: "How do consultations work?",
			a: "Complimentary 30-minute call to understand your space, taste, and timeline. From there we propose a paid design phase if there is fit."
		}
	];
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-28 md:py-40 bg-bone",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe grid grid-cols-1 lg:grid-cols-12 gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow eyebrow-line",
					children: "Questions"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: .1,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-4xl md:text-5xl leading-[1.05]",
						children: [
							"Frequently ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
								className: "not-italic text-gold",
								children: "asked"
							}),
							"."
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-t border-border",
					children: faqs.map((f, i) => {
						const isOpen = open === i;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-b border-border",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setOpen(isOpen ? null : i),
								className: "w-full py-7 flex items-center justify-between gap-6 text-left group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl md:text-2xl text-ink group-hover:text-gold transition-colors duration-500",
									children: f.q
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 grid place-items-center h-10 w-10 rounded-full border border-ink/20 text-ink",
									children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { size: 16 })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground leading-relaxed max-w-2xl",
										children: f.a
									})
								})
							})]
						}, f.q);
					})
				})
			})]
		})
	});
}
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		message: ""
	});
	const onSubmit = (e) => {
		e.preventDefault();
		const text = `Hello Jhalak Technicals,%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0A%0A${encodeURIComponent(form.message)}`;
		window.open(`https://wa.me/97140000000?text=${text}`, "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "py-28 md:py-40 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe grid grid-cols-1 lg:grid-cols-12 gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow eyebrow-line",
						children: "Begin a project"
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .1,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-6 font-display text-4xl md:text-6xl leading-[1.05]",
							children: [
								"Tell us about your ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
									className: "not-italic text-gold",
									children: "space"
								}),
								"."
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: .2,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							onSubmit,
							className: "mt-12 space-y-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Your name",
									value: form.name,
									onChange: (v) => setForm({
										...form,
										name: v
									}),
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone number",
									type: "tel",
									value: form.phone,
									onChange: (v) => setForm({
										...form,
										phone: v
									}),
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Tell us about your project",
									textarea: true,
									value: form.message,
									onChange: (v) => setForm({
										...form,
										message: v
									}),
									required: true
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "btn-gold",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Send via WhatsApp" }),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { size: 14 })
									]
								})
							]
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:col-span-5 lg:pl-12 lg:border-l border-border",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactRow, {
							icon: MapPin,
							title: "Studio",
							children: [
								"Boulevard Plaza, Tower 1",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Downtown Dubai, UAE"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							icon: Phone,
							title: "Telephone",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "tel:+97140000000",
								className: "hover:text-gold transition-colors",
								children: "+971 4 000 0000"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							icon: MessageCircle,
							title: "WhatsApp",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "https://wa.me/97140000000",
								className: "hover:text-gold transition-colors",
								children: "+971 50 000 0000"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactRow, {
							icon: Mail,
							title: "Email",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:manishswami4056@gmail.com",
								className: "hover:text-gold transition-colors",
								children: "manishswami4056@gmail.com"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ContactRow, {
							icon: Clock,
							title: "Working hours",
							children: [
								"Monday – Saturday",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"10:00 — 19:00 GST"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[5/4] overflow-hidden border border-border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
								title: "Studio location",
								src: "https://www.google.com/maps?q=Boulevard+Plaza+Downtown+Dubai&output=embed",
								className: "h-full w-full grayscale contrast-110",
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-3 pt-2",
							children: [
								Instagram,
								Facebook,
								Linkedin,
								Youtube
							].map((I, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								"aria-label": "Social",
								className: "grid place-items-center h-11 w-11 border border-border text-ink hover:bg-ink hover:text-bone transition-all duration-500",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { size: 16 })
							}, i))
						})
					]
				}) })
			})]
		})
	});
}
function Field({ label, value, onChange, type = "text", required, textarea }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block group",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-xs tracking-[0.2em] uppercase text-muted-foreground",
			children: label
		}), textarea ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
			required,
			rows: 4,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-3 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-lg text-ink transition-colors resize-none"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			required,
			type,
			value,
			onChange: (e) => onChange(e.target.value),
			className: "mt-3 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-lg text-ink transition-colors"
		})]
	});
}
function ContactRow({ icon: Icon, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "shrink-0 grid place-items-center h-11 w-11 border border-border text-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				size: 16,
				strokeWidth: 1.4
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-[0.2em] uppercase text-muted-foreground",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 text-ink leading-relaxed",
			children
		})] })]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink text-bone/80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-luxe py-20 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 md:grid-cols-12 gap-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-3xl md:text-4xl text-bone",
								children: [
									"Jhalak",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold",
										children: "·"
									}),
									"Technicals"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md text-bone/60 leading-relaxed",
								children: "Professional technical services and solutions based in Dubai. Delivering quality, reliability, and expertise."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
							title: "Services",
							items: [
								"Custom Furniture",
								"Villa Interiors",
								"Apartment Renovation",
								"Commercial Fit-Out"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
							title: "Company",
							items: [
								"About",
								"Projects",
								"Process",
								"Contact"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterCol, {
							title: "Support",
							items: [
								"Privacy Policy",
								"Terms & Conditions",
								"Cookies",
								"Sitemap"
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-20 h-px bg-bone/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-[0.18em] uppercase text-bone/40",
						children: "© 2026 Jhalak Technicals. All rights reserved."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex gap-3",
						children: [
							Instagram,
							Facebook,
							Linkedin,
							Youtube
						].map((I, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "Social",
							className: "grid place-items-center h-10 w-10 border border-bone/15 text-bone/70 hover:bg-gold hover:text-ink hover:border-gold transition-all duration-500",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { size: 14 })
						}, i))
					})]
				})
			]
		})
	});
}
function FooterCol({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "md:col-span-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-[0.22em] uppercase text-gold",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 space-y-3",
			children: items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#",
				className: "text-bone/70 hover:text-bone transition-colors",
				children: i
			}) }, i))
		})]
	});
}
//#endregion
export { HomePage as component };
