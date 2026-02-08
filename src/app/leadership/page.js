"use client";
import PageLayout from "../components/PageLayout";
import Link from "next/link";
import { motion } from "framer-motion";
import { GiMedal } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const roles = [
  {
    role: "Fellow",
    org: "African Women Leadership Forum",
    period: "2025 – Present",
    desc: "Leadership development and advancing women's representation in African tech ecosystems.",
    tags: ["Leadership", "Women in Tech", "Africa"],
  },
  {
    role: "Vice President",
    org: "Computer Science Department, University of Ibadan",
    period: "2025 – Present",
    desc: "Leading departmental coordination, student representation in academic governance, and policy development oversight.",
    tags: ["Governance", "Administration", "Policy"],
  },
  {
    role: "Honorable Representative",
    org: "Representative Council",
    period: "2025 – Present",
    desc: "Legislative representation, committee participation in governance, stakeholder engagement and evidence-based policy advocacy.",
    tags: ["Legislature", "Policy", "Advocacy"],
  },
  {
    role: "Chapter Lead",
    org: "Interswitch Developer Community, UI",
    period: "2025 – Present",
    desc: "Built a 200+ member developer community. Organized technical workshops, networking events, and established industry partnerships.",
    tags: ["Community", "200+ Members", "Tech Events"],
  },
  {
    role: "Official Ambassador",
    org: "Interswitch & Cowrywise",
    period: "2023 – Present",
    desc: "Brand representation, educational outreach for fintech awareness, and facilitating industry connections for students.",
    tags: ["Fintech", "Advocacy", "Outreach"],
  },
];

const initiatives = [
  {
    name: "Skillsphere Program",
    tagline: "Practical IT skills for CS students",
    problem: "Gap between theoretical education and workplace IT readiness for non-CS students.",
    model: "Modular curriculum with hands-on workshops, peer mentoring, and industry projects.",
    outcome: "Enhanced employability and digital literacy across disciplines.",
    color: "blue",
  },
  {
    name: "QUACITO Initiative",
    tagline: "Applied computing & innovation",
    problem: "Limited innovation capacity and gaps between theory and practical computing.",
    model: "Multi-level challenge framework with faculty oversight and industry collaboration.",
    outcome: "Progressive skill development in computational thinking and algorithm design.",
    color: "purple",
  },
  {
    name: "Techqings Foundation",
    tagline: "Gender-equity capacity building for women in tech",
    problem: "Women underrepresented in technology fields, resulting in lost innovation potential.",
    model: "Technical training (AI, cybersecurity, DevOps) + mentorship + community building.",
    outcome: "Ranked Top 30 in I AM GASA competition (Girls Accelerating Sustainable Actions). Increased women in tech pipelines, improved confidence, career advancement.",
    color: "rose",
  },
];

