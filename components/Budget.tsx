const capitalBudget = [
  { item: "Building systems", desc: "Structural repairs, roof, windows, heating, electrical, plumbing, fire safety, accessibility, exterior restoration", cost: "$640,000" },
  { item: "Interior renovation", desc: "Theater hall, classrooms/workshops, community spaces, offices, kitchen & café, exhibition areas, furnishings", cost: "$430,000" },
  { item: "Technology", desc: "Computer lab, audio/visual equipment, internet infrastructure, translation & digital learning systems", cost: "$150,000" },
  { item: "Artisan facilities", desc: "Thangka/appliqué studio, jewelry & metalworking, woodworking, textile & craft workshops, exhibition displays", cost: "$150,000" },
  { item: "Professional fees & contingency", desc: "Architectural design, engineering, project management, permits, and 15% contingency", cost: "$405,000" },
];

const phaseOneUses = [
  { area: "Building stabilization", purpose: "Roof, envelope, and urgent structural work to protect the building from further deterioration", range: "$175K–$225K" },
  { area: "Essential systems", purpose: "Heating, electrical, plumbing, sanitation, fire safety, and basic accessibility", range: "$250K–$325K" },
  { area: "Early-use spaces", purpose: "Classrooms, community hall, and basic furnishings for flexible learning areas", range: "$100K–$150K" },
  { area: "Planning and oversight", purpose: "Assessment, design, permitting, project management, and contingency", range: "$100K–$150K" },
  { area: "First programs", purpose: "Pilot education, cultural, and community programming", range: "$50K–$75K" },
];

const stages = [
  {
    phase: "Stage 1",
    title: "Building Stabilization & Reopening",
    goal: "$600K – $800K",
    items: ["Roof", "Heating", "Electrical", "Basic classrooms", "Community hall"],
  },
  {
    phase: "Stage 2",
    title: "Cultural & Vocational Facilities",
    goal: "$500K – $700K",
    items: ["Artisan workshops", "Computer lab", "Gallery space", "Theater restoration"],
  },
  {
    phase: "Stage 3",
    title: "Program Endowment & Launch",
    goal: "$800K – $1M",
    items: ["First 3 years of operations", "Staffing", "Program delivery", "Sustainable earned revenue"],
  },
];

