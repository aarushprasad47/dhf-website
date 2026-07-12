"use client";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#faf7f2] py-24 md:py-32">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <p className="section-tag">Contact</p>
            <div className="divider-gold" />
            <h2 className="section-title">
              Let's Build This
              <br />
              Together
            </h2>
            <p className="section-body mb-10">
              Whether you're interested in making a gift, exploring a partnership, or
              simply learning more about the project, we'd love to hear from you. Our
              team is available to discuss how you can be part of this historic initiative.
            </p>

            {/* Contact details */}
            <div className="space-y-6 mb-12">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 border border-gold-500/40 flex items-center justify-center shrink-0">
                  <span className="text-gold-500 text-xs">✆</span>
                </div>
                <div>
                  <p className="text-navy-900 font-semibold text-sm mb-0.5">Phone</p>
                  <p className="text-navy-500 text-sm">+976 7507 7222 (Office)</p>
                  <p className="text-navy-500 text-sm">+976 9900 8432 (Mobile)</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 border border-gold-500/40 flex items-center justify-center shrink-0">
                  <span className="text-gold-500 text-xs">✉</span>
                </div>
                <div>
                  <p className="text-navy-900 font-semibold text-sm mb-0.5">Email</p>
                  <a
                    href="mailto:info@dhf.mn"
                    className="text-navy-500 text-sm hover:text-gold-600 transition-colors block"
                  >
                    info@dhf.mn
                  </a>
                  <a
                    href="mailto:finance@dhf.mn"
                    className="text-navy-500 text-sm hover:text-gold-600 transition-colors block"
                  >
                    finance@dhf.mn
                  </a>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 border border-gold-500/40 flex items-center justify-center shrink-0">
                  <span className="text-gold-500 text-xs">◎</span>
                </div>
                <div>
                  <p className="text-navy-900 font-semibold text-sm mb-0.5">Project Location</p>
                  <p className="text-navy-500 text-sm">Uliastai, Zavkhan Province</p>
                  <p className="text-navy-500 text-sm">Mongolia</p>
                </div>
              </div>
            </div>

            <a
              href="https://dhf.mn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-navy-900 font-semibold text-sm border-b-2 border-gold-500 pb-1 hover:text-gold-700 transition-colors"
            >
              Visit dhf.mn
              <span className="text-gold-500">→</span>
            </a>
          </div>

          {/* Right: contact form */}
          <div className="bg-white border border-navy-100 p-10 shadow-sm">
            <h3 className="font-display text-2xl text-navy-900 mb-8">
              Send Us a Message
            </h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-navy-700 text-xs font-semibold uppercase tracking-wide mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-navy-200 px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-500 transition-colors bg-[#faf7f2]"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-navy-700 text-xs font-semibold uppercase tracking-wide mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-navy-200 px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-500 transition-colors bg-[#faf7f2]"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-navy-700 text-xs font-semibold uppercase tracking-wide mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full border border-navy-200 px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-500 transition-colors bg-[#faf7f2]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-navy-700 text-xs font-semibold uppercase tracking-wide mb-2">
                  I am interested in...
                </label>
                <select className="w-full border border-navy-200 px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-500 transition-colors bg-[#faf7f2]">
                  <option value="">Select an option</option>
                  <option>Making a donation</option>
                  <option>Naming / major gift opportunity</option>
                  <option>Corporate sponsorship</option>
                  <option>Foundation / institutional grant</option>
                  <option>General information</option>
                  <option>Volunteering or partnership</option>
                </select>
              </div>
              <div>
                <label className="block text-navy-700 text-xs font-semibold uppercase tracking-wide mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-navy-200 px-4 py-3 text-sm text-navy-900 focus:outline-none focus:border-gold-500 transition-colors bg-[#faf7f2] resize-none"
                  placeholder="Tell us how you'd like to get involved..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold-500 text-navy-950 font-bold text-xs uppercase tracking-widest py-4 hover:bg-gold-400 transition-colors duration-200"
              >
                Send Message
              </button>
              <p className="text-navy-400 text-xs text-center">
                We'll respond within 2–3 business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
