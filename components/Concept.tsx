const principles = [
  {
    name: "Honor the Past",
    desc: "Preserve the historic character and monumental presence of the Soviet-era theater building.",
  },
  {
    name: "Open and Inviting",
    desc: "Create welcoming spaces for community gathering and exchange.",
  },
  {
    name: "Rooted in Culture",
    desc: "Incorporate Mongolian art, symbols, and natural materials throughout the building.",
  },
  {
    name: "Sustainable Future",
    desc: "Prioritize energy efficiency, natural light, and local materials.",
  },
];

const programOverview = [
  {
    name: "Culture & Arts",
    items: ["Performance Hall (500 seats)", "Exhibition Gallery", "Music & Dance Studios", "Traditional Arts Workshops"],
  },
  {
    name: "Education & Skills",
    items: ["Classrooms", "Digital Learning Lab", "Language & Training Rooms", "Library & Resource Center"],
  },
  {
    name: "Community & Well-Being",
    items: ["Community Hall", "Youth Center", "Health & Wellness Room", "Counseling & Support Services"],
  },
  {
    name: "Public & Support",
    items: ["Café & Gift Shop", "Administration", "Support Spaces"],
  },
];

export default function Concept() {
  return (
    <section id="concept" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="max-w-3xl mb-16">
          <p className="section-tag">The Concept</p>
          <div className="divider-gold" />
          <h2 className="section-title">
            A Place Where Heritage, Education,
            <br />
            and Community Life Flourish Together
          </h2>
          <p className="section-body">
            The restoration plan transforms the historic theater into a multi-functional
            cultural creative and community exchange center, reopening its 500-seat
            performance hall alongside new education, wellness, and public spaces, all
            organized around four guiding design principles.
          </p>
        </div>

        {/* Concept rendering */}
        <div className="mb-20 border border-navy-100">
          <img
            src="/concept-sketch.png"
            alt="Concept sketch of the Uliastai Cultural Creative and Community Exchange Center, showing the site plan, main entrance perspective, and interior spaces"
            className="w-full h-auto"
          />
        </div>

        {/* Design principles */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {principles.map((p) => (
            <div key={p.name} className="border border-navy-100 p-8 hover:border-gold-400 transition-colors duration-300">
              <h3 className="font-display text-lg text-navy-900 mb-3">{p.name}</h3>
              <p className="text-navy-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Program overview */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl text-navy-900 mb-10">
            Inside the Center
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-100">
            {programOverview.map((area) => (
              <div key={area.name} className="bg-[#faf7f2] p-8">
                <h4 className="font-display text-lg text-navy-900 mb-4">{area.name}</h4>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-navy-600 text-sm leading-relaxed">
                      <span className="text-gold-500 mt-0.5 shrink-0">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
