export default function About() {
  return (
    <section id="about" className="bg-[#faf7f2] py-24 md:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="section-tag">The Foundation</p>
          <div className="divider-gold" />
          <h2 className="section-title">
            Rooted in Compassion,
            <br />
            Committed to Community
          </h2>
          <p className="section-body text-navy-700">
            The Diluv Khutugtu Foundation (DHF) was established to promote knowledge
            grounded in Buddhist wisdom, advancing secular ethics, education, and the
            cultivation of human values. At its heart is a vision of compassionate
            society — one where every person can navigate life with a clear mind and a
            warm heart.
          </p>
        </div>

        {/* Two-column content */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h3 className="font-display text-2xl text-navy-900 mb-4">Our Mission</h3>
            <p className="section-body mb-6">
              DHF promotes knowledge grounded in Buddhist wisdom and informed by research
              in contemplative sciences — translating the timeless value of compassion into
              modern frameworks that empower citizens to live with clarity and purpose.
            </p>
            <p className="section-body">
              Founded in 2006, the Foundation has grown to encompass programs in secular
              ethics, public health, education, cultural preservation, and community
              development across Mongolia and beyond.
            </p>
          </div>
          <div>
            <h3 className="font-display text-2xl text-navy-900 mb-4">Our Vision</h3>
            <p className="section-body mb-6">
              We envision a Mongolia where communities flourish through strong institutions,
              shared spaces, and living cultural traditions — where the wisdom of the past
              is an active resource for the future, not merely a memory.
            </p>
            <p className="section-body">
              The Cultural Creative and Community Exchange Center in Uliastai is the
              embodiment of this vision: a place where culture, education, and community
              life come together to serve present and future generations.
            </p>
          </div>
        </div>

        {/* Program pillars */}
        <div className="bg-navy-950 p-10 md:p-16">
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-8">
            Foundation Programs
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "CBCT",
                full: "Compassion Cultivation Training",
                desc: "12-month contemplative curriculum integrating meditation, mindfulness, and secular ethics education.",
              },
              {
                name: "Zero TB",
                full: "Tuberculosis Prevention",
                desc: "Community-focused public health program targeting children and families across rural Mongolia.",
              },
              {
                name: "Ocean of Words",
                full: "Publication & Knowledge",
                desc: "Bridging ancient Buddhist wisdom with modern science through publications and digital resources.",
              },
              {
                name: "Inner World",
                full: "Self-Exploration Journey",
                desc: "Structured programs for personal growth, resilience, and purpose-driven life navigation.",
              },
            ].map((prog) => (
              <div key={prog.name} className="border-t border-gold-500/40 pt-6">
                <p className="text-gold-400 font-display text-xl font-semibold mb-1">
                  {prog.name}
                </p>
                <p className="text-white/50 text-xs uppercase tracking-wide mb-3">
                  {prog.full}
                </p>
                <p className="text-white/70 text-sm leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners */}
        <div className="mt-16 flex flex-col md:flex-row items-center gap-8">
          <p className="text-navy-400 text-xs uppercase tracking-widest shrink-0 font-semibold">
            Academic Partners
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            {["Johns Hopkins University", "Emory University"].map((partner) => (
              <span
                key={partner}
                className="text-navy-600 text-sm font-semibold border-l-2 border-gold-500/50 pl-4"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
