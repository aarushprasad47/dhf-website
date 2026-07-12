export default function Project() {
  return (
    <section id="project" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="section-tag">The Cultural Center Project</p>
          <div className="divider-gold" />
          <h2 className="section-title">
            Restoring a Historic Theater,
            <br />
            Building a Living Future
          </h2>
          <p className="section-body">
            The Diluv Khutugtu Foundation is transforming a former Soviet-era theater in
            Uliastai, Zavkhan Province into a{" "}
            <strong>Cultural Creative and Community Exchange Center</strong> — a dynamic
            space where education, creativity, wellness, and cultural life intersect.
          </p>
        </div>

        {/* Context block */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 bg-[#faf7f2] p-10">
            <h3 className="font-display text-2xl text-navy-900 mb-5">
              A Generation at a Crossroads
            </h3>
            <p className="section-body mb-4">
              Zavkhan Province is rich in cultural heritage and community traditions, yet
              many residents face limited access to educational, economic, and cultural
              opportunities. Young people increasingly leave rural communities in search of
              opportunity, while the spaces that once supported intergenerational learning
              continue to diminish.
            </p>
            <p className="section-body mb-4">
              The region's greatest strengths remain intact: young people eager to learn
              and contribute, nomadic communities preserving invaluable ecological and
              artistic knowledge, and elders carrying traditions shaped by generations of
              lived experience.
            </p>
            <p className="section-body">
              The challenge is not the absence of culture or community, but the need for
              <strong> places where knowledge, skills, and traditions can be actively
              practiced, shared, and passed forward.</strong>
            </p>
          </div>

          {/* Key facts */}
          <div className="bg-navy-950 p-10 flex flex-col gap-8">
            <div>
              <p className="text-gold-400 font-display text-3xl font-bold">1,800 m²</p>
              <p className="text-white/50 text-xs uppercase tracking-wide mt-1">
                Building Size (13,000–19,000 sq ft)
              </p>
            </div>
            <div className="border-t border-gold-500/20 pt-6">
              <p className="text-gold-400 font-display text-3xl font-bold">$1.78M</p>
              <p className="text-white/50 text-xs uppercase tracking-wide mt-1">
                Phase I Capital Restoration
              </p>
            </div>
            <div className="border-t border-gold-500/20 pt-6">
              <p className="text-gold-400 font-display text-3xl font-bold">$798K</p>
              <p className="text-white/50 text-xs uppercase tracking-wide mt-1">
                3-Year Program Launch Budget
              </p>
            </div>
            <div className="border-t border-gold-500/20 pt-6">
              <p className="text-gold-400 font-display text-3xl font-bold">$2.6M</p>
              <p className="text-white/50 text-xs uppercase tracking-wide mt-1">
                Total Project Investment
              </p>
            </div>
          </div>
        </div>

        {/* What the center will be */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl text-navy-900 mb-10">
            A Place That Connects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                who: "Young People",
                what: "Education, creativity, and practical skills development for the workforce and beyond.",
                icon: "◆",
              },
              {
                who: "Nomadic Families",
                what: "Flexible seasonal participation and engagement that respects their way of life.",
                icon: "◆",
              },
              {
                who: "Elders",
                what: "Meaningful roles in transmitting cultural knowledge, traditions, and life wisdom.",
                icon: "◆",
              },
              {
                who: "The Community",
                what: "A shared civic and cultural gathering space reactivated for all generations.",
                icon: "◆",
              },
            ].map((item) => (
              <div
                key={item.who}
                className="border border-navy-100 p-8 hover:border-gold-400 transition-colors duration-300"
              >
                <p className="text-gold-500 text-xs mb-3">{item.icon}</p>
                <h4 className="font-display text-xl text-navy-900 mb-3">{item.who}</h4>
                <p className="text-navy-600 text-sm leading-relaxed">{item.what}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-navy-950 p-10 md:p-16">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-10">
            Project Timeline
          </p>
          <div className="grid md:grid-cols-3 gap-0">
            {[
              {
                phase: "Phase 1",
                period: "0 – 18 Months",
                goal: "$600K – $800K",
                title: "Building Stabilization & Reopening",
                items: [
                  "Roof and structural repairs",
                  "Heating, electrical, plumbing",
                  "Basic classrooms & community hall",
                  "Pilot programs begin",
                ],
              },
              {
                phase: "Phase 2",
                period: "18 – 36 Months",
                goal: "$500K – $700K",
                title: "Cultural & Vocational Facilities",
                items: [
                  "Artisan workshops & studios",
                  "Computer lab & digital spaces",
                  "Gallery & exhibition areas",
                  "Full theater restoration",
                ],
              },
              {
                phase: "Phase 3",
                period: "36+ Months",
                goal: "$800K – $1M",
                title: "Program Endowment & Launch",
                items: [
                  "First 3 years of operations",
                  "Visiting teacher programs",
                  "Youth leadership initiatives",
                  "Sustainable earned revenue",
                ],
              },
            ].map((phase, i) => (
              <div
                key={phase.phase}
                className={`border-t-2 ${
                  i === 0
                    ? "border-gold-500"
                    : i === 1
                    ? "border-gold-500/60"
                    : "border-gold-500/30"
                } pt-8 pb-8 ${i < 2 ? "md:pr-10 md:border-r md:border-r-white/10" : ""} ${
                  i > 0 ? "md:pl-10 mt-8 md:mt-0 border-t border-t-white/10 md:border-t-2" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
                      {phase.phase}
                    </p>
                    <p className="text-white/40 text-xs mt-1">{phase.period}</p>
                  </div>
                  <span className="text-gold-500/70 text-xs font-semibold border border-gold-500/30 px-2 py-1">
                    {phase.goal}
                  </span>
                </div>
                <h4 className="font-display text-lg text-white mb-4">{phase.title}</h4>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-white/60 text-sm">
                      <span className="text-gold-500 mt-0.5 shrink-0">–</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-white/10">
            <p className="text-white/50 text-sm">
              <strong className="text-gold-400">First Campaign Milestone:</strong> $700,000
              to stabilize the building, restore essential infrastructure, and activate
              core community spaces — allowing the center to begin serving the community
              while building momentum for full development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
