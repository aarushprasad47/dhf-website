export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-950">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, #c9972a 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #172e65 0%, transparent 50%),
            radial-gradient(circle at 60% 80%, #0f1f43 0%, transparent 50%)
          `,
        }}
      />

      {/* Geometric ornament – top right */}
      <div className="absolute top-0 right-0 w-72 h-72 opacity-5">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="180" height="180" stroke="#c9972a" strokeWidth="1" />
          <rect x="30" y="30" width="140" height="140" stroke="#c9972a" strokeWidth="0.5" />
          <line x1="10" y1="10" x2="100" y2="100" stroke="#c9972a" strokeWidth="0.5" />
          <line x1="190" y1="10" x2="100" y2="100" stroke="#c9972a" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="40" stroke="#c9972a" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="20" stroke="#c9972a" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Bottom gold bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-32 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — text content */}
        <div>
          <a
            href="https://dhf.mn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-[0.2em] mb-6 border border-white/20 rounded-full px-4 py-1.5 hover:border-gold-400 hover:text-gold-300 transition-colors"
          >
            A Campaign of the Diluv Khutugtu Foundation
            <span className="text-gold-500">↗</span>
          </a>

          <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.25em] mb-6">
            Uliastai · Zavkhan Province · Mongolia
          </p>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-8">
            Legacy Without
            <br />
            <em className="text-gold-400 not-italic">Borders</em>
          </h1>

          <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            The Diluv Khutugtu Foundation is restoring a historic Soviet-era theater in
            Uliastai into a vibrant Cultural Creative and Community Exchange Center —
            preserving Mongolian heritage, empowering youth, and revitalizing community
            life for generations to come.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-x-10 gap-y-6 mb-12">
            {[
              { value: "$2.6M", label: "Total Project Investment" },
              { value: "$700K", label: "First Milestone Goal" },
              { value: "1,800 m²", label: "Theater Building" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl text-gold-400 font-bold">{stat.value}</p>
                <p className="text-white/50 text-xs uppercase tracking-wider mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.paypal.com/US/fundraiser/charity/4897134"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Donate Now
            </a>
            <a href="#need" className="btn-outline">
              Learn More
            </a>
          </div>
        </div>

        {/* Right — quote card */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-3 border border-gold-500/20" />
            <div className="bg-navy-900/60 backdrop-blur-sm border border-gold-500/30 p-10">
              <div className="text-gold-500 text-6xl font-display leading-none mb-4 opacity-60">"</div>
              <blockquote className="font-display text-xl md:text-2xl text-white/90 leading-relaxed italic mb-8">
                A culture survives not only in museums or memories, but in the daily life
                of its people. When communities are given places to gather, learn, create,
                and care for one another, cultural heritage becomes a living force for the
                future.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-0.5 bg-gold-500" />
                <div>
                  <p className="text-gold-400 font-semibold text-sm">Telo Tulku Rinpoche</p>
                  <p className="text-white/50 text-xs mt-0.5">Founder, Diluv Khutugtu Foundation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
