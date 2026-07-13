const programs = [
  {
    id: "education",
    tag: "Program Area 01",
    title: "Public Education & Future Skills",
    subtitle: "Developing people of all ages through learning and apprenticeship",
    color: "border-gold-500",
    items: [
      "Cognitive-Based Compassion Training (CBCT) and mindfulness",
      "Tourism, guiding, and hospitality training with cultural interpretation",
      "Digital literacy, AI awareness, and computer skills",
      "English language training for global communication",
      "Financial literacy and life skills development",
      "Vocational apprenticeships in carpentry, crafts, culinary arts, and repair",
    ],
    note: "Designed with flexibility for seasonal participation by nomadic families and youth.",
  },
  {
    id: "health",
    tag: "Program Area 02",
    title: "Health & Community Well-Being",
    subtitle: "Strengthening physical, mental, and social well-being across generations",
    color: "border-navy-400",
    items: [
      "Public health initiatives, including TB screening and prevention education",
      "Mental health support through mindfulness and meditation practices",
      "Inclusive programming for persons with disabilities",
      "Family-focused health and safety education",
      "Community resilience programs for rural and nomadic populations",
    ],
    note: "Serving both settled and nomadic communities throughout Zavkhan Province.",
  },
  {
    id: "culture",
    tag: "Program Area 03",
    title: "Cultural Heritage & Creative Economy",
    subtitle: "Supporting cultural continuity and pathways for creative livelihoods",
    color: "border-gold-400",
    items: [
      "Traditional arts training: Thangka painting, appliqué, and craft traditions",
      "Artisan development in jewelry, sculpture, leatherwork, and metal arts",
      "Youth cultural programming in storytelling, theater, and performance",
      "Documentation of oral traditions from settled and nomadic communities",
      "International exchange and cultural residency programs",
    ],
    note: "Nomadic knowledge holders contribute to cultural transmission in ecological knowledge, oral history, and music.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="bg-[#faf7f2] py-24 md:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="section-tag">Center Programs</p>
          <div className="divider-gold" />
          <h2 className="section-title">
            Three Integrated
            <br />
            Program Areas
          </h2>
          <p className="section-body">
            The center's work is organized around three interconnected pillars, each
            designed to serve diverse community members, from nomadic herders and elders
            to young students and working-age adults.
          </p>
        </div>

        {/* Program cards */}
        <div className="space-y-8">
          {programs.map((prog, index) => (
            <div
              key={prog.id}
              className={`bg-white border-l-4 ${prog.color} p-10 md:p-14 grid md:grid-cols-3 gap-10 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              {/* Left: header */}
              <div className="md:col-span-1">
                <p className="text-gold-500 text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                  {prog.tag}
                </p>
                <h3 className="font-display text-2xl md:text-3xl text-navy-900 leading-tight mb-4">
                  {prog.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">{prog.subtitle}</p>
              </div>

              {/* Right: items */}
              <div className="md:col-span-2">
                <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                  {prog.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-navy-700 text-sm leading-relaxed">
                      <span className="text-gold-500 mt-1 shrink-0 font-bold">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                {prog.note && (
                  <p className="text-navy-400 text-xs italic border-t border-navy-100 pt-4">
                    {prog.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sustainability note */}
        <div className="mt-16 bg-navy-900 text-white p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Sustainable Operations
            </p>
            <h3 className="font-display text-2xl md:text-3xl leading-snug mb-4">
              Built for Long-Term Community Participation
            </h3>
            <p className="text-white/70 leading-relaxed">
              Long-term operations are designed to be supported through program fees,
              educational offerings, cultural exchange programs, and community-based
              service exchange, ensuring the center remains self-sustaining and
              accessible to all.
            </p>
          </div>
          <div className="space-y-5">
            {[
              {
                label: "Cultural Exchange Students",
                desc: "May teach English in return for cultural immersion experiences",
              },
              {
                label: "Traditional Arts Apprentices",
                desc: "Assist with visitor services and administration as part of training",
              },
              {
                label: "Community Members",
                desc: "Contribute skills and participation to the life of the center",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <span className="text-gold-400 mt-1 text-xs shrink-0">◆</span>
                <div>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                  <p className="text-white/50 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
