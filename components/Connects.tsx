const connections = [
  {
    who: "Young People",
    what: "Education, creativity, and practical skills development for the workforce and beyond.",
  },
  {
    who: "Nomadic Families",
    what: "Flexible seasonal participation and engagement that respects their way of life.",
  },
  {
    who: "Elders",
    what: "Meaningful roles in transmitting cultural knowledge, traditions, and life wisdom.",
  },
  {
    who: "The Community",
    what: "A shared civic and cultural gathering space reactivated for all generations.",
  },
];

export default function Connects() {
  return (
    <section id="connects" className="bg-[#faf7f2] py-24 md:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="max-w-3xl mb-16">
          <p className="section-tag">A Community Hub for Uliastai's Future</p>
          <div className="divider-gold" />
          <h2 className="section-title">A Place That Connects</h2>
          <p className="section-body">
            Drawing on lessons from Kalmykia's cultural revival and inspired by
            institutions such as the Norbulingka Institute, the center supports a
            living cultural system where learning, apprenticeship, creativity, and
            community participation are integrated into everyday life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {connections.map((item) => (
            <div
              key={item.who}
              className="bg-white border border-navy-100 p-8 hover:border-gold-400 transition-colors duration-300"
            >
              <p className="text-gold-500 text-xs mb-3">◆</p>
              <h4 className="font-display text-xl text-navy-900 mb-3">{item.who}</h4>
              <p className="text-navy-600 text-sm leading-relaxed">{item.what}</p>
            </div>
          ))}
        </div>

        <p className="text-navy-500 text-sm mt-10 max-w-3xl italic">
          The project is being developed in collaboration with local stakeholders and
          government partners who recognize the center's potential to contribute to
          cultural vitality, community well-being, tourism, and regional development.
        </p>
      </div>
    </section>
  );
}
