const links = [
  { href: "#need", label: "The Need" },
  { href: "#connects", label: "A Place That Connects" },
  { href: "#concept", label: "The Design" },
  { href: "#programs", label: "Programs" },
  { href: "#budget", label: "Budget & Timeline" },
  { href: "#impact", label: "Impact" },
  { href: "#give", label: "How to Give" },
];

export default function QuickNav() {
  return (
    <div className="bg-[#faf7f2] border-b border-navy-100">
      <div className="max-w-7xl mx-auto section-padding py-5">
        <div className="flex flex-wrap gap-2.5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-navy-700 text-xs font-semibold uppercase tracking-wide px-4 py-2 border border-navy-200 rounded-full hover:border-gold-500 hover:text-gold-600 hover:bg-white transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
