export default function Project() {
  return (
    <section id="need" className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="section-tag">The Need</p>
          <div className="divider-gold" />
          <h2 className="section-title">
            A Generation and a Way of Life
            <br />
            at a Crossroads
          </h2>
          <p className="section-body">
            Zavkhan Province is rich in cultural heritage and community tradition, yet
            many residents face limited access to educational, economic, and cultural
            opportunities. Young people increasingly leave rural communities in search
            of opportunity, while the spaces that once supported intergenerational
            learning and cultural exchange continue to diminish.
          </p>
        </div>

        {/* Regional landscape */}
        <div className="mb-16 relative">
          <img
            src="/zavkhan-landscape.jpg"
            alt="Landscape of Zavkhan Province, Mongolia, with a mountainside monument and yak herd on the grassland"
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
          <p className="absolute bottom-4 right-4 text-white/80 text-xs uppercase tracking-widest bg-navy-950/60 px-3 py-1">
            Zavkhan Province, Mongolia
          </p>
        </div>

        {/* Crisis + strengths */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <div className="lg:col-span-2 bg-[#faf7f2] p-10">
            <h3 className="font-display text-2xl text-navy-900 mb-5">
              Growing Pressure, Enduring Strength
            </h3>
            <p className="section-body mb-4">
              Young people increasingly seek education and meaningful employment, while
              nomadic and herding families continue to sustain livelihoods rooted in
              seasonal movement and intergenerational learning. Youth outmigration,
              limited rural infrastructure, and the gradual weakening of spaces for
              shared cultural knowledge put both ways of life under growing pressure.
            </p>
            <p className="section-body">
              Yet the region's greatest strengths remain intact: eager young people,
              nomadic communities preserving invaluable cultural and ecological
              knowledge, and elders carrying traditions forward.{" "}
              <strong>
                The challenge is not the absence of culture or community, but the need
                for places where knowledge, skills, and traditions can be actively
                practiced, shared, and passed forward.
              </strong>
            </p>
          </div>

          {/* Existing building facts */}
          <div className="bg-navy-950 p-10 flex flex-col gap-8">
            <div>
              <p className="text-gold-400 font-display text-3xl font-bold">1,200–1,800 m²</p>
              <p className="text-white/50 text-xs uppercase tracking-wide mt-1">
                Former Soviet-Era Theater (13,000–19,000 sq ft)
              </p>
            </div>
            <div className="border-t border-gold-500/20 pt-6">
              <p className="text-white/70 text-sm leading-relaxed">
                Structural shell largely intact. Major renovation is required for
                heating, electrical, plumbing, accessibility, and interior finishes.
              </p>
            </div>
            <div className="border-t border-gold-500/20 pt-6">
              <p className="text-white/70 text-sm leading-relaxed">
                Located in rural Zavkhan Province, where labor costs are lower but
                transportation costs are higher.
              </p>
            </div>
          </div>
        </div>

        {/* Vision for the center */}
        <div className="mb-20 bg-navy-950 p-10 md:p-16">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            Vision for the Uliastai Center
          </p>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mb-10">
            To address this need, Telo Tulku Rinpoche has envisioned the restoration
            of the former Soviet-era theater building as a Cultural Creative and
            Community Exchange Center. This place-rooted initiative connects:
          </p>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { pair: ["Nomadic", "Settled Ways of Life"] },
              { pair: ["Traditional Knowledge", "Modern Skills"] },
              { pair: ["Cultural Continuity", "Economic Opportunity"] },
            ].map((c) => (
              <div key={c.pair.join()} className="border-t border-gold-500/40 pt-6">
                <p className="text-white font-display text-lg">{c.pair[0]}</p>
                <p className="text-gold-500 text-xs my-1">&amp;</p>
                <p className="text-white font-display text-lg">{c.pair[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
