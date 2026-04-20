/* ============================================================
   SS EPOXY — HOME PAGE
   Design: Dark Industrial Craft — Concrete & Fire
   Sections: Navbar, Hero, Stats, About, Services, Process,
             Projects Gallery, Testimonials, CTA Band, Contact, Footer
   ============================================================ */
import { useEffect, useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Phone,
  MapPin,
  Facebook,
  CheckCircle2,
  Star,
  ChevronRight,
  ArrowRight,
  Shield,
  Zap,
  Palette,
  Wrench,
  Home as HomeIcon,
  Building2,
  Factory,
  Layers,
  Clock,
  Award,
} from "lucide-react";

// ─── Animated Counter ────────────────────────────────────────────────────────
function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
}: {
  end: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / 2000, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const services = [
  {
    icon: HomeIcon,
    title: "Residential",
    subtitle: "Garage Floors, Basements & Patios",
    desc: "Transform your garage, basement, or living space with beautiful, durable epoxy flooring designed for everyday life. Custom colors and metallic finishes available.",
    tags: ["Garage Floors", "Basements", "Patios", "Custom Designs"],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    icon: Building2,
    title: "Commercial",
    subtitle: "Retail, Showrooms & Offices",
    desc: "Professional-grade solutions for retail spaces, showrooms, and offices that demand both beauty and durability. High-traffic formulas built to last.",
    tags: ["Retail Spaces", "Showrooms", "Offices", "Restaurants"],
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
  {
    icon: Factory,
    title: "Industrial",
    subtitle: "Warehouses & Manufacturing",
    desc: "Heavy-duty systems engineered for warehouses, factories, and facilities requiring maximum performance. Chemical-resistant, anti-slip, and built for punishment.",
    tags: ["Warehouses", "Manufacturing", "Auto Shops", "Chemical Resistant"],
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  },
  {
    icon: Layers,
    title: "Travertine & Paver Sealing",
    subtitle: "Outdoor & Natural Stone",
    desc: "Protect and enhance your travertine, pavers, and natural stone surfaces with professional-grade sealants that resist staining, weathering, and UV damage.",
    tags: ["Travertine", "Pavers", "Pool Decks", "Driveways"],
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  },
];

const features = [
  {
    icon: Palette,
    title: "Custom Colors",
    desc: "Unlimited design possibilities",
  },
  {
    icon: Shield,
    title: "Durable Coating",
    desc: "15+ year lifespan",
  },
  {
    icon: Zap,
    title: "Chemical Resistant",
    desc: "Industrial-grade protection",
  },
  {
    icon: Wrench,
    title: "Easy Maintenance",
    desc: "Simple cleaning routine",
  },
];

const process = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "We assess your space, discuss your vision, and provide a detailed quote with no obligation.",
  },
  {
    num: "02",
    title: "Surface Preparation",
    desc: "Professional diamond grinding and crack repair to ensure a flawless, long-lasting bond.",
  },
  {
    num: "03",
    title: "Epoxy Application",
    desc: "Multiple coats of premium epoxy applied with precision, including your chosen design elements.",
  },
  {
    num: "04",
    title: "Final Topcoat",
    desc: "A durable polyaspartic or polyurethane topcoat seals the floor for maximum protection and shine.",
  },
];

const projects = [
  {
    cat: "Residential",
    title: "Modern Garage Transformation",
    location: "Metairie, LA",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    cat: "Commercial",
    title: "Boutique Retail Space",
    location: "New Orleans, LA",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
  },
  {
    cat: "Industrial",
    title: "Industrial Facility",
    location: "Kenner, LA",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
  },
  {
    cat: "Residential",
    title: "Basement Entertainment Room",
    location: "Mandeville, LA",
    img: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&q=80",
  },
  {
    cat: "Commercial",
    title: "Auto Service Center",
    location: "Slidell, LA",
    img: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?w=600&q=80",
  },
  {
    cat: "Commercial",
    title: "Designer Showroom",
    location: "Covington, LA",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  },
];

