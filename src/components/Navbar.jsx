import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <a href="#about" className="group flex items-center gap-3 select-none">
          <span className="relative grid place-items-center w-9 h-9 rounded-xl border border-cyan-700/60 bg-linear-to-br from-cyan-500/20 to-blue-500/20 overflow-hidden">
            <span className="absolute inset-0 bg-cyan-500/15 blur-md scale-90 transition-transform duration-300 group-hover:scale-125" />
            <span className="relative flex items-center gap-0.5 text-[10px] font-bold tracking-wide text-cyan-100">
              <span className="text-cyan-300">&lt;</span>
              <span>RK</span>
              <span className="text-cyan-300">/&gt;</span>
            </span>
          </span>

          <span className="flex flex-col leading-tight">
            <span className="text-white font-bold text-sm tracking-tight group-hover:text-violet-200 transition-colors">
              Raju Kumar
            </span>
            <span className="hidden sm:flex items-center gap-1 text-[10px] uppercase tracking-[0.14em] text-gray-500 group-hover:text-violet-300 transition-colors">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Software Engineer II
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-gray-400 hover:text-violet-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-4 py-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-violet-400 transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
