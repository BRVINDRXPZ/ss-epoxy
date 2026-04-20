/* ============================================================
   SS EPOXY NAVBAR
   Design: Dark sticky nav, Barlow Condensed logo, amber CTA
   Behavior: Transparent on hero, solid on scroll
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
            ? "oklch(0.13 0.005 260 / 0.97)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid oklch(1 0 0 / 0.08)" : "none",
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
              <div className="flex flex-col leading-none">
                <span
                  className="text-2xl lg:text-3xl font-black tracking-tight"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "oklch(0.65 0.18 55)",
                  }}
                >
                  SS EPOXY
                </span>
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "oklch(0.60 0.01 260)", letterSpacing: "0.2em" }}
                >
                  Epoxy Flooring
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm font-semibold uppercase tracking-wider transition-colors duration-200"
                  style={{
                    color: "oklch(0.75 0.01 260)",
                    fontFamily: "'Barlow', sans-serif",
                    letterSpacing: "0.08em",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.65 0.18 55)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.75 0.01 260)")}
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
                style={{ color: "oklch(0.75 0.01 260)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.65 0.18 55)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.75 0.01 260)")}
              >
                <Phone size={14} />
                (504) 481-7533
              </a>
              <button
                onClick={() => handleNavClick("#contact")}
                className="btn-amber text-sm px-5 py-2.5"
              >
                Get a Quote
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: "oklch(0.92 0.015 80)" }}
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
          background: "oklch(0.13 0.005 260 / 0.98)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="text-3xl font-black uppercase tracking-wide transition-colors duration-200"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: "oklch(0.92 0.015 80)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.65 0.18 55)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.92 0.015 80)")}
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:5044817533"
            className="flex items-center gap-2 text-lg font-semibold mt-4"
            style={{ color: "oklch(0.65 0.18 55)" }}
          >
            <Phone size={18} />
            (504) 481-7533
          </a>
          <button
            onClick={() => handleNavClick("#contact")}
            className="btn-amber mt-2"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </>
  );
}
