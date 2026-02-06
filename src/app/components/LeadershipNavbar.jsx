"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const leadershipNavLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Leadership & Impact",
    path: "/leadership",
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

const LeadershipNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand */}
          <Link href="/" className="font-bold text-xl text-white hover:text-gray-300 transition-colors">
            Inioluwa Atanda
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {leadershipNavLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="/career"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors font-medium"
            >
              Tech Portfolio
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white hover:text-gray-300 transition-colors"
            >
              {navbarOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {navbarOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {leadershipNavLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={closeNavbar}
                className="block text-gray-300 hover:text-white transition-colors py-2 font-medium"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="/career"
              onClick={closeNavbar}
              className="block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors font-medium"
            >
              Tech Portfolio
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LeadershipNavbar;