export default function Budget() {
  return (
    <section id="budget" className="bg-[#faf7f2] py-24 md:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="max-w-3xl mb-16">
          <p className="section-tag">Budget & Timeline</p>
          <div className="divider-gold" />
          <h2 className="section-title">
            Where the Investment Goes
          </h2>
          <p className="section-body">
            These are preliminary planning estimates, pending local architectural,
            engineering, and contractor review. The total project investment of
            approximately $2.6M covers a one-time capital restoration and three years
            of program launch costs.
          </p>
        </div>

        {/* Overall investment */}
        <div className="grid sm:grid-cols-3 gap-px bg-navy-100 mb-20">
          {[
            { value: "$1.78M", label: "Capital Restoration (Phase I)" },
            { value: "$798K", label: "3-Year Program Launch (Phase II)" },
            { value: "$2.6M", label: "Total Project Investment" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white p-10">
              <p className="font-display text-4xl md:text-5xl text-navy-900 font-bold mb-2">{stat.value}</p>
              <p className="text-navy-500 text-xs uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Capital restoration breakdown */}
        <div className="mb-20">
          <h3 className="font-display text-2xl text-navy-900 mb-8">
            Capital Restoration Budget Breakdown
          </h3>
          <div className="bg-white border border-navy-100">
            {capitalBudget.map((row, i) => (
              <div
                key={row.item}
                className={`grid md:grid-cols-[1fr,2fr,auto] gap-4 md:gap-8 p-6 items-start ${
                  i !== capitalBudget.length - 1 ? "border-b border-navy-100" : ""
                }`}
              >
                <p className="font-semibold text-navy-900 text-sm">{row.item}</p>
                <p className="text-navy-500 text-sm leading-relaxed">{row.desc}</p>
                <p className="font-display text-xl text-gold-600 font-bold whitespace-nowrap">{row.cost}</p>
              </div>
            ))}
            <div className="grid md:grid-cols-[1fr,2fr,auto] gap-4 md:gap-8 p-6 bg-navy-950">
              <p className="font-semibold text-white text-sm">Total Phase I</p>
              <p></p>
              <p className="font-display text-xl text-gold-400 font-bold whitespace-nowrap">$1.78 million</p>
            </div>
          </div>
        </div>

        {/* Phase One priority uses */}
        <div className="mb-20">
          <h3 className="font-display text-2xl text-navy-900 mb-4">
            Phase One: What the First $700K Will Accomplish
          </h3>
          <p className="section-body mb-8 max-w-3xl">
            Rather than waiting for the full project budget to be raised, the initial
            $700,000 milestone focuses on stabilizing the building, restoring essential
            systems, and opening usable spaces for early programming — giving donors a
            concrete first step toward reopening a historic public building.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {phaseOneUses.map((use) => (
              <div key={use.area} className="bg-white border border-navy-100 p-6">
                <p className="text-gold-600 font-display text-lg font-bold mb-3">{use.range}</p>
                <h4 className="text-navy-900 font-semibold text-sm mb-2">{use.area}</h4>
                <p className="text-navy-500 text-xs leading-relaxed">{use.purpose}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Work proposed in stages */}
        <div className="bg-navy-950 p-10 md:p-16 mb-16">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-10">
            Work Proposed in Stages
          </p>
          <div className="grid md:grid-cols-3 gap-0">
            {stages.map((stage, i) => (
              <div
                key={stage.phase}
                className={`border-t-2 ${
                  i === 0 ? "border-gold-500" : i === 1 ? "border-gold-500/60" : "border-gold-500/30"
                } pt-8 pb-8 ${i < 2 ? "md:pr-10 md:border-r md:border-r-white/10" : ""} ${
                  i > 0 ? "md:pl-10 mt-8 md:mt-0 border-t border-t-white/10 md:border-t-2" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest">{stage.phase}</p>
                  <span className="text-gold-500/70 text-xs font-semibold border border-gold-500/30 px-2 py-1">
                    {stage.goal}
                  </span>
                </div>
                <h4 className="font-display text-lg text-white mb-4">{stage.title}</h4>
                <ul className="space-y-2">
                  {stage.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/60 text-sm">
                      <span className="text-gold-500 mt-0.5 shrink-0">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-10 pt-8 border-t border-white/10 text-white/50 text-sm">
            The first campaign is targeting a <strong className="text-gold-400">$700,000</strong> first
            milestone. This phased approach allows the center to begin operating and
            demonstrating impact while additional funding is raised.
          </p>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              period: "0–6 Months",
              title: "Readiness & Stabilization Planning",
              items: ["Confirm building-use permissions and local approvals", "Complete architectural and engineering assessment", "Finalize Phase One work plan and donor reporting structure"],
            },
            {
              period: "6–18 Months",
              title: "Building Stabilization & Early Reopening",
              items: ["Complete priority roof, heating, electrical, plumbing, and safety work", "Prepare first classrooms, gathering spaces, and administrative areas", "Begin pilot education, cultural, and community programs"],
            },
            {
              period: "18–36 Months",
              title: "Program Expansion & Cultural Facilities",
              items: ["Develop artisan studios, digital learning spaces, and gallery areas", "Expand visiting teacher, youth, wellness, and cultural heritage programming", "Build earned-revenue activity, grant relationships, and annual donor support"],
            },
          ].map((phase) => (
            <div key={phase.period} className="border-l-2 border-gold-500 pl-6">
              <p className="text-gold-600 text-xs font-semibold uppercase tracking-widest mb-2">{phase.period}</p>
              <h4 className="font-display text-lg text-navy-900 mb-4">{phase.title}</h4>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li key={item} className="text-navy-600 text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
