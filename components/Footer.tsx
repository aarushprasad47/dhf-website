export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-gold-500/20">
      {/* Top bar */}
      <div className="h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 opacity-60" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-gold-500 flex items-center justify-center">
                <span className="text-gold-500 font-display font-bold">DHF</span>
              </div>
              <div>
                <p className="text-white font-display font-semibold leading-tight">
                  Mongolian Heritage Fund
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              This campaign is led by the Diluv Khutugtu Foundation (DHF), which
              promotes knowledge grounded in Buddhist wisdom and advances secular
              ethics, education, and community development across Mongolia and beyond.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/about"
                className="text-gold-400 text-xs uppercase tracking-widest hover:text-gold-300 transition-colors"
              >
                About DHF
              </a>
              <span className="text-white/20">·</span>
              <a
                href="mailto:info@dhf.mn"
                className="text-gold-400 text-xs uppercase tracking-widest hover:text-gold-300 transition-colors"
              >
                info@dhf.mn
              </a>
              <span className="text-white/20">·</span>
              <a
                href="https://dhf.mn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-400 text-xs uppercase tracking-widest hover:text-gold-300 transition-colors"
              >
                dhf.mn
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-6">
              Quick Links
            </p>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About the Foundation" },
                { href: "/#need", label: "The Cultural Center" },
                { href: "/#programs", label: "Programs" },
                { href: "/#budget", label: "Budget & Timeline" },
                { href: "/#impact", label: "Impact Goals" },
                { href: "/#give", label: "How to Give" },
                { href: "/#contact", label: "Contact Us" },
                { href: "/donor-prospectus.pdf", label: "Donor Prospectus (PDF)" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.href.endsWith(".pdf") ? "_blank" : undefined}
                    rel={link.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
                    className="text-white/50 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Project at a glance */}
          <div>
            <p className="text-white text-xs font-semibold uppercase tracking-widest mb-6">
              Project Highlights
            </p>
            <ul className="space-y-4">
              {[
                { label: "Total Investment", value: "$2.6M" },
                { label: "First Milestone", value: "$700K" },
                { label: "Location", value: "Uliastai, Zavkhan" },
                { label: "Building Size", value: "~1,800 m²" },
                { label: "Youth Served (3 yr)", value: "300–500" },
              ].map((item) => (
                <li key={item.label} className="flex justify-between items-baseline">
                  <span className="text-white/40 text-xs">{item.label}</span>
                  <span className="text-gold-400 text-sm font-semibold">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {currentYear} Diluv Khutugtu Foundation. All rights reserved.
          </p>
          <p className="text-white/20 text-xs text-center md:text-right">
            U.S. tax-deductible gifts available through the Mongolian Heritage Fund ·
            501(c)(3)
          </p>
        </div>
      </div>
    </footer>
  );
}