const testimonials = [
  {
    name: "Michael Johnson",
    location: "Metairie, LA",
    text: "SS Epoxy transformed our garage into something extraordinary. The attention to detail and professionalism exceeded all expectations. The metallic finish is absolutely stunning.",
    stars: 5,
    initials: "MJ",
  },
  {
    name: "Sarah Williams",
    location: "New Orleans, LA",
    text: "Outstanding work on our commercial warehouse. The floor is durable, easy to maintain, and looks incredible. Highly recommend their services.",
    stars: 5,
    initials: "SW",
  },
  {
    name: "David Martinez",
    location: "Kenner, LA",
    text: "Best decision we made for our auto shop. Professional team, quality materials, and flawless execution. The floor handles everything we throw at it.",
    stars: 5,
    initials: "DM",
  },
  {
    name: "Jennifer Brown",
    location: "Mandeville, LA",
    text: "Our basement looks incredible. The decorative flake system adds so much character. SS Epoxy delivered exactly what they promised.",
    stars: 5,
    initials: "JB",
  },
  {
    name: "Robert Taylor",
    location: "Slidell, LA",
    text: "Professional service from start to finish. The industrial coating is holding up perfectly under heavy equipment. Worth every penny.",
    stars: 5,
    initials: "RT",
  },
  {
    name: "Lisa Anderson",
    location: "Covington, LA",
    text: "Amazing job on our retail store floor. Beautiful, durable, and our customers always compliment it. Excellent craftsmanship.",
    stars: 5,
    initials: "LA",
  },
];

