const goals = [
  {
    range: "300–500",
    unit: "Youth & Young Adults",
    desc: "Served through education, arts, digital literacy, language, and life-skills programs",
    icon: "◆",
  },
  {
    range: "50–100",
    unit: "Cultural Knowledge Holders",
    desc: "Elders, artisans, and teachers engaged in transmission and documentation activities",
    icon: "◆",
  },
  {
    range: "25–50",
    unit: "Nomadic Families",
    desc: "Supported through seasonal participation, family programs, and flexible learning access",
    icon: "◆",
  },
  {
    range: "10–20",
    unit: "Visiting Teachers & Artists",
    desc: "International practitioners hosted through exchange and residency programs",
    icon: "◆",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="section-tag">Impact Goals</p>
          <div className="divider-gold" />
          <h2 className="section-title">
            Measurable Change
            <br />
            in the First Three Years
          </h2>
          <p className="section-body">
            The center's impact goals have been developed with local partners and will be
            refined as program design develops — representing a realistic and ambitious
            vision for community transformation in Zavkhan Province.
          </p>
        </div>

        {/* Numbers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-100 mb-20">
          {goals.map((goal) => (
            <div key={goal.unit} className="bg-white p-10 flex flex-col">
              <p className="font-display text-5xl md:text-6xl text-navy-900 font-bold leading-none mb-2">
                {goal.range}
              </p>
              <p className="text-gold-500 font-semibold text-sm uppercase tracking-wide mb-4">
                {goal.unit}
              </p>
              <p className="text-navy-500 text-sm leading-relaxed mt-auto">{goal.desc}</p>
            </div>
          ))}
        </div>

        {/* Additional outcomes */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl text-navy-900 mb-6">
              Cultural & Community Outcomes
            </h3>
            <div className="space-y-4">
              {[
                "Annual cultural events, exhibitions, performances, and community gatherings for the wider Uliastai and Zavkhan community",
                "Documentation and preservation of oral traditions, ecological knowledge, and artistic practices",
                "Strengthened intergenerational connections between elders and youth",
                "Increased cultural tourism and international cultural exchange",
              ].map((item) => (
                <div key={item} className="flex gap-4 items-start">
                  <span className="text-gold-500 font-bold mt-1 shrink-0">—</span>
                  <p className="text-navy-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl text-navy-900 mb-6">
              Economic & Development Outcomes
            </h3>
            <div className="space-y-4">
              {[
                "Practical pathways for local employment, apprenticeship, and entrepreneurship",
                "Skills training aligned with regional tourism and hospitality growth",
                "Creative economy opportunities for artisans and cultural practitioners",
                "Reduced youth outmigration through expanded local opportunity",
              ].map((item) => (
                <div key={item} className="flex gap-4 items-start">
                  <span className="text-gold-500 font-bold mt-1 shrink-0">—</span>
                  <p className="text-navy-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Global significance */}
        <div className="mt-20 bg-[#faf7f2] p-10 md:p-16 border-t-4 border-gold-500">
          <div className="max-w-4xl">
            <p className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              Why This Matters Globally
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-navy-900 mb-6 leading-snug">
              Central Asian nomadic peoples helped shape the modern world as the "human
              internet" of the ancient Silk Road.
            </h3>
            <p className="section-body mb-4">
              These communities preserved and transmitted Buddhism, artistic traditions,
              languages, music, oral epics, craftsmanship, and ecological knowledge across
              vast distances — not through monuments alone, but through movement,
              storytelling, and living practice.
            </p>
            <p className="section-body">
              Supporting a Mongolian project that protects nomadic heritage is an investment
              not only in one community, but in{" "}
              <strong>a priceless part of global history and human wisdom.</strong> Cultural
              diversity enriches humanity — it preserves the many ways communities
              understand the world, express wisdom, and pass meaning from one generation
              to the next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
