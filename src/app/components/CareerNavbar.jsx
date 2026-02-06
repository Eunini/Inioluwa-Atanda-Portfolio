"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const careerNavLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Career & Innovation",
    path: "/career",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const CareerNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white text-gray-900 shadow-lg z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Brand */}
          <Link href="/" className="font-bold text-xl text-gray-900 hover:text-gray-700 transition-colors">
            Inioluwa Atanda
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {careerNavLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-300 font-medium"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="/leadership"
              className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors font-medium"
            >
              Leadership Portfolio
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleNavbar}
              className="text-gray-900 hover:text-gray-700 transition-colors"
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
            {careerNavLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={closeNavbar}
                className="block text-gray-600 hover:text-gray-900 transition-colors py-2 font-medium"
              >
                {link.title}
              </Link>
            ))}
            <Link
              href="/leadership"
              onClick={closeNavbar}
              className="block bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors font-medium"
            >
              Leadership Portfolio
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default CareerNavbar;
