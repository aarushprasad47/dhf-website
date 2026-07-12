import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About the Foundation | Diluv Khutugtu Foundation",
  description:
    "Learn about the Diluv Khutugtu Foundation (DHF) — its mission, programs, partners, and the legacy of Diluwa Khutugtu Jamsrangjab and Telo Tulku Rinpoche.",
};

export default function AboutPage() {
  return (
    <main>
      <Navigation />

      {/* Page hero */}
      <section className="relative bg-navy-950 pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="max-w-7xl mx-auto section-padding">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-widest mb-8 hover:text-gold-300 transition-colors"
          >
            ← Back to the Campaign
          </a>
          <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.25em] mb-6">
            About the Foundation
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-tight max-w-3xl mb-8">
            Rooted in Compassion,
            <br />
            Committed to Community
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
            The Diluv Khutugtu Foundation (DHF) was established to promote knowledge
            grounded in Buddhist wisdom, advancing secular ethics, education, and the
            cultivation of human values. The Uliastai Cultural Creative and Community
            Exchange Center is DHF's flagship campaign, but its work spans public
            health, education, and cultural preservation programs across Mongolia.
          </p>
          <a
            href="https://dhf.mn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-semibold text-sm border-b-2 border-gold-500 pb-1 hover:text-gold-300 transition-colors"
          >
            Visit the Foundation's main site — dhf.mn
            <span className="text-gold-500">→</span>
          </a>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#faf7f2] py-24 md:py-32">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <h3 className="font-display text-2xl text-navy-900 mb-4">Our Mission</h3>
              <p className="section-body mb-6">
                DHF promotes knowledge grounded in Buddhist wisdom and informed by
                research in contemplative sciences — translating the timeless value
                of compassion into modern frameworks that empower citizens to live
                with clarity and purpose.
              </p>
              <p className="section-body">
                Founded in 2006, the Foundation has grown to encompass programs in
                secular ethics, public health, education, cultural preservation, and
                community development across Mongolia and beyond.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl text-navy-900 mb-4">Our Vision</h3>
              <p className="section-body mb-6">
                We envision a Mongolia where communities flourish through strong
                institutions, shared spaces, and living cultural traditions — where
                the wisdom of the past is an active resource for the future, not
                merely a memory.
              </p>
              <p className="section-body">
                The Cultural Creative and Community Exchange Center in Uliastai is
                the embodiment of this vision: a place where culture, education, and
                community life come together to serve present and future generations.
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

      {/* Namesake & Leader */}
      <section className="bg-navy-950 py-24 md:py-32 overflow-hidden">
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
                A revered Mongolian Buddhist master, scholar, educator, and statesman
                whose life bridged Mongolia, Tibet, India, and the West. Throughout
                periods of political upheaval, religious persecution, and exile, he
                remained dedicated to preserving and transmitting Buddhist teachings,
                cultural knowledge, and ethical values.
              </p>
              <p className="text-white/70 leading-relaxed mb-5">
                As communist repression intensified in Mongolia, he chose exile rather
                than compromise his principles — safeguarding a spiritual tradition
                under threat while continuing to support Buddhist communities
                internationally.
              </p>
              <p className="text-white/70 leading-relaxed">
                A visionary cultural ambassador, he helped introduce Mongolian studies
                to Western academic institutions, expanding global understanding of
                Mongolia's history, culture, and spiritual heritage. His legacy
                demonstrates that wisdom and culture endure when actively practiced,
                taught, and passed from generation to generation.
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
                Since 1992, Telo Rinpoche has served as the spiritual leader of the
                Buddhist community in Kalmykia, guiding one of the most significant
                Buddhist revivals in the post-Soviet world. Following decades of
                religious suppression, he helped rebuild Buddhist institutions,
                restore monastic education, and reconnect younger generations with
                their spiritual and cultural heritage.
              </p>
              <p className="text-white/70 leading-relaxed mb-5">
                In recognition of his leadership and service, he was appointed
                Honorary Representative of His Holiness the Dalai Lama in Russia in
                2014, later serving in a broader regional capacity encompassing
                Mongolia and other countries of the former Soviet Union. After more
                than a decade of service in this role, he stepped down in May 2026.
              </p>
              <p className="text-white/70 leading-relaxed">
                His work has demonstrated that communities flourish when supported by
                strong institutions, educational opportunities, and shared spaces
                where culture and knowledge can be transmitted across generations.
                The Cultural Center in Uliastai emerges from this same enduring
                vision — inspired by successful models of cultural renewal such as
                the Library of Tibetan Works and Archives and the Norbulingka
                Institute in Dharamsala.
              </p>

              {/* Quote */}
              <div className="mt-8 border-l-2 border-gold-500 pl-6">
                <p className="text-white/80 italic font-display text-lg leading-relaxed">
                  "A culture survives not only in museums or memories, but in the
                  daily life of its people. When communities are given places to
                  gather, learn, create, and care for one another, cultural heritage
                  becomes a living force for the future."
                </p>
                <p className="text-gold-400 text-xs uppercase tracking-wide mt-3 font-semibold">
                  — Telo Tulku Rinpoche
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA back to campaign */}
      <section className="bg-[#faf7f2] py-20">
        <div className="max-w-7xl mx-auto section-padding text-center">
          <h3 className="font-display text-3xl md:text-4xl text-navy-900 mb-6">
            See What DHF Is Building in Uliastai
          </h3>
          <p className="section-body max-w-2xl mx-auto mb-10">
            The Cultural Creative and Community Exchange Center is DHF's current
            flagship initiative — a $2.6M restoration campaign to transform a
            historic theater into a lasting resource for education, culture, and
            community life.
          </p>
          <a href="/#need" className="btn-primary">
            Explore the Campaign
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
