"use client";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const sdgs = [
  {
    number: "04",
    title: "Quality Education",
    color: "blue",
    description: "Ensuring inclusive and equitable quality education and promoting lifelong learning opportunities.",
    contributions: [
      "Founded Skillsphere Program — practical IT skills for CS students, enhancing employability across disciplines.",
      "Created QUACITO Initiative — multi-level challenge framework developing computational thinking and innovation capacity.",
      "Organized technical workshops through Interswitch Developer Community reaching 200+ members.",
    ],
  },
  {
    number: "05",
    title: "Gender Equality",
    color: "rose",
    description: "Achieving gender equality and empowering all women and girls through capacity building.",
    contributions: [
      "Founded Techqings Foundation — gender-equity capacity building for women in AI, cybersecurity, and DevOps.",
      "Developed mentorship programs increasing women's confidence and participation in tech pipelines.",
      "Created community networks for women technologists, providing career advancement support.",
    ],
  },
  {
    number: "08",
    title: "Decent Work & Economic Growth",
    color: "emerald",
    description: "Promoting sustained, inclusive economic growth, full and productive employment.",
    contributions: [
      "Skillsphere Program enhanced digital literacy and employability for non-technical students.",
      "Ambassador roles at Interswitch and Cowrywise promoting fintech awareness and financial inclusion.",
      "Developer community initiatives connecting students with industry opportunities and partnerships.",
    ],
  },
  {
    number: "09",
    title: "Industry, Innovation & Infrastructure",
    color: "cyan",
    description: "Building resilient infrastructure, promoting inclusive industrialization and fostering innovation.",
    contributions: [
      "QUACITO Initiative fostering innovation through progressive computing challenges.",
      "Technical community building bridging industry and academia through developer ecosystem.",
      "AI and cloud infrastructure projects demonstrating scalable technology solutions.",
    ],
  },
];

const globalPrograms = [
  {
    name: "Harvard Aspire Leadership Program",
    org: "Harvard University",
    desc: "Leadership development and systems thinking for global sustainable development impact.",
    color: "blue",
  },
  {
    name: "AIIDEV Africa Program",
    org: "AIIDEV Africa",
    desc: "AI and innovation development program focused on building African technology capacity.",
    color: "purple",
  },
];

export default function SDGWork() {
  return (
    <PageLayout track="leadership">
      {/* Header */}
      <motion.section initial="hidden" animate="visible" className="mb-28">
        <motion.p variants={fadeUp} custom={0} className="text-xs tracking-[0.3em] uppercase text-blue-400/50 mb-4">SDG Work</motion.p>
        <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.9] mb-6">
          SUSTAINABLE
          <br />
          <span className="text-white/15">DEVELOPMENT</span>
        </motion.h1>
        <motion.div variants={fadeUp} custom={2} className="w-12 h-px bg-blue-500/40 mb-6" />
        <motion.p variants={fadeUp} custom={3} className="text-white/30 text-base sm:text-lg max-w-xl leading-relaxed">
          Contributing to the United Nations Sustainable Development Goals through 
          education, gender equity, economic empowerment, and innovation.
        </motion.p>
      </motion.section>

      {/* SDGs */}
      <div className="space-y-20 mb-28">
        {sdgs.map((sdg, idx) => (
          <motion.section 
            key={sdg.number}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex items-start gap-6 sm:gap-10">
              {/* SDG Number */}
              <motion.div variants={fadeUp} custom={0} className="flex-shrink-0">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-white/[0.06] flex items-center justify-center bg-white/[0.02]`}>
                  <span className={`text-2xl sm:text-3xl font-black text-gradient-${sdg.color === "rose" ? "blue" : sdg.color}`}>{sdg.number}</span>
                </div>
              </motion.div>

              <div className="flex-1 min-w-0">
                <motion.div variants={fadeUp} custom={0} className="mb-2">
                  <span className={`badge badge-${sdg.color}`}>SDG {sdg.number}</span>
                </motion.div>
                <motion.h3 variants={fadeUp} custom={1} className="text-xl sm:text-2xl font-bold mb-2">{sdg.title}</motion.h3>
                <motion.p variants={fadeUp} custom={2} className="text-white/20 text-sm mb-6">{sdg.description}</motion.p>
                
                <motion.div variants={fadeUp} custom={3} className="card p-6">
                  <p className="text-[10px] tracking-[0.15em] uppercase text-white/15 mb-4">Contributions</p>
                  <div className="space-y-3">
                    {sdg.contributions.map((item, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <div className={`w-1 h-1 rounded-full bg-${sdg.color}-400/40 mt-2 flex-shrink-0`} />
                        <p className="text-sm text-white/25 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>

      {/* Global Programs */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-20"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Global Programs</motion.p>
        <div className="space-y-3">
          {globalPrograms.map((program, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1} className="card p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-base font-bold">{program.name}</h3>
                <span className={`badge badge-${program.color}`}>{program.org}</span>
              </div>
              <p className="text-white/20 text-sm">{program.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Nav */}
      <section className="flex flex-wrap gap-3 justify-center">
        <Link href="/leadership" className="text-xs px-5 py-2.5 rounded-full border border-white/[0.06] text-white/30 hover:border-white/15 hover:text-white/60 transition-all">
          ← Leadership
        </Link>
        <Link href="/initiatives" className="text-xs px-5 py-2.5 rounded-full border border-white/[0.06] text-white/30 hover:border-white/15 hover:text-white/60 transition-all">
          Initiatives →
        </Link>
      </section>
    </PageLayout>
  );
}
