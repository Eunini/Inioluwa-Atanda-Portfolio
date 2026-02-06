"use client";
import React, { Suspense, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import Hero3D from "./Hero3D";
import { usePortfolio } from "../context/PortfolioContext";

const HeroSection = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { mode } = usePortfolio();
  
  const handleDownloadCV = async (e) => {
    e.preventDefault();
    setIsDownloading(true);
    
    try {
      // Try API route first for forced download
      const response = await fetch('/api/download-cv');
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Inioluwa_Atanda_CV.pdf';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        window.URL.revokeObjectURL(url);
      } else {
        throw new Error('API route failed');
      }
    } catch (error) {
      console.error('Error downloading CV via API, trying direct download:', error);
      
      // Fallback: Try direct blob download
      try {
        const response = await fetch('/CV.pdf');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Inioluwa_Atanda_CV.pdf';
        link.style.display = 'none';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        window.URL.revokeObjectURL(url);
      } catch (fallbackError) {
        console.error('Fallback download failed, using simple link:', fallbackError);
        
        // Final fallback: Simple link with download attribute
        const link = document.createElement('a');
        link.href = '/CV.pdf';
        link.download = 'Inioluwa_Atanda_CV.pdf';
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } finally {
      setIsDownloading(false);
    }
  };

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
            <button
              onClick={handleDownloadCV}
              disabled={isDownloading}
              className="px-6 sm:px-8 inline-block py-3 sm:py-4 w-full sm:w-fit rounded-lg border-2 border-white/30 dark:border-gray-600/50 hover:bg-white/10 dark:hover:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-base sm:text-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl backdrop-blur-sm transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              aria-label="Download Inioluwa Atanda's resume PDF"
            >
              {isDownloading ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Downloading...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </>
              )}
            </button>
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