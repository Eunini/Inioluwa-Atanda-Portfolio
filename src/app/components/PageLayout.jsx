"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLayout({ children, track = "leadership" }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLeadership = track === "leadership";
  const accentColor = isLeadership ? "blue" : "cyan";
  
  const leadershipLinks = [
    { name: "Leadership", href: "/leadership" },
    { name: "SDG Work", href: "/sdg-work" },
    { name: "Initiatives", href: "/initiatives" },
    { name: "Recognition", href: "/recognition" },
  ];
  
  const careerLinks = [
    { name: "Tech Career", href: "/career" },
  ];
  
  const links = isLeadership ? leadershipLinks : careerLinks;
  const switchLink = isLeadership 
    ? { name: "Career Portfolio →", href: "/career" } 
    : { name: "Leadership Portfolio →", href: "/leadership" };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.04]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors">
            IA
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-1">
            <Link href="/" className="text-xs text-white/30 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/[0.04] transition-all">
              Home
            </Link>
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-white/30 hover:text-white px-3 py-1.5 rounded-md hover:bg-white/[0.04] transition-all">
                {link.name}
              </Link>
            ))}
            <div className="w-px h-4 bg-white/10 mx-2" />
            <Link
              href={switchLink.href}
              className={`text-xs px-4 py-1.5 rounded-full border ${
                isLeadership 
                  ? "border-cyan-500/20 text-cyan-400/70 hover:bg-cyan-500/10" 
                  : "border-blue-500/20 text-blue-400/70 hover:bg-blue-500/10"
              } transition-all`}
            >
              {switchLink.name}
            </Link>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white/50 hover:text-white p-1">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen 
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              }
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/[0.04] overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                <Link href="/" onClick={() => setMenuOpen(false)} className="block text-sm text-white/40 hover:text-white py-2 transition-colors">Home</Link>
                {links.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block text-sm text-white/40 hover:text-white py-2 transition-colors">
                    {link.name}
                  </Link>
                ))}
                <div className="pt-3 mt-3 border-t border-white/[0.04]">
                  <Link href={switchLink.href} onClick={() => setMenuOpen(false)} className={`block text-sm py-2 ${isLeadership ? "text-cyan-400/70" : "text-blue-400/70"}`}>
                    {switchLink.name}
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] py-8 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/15">© {new Date().getFullYear()} Inioluwa Atanda</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Eunini" target="_blank" rel="noopener noreferrer" className="text-xs text-white/20 hover:text-white/50 transition-colors">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-xs text-white/20 hover:text-white/50 transition-colors">LinkedIn</a>
            <Link href={switchLink.href} className={`text-xs ${isLeadership ? "text-cyan-400/40 hover:text-cyan-400/70" : "text-blue-400/40 hover:text-blue-400/70"} transition-colors`}>
              {switchLink.name}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
