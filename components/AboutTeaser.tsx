export default function AboutTeaser() {
  return (
    <section id="about" className="bg-navy-950 py-16 md:py-20 border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          <div className="lg:flex-1">
            <p className="text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              A Campaign of the Diluv Khutugtu Foundation
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
              This campaign is led by the Diluv Khutugtu Foundation (DHF), guided by
              the vision of Telo Tulku Rinpoche, the current incarnation of Diluwa
              Khutugtu Jamsrangjab. DHF promotes knowledge grounded in Buddhist wisdom
              and advances secular ethics, education, and community development across
              Mongolia.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a href="/about" className="btn-outline text-center">
              About the Foundation
            </a>
            <a
              href="https://dhf.mn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white/60 text-xs font-semibold uppercase tracking-widest hover:text-white transition-colors"
            >
              Visit dhf.mn
              <span className="text-gold-500">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