// ─── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();
  const [activeFilter, setActiveFilter] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    details: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const filters = ["All", "Residential", "Commercial", "Industrial"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.cat === activeFilter);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const amber = "oklch(0.62 0.27 295)";
  const purpleGrad = "linear-gradient(135deg, oklch(0.55 0.28 295), oklch(0.68 0.25 295))";
  const charcoal = "oklch(0.12 0.012 295)";
  const surface = "oklch(0.17 0.015 295)";
  const elevated = "oklch(0.21 0.016 295)";
  const cream = "oklch(0.95 0.005 260)";
  const muted = "oklch(0.58 0.008 260)";

  return (
    <div
      className="min-h-screen"
      style={{ background: charcoal, color: cream }}
    >
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-end overflow-hidden"
        style={{ paddingBottom: "6rem" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663255083912/AcZ8wrtSiypfoksgfmwCBF/hero-epoxy-floor-huKFUinN5pRpBCqwCAHWVC.webp"
            alt="Premium epoxy floor"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, oklch(0.10 0.012 295 / 0.98) 0%, oklch(0.12 0.012 295 / 0.75) 40%, oklch(0.12 0.012 295 / 0.35) 100%)",
            }}
          />
        </div>

        {/* Content */}
        <div className="container relative z-10">
          <div className="max-w-4xl">
            {/* Label */}
            <div className="section-label mb-6 reveal">
              New Orleans Metro Area
            </div>

            {/* Headline */}
            <h1
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.02em",
                color: cream,
                marginBottom: "1.5rem",
              }}
            >
              WHEN CONCRETE
              <br />
              <span style={{ color: amber }}>ISN'T ENOUGH.</span>
            </h1>

            {/* Subtext */}
            <p
              className="reveal reveal-delay-2"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                color: "oklch(0.80 0.008 260)",
                maxWidth: "36rem",
                lineHeight: 1.6,
                marginBottom: "2.5rem",
              }}
            >
              Premium epoxy flooring crafted with precision. We transform
              garages, warehouses, and commercial spaces across the New Orleans
              Metro into masterpieces of durability and design.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 reveal reveal-delay-3">
              <button
                onClick={() => {
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-purple flex items-center gap-2"
              >
                Get a Free Quote
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => {
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn-outline-purple flex items-center gap-2"
              >
                View Our Work
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-xs uppercase tracking-widest"
          style={{ color: muted }}
        >
          <span>Scroll</span>
          <div
            className="w-px h-12 animate-pulse"
            style={{ background: "linear-gradient(135deg, oklch(0.55 0.28 295), oklch(0.68 0.25 295))" }}
          />
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────────────── */}
      <section
        style={{
          background: amber,
          padding: "2rem 0",
        }}
      >
        <div className="container">
          <div className="grid grid-cols-3 gap-4 lg:gap-0 divide-x divide-black/20">
            {[
              { end: 500, suffix: "+", label: "Projects Completed" },
              { end: 15, suffix: "+", label: "Years Experience" },
              { end: 100, suffix: "%", label: "Satisfaction Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(2rem, 5vw, 3.5rem)",
                    color: charcoal,
                    lineHeight: 1,
                  }}
                >
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    color: "oklch(0.88 0.005 260)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginTop: "0.25rem",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section
        id="about"
        style={{ background: surface, padding: "6rem 0" }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Images */}
            <div className="relative reveal">
              <div className="grid grid-cols-2 gap-3">
                <div className="col-span-2 overflow-hidden" style={{ borderRadius: "2px" }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663255083912/AcZ8wrtSiypfoksgfmwCBF/garage-epoxy-d2mVCTHmVSm3DCkLrEHNbN.webp"
                    alt="Luxury garage epoxy floor"
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden" style={{ borderRadius: "2px" }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663255083912/AcZ8wrtSiypfoksgfmwCBF/metallic-epoxy-closeup-RnNoX6pbzygwUoNKeXnpKa.webp"
                    alt="Metallic epoxy closeup"
                    className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden" style={{ borderRadius: "2px" }}>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663255083912/AcZ8wrtSiypfoksgfmwCBF/commercial-epoxy-DcXxDHUqYFejsgSqKkajnM.webp"
                    alt="Commercial epoxy floor"
                    className="w-full h-48 object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-4 -right-4 lg:-right-8 flex flex-col items-center justify-center"
                style={{
                  background: amber,
                  width: "7rem",
                  height: "7rem",
                  borderRadius: "50%",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.75rem",
                    color: charcoal,
                    lineHeight: 1,
                  }}
                >
                  15+
                </span>
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.6rem",
                    color: charcoal,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    textAlign: "center",
                    lineHeight: 1.2,
                  }}
                >
                  Years of<br />Excellence
                </span>
              </div>
            </div>

            {/* Right: Text */}
            <div>
              <div className="section-label mb-4 reveal">About Us</div>
              <h2
                className="reveal reveal-delay-1"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  lineHeight: 1,
                  color: cream,
                  marginBottom: "1.5rem",
                }}
              >
                CRAFTSMANSHIP
                <br />
                MEETS INNOVATION.
              </h2>
              <p
                className="reveal reveal-delay-2"
                style={{
                  color: "oklch(0.72 0.008 260)",
                  lineHeight: 1.8,
                  marginBottom: "1rem",
                  fontWeight: 300,
                }}
              >
                Based in St. Charles, Louisiana, SS Epoxy has been transforming
                spaces across the New Orleans metro area. We believe every floor
                tells a story — our team combines technical expertise with
                artistic vision to deliver epoxy solutions that exceed
                expectations.
              </p>
              <p
                className="reveal reveal-delay-2"
                style={{
                  color: "oklch(0.72 0.008 260)",
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                  fontWeight: 300,
                }}
              >
                From residential garages to industrial warehouses, we approach
                each project with the same commitment to excellence — using only
                premium materials and proven techniques.
              </p>

              {/* Feature grid */}
              <div className="grid grid-cols-2 gap-4 reveal reveal-delay-3">
                {[
                  { icon: Shield, label: "Licensed & Insured", sub: "Full certification and coverage" },
                  { icon: Zap, label: "Fast Turnaround", sub: "Efficient project completion" },
                  { icon: Award, label: "Premium Materials", sub: "Industry-leading products" },
                  { icon: Clock, label: "24hr Response", sub: "Always here for you" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-3 p-3"
                    style={{
                      background: elevated,
                      borderLeft: `2px solid ${amber}`,
                    }}
                  >
                    <item.icon size={18} style={{ color: amber, flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <div
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          color: cream,
                        }}
                      >
                        {item.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: "0.75rem",
                          color: muted,
                        }}
                      >
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="tel:5044817533"
                className="inline-flex items-center gap-2 mt-8 reveal reveal-delay-4"
                style={{ color: amber, fontWeight: 600, fontSize: "1rem" }}
              >
                <Phone size={16} />
                Call us at (504) 481-7533
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section
        id="services"
        style={{ background: charcoal, padding: "6rem 0" }}
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label mb-4 reveal inline-block">
              What We Do
            </div>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: cream,
                lineHeight: 1,
              }}
            >
              SOLUTIONS FOR EVERY SPACE.
            </h2>
            <p
              className="reveal reveal-delay-2 mt-4"
              style={{
                color: muted,
                maxWidth: "36rem",
                margin: "1rem auto 0",
                fontWeight: 300,
              }}
            >
              From homes to warehouses, we deliver flooring that performs as
              beautifully as it looks.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className={`group relative overflow-hidden reveal reveal-delay-${i + 1}`}
                style={{ borderRadius: "2px", cursor: "default" }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, oklch(0.10 0.012 295 / 0.95) 0%, transparent 60%)",
                    }}
                  />
                  <div className="absolute bottom-4 left-4">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1"
                      style={{
                        background: amber,
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        color: charcoal,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                      }}
                    >
                      <svc.icon size={14} />
                      {svc.title}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div
                  style={{
                    background: surface,
                    padding: "1.5rem",
                    borderBottom: `2px solid ${amber}`,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: cream,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {svc.subtitle}
                  </h3>
                  <p
                    style={{
                      color: "oklch(0.68 0.008 260)",
                      fontSize: "0.875rem",
                      lineHeight: 1.7,
                      marginBottom: "1rem",
                      fontWeight: 300,
                    }}
                  >
                    {svc.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          background: elevated,
                          color: "oklch(0.72 0.008 260)",
                          fontSize: "0.7rem",
                          fontWeight: 500,
                          padding: "0.25rem 0.625rem",
                          fontFamily: "'Barlow', sans-serif",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f, i) => (
              <div
                key={f.title}
                className={`text-center p-6 reveal reveal-delay-${i + 1}`}
                style={{ background: surface }}
              >
                <div
                  className="inline-flex items-center justify-center w-12 h-12 mb-4"
                  style={{ background: elevated }}
                >
                  <f.icon size={22} style={{ color: amber }} />
                </div>
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: cream,
                    marginBottom: "0.25rem",
                  }}
                >
                  {f.title}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: muted,
                    fontWeight: 300,
                  }}
                >
                  {f.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section style={{ background: surface, padding: "6rem 0" }}>
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label mb-4 reveal inline-block">
              How It Works
            </div>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: cream,
                lineHeight: 1,
              }}
            >
              OUR PROCESS.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div
                key={step.num}
                className={`relative p-6 reveal reveal-delay-${i + 1}`}
                style={{
                  background: elevated,
                  borderTop: `3px solid ${amber}`,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "3.5rem",
                    color: "oklch(0.62 0.27 295 / 0.15)",
                    lineHeight: 1,
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.num}
                </div>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: cream,
                    marginBottom: "0.75rem",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "oklch(0.68 0.008 260)",
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {step.desc}
                </p>
                {i < 3 && (
                  <div
                    className="hidden lg:block absolute top-8 -right-3 z-10"
                    style={{ color: amber }}
                  >
                    <ChevronRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ──────────────────────────────────────────────────────── */}
      <section
        id="projects"
        style={{ background: charcoal, padding: "6rem 0" }}
      >
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="section-label mb-4 reveal">Our Work</div>
              <h2
                className="reveal reveal-delay-1"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: cream,
                  lineHeight: 1,
                }}
              >
                SEE THE DIFFERENCE.
              </h2>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 reveal reveal-delay-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    padding: "0.5rem 1.25rem",
                    background: activeFilter === f ? amber : elevated,
                    color: activeFilter === f ? "oklch(0.98 0 0)" : "oklch(0.72 0.008 260)",
                    border: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((proj, i) => (
              <div
                key={`${proj.title}-${i}`}
                className="group relative overflow-hidden"
                style={{ borderRadius: "2px", aspectRatio: "4/3" }}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, oklch(0.10 0.012 295 / 0.95) 0%, transparent 50%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div
                    className="inline-block mb-2 px-2 py-0.5"
                    style={{
                      background: amber,
                      fontFamily: "'Barlow', sans-serif",
                      fontWeight: 600,
                      fontSize: "0.65rem",
                      color: charcoal,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {proj.cat}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: cream,
                      lineHeight: 1.2,
                    }}
                  >
                    {proj.title}
                  </h3>
                  <div
                    className="flex items-center gap-1 mt-1"
                    style={{ color: muted, fontSize: "0.8rem" }}
                  >
                    <MapPin size={12} />
                    {proj.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────────────── */}
      <section
        id="testimonials"
        style={{ background: surface, padding: "6rem 0" }}
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label mb-4 reveal inline-block">
              Reviews
            </div>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: cream,
                lineHeight: 1,
              }}
            >
              LOVED BY HOMEOWNERS
              <br />
              AND BUSINESSES.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className={`p-6 reveal reveal-delay-${(i % 3) + 1}`}
                style={{
                  background: elevated,
                  borderLeft: `2px solid ${amber}`,
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      fill={amber}
                      style={{ color: amber }}
                    />
                  ))}
                </div>
                <p
                  style={{
                    color: "oklch(0.78 0.008 260)",
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                    fontWeight: 300,
                    marginBottom: "1.25rem",
                    fontStyle: "italic",
                  }}
                >
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-10 h-10 flex-shrink-0"
                    style={{
                      background: amber,
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.875rem",
                      color: charcoal,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontWeight: 600,
                        fontSize: "0.875rem",
                        color: cream,
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: muted,
                      }}
                    >
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Social proof bar */}
          <div className="flex items-center justify-center gap-4 reveal">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 5).map((t) => (
                <div
                  key={t.initials}
                  className="flex items-center justify-center w-9 h-9 border-2"
                  style={{
                    background: amber,
                    borderColor: surface,
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: "0.75rem",
                    color: charcoal,
                    borderRadius: "50%",
                  }}
                >
                  {t.initials}
                </div>
              ))}
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: cream,
                }}
              >
                500+ happy customers
              </div>
              <div style={{ fontSize: "0.8rem", color: muted }}>
                5.0 average rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────────────────────── */}
      <section
        style={{
          background: amber,
          padding: "5rem 0",
        }}
      >
        <div className="container text-center">
          <h2
            className="reveal"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: charcoal,
              lineHeight: 1,
              marginBottom: "1rem",
            }}
          >
            READY TO TRANSFORM
            <br />
            YOUR SPACE?
          </h2>
          <p
            className="reveal reveal-delay-1"
            style={{
              color: "oklch(0.88 0.005 260)",
              fontSize: "1.1rem",
              fontWeight: 400,
              maxWidth: "36rem",
              margin: "0 auto 2rem",
              lineHeight: 1.6,
            }}
          >
            Get a free consultation and quote. No obligation, fast response, and
            expert guidance every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4 reveal reveal-delay-2">
            <button
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                background: charcoal,
                color: amber,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                padding: "0.875rem 2rem",
                border: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "oklch(0.17 0.015 295)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = charcoal;
              }}
            >
              Get Your Free Quote
            </button>
            <a
              href="tel:5044817533"
              style={{
                background: "transparent",
                color: charcoal,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                padding: "0.875rem 2rem",
                border: `1.5px solid ${charcoal}`,
                transition: "all 0.25s ease",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <Phone size={16} />
              (504) 481-7533
            </a>
          </div>
          <div
            className="flex flex-wrap justify-center gap-6 mt-6 reveal reveal-delay-3"
            style={{ color: "oklch(0.88 0.005 260)", fontSize: "0.875rem", fontWeight: 500 }}
          >
            {["Free Estimates", "24-Hour Response", "Licensed & Insured"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} />
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────────────── */}
      <section
        id="contact"
        style={{ background: charcoal, padding: "6rem 0" }}
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left */}
            <div>
              <div className="section-label mb-4 reveal">Get In Touch</div>
              <h2
                className="reveal reveal-delay-1"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  color: cream,
                  lineHeight: 1,
                  marginBottom: "1.5rem",
                }}
              >
                LET'S START
                <br />
                YOUR PROJECT.
              </h2>
              <p
                className="reveal reveal-delay-2"
                style={{
                  color: "oklch(0.68 0.008 260)",
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                  fontWeight: 300,
                }}
              >
                Ready to transform your space? Reach out for a free
                consultation. We typically respond within 24 hours.
              </p>

              <div className="space-y-4 reveal reveal-delay-3">
                <a
                  href="tel:5044817533"
                  className="flex items-center gap-4 p-4 transition-colors duration-200"
                  style={{ background: surface }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = elevated)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = surface)}
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, oklch(0.55 0.28 295), oklch(0.68 0.25 295))" }}
                  >
                    <Phone size={18} style={{ color: charcoal }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: muted, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
                      Phone
                    </div>
                    <div style={{ color: cream, fontWeight: 600 }}>
                      (504) 481-7533
                    </div>
                  </div>
                </a>

                <div
                  className="flex items-center gap-4 p-4"
                  style={{ background: surface }}
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, oklch(0.55 0.28 295), oklch(0.68 0.25 295))" }}
                  >
                    <MapPin size={18} style={{ color: charcoal }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: muted, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
                      Service Area
                    </div>
                    <div style={{ color: cream, fontWeight: 600 }}>
                      New Orleans Metro — St. Charles, LA
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.facebook.com/people/SS-Epoxy/61575537367434/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 transition-colors duration-200"
                  style={{ background: surface }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = elevated)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = surface)}
                >
                  <div
                    className="flex items-center justify-center w-10 h-10 flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, oklch(0.55 0.28 295), oklch(0.68 0.25 295))" }}
                  >
                    <Facebook size={18} style={{ color: charcoal }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", color: muted, textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>
                      Social
                    </div>
                    <div style={{ color: cream, fontWeight: 600 }}>
                      Follow us on Facebook
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <div
              className="reveal reveal-delay-2"
              style={{ background: surface, padding: "2.5rem" }}
            >
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: cream,
                  marginBottom: "0.5rem",
                }}
              >
                Request a Quote
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: muted,
                  marginBottom: "1.75rem",
                  fontWeight: 300,
                }}
              >
                Fill out the form and we'll get back to you shortly.
              </p>

              {formSubmitted ? (
                <div
                  className="text-center py-12"
                  style={{
                    border: `2px solid ${amber}`,
                  }}
                >
                  <CheckCircle2
                    size={48}
                    style={{ color: amber, margin: "0 auto 1rem" }}
                  />
                  <h4
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: cream,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Request Sent!
                  </h4>
                  <p style={{ color: muted, fontSize: "0.9rem" }}>
                    We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { id: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
                    { id: "email", label: "Email", type: "email", placeholder: "john@example.com" },
                    { id: "phone", label: "Phone", type: "tel", placeholder: "(504) 000-0000" },
                  ].map((field) => (
                    <div key={field.id}>
                      <label
                        htmlFor={field.id}
                        style={{
                          display: "block",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: muted,
                          marginBottom: "0.5rem",
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        required
                        value={(formData as any)[field.id]}
                        onChange={(e) =>
                          setFormData({ ...formData, [field.id]: e.target.value })
                        }
                        style={{
                          width: "100%",
                          background: elevated,
                          border: "1px solid oklch(1 0 0 / 0.08)",
                          color: cream,
                          padding: "0.75rem 1rem",
                          fontSize: "0.9rem",
                          outline: "none",
                          transition: "border-color 0.2s ease",
                          fontFamily: "'Barlow', sans-serif",
                        }}
                        onFocus={(e) =>
                          (e.currentTarget.style.borderColor = amber)
                        }
                        onBlur={(e) =>
                          (e.currentTarget.style.borderColor =
                            "oklch(1 0 0 / 0.08)")
                        }
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      htmlFor="projectType"
                      style={{
                        display: "block",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: muted,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      required
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      style={{
                        width: "100%",
                        background: elevated,
                        border: "1px solid oklch(1 0 0 / 0.08)",
                        color: formData.projectType ? cream : muted,
                        padding: "0.75rem 1rem",
                        fontSize: "0.9rem",
                        outline: "none",
                        fontFamily: "'Barlow', sans-serif",
                      }}
                    >
                      <option value="" disabled>
                        Select project type...
                      </option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="industrial">Industrial</option>
                      <option value="travertine">Travertine & Paver Sealing</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="details"
                      style={{
                        display: "block",
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: muted,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Project Details
                    </label>
                    <textarea
                      id="details"
                      rows={4}
                      placeholder="Tell us about your project..."
                      value={formData.details}
                      onChange={(e) =>
                        setFormData({ ...formData, details: e.target.value })
                      }
                      style={{
                        width: "100%",
                        background: elevated,
                        border: "1px solid oklch(1 0 0 / 0.08)",
                        color: cream,
                        padding: "0.75rem 1rem",
                        fontSize: "0.9rem",
                        outline: "none",
                        resize: "vertical",
                        fontFamily: "'Barlow', sans-serif",
                        transition: "border-color 0.2s ease",
                      }}
                      onFocus={(e) =>
                        (e.currentTarget.style.borderColor = amber)
                      }
                      onBlur={(e) =>
                        (e.currentTarget.style.borderColor =
                          "oklch(1 0 0 / 0.08)")
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-purple flex items-center justify-center gap-2"
                    style={{ marginTop: "0.5rem" }}
                  >
                    Submit Request
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        style={{
          background: "oklch(0.09 0.012 295)",
          padding: "4rem 0 2rem",
          borderTop: `1px solid oklch(1 0 0 / 0.06)`,
        }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <img
                src="/manus-storage/ss-epoxy-logo_9b925627.png"
                alt="SS Epoxy Logo"
                style={{ height: "3.5rem", width: "auto", objectFit: "contain", marginBottom: "1rem" }}
              />
              <p
                style={{
                  fontSize: "0.85rem",
                  color: muted,
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                Premium epoxy flooring for the New Orleans metro area. Based in
                St. Charles, Louisiana.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: cream,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "1rem",
                }}
              >
                Services
              </h4>
              <ul className="space-y-2">
                {["Residential", "Commercial", "Industrial", "Travertine & Paver Sealing"].map(
                  (s) => (
                    <li key={s}>
                      <button
                        onClick={() =>
                          document
                            .querySelector("#services")
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        style={{
                          fontSize: "0.85rem",
                          color: muted,
                          fontWeight: 300,
                          background: "none",
                          border: "none",
                          padding: 0,
                          textAlign: "left",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = amber)
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = muted)
                        }
                      >
                        {s}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: cream,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "1rem",
                }}
              >
                Company
              </h4>
              <ul className="space-y-2">
                {[
                  { label: "About Us", href: "#about" },
                  { label: "Our Work", href: "#projects" },
                  { label: "Testimonials", href: "#testimonials" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() =>
                        document
                          .querySelector(link.href)
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      style={{
                        fontSize: "0.85rem",
                        color: muted,
                        fontWeight: 300,
                        background: "none",
                        border: "none",
                        padding: 0,
                        textAlign: "left",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = amber)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = muted)
                      }
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  color: cream,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "1rem",
                }}
              >
                Contact
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="tel:5044817533"
                    className="flex items-center gap-2"
                    style={{
                      fontSize: "0.85rem",
                      color: muted,
                      fontWeight: 300,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = amber)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = muted)
                    }
                  >
                    <Phone size={13} />
                    (504) 481-7533
                  </a>
                </li>
                <li>
                  <span
                    className="flex items-center gap-2"
                    style={{
                      fontSize: "0.85rem",
                      color: muted,
                      fontWeight: 300,
                    }}
                  >
                    <MapPin size={13} />
                    St. Charles, LA
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/people/SS-Epoxy/61575537367434/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                    style={{
                      fontSize: "0.85rem",
                      color: muted,
                      fontWeight: 300,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = amber)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = muted)
                    }
                  >
                    <Facebook size={13} />
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid oklch(1 0 0 / 0.06)",
              paddingTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "0.8rem", color: muted, fontWeight: 300 }}>
              © 2025 SS Epoxy. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 flex"
        style={{ boxShadow: "0 -4px 24px oklch(0 0 0 / 0.4)" }}
      >
        <a
          href="tel:5044817533"
          className="flex-1 flex items-center justify-center gap-2 py-4"
          style={{
            background: elevated,
            color: cream,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
          }}
        >
          <Phone size={16} />
          Call Now
        </a>
        <button
          onClick={() =>
            document
              .querySelector("#contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex-1 flex items-center justify-center gap-2 py-4"
          style={{
            background: amber,
            color: charcoal,
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "1rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            border: "none",
          }}
        >
          Free Quote
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
