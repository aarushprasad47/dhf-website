"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "/about", label: "About DHF" },
  { href: "/#need", label: "The Project" },
  { href: "/#programs", label: "Programs" },
  { href: "/#impact", label: "Impact" },
  { href: "/#budget", label: "Budget" },
  { href: "/#give", label: "Give" },
  { href: "/#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950 shadow-xl border-b border-gold-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 group">
          <img
            src="/logo-square.png"
            alt="Diluv Khutugtu Foundation logo"
            className="w-10 h-10 shrink-0 object-contain"
          />
          <div className="hidden sm:block">
            <p className="text-white font-display text-sm font-semibold leading-tight">
              Uliastai Cultural Center
            </p>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
                link.href === "/#give"
                  ? "text-gold-400 hover:text-gold-300"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://dhf.mn/give-donor/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 bg-gold-500 text-navy-950 text-xs font-bold uppercase tracking-widest px-6 py-2.5 hover:bg-gold-400 transition-colors duration-200"
          >
            Donate
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy-950 border-t border-gold-500/20 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-white text-sm font-semibold uppercase tracking-widest py-2 border-b border-white/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://dhf.mn/give-donor/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-2 bg-gold-500 text-navy-950 text-sm font-bold uppercase tracking-widest px-6 py-3 text-center hover:bg-gold-400 transition-colors"
          >
            Donate Now
          </a>
        </div>
      )}
    </nav>
  );
}
