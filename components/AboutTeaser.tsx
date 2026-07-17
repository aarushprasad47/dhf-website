export default function AboutTeaser() {
  return (
    <section id="about" className="bg-navy-950 py-16 md:py-20 border-b border-gold-500/20">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="flex justify-center">
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
