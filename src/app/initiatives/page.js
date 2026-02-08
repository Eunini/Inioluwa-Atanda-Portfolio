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

const initiatives = [
  {
    name: "Skillsphere Program",
    tagline: "Practical IT skills for CS students",
    color: "blue",
    metrics: [
      { value: "Completed", label: "Program Status" },
      { value: "Modular", label: "Curriculum" },
      { value: "Mentorship", label: "Model" },
    ],
    problem: "CS students lack practical IT skills despite increasing demand for digital literacy across every field.",
    solution: "Modular curriculum with hands-on workshops, peer-to-peer mentoring, and industry-relevant projects tailored for non-technical backgrounds.",
    impact: "Enhanced employability across disciplines. Students gain real-world IT skills — from productivity tools to basic programming — creating a more digitally capable workforce.",
  },
  {
    name: "QUACITO Initiative",
    tagline: "Applied computing, innovation & problem-solving",
    color: "purple",
    metrics: [
      { value: "3-Level", label: "Challenge Framework" },
      { value: "Faculty", label: "Oversight" },
      { value: "Industry", label: "Collaboration" },
    ],
    problem: "Limited innovation capacity among students. Gap between theoretical computing education and practical problem-solving.",
    solution: "Progressive challenge framework — Beginner → Intermediate → Advanced — with faculty guidance and industry partnerships fostering real-world project execution.",
    impact: "Development of computational thinking, algorithm design skills, and creative problem-solving abilities. Students progress through structured innovation challenges.",
  },
  {
    name: "Techqings Foundation",
    tagline: "Gender-equity capacity building for women in tech",
    color: "rose",
    metrics: [
      { value: "75%", label: "Confidence Increase" },
      { value: "60%", label: "Employment Rate" },
      { value: "178", label: "Women Trained" },
    ],
    problem: "Women are significantly underrepresented in technology fields, leading to lost innovation potential and economic inequality.",
    solution: "Technical training in AI, cybersecurity, and DevOps combined with one-on-one mentorship and peer community building.",
    impact: "Increased women in tech pipelines. Improved technical confidence and career readiness. Building a self-sustaining network for ongoing professional development.",
  },
  {
    name: "Interswitch Developer Community",
    tagline: "University of Ibadan Chapter",
    color: "cyan",
    metrics: [
      { value: "Community", label: "Focus" },
      { value: "Industry", label: "Collaboration" },
      { value: "Growth", label: "Driven" },
    ],
    problem: "Disconnect between university tech education and industry needs. Students lack practical exposure and professional networks.",
    solution: "Developer community bridging industry and academia through technical workshops, networking events, hackathons, and partnership programs.",
    impact: "Active developer ecosystem connecting students with industry mentors, job opportunities, and collaborative projects. Regular events fostering continuous learning.",
  },
];

export default function Initiatives() {
  return (
    <PageLayout track="leadership">
      {/* Header */}
      <motion.section initial="hidden" animate="visible" className="mb-28">
        <motion.p variants={fadeUp} custom={0} className="text-xs tracking-[0.3em] uppercase text-blue-400/50 mb-4">Initiatives</motion.p>
        <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.9] mb-6">
          PROGRAMS
          <br />
          <span className="text-white/15">FOUNDED</span>
        </motion.h1>
        <motion.div variants={fadeUp} custom={2} className="w-12 h-px bg-blue-500/40 mb-6" />
        <motion.p variants={fadeUp} custom={3} className="text-white/30 text-base sm:text-lg max-w-xl leading-relaxed">
          Programs and communities built from the ground up — focused on education, 
          gender equity, innovation, and professional development.
        </motion.p>
      </motion.section>

      {/* Initiatives */}
      <div className="space-y-16 mb-28">
        {initiatives.map((init, idx) => (
          <motion.section
            key={init.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Initiative Header */}
            <motion.div variants={fadeUp} custom={0} className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl sm:text-2xl font-bold">{init.name}</h2>
                <span className={`badge badge-${init.color}`}>{init.tagline}</span>
              </div>
            </motion.div>

            {/* Metrics */}
            <motion.div variants={fadeUp} custom={1} className="grid grid-cols-3 gap-3 mb-4">
              {init.metrics.map((metric, i) => (
                <div key={i} className="card p-4 text-center">
                  <p className={`text-2xl sm:text-3xl font-black text-gradient-${init.color === "rose" || init.color === "purple" ? "blue" : init.color}`}>{metric.value}</p>
                  <p className="text-[10px] tracking-[0.1em] uppercase text-white/20 mt-1">{metric.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Details */}
            <motion.div variants={fadeUp} custom={2} className="card p-6 sm:p-8">
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-white/15 mb-2">Problem</p>
                  <p className="text-white/25 text-sm leading-relaxed">{init.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-white/15 mb-2">Solution</p>
                  <p className="text-white/25 text-sm leading-relaxed">{init.solution}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-white/15 mb-2">Impact</p>
                  <p className="text-white/25 text-sm leading-relaxed">{init.impact}</p>
                </div>
              </div>
            </motion.div>
          </motion.section>
        ))}
      </div>

      {/* Nav */}
      <section className="flex flex-wrap gap-3 justify-center">
        <Link href="/leadership" className="text-xs px-5 py-2.5 rounded-full border border-white/[0.06] text-white/30 hover:border-white/15 hover:text-white/60 transition-all">
          ← Leadership
        </Link>
        <Link href="/sdg-work" className="text-xs px-5 py-2.5 rounded-full border border-white/[0.06] text-white/30 hover:border-white/15 hover:text-white/60 transition-all">
          SDG Work →
        </Link>
        <Link href="/recognition" className="text-xs px-5 py-2.5 rounded-full border border-white/[0.06] text-white/30 hover:border-white/15 hover:text-white/60 transition-all">
          Recognition →
        </Link>
      </section>
    </PageLayout>
  );
}
