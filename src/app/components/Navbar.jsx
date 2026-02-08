"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import { usePortfolio } from "../context/PortfolioContext";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Leadership & Impact",
    path: "/leadership",
  },
  {
    title: "Tech Career & Innovation",
    path: "/career",
  },
  {
    title: "SDG Work",
    path: "/sdg-work",
  },
  {
    title: "Initiatives",
    path: "/initiatives",
  },
  {
    title: "Recognition",
    path: "/recognition",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!navbarOpen && window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarOpen]);

  return (
    <nav
      className={`fixed z-50 top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl top-2 sm:top-4 rounded-xl sm:rounded-2xl w-[95%] sm:w-[90%] md:w-[70%] mx-auto"
          : "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700"
      }`}
    >
      <div className="flex container lg:py-4 items-center justify-between mx-auto px-4 py-2">
        {/* Logo (Visible only before scroll) */}
        {!isScrolled && !navbarOpen && (
          <Link
            href={"/"}
            className="flex items-center space-x-2 sm:space-x-3 text-gray-900 dark:text-white font-bold text-lg sm:text-xl hover:opacity-80 transition-opacity"
            title="Inioluwa Atanda - Q Infinity"
          >
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 sm:w-10 sm:h-10"
            >
              <defs>
                <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor:"#00d4ff",stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#0099ff",stopOpacity:1}} />
                </linearGradient>
                <linearGradient id="leaderGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor:"#ff006e",stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:"#b537f2",stopOpacity:1}} />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="98" fill="none" stroke="#1a1a2e" strokeWidth="2"/>
              <circle cx="100" cy="100" r="85" fill="none" stroke="url(#techGradient)" strokeWidth="1.5" opacity="0.4"/>
              <circle cx="100" cy="100" r="65" fill="#0f0f23" opacity="0.8"/>
              <g transform="translate(100, 100)">
                <circle cx="0" cy="-5" r="30" fill="none" stroke="url(#leaderGradient)" strokeWidth="3"/>
                <path d="M 25 15 Q 35 25 30 38" fill="none" stroke="url(#leaderGradient)" strokeWidth="3" strokeLinecap="round"/>
                <path d="M 0 12 L 0 -8" stroke="url(#techGradient)" strokeWidth="2.5" strokeLinecap="round"/>
                <polygon points="0,-12 -4,-6 4,-6" fill="url(#techGradient)"/>
              </g>
            </svg>
            <span className="text-blue-600 dark:text-blue-400 text-lg sm:text-xl">
              DevQing
            </span>
          </Link>
        )}

        {/* Desktop Menu */}
        <div className={`${isScrolled ? "flex justify-center items-center w-full" : "hidden md:flex"}`}>
          <ul className={`flex ${isScrolled ? "flex-row space-x-6 lg:space-x-8" : "space-x-6 lg:space-x-8"}`}>
            {navLinks.map((link, index) => (
              <li key={index} className="relative group">
                <Link 
                  href={link.path} 
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 font-medium py-2 px-3 sm:px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 text-sm sm:text-base"
                >
                  {link.title}
                </Link>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Toggle and Mobile Menu */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <ThemeToggle />
          {!navbarOpen && !isScrolled && (
            <div className="block md:hidden">
              <button
                onClick={toggleNavbar}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {navbarOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-white/95 dark:bg-black/90 z-50 flex flex-col items-center justify-center space-y-8">
          {/* Close Button */}
          <button
            onClick={toggleNavbar}
            className="absolute top-6 right-6 z-50 text-gray-900 dark:text-gray-200"
          >
            <XMarkIcon className="h-6 w-6 sm:h-7 sm:w-7" />
          </button>

          {/* Links */}
          <ul className="text-center space-y-8 text-gray-900 dark:text-white text-lg z-50">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.path} onClick={closeNavbar} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
