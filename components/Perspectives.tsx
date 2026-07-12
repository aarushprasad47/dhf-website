const perspectives = [
  {
    quote:
      "The restoration of a cultural center in Uliastai is not simply a building project. It is an investment in the transmission of knowledge, identity, and community life.",
    name: "Dr. Christopher Atwood",
    role: "Presidential Distinguished Professor of East Asian Languages and Civilization, University of Pennsylvania",
  },
  {
    quote:
      "Restoring this historic building gives new life to a place that already belongs to the memory of the community. It allows the past to serve the future.",
    name: "Governor Gombosuren G. Onorbayar",
    role: "Local Community Leader, Uliastai, Zavkhan",
  },
  {
    quote:
      "Sometimes it feels like opportunities are far away from us. This center would bring opportunity closer to home.",
    name: "Ganboldiin Damodhari",
    role: "Young Student, Mongolian National University of Arts and Culture, Uliastai, Zavkhan",
  },
];

export default function Perspectives() {
  return (
    <section id="perspectives" className="bg-navy-950 py-24 md:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="max-w-3xl mb-16">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Perspectives on the Project
          </p>
          <div className="w-16 h-0.5 bg-gold-500 mb-8" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
            Why This Matters — In Their Own Words
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {perspectives.map((p) => (
            <div
              key={p.name}
              className="bg-navy-900 border border-gold-500/20 p-8 flex flex-col"
            >
              <div className="text-gold-500 text-5xl font-display leading-none mb-4 opacity-60">
                "
              </div>
              <blockquote className="text-white/85 italic leading-relaxed mb-8 flex-1">
                {p.quote}
              </blockquote>
              <div className="border-t border-gold-500/20 pt-5">
                <p className="text-gold-400 font-semibold text-sm">{p.name}</p>
                <p className="text-white/45 text-xs mt-1 leading-relaxed">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
