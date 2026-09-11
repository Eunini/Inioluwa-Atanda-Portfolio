"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/#projects" },
  { name: "Certifications", href: "/#certifications" },
  { name: "Contact", href: "/#contact" },
];

export default function PageLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-clip">
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.08]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase text-white hover:text-neutral-300 transition-colors" aria-label="Inioluwa Atanda — Home">
            <Image src="/logo.svg" alt="" width={36} height={36} className="shrink-0" priority />
            <span>Inioluwa Atanda</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-white hover:text-neutral-300 px-3 py-1.5 rounded-full border border-transparent hover:border-white/[0.08] hover:bg-white/[0.04] transition-all">
                {link.name}
              </Link>
            ))}
            <div className="w-px h-4 bg-white/10 mx-2" />
            <a
              href="https://calendar.app.google/HSB6gbDQXCixzhYE7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-4 py-1.5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all"
            >
              Book a Session
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden text-white hover:text-neutral-300 p-1"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-xl border-t border-white/[0.08] overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm text-white hover:text-neutral-300 py-2 px-2 rounded-lg hover:bg-white/[0.03] transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-3 mt-3 border-t border-white/[0.04]">
                  <a
                    href="https://calendar.app.google/HSB6gbDQXCixzhYE7"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="block text-sm py-2 px-2 rounded-lg text-white hover:text-neutral-300 hover:bg-white/[0.03]"
                  >
                    Book a Session
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10 pt-24 pb-24">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10">{children}</div>
      </main>

      <footer className="relative z-10 border-t border-white/[0.08] py-8 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="Inioluwa Atanda monogram" width={32} height={32} />
            <p className="text-xs text-white tracking-wide">Copyright {new Date().getFullYear()} Inioluwa Atanda</p>
          </div>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a href="https://github.com/Eunini" target="_blank" rel="noopener noreferrer" className="text-xs text-white hover:text-neutral-300 transition-colors">GitHub</a>
            <a href="https://x.com/Dev_Qing" target="_blank" rel="noopener noreferrer" className="text-xs text-white hover:text-neutral-300 transition-colors">X</a>
            <a href="https://dev.to/eunini" target="_blank" rel="noopener noreferrer" className="text-xs text-white hover:text-neutral-300 transition-colors">Dev.to</a>
            <a href="mailto:atandainioluwa371@gmail.com" className="text-xs text-white hover:text-neutral-300 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
