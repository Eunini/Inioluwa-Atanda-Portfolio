"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { MdCalendarToday } from "react-icons/md";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Fixed Nav */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-6 flex items-center justify-between">
          <Link href="/" className="text-sm font-medium tracking-widest uppercase">
            Inioluwa Atanda
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/leadership" className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors hidden sm:block">
              Leadership
            </Link>
            <Link href="/career" className="text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors hidden sm:block">
              Career
            </Link>
          </div>
        </div>
      </nav>

      {/* ======== HERO ======== */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 sm:px-10">
        {/* Background accent */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cyan-500/[0.02] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xs tracking-[0.3em] uppercase text-white/30 mb-6"
          >
            Youth Leader · SDG Advocate · AI Engineer
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,10vw,9rem)] font-black leading-[0.85] tracking-tight"
          >
            INIOLUWA
            <br />
            <span className="text-gradient">ATANDA</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 max-w-md"
          >
            <p className="text-white/35 text-sm sm:text-base leading-relaxed">
              Two portfolios. One for governance, advocacy & sustainable development. 
              One for AI, cloud infrastructure & technical innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              href="/leadership"
              className="group inline-flex items-center gap-3 px-7 py-3.5 bg-white text-black text-sm font-semibold tracking-wide rounded-full hover:bg-white/90 transition-all duration-300"
            >
              Leadership Portfolio
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/career"
              className="group inline-flex items-center gap-3 px-7 py-3.5 border border-white/15 text-white/80 text-sm font-semibold tracking-wide rounded-full hover:border-white/40 hover:text-white transition-all duration-300"
            >
              Career Portfolio
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="https://calendar.app.google/HSB6gbDQXCixzhYE7"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-3.5 border border-cyan-400/40 text-cyan-300/80 text-sm font-semibold tracking-wide rounded-full hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
            >
              <MdCalendarToday className="w-4 h-4" /> Book a Session
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-white/15">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* ======== TWO PORTFOLIOS SECTION ======== */}
      <section className="py-32 sm:py-40 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <motion.p variants={fadeUp} custom={0} className="section-label">Two-In-One Portfolio</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="text-4xl sm:text-6xl font-black tracking-tight">
              CHOOSE YOUR
              <br />
              <span className="text-white/20">PATH.</span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Leadership Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={fadeUp} custom={0}>
                <Link href="/leadership" className="group block">
                  <div className="card card-blue p-8 sm:p-10 h-full relative overflow-hidden">
                    {/* Large bg number */}
                    <span className="absolute -top-8 -right-4 text-[180px] font-black text-white/[0.015] select-none leading-none group-hover:text-blue-500/[0.04] transition-colors duration-700">
                      01
                    </span>

                    <div className="relative z-10">
                      <div className="badge badge-blue mb-6">Leadership & Impact</div>
                      
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                        Governance, Advocacy
                        <br />
                        <span className="text-white/30">& Sustainable Development</span>
                      </h3>
                      
                      <p className="text-white/25 text-sm leading-relaxed mb-8 max-w-md">
                        For policy reviewers, stakeholders, and those evaluating youth leadership, 
                        institutional governance, and SDG-aligned programs.
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {["Youth Governance", "SDG Initiatives", "Gender Equity", "Education Programs"].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-blue-400/50" />
                            <span className="text-xs text-white/30">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-blue-400/80 font-medium group-hover:gap-3 transition-all duration-300">
                        View Portfolio
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>

            {/* Career Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <motion.div variants={fadeUp} custom={1}>
                <Link href="/career" className="group block">
                  <div className="card card-cyan p-8 sm:p-10 h-full relative overflow-hidden">
                    <span className="absolute -top-8 -right-4 text-[180px] font-black text-white/[0.015] select-none leading-none group-hover:text-cyan-500/[0.04] transition-colors duration-700">
                      02
                    </span>

                    <div className="relative z-10">
                      <div className="badge badge-cyan mb-6">Career & Innovation</div>
                      
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight">
                        AI, Cloud, &
                        <br />
                        <span className="text-white/30">Systems Architecture</span>
                      </h3>
                      
                      <p className="text-white/25 text-sm leading-relaxed mb-8 max-w-md">
                        For tech companies, hiring managers, and those evaluating technical expertise 
                        in AI, cloud infrastructure, and software engineering.
                      </p>

                      <div className="grid grid-cols-2 gap-3 mb-8">
                        {["Artificial Intelligence", "Cloud & DevOps", "Full-Stack Dev", "Certifications"].map((item) => (
                          <div key={item} className="flex items-center gap-2">
                            <div className="w-1 h-1 rounded-full bg-cyan-400/50" />
                            <span className="text-xs text-white/30">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-sm text-cyan-400/80 font-medium group-hover:gap-3 transition-all duration-300">
                        View Portfolio
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ======== QUICK LINKS ======== */}
      <section className="py-20 px-6 sm:px-10 border-t border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeUp} custom={0} className="section-label mb-8">Explore More</motion.p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { name: "SDG Work", href: "/sdg-work", desc: "Sustainable Development" },
              { name: "Initiatives", href: "/initiatives", desc: "Programs Founded" },
              { name: "Recognition", href: "/recognition", desc: "Awards & Appointments" },
              { name: "Contact", href: "mailto:atandainioluwa371@gmail.com", desc: "Get In Touch" },
            ].map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <Link
                  href={link.href}
                  className="group block p-5 sm:p-6 rounded-xl border border-white/[0.05] hover:border-white/[0.12] transition-all duration-300"
                >
                  <span className="block text-sm font-semibold text-white/70 group-hover:text-white transition-colors mb-1">{link.name}</span>
                  <span className="text-[11px] text-white/20">{link.desc}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== FOOTER ======== */}
      <footer className="border-t border-white/[0.04] py-8 px-6 sm:px-10">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/15">© {new Date().getFullYear()} Inioluwa Atanda</p>
          <div className="flex gap-6">
            <a href="https://github.com/Eunini" target="_blank" rel="noopener noreferrer" className="text-xs text-white/20 hover:text-white/50 transition-colors">GitHub</a>
            <a href="https://x.com/Dev_Qing" target="_blank" rel="noopener noreferrer" className="text-xs text-white/20 hover:text-white/50 transition-colors">X</a>
            <a href="mailto:atandainioluwa371@gmail.com" className="text-xs text-white/20 hover:text-white/50 transition-colors">Email</a>
            <a href="https://wa.me/message/TFFG2ETW5L3CH1" target="_blank" rel="noopener noreferrer" className="text-xs text-white/20 hover:text-white/50 transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
