"use client";
import React, { Suspense } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Hero3D from "./Hero3D";
import { usePortfolio } from "../context/PortfolioContext";

const HeroSection = () => {
  const { mode } = usePortfolio();

  return (
    <section className="lg:py-16 relative" aria-label="Hero section" role="banner">
      <div className="grid grid-cols-1 sm:grid-cols-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="backdrop-blur-sm bg-white/10 dark:bg-gray-900/20 rounded-2xl p-8 border border-white/20 shadow-2xl">
          <h1 className="text-gray-900 dark:text-white mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-extrabold">
            <span className="text-gray-900 dark:text-white">
              Hi, I&apos;m{" "}
              <span itemProp="name" className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Inioluwa Atanda
              </span>
            </span>
            <br></br>
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-600 dark:text-gray-400 font-medium">
              I&apos;m a{" "}
            </span>
            <Suspense fallback={<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">{mode === 'career' ? 'Full-Stack Developer' : 'Youth Leader & Advocate'}</span>}>
              <TypeAnimation
                sequence={
                  mode === 'career' ? [
                    "AI Software Engineer",
                    2000,
                    "Cloud DevOps Engineer",
                    2000,
                    "Problem Solver",
                    2000,
                    "Tech Innovator",
                    2000,
                  ] : [
                    "Youth Leader",
                    2000,
                    "SDG Advocate",
                    2000,
                    "Community Builder",
                    2000,
                    "Women in Tech Champion",
                    2000,
                  ]
                }
                wrapper="span"
                speed={50}
                repeat={Infinity}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
              />
            </Suspense>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg md:text-xl lg:text-xl leading-relaxed max-w-2xl mb-6 sm:mb-8" itemProp="description">
            {mode === 'career' ? (
              <>
                Crafting digital experiences that matter. I transform complex problems into elegant solutions, 
                building scalable web applications with <strong>React, Next.js, Node.js, Python, and Django</strong>. 
                Specialized in full-stack development, cloud computing, and DevOps practices.
                <span className="text-blue-600 dark:text-blue-400 font-medium"> Let&apos;s create something extraordinary together.</span>
              </>
            ) : (
              <>
                Driving positive change through leadership and advocacy. As a Harvard ALP Alumni and SDG advocate, 
                I build communities and initiatives that empower youth and women in technology. 
                From founding Techqings to leading SDG outreach programs, I&apos;m committed to creating 
                <span className="text-blue-600 dark:text-blue-400 font-medium"> sustainable impact through innovation and inclusion.</span>
              </>
            )}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4" role="group" aria-label="Call to action buttons">
            <Link
              href="#contact"
              className="px-6 sm:px-8 inline-block py-3 sm:py-4 w-full sm:w-fit rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium text-base sm:text-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Navigate to contact section to work together"
            >
              Let&apos;s Work Together
            </Link>
          </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <Hero3D />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;