"use client";
import PageLayout from "./components/PageLayout";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
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
    problem: "Need for a professional digital presence to showcase the Techqings Foundation mission and initiatives.",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    outcome: "Established an authoritative web presence for the foundation, enabling global reach and community engagement.",
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

export default function Home() {
  return (
    <PageLayout>
      <motion.section id="home" initial="hidden" animate="visible" className="relative mb-28 scroll-mt-24">
        <div className="pointer-events-none absolute -inset-x-6 -top-8 h-[28rem] rounded-[2rem] bg-gradient-to-br from-cyan-400/8 via-blue-400/6 to-violet-400/8 blur-3xl" />
        <motion.p variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-400/8 px-4 py-2 text-xs tracking-[0.2em] uppercase text-white mb-5">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(52,211,153,0.7)]" />
          AI Software Engineer
        </motion.p>
        <motion.h1 variants={fadeUp} custom={1} className="relative z-10 text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-6">
          TECH CAREER
          <br />
          <span className="text-gradient-tech">&amp; INNOVATION</span>
        </motion.h1>
        <motion.div variants={fadeUp} custom={2} className="w-28 h-px bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 mb-6 shadow-[0_0_24px_rgba(103,232,249,0.25)]" />
        <motion.p variants={fadeUp} custom={3} className="text-white text-lg sm:text-xl lg:text-2xl max-w-2xl leading-relaxed">
          AI Software Engineer | Cloud & DevOps Engineer | Systems Builder.
          Building scalable products and intelligent workflows for real-world impact.
        </motion.p>
        <motion.div variants={fadeUp} custom={4} className="mt-6 flex flex-wrap gap-2">
          <span className="badge badge-cyan">AI Agents</span>
          <span className="badge badge-blue">Cloud Architecture</span>
          <span className="badge badge-purple">Generative AI Apps</span>
          <span className="badge badge-emerald">DevOps & Automation</span>
        </motion.div>
      </motion.section>

      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-28 scroll-mt-24"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Professional Identity</motion.p>
        <motion.div variants={fadeUp} custom={1} className="card p-8 sm:p-10">
          <p className="text-white leading-[1.8] text-base sm:text-lg lg:text-xl mb-6">
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

      <motion.section
        id="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-28 scroll-mt-24"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Technical Skills</motion.p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {skillCategories.map((cat, i) => (
            <motion.div key={cat.title} variants={fadeUp} custom={i + 1} className="card p-6 relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-cyan-300/50 via-violet-300/40 to-transparent" />
              <h3 className="text-xs tracking-[0.15em] uppercase text-white font-semibold mb-4">{cat.title}</h3>
              <div className="space-y-2.5">
                {cat.items.map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-cyan-400/30" />
                    <span className="text-sm sm:text-base lg:text-lg text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-28 scroll-mt-24"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Selected Projects</motion.p>
        <div className="space-y-3">
          {projects.map((project, i) => (
            <motion.div key={project.name} variants={fadeUp} custom={i + 1} className="card card-cyan p-6 sm:p-8 group relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-300 via-blue-300 to-violet-300 opacity-80" />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-lg font-bold tracking-tight">{project.name}</h3>
                  <p className="text-cyan-100 text-sm">{project.tagline}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-white hover:text-cyan-200 transition-colors flex items-center gap-1 flex-shrink-0 rounded-full border border-white/[0.08] px-2.5 py-1 bg-white/[0.02]"
                >
                  Live Demo
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </a>
              </div>

              <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-5">{project.problem}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-[10px] text-white px-2.5 py-1 rounded bg-white/[0.03] border border-white/[0.08]">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-white">
                <span className="text-[10px] tracking-[0.15em] uppercase text-white mr-2">Outcome:</span>
                {project.outcome}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        id="certifications"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-28 scroll-mt-24"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Technical Certifications</motion.p>
        <motion.div variants={fadeUp} custom={1} className="card p-6 sm:p-8">
          <div className="space-y-4">
            {[
              { name: "Microsoft Applied Skills: Create an AI Agent", issuer: "Microsoft" },
              { name: "Microsoft Applied Skills: Develop Generative AI Apps with Azure OpenAI", issuer: "Microsoft" },
              { name: "Google Cloud Skill Badge: Generative AI Explorer", issuer: "Google Cloud" },
              { name: "IBM AI Foundations Certificate", issuer: "IBM SkillsBuild" },
              { name: "AWS Generative AI Learning Badge", issuer: "Amazon Web Services" },
              { name: "DevOps Training Certification", issuer: "Techrise by ATC Africa", role: "Team Lead" },
              { name: "Kubernetes Cloud Native Associate (KCNA)", issuer: "The Linux Foundation" },
              { name: "Cloud Computing Foundation", issuer: "Ladies in Tech Africa" },
              { name: "Azure AI Fundamentals", issuer: "Microsoft Azure" },
            ].map((cert, i) => (
              <div
                key={cert.name}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-white/[0.06] last:pb-0 last:border-b-0"
              >
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed">{cert.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <span className="badge badge-cyan">{cert.issuer}</span>
                    {cert.role ? <span className="badge badge-emerald">{cert.role}</span> : null}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-cyan-100">
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.55)]" />
                  <span className="text-xs tracking-[0.14em] uppercase">Verified Learning</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        id="vision"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="mb-28 scroll-mt-24"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Career Vision</motion.p>
        <motion.div variants={fadeUp} custom={1} className="card p-8 sm:p-10">
          <div className="space-y-5 text-white text-sm leading-[1.8]">
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

      <section id="contact" className="scroll-mt-24">
        <div className="card p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
            <div>
              <p className="section-label mb-2">Contact & Next Steps</p>
              <p className="text-white text-sm sm:text-base">Let&apos;s talk about AI, cloud infrastructure, automation systems, or product engineering.</p>
            </div>
            <div className="h-px sm:h-10 sm:w-px w-full bg-gradient-to-r sm:bg-gradient-to-b from-cyan-300/30 via-violet-300/20 to-transparent" />
          </div>
          <div className="flex flex-wrap gap-3 justify-start">
            <a
              href="https://calendar.app.google/HSB6gbDQXCixzhYE7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-5 py-2.5 rounded-full border border-cyan-300/30 text-white bg-gradient-to-r from-cyan-400/12 via-blue-400/10 to-violet-400/12 hover:from-cyan-400/20 hover:to-violet-400/18 transition-all"
            >
              Book a Session
            </a>
            <a
              href="mailto:atandainioluwa371@gmail.com"
              className="text-xs px-5 py-2.5 rounded-full border border-white/[0.12] text-white hover:border-white/40 transition-all"
            >
              Email
            </a>
            <a
              href="/api/download-cv"
              className="text-xs px-5 py-2.5 rounded-full border border-white/[0.12] text-white hover:border-white/40 transition-all"
            >
              Download Resume
            </a>
            <Link
              href="https://github.com/Eunini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs px-5 py-2.5 rounded-full border border-white/[0.12] text-white hover:border-white/40 transition-all"
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