export default function Leadership() {
  return (
    <PageLayout track="leadership">
      {/* Header */}
      <motion.section initial="hidden" animate="visible" className="mb-28">
        <motion.p variants={fadeUp} custom={0} className="text-xs tracking-[0.3em] uppercase text-blue-400/50 mb-4">01 — Leadership Track</motion.p>
        <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.9] mb-6">
          LEADERSHIP
          <br />
          <span className="text-white/15">&amp; IMPACT</span>
        </motion.h1>
        <motion.div variants={fadeUp} custom={2} className="w-12 h-px bg-blue-500/40 mb-6" />
        <motion.p variants={fadeUp} custom={3} className="text-white/30 text-lg sm:text-xl lg:text-2xl max-w-xl leading-relaxed">
          Governance, youth representation, and initiatives focused on gender equity 
          and sustainable development through evidence-based systems building.
        </motion.p>
      </motion.section>

      {/* Overview */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Overview</motion.p>
        <motion.div variants={fadeUp} custom={1} className="card p-8 sm:p-10">
          <p className="text-white/30 leading-[1.8] text-base sm:text-lg lg:text-xl">
            Dedicated leader driving institutional change and youth empowerment across governance, community building, and women in tech initiatives. Vice President of Computer Science Department at University of Ibadan, leading departmental strategy and student representation in academic governance. Chapter Lead of Interswitch Developer Community with 200+ members, bridging industry and academia through technical excellence. Fellow of African Women Leadership Forum advancing women&apos;s representation in tech ecosystems. Official Ambassador for Interswitch and Cowrywise, championing fintech innovation and digital financial inclusion. Two-time award winner: Department Sportwoman Award and Most Influential Female of the Year. Committed to equity-driven systems building and evidence-based leadership that creates sustainable pathways for underrepresented groups.
          </p>
        </motion.div>
      </motion.section>

      {/* Formal Roles */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Formal Leadership Roles</motion.p>
        <div className="space-y-3">
          {roles.map((item, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1} className="card p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{item.role}</h3>
                  <p className="text-blue-400/50 text-sm sm:text-base lg:text-lg mt-0.5">{item.org}</p>
                </div>
                <span className="badge badge-blue flex-shrink-0">{item.period}</span>
              </div>
              <p className="text-white/25 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-[10px] text-white/20 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.04]">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Initiatives */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Initiatives Founded</motion.p>
        <div className="space-y-3">
          {initiatives.map((init, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1} className="card p-6 sm:p-8">
              <div className="mb-5">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{init.name}</h3>
                  <span className={`badge badge-${init.color}`}>{init.tagline}</span>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-white/15 mb-2">Problem</p>
                  <p className="text-white/25 text-sm sm:text-base lg:text-lg leading-relaxed">{init.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-white/15 mb-2">Model</p>
                  <p className="text-white/25 text-sm sm:text-base lg:text-lg leading-relaxed">{init.model}</p>
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.15em] uppercase text-white/15 mb-2">Outcome</p>
                  <p className="text-white/25 text-sm sm:text-base lg:text-lg leading-relaxed">{init.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Awards & Recognition */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Awards & Recognition</motion.p>
        <div className="grid sm:grid-cols-2 gap-3">
          <motion.div variants={fadeUp} custom={1} className="card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <GiMedal className="w-8 h-8 text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Department Sportwoman Award</h3>
                <p className="text-white/20 text-sm sm:text-base lg:text-lg">Recognized for athletic excellence and representing the Computer Science Department with distinction in university sports competitions.</p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} custom={2} className="card p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <AiFillStar className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2">Most Influential Female of the Year</h3>
                <p className="text-white/20 text-sm sm:text-base lg:text-lg">Honored for exceptional leadership impact, mentorship contributions, and advancing women&apos;s representation across institutional initiatives.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Leadership Philosophy */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Leadership Certifications</motion.p>
        <motion.div variants={fadeUp} custom={1} className="card p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold">Harvard Aspire Leadership Program</h3>
              <p className="text-white/20 text-xs sm:text-sm lg:text-base mt-1">Leadership Development & Systems Thinking</p>
            </div>
            <span className="badge badge-blue">2024</span>
          </div>
        </motion.div>
      </motion.section>

      {/* Leadership Philosophy */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Leadership Philosophy</motion.p>
        <motion.div variants={fadeUp} custom={1} className="card p-8 sm:p-10">
          <div className="space-y-5 text-white/25 text-base sm:text-lg lg:text-xl leading-[1.8]">
            <p>
              Effective leadership requires balancing youth perspectives with institutional responsibilities. 
              Evidence-based decision making, accountability, and long-term systems thinking guide every initiative.
            </p>
            <p>
              Youth representation must include meaningful contributions to governance — building capacity 
              for informed decision making and influencing policy outcomes beyond symbolic participation.
            </p>
            <p>
              Equity and access form the foundation of sustainable development. Leadership carries 
              responsibility to create pathways for underrepresented groups and ensure inclusive governance.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Navigation Links */}
      <section className="flex flex-wrap gap-3 justify-center">
        {[
          { name: "SDG Work", href: "/sdg-work" },
          { name: "Initiatives", href: "/initiatives" },
          { name: "Recognition", href: "/recognition" },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="text-xs px-5 py-2.5 rounded-full border border-white/[0.06] text-white/30 hover:border-white/15 hover:text-white/60 transition-all">
            {link.name} →
          </Link>
        ))}
      </section>
    </PageLayout>
  );
}
