/* ============================================================
   SS EPOXY NAVBAR
   Design: Brand Purple/Silver — dark sticky nav, logo image, purple CTA
   Behavior: Transparent on hero, solid dark-purple on scroll
   ============================================================ */
import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "oklch(0.12 0.012 295 / 0.97)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid oklch(0.62 0.27 295 / 0.15)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center gap-2 group"
            >
              <img
                src="/SS EPOXY LOGO Vector (1).PNG"
                alt="SS Epoxy Logo"
                className="h-10 lg:h-12 w-auto object-contain"
              />
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
                  style={{
                    color: "oklch(0.78 0.008 260)",
                    fontFamily: "'Barlow', sans-serif",
                    letterSpacing: "0.08em",
                    background: "none",
                    border: "none",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.22 295)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.78 0.008 260)")}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:5044817533"
                className="flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                style={{ color: "oklch(0.78 0.008 260)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.22 295)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.78 0.008 260)")}
              >
                <Phone size={14} />
                (504) 481-7533
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-purple text-sm px-5 py-2.5"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "oklch(0.95 0.005 260)" }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          background: "oklch(0.12 0.012 295 / 0.98)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {/* Mobile logo */}
          <img
            src="/manus-storage/ss-epoxy-logo_9b925627.png"
            alt="SS Epoxy Logo"
            className="h-16 w-auto object-contain mb-4"
          />
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-3xl font-black uppercase tracking-wide transition-colors duration-200"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: "oklch(0.95 0.005 260)",
                background: "none",
                border: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.72 0.22 295)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.95 0.005 260)")}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:5044817533"
            className="flex items-center gap-2 text-lg font-semibold mt-4"
            style={{ color: "oklch(0.72 0.22 295)" }}
          >
            <Phone size={18} />
            (504) 481-7533
          </a>
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-purple mt-2"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </>
  );
}
