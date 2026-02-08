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

const skillCategories = [
  { title: "Languages", items: ["Python", "JavaScript / TypeScript", "Java", "Go"] },
  { title: "Frameworks", items: ["React / Next.js", "Django / FastAPI", "TensorFlow / PyTorch", "Docker / K8s"] },
  { title: "Cloud & DevOps", items: ["AWS / GCP / Azure", "Terraform / IaC", "CI/CD Pipelines", "Prometheus / Grafana"] },
  { title: "AI & Automation", items: ["AI Agents", "Automation Systems", "GenAI Integration", "Intelligent Workflows"] },
  { title: "Databases", items: ["PostgreSQL / MySQL", "MongoDB / Redis", "DynamoDB"] },
  { title: "Architecture", items: ["Microservices", "REST / GraphQL", "Event-Driven", "Scalability Patterns"] },
];

const projects = [
  {
    name: "Ubuy",
    tagline: "Modern E-commerce Platform",
    problem: "E-commerce platforms lacked intuitive browsing and secure checkout, leading to poor UX and abandoned carts.",
    stack: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind"],
    outcome: "10K+ monthly transactions, 95% user satisfaction, 30% reduction in cart abandonment.",
    link: "https://u-buy-six.vercel.app/",
  },
  {
    name: "Repropack",
    tagline: "Python Packaging Solution",
    problem: "Complex dependency management when migrating Python projects across environments.",
    stack: ["Python", "Docker", "FastAPI", "PostgreSQL", "Redis"],
    outcome: "Reduced setup from 2hrs to 5min, enabling 500+ devs to deploy seamlessly.",
    link: "https://repro-pack-frontend.vercel.app/",
  },
  {
    name: "Techqings Africa",
    tagline: "Official Website & Platform",
    problem: "Need for a professional digital presence to showcase the Techqings Foundation's mission and initiatives.",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    outcome: "Established authoritative web presence for the foundation, enabling global reach and community engagement.",
    link: "https://techqings-africa.vercel.app/",
  },
  {
    name: "Fundability",
    tagline: "Startup Assessment Tool",
    problem: "Startups lack structured assessment frameworks to evaluate funding readiness and identify growth areas.",
    stack: ["JavaScript", "Cloudflare Workers", "API Integration"],
    outcome: "Provides actionable insights for startup founders on readiness for funding rounds and strategic improvements.",
    link: "https://fundability.atandainioluwa371.workers.dev/",
  },
];

export default function Career() {
  return (
    <PageLayout track="career">
      {/* Header */}
      <motion.section initial="hidden" animate="visible" className="mb-28">
        <motion.p variants={fadeUp} custom={0} className="text-xs tracking-[0.3em] uppercase text-cyan-400/50 mb-4">02 — Tech Career Track</motion.p>
        <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6">
          TECH CAREER
          <br />
          <span className="text-white/15">&amp; INNOVATION</span>
        </motion.h1>
        <motion.div variants={fadeUp} custom={2} className="w-12 h-px bg-cyan-500/40 mb-6" />
        <motion.p variants={fadeUp} custom={3} className="text-white/30 text-lg sm:text-xl lg:text-2xl max-w-xl leading-relaxed">
          AI Software Engineer · Cloud & DevOps · Systems Builder.
          Technical competence to execute complex systems at scale.
        </motion.p>
      </motion.section>

      {/* Professional Identity */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Professional Identity</motion.p>
        <motion.div variants={fadeUp} custom={1} className="card p-8 sm:p-10">
          <p className="text-white/30 leading-[1.8] text-base sm:text-lg lg:text-xl mb-6">
            Software engineer specializing in AI systems and cloud infrastructure. Building scalable 
            applications and automated platforms. Combining technical depth with practical problem-solving 
            for innovative, sustainable solutions.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Artificial Intelligence", "Distributed Systems", "Cloud & DevOps", "Platform Engineering", "Impact-Driven Tech"].map((tag) => (
              <span key={tag} className="badge badge-cyan">{tag}</span>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Technical Skills */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Technical Skills</motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillCategories.map((cat, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1} className="card p-6">
              <h3 className="text-xs tracking-[0.15em] uppercase text-white/40 font-semibold mb-4">{cat.title}</h3>
              <div className="space-y-2.5">
                {cat.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-cyan-400/30" />
                    <span className="text-sm sm:text-base lg:text-lg text-white/30">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Selected Projects</motion.p>
        <div className="space-y-3">
          {projects.map((project, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1} className="card card-cyan p-6 sm:p-8 group">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-lg font-bold">{project.name}</h3>
                  <p className="text-cyan-400/40 text-sm">{project.tagline}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white/20 hover:text-white/50 transition-colors flex items-center gap-1 flex-shrink-0"
                >
                  Live Demo
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>
              
              <p className="text-white/20 text-sm sm:text-base lg:text-lg leading-relaxed mb-5">{project.problem}</p>
              
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-[10px] text-white/20 px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.04]">{tech}</span>
                ))}
              </div>
              
              <p className="text-sm sm:text-base lg:text-lg text-emerald-400/40">
                <span className="text-[10px] tracking-[0.15em] uppercase text-white/15 mr-2">Outcome:</span>
                {project.outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technical Certifications */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Technical Certifications</motion.p>
        <motion.div variants={fadeUp} custom={1} className="card p-6 sm:p-8">
          <div className="space-y-4">
            {[
              { name: "DevOps Training Certification", issuer: "Techrise by ATC Africa", role: "Team Lead" },
              { name: "Kubernetes Cloud Native Associate", issuer: "The Linux Foundationa" },
              { name: "Cloud Computing Foundation", issuer: "Ladies in Tech Africa" },
              { name: "Azure AI Fundamentals", issuer: "Microsoft Azure" },
            ].map((cert, i) => (
              <div key={i} className="flex items-center justify-between pb-4 border-b border-white/[0.04] last:pb-0 last:border-b-0">
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium">{cert.name}</h3>
                  <p className="text-white/15 text-xs sm:text-sm lg:text-base mt-0.5">{cert.issuer} {cert.role && `· ${cert.role}`}</p>
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/30" />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Vision */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Career Vision</motion.p>
        <motion.div variants={fadeUp} custom={1} className="card p-8 sm:p-10">
          <div className="space-y-5 text-white/25 text-sm leading-[1.8]">
            <p>
              Developing technical solutions that improve access, efficiency, and equity. Working at the 
              intersection of AI, cloud infrastructure, and scalable platforms to address real-world challenges.
            </p>
            <p>
              Building systems that create sustainable value while supporting broader objectives in 
              infrastructure development, AI accessibility, and technological equity.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Navigation */}
      <section className="flex flex-wrap gap-3 justify-center">
        <Link href="/leadership" className="text-xs px-5 py-2.5 rounded-full bg-white/[0.03] text-blue-400/50 hover:text-blue-400/80 transition-all border border-white/[0.04]">
          ← Leadership Portfolio
        </Link>
      </section>
    </PageLayout>
  );
}
