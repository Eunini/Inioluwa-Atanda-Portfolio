"use client";
import PageLayout from "../components/PageLayout";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

const appointments = [
  { title: "Vice President", org: "Computer Science Department, University of Ibadan", year: "2025" },
  { title: "Honorable Representative", org: "Representative Council", year: "2024" },
  { title: "Chapter Lead", org: "Interswitch Developer Community, UI", year: "2025" },
];

const ambassadorships = [
  { brand: "Interswitch", scope: "Fintech & Developer Ecosystem", year: "2025" },
  { brand: "Cowrywise", scope: "Financial Literacy & Investment", year: "2023" },
  { brand: "GeeksforGeeks", scope: "Campus Mentor & Technical Education", year: "2025" },
  { brand: "Black SiS", scope: "1-Year LinkedIn Premium Subscription", year: "2025" },
];

const programs = [
  { name: "Harvard Aspire Leadership Program", org: "Harvard University", desc: "Leadership development and systems thinking for global impact.", color: "blue" },
  { name: "AIIDEV Africa Program", org: "AIIDEV Africa", desc: "AI and innovation development program for African technologists.", color: "purple" },
];

const certificates = [
  { name: "DevOps Training Certification", issuer: "Techrise by ATC Africa", role: "Team Lead" },
  { name: "Kubernetes Cloud Native Associate", issuer: "The Linux Foundation" },
  { name: "Cloud Computing Foundation", issuer: "Ladies in Tech Africa" },
  { name: "Azure AI Fundamentals", issuer: "Microsoft Azure" },
];

const affiliations = [
  "Computer Science Department, University of Ibadan",
  "Interswitch Developer Community",
  "Techqings Foundation",
  "Open Source Contributor",
  "SDG Networks & Advocacy Groups",
];

export default function Recognition() {
  return (
    <PageLayout track="leadership">
      {/* Header */}
      <motion.section initial="hidden" animate="visible" className="mb-28">
        <motion.p variants={fadeUp} custom={0} className="text-xs tracking-[0.3em] uppercase text-blue-400/50 mb-4">Recognition</motion.p>
        <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-7xl font-black tracking-tight leading-[0.9] mb-6">
          RECOGNITION
          <br />
          <span className="text-white/15">&amp; APPOINTMENTS</span>
        </motion.h1>
        <motion.div variants={fadeUp} custom={2} className="w-12 h-px bg-blue-500/40 mb-6" />
        <motion.p variants={fadeUp} custom={3} className="text-white/30 text-lg sm:text-xl lg:text-2xl max-w-xl leading-relaxed">
          Leadership appointments, brand ambassadorships, global programs, 
          and professional certifications.
        </motion.p>
      </motion.section>

      {/* Leadership Appointments */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Leadership Appointments</motion.p>
        <div className="space-y-3">
          {appointments.map((item, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1} className="card p-6 flex items-center justify-between">
              <div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold">{item.title}</h3>
                <p className="text-white/20 text-xs sm:text-sm lg:text-base mt-1">{item.org}</p>
              </div>
              <span className="badge badge-blue">{item.year}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Brand Ambassadorships */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Brand Ambassadorships</motion.p>
        <div className="grid sm:grid-cols-3 gap-3">
          {ambassadorships.map((item, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1} className="card p-6 text-center">
              <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1">{item.brand}</h3>
              <p className="text-white/20 text-xs sm:text-sm lg:text-base mb-3">{item.scope}</p>
              <span className="badge badge-emerald">{item.year}</span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Global Programs */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Global Programs & Certifications</motion.p>
        <div className="space-y-3">
          {programs.map((item, i) => (
            <motion.div key={i} variants={fadeUp} custom={i + 1} className="card card-blue p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold">{item.name}</h3>
                <span className={`badge badge-${item.color}`}>{item.org}</span>
              </div>
              <p className="text-white/20 text-sm sm:text-base lg:text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Technical Certificates */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-28"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Technical Certificates</motion.p>
        <motion.div variants={fadeUp} custom={1} className="card p-6 sm:p-8">
          <div className="space-y-4">
            {certificates.map((cert, i) => (
              <div key={i} className={`flex items-center justify-between ${i < certificates.length - 1 ? "pb-4 border-b border-white/[0.04]" : ""}`}>
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

      {/* Professional Affiliations */}
      <motion.section 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
        className="mb-20"
      >
        <motion.p variants={fadeUp} custom={0} className="section-label">Professional Affiliations</motion.p>
        <motion.div variants={fadeUp} custom={1} className="card p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-3">
            {affiliations.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-blue-400/30" />
                <span className="text-sm sm:text-base lg:text-lg text-white/25">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </PageLayout>
  );
}
