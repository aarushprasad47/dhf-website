export default function Legacy() {
  return (
    <section id="legacy" className="bg-navy-950 py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding">
        <p className="section-tag">Our Namesake & Leader</p>
        <div className="w-16 h-0.5 bg-gold-500 mb-8" />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Diluv Khutugtu */}
          <div>
            <div className="border-t-2 border-gold-500 pt-8 mb-8">
              <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
                1884 – 1965
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white leading-snug mb-6">
              Diluwa Khutugtu
              <br />
              <span className="text-gold-400">Jamsrangjab</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-5">
              A revered Mongolian Buddhist master, scholar, educator, and statesman whose
              life bridged Mongolia, Tibet, India, and the West. Throughout periods of
              political upheaval, religious persecution, and exile, he remained dedicated
              to preserving and transmitting Buddhist teachings, cultural knowledge, and
              ethical values.
            </p>
            <p className="text-white/70 leading-relaxed mb-5">
              As communist repression intensified in Mongolia, he chose exile rather than
              compromise his principles — safeguarding a spiritual tradition under threat
              while continuing to support Buddhist communities internationally.
            </p>
            <p className="text-white/70 leading-relaxed">
              A visionary cultural ambassador, he helped introduce Mongolian studies to
              Western academic institutions, expanding global understanding of Mongolia's
              history, culture, and spiritual heritage. His legacy demonstrates that
              wisdom and culture endure when actively practiced, taught, and passed from
              generation to generation.
            </p>
          </div>

          {/* Telo Tulku Rinpoche */}
          <div>
            <div className="border-t-2 border-gold-500/40 pt-8 mb-8">
              <span className="text-gold-400 text-xs font-semibold uppercase tracking-widest">
                Current Incarnation · Foundation Founder
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-white leading-snug mb-6">
              Telo Tulku
              <br />
              <span className="text-gold-400">Rinpoche</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-5">
              Since 1992, Telo Rinpoche has served as the spiritual leader of the Buddhist
              community in Kalmykia, guiding one of the most significant Buddhist revivals
              in the post-Soviet world. Following decades of religious suppression, he
              helped rebuild Buddhist institutions, restore monastic education, and
              reconnect younger generations with their spiritual and cultural heritage.
            </p>
            <p className="text-white/70 leading-relaxed mb-5">
              In recognition of his leadership and service, he was appointed Honorary
              Representative of His Holiness the Dalai Lama in Russia in 2014, later
              serving in a broader regional capacity encompassing Mongolia and the former
              Soviet Union.
            </p>
            <p className="text-white/70 leading-relaxed">
              His work has demonstrated that communities flourish when supported by strong
              institutions, educational opportunities, and shared spaces where culture and
              knowledge can be transmitted across generations. The Cultural Center in
              Uliastai emerges from this same enduring vision.
            </p>

            {/* Quote */}
            <div className="mt-8 border-l-2 border-gold-500 pl-6">
              <p className="text-white/80 italic font-display text-lg leading-relaxed">
                "The restoration of a cultural center in Uliastai is not simply a building
                project. It is an investment in the transmission of knowledge, identity,
                and community life."
              </p>
              <p className="text-gold-400 text-xs uppercase tracking-wide mt-3 font-semibold">
                — Dr. Christopher Atwood, Presidential Distinguished Professor,
                University of Pennsylvania
              </p>
            </div>
          </div>
        </div>

        {/* Additional quotes row */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div className="bg-navy-900 border border-gold-500/20 p-8">
            <p className="text-white/80 italic font-display text-lg leading-relaxed mb-6">
              "Restoring this historic building gives new life to a place that already
              belongs to the memory of the community. It allows the past to serve the
              future."
            </p>
            <p className="text-gold-400 text-xs uppercase tracking-wide font-semibold">
              — Governor Gombosuren G. Onorbayar
              <span className="text-white/40 normal-case not-italic font-normal ml-1">
                · Uliastai, Zavkhan
              </span>
            </p>
          </div>
          <div className="bg-navy-900 border border-gold-500/20 p-8">
            <p className="text-white/80 italic font-display text-lg leading-relaxed mb-6">
              "Sometimes it feels like opportunities are far away from us. This center
              would bring opportunity closer to home."
            </p>
            <p className="text-gold-400 text-xs uppercase tracking-wide font-semibold">
              — Ganboldiin Damodhari
              <span className="text-white/40 normal-case not-italic font-normal ml-1">
                · Student, Mongolian National University of Arts and Culture
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
