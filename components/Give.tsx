const namingOpportunities = [
  { name: "Lead Building Gift", desc: "Restoration of the historic theater and public identity of the center" },
  { name: "Performance & Gathering Hall", desc: "Performances, lectures, ceremonies, festivals, and community events" },
  { name: "Community Learning Center", desc: "Language, digital literacy, financial literacy, and workforce development" },
  { name: "Music & Arts Studios", desc: "Music, theater, visual arts, youth performance, and creative training" },
  { name: "Traditional Arts & Artisan Workshops", desc: "Thangka painting, jewelry, metalwork, woodwork, textiles, and crafts" },
  { name: "Cultural Heritage Gallery", desc: "Exhibitions, oral history, photography, sacred art, and cultural displays" },
  { name: "Youth Leadership & Innovation Hub", desc: "Technology awareness, entrepreneurship, and community service" },
  { name: "Wellness & Community Spaces", desc: "Mindfulness, resilience training, public health, and family programs" },
  { name: "Visiting Teacher & Artist Fund", desc: "Cultural exchange, residencies, and visiting instructors" },
  { name: "Scholarship & Access Fund", desc: "Participation support for youth, nomadic families, and those in need" },
];

export default function Give() {
  return (
    <section id="give" className="bg-navy-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            How to Give
          </p>
          <div className="w-16 h-0.5 bg-gold-500 mb-8" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Join Us in Building
            <br />
            <span className="text-gold-400">Something Lasting</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8">
            Your support will help transform a historic public building into a lasting
            community resource where cultural traditions can be preserved, shared, and
            passed to future generations.
          </p>
          <a
            href="/donor-prospectus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gold-400 text-sm font-semibold border-b-2 border-gold-500 pb-1 hover:text-gold-300 transition-colors"
          >
            Download the Donor Prospectus (PDF)
            <span className="text-gold-500">↓</span>
          </a>
        </div>

        {/* Giving pathways */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              title: "Naming Gifts",
              desc: "Create a lasting legacy by supporting a specific space or program at the center.",
              cta: "Explore Opportunities →",
              highlight: true,
            },
            {
              title: "Major Gifts",
              desc: "Fund restoration phases, educational programs, youth development, or cultural programming.",
              cta: "Contact Us →",
              highlight: false,
            },
            {
              title: "Corporate Sponsorship",
              desc: "Align your organization with workforce development, heritage preservation, and technology.",
              cta: "Partner With Us →",
              highlight: false,
            },
            {
              title: "Foundation Grants",
              desc: "Support cultural preservation, rural development, education, and sustainable community growth.",
              cta: "Learn More →",
              highlight: false,
            },
          ].map((path) => (
            <div
              key={path.title}
              className={`p-8 ${
                path.highlight
                  ? "bg-gold-500 text-navy-950"
                  : "bg-navy-900 border border-gold-500/20 text-white"
              }`}
            >
              <h3
                className={`font-display text-xl font-semibold mb-3 ${
                  path.highlight ? "text-navy-950" : "text-white"
                }`}
              >
                {path.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  path.highlight ? "text-navy-800" : "text-white/60"
                }`}
              >
                {path.desc}
              </p>
              <a
                href="#contact"
                className={`text-xs font-bold uppercase tracking-widest ${
                  path.highlight ? "text-navy-950" : "text-gold-400"
                }`}
              >
                {path.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Giving pathways: legal structure */}
        <div className="bg-navy-900 border border-gold-500/20 p-10 md:p-14 mb-20">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-6">
            Charitable Giving Structure
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Mongolian Gifts",
                desc: "Direct gifts to the Diluv Khutugtu Foundation in Mongolia, where appropriate and legally permitted.",
              },
              {
                title: "U.S. Tax-Deductible Gifts",
                desc: "American donors may give through our U.S. fiscal sponsor partner, the Kalmyk Heritage Center, Brooklyn, New York, for tax-deductible contributions via 501(c)(3) status.",
              },
              {
                title: "Institutional & Foundation Gifts",
                desc: "Foundation grants and institutional partnerships for capital restoration, cultural preservation, education, and rural development.",
              },
            ].map((path) => (
              <div key={path.title} className="border-t border-gold-500/30 pt-6">
                <h4 className="text-white font-semibold mb-3">{path.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{path.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-white/40 text-xs border-t border-white/10 pt-6">
            U.S. charitable giving structure is under active development. Donors interested
            in tax-deductible gifts may request updates on fiscal sponsorship arrangements
            by contacting us directly.
          </p>
        </div>

        {/* Naming opportunities */}
        <div>
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-8">
            Naming Opportunities
          </p>
          <p className="text-white/70 text-base leading-relaxed max-w-2xl mb-10">
            Naming opportunities are available for donors who wish to create a lasting
            legacy through support of the center. Gift levels will be confirmed once final
            architectural plans are complete.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {namingOpportunities.map((opp) => (
              <div
                key={opp.name}
                className="border border-gold-500/20 hover:border-gold-500/60 transition-colors duration-200 p-6"
              >
                <h4 className="text-white font-semibold text-sm mb-2">{opp.name}</h4>
                <p className="text-white/45 text-xs leading-relaxed">{opp.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-6">
            Custom naming opportunities may be developed for specific programs, restoration
            phases, or endowment funds. Contact us to discuss.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 border-t border-gold-500/30 pt-16 text-center">
          <h3 className="font-display text-3xl md:text-4xl text-white mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            We invite individuals, foundations, corporations, and community partners to
            join us in bringing this vision to life.
          </p>

          {/* Fiscal sponsor notice */}
          <div className="bg-navy-900 border border-gold-500/30 rounded-sm max-w-2xl mx-auto p-6 mb-8 text-left">
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-2">
              A Note on Donations
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              Online donations are processed through the{" "}
              <strong className="text-white">Kalmyk Heritage Center</strong>, Brooklyn,
              New York, a U.S. registered 501(c)(3) nonprofit and trusted fiscal
              sponsor of the Diluv Khutugtu Foundation. This arrangement allows U.S.
              donors to make fully tax-deductible gifts while we formalize our own U.S.
              charitable registration. All funds contributed are directed to the
              Cultural Center project in Uliastai.
            </p>
          </div>

          <a
            href="https://dhf.mn/give-donor/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Donate Now
          </a>
          <p className="text-white/30 text-xs mt-4">
            Processed securely via dhf.mn · Tax-deductible in the U.S. through the Kalmyk Heritage Center 501(c)(3)
          </p>
        </div>
      </div>
    </section>
  );
}
