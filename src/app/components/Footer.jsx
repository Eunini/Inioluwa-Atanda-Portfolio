import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 border-t border-slate-700 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">IA</span>
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Inioluwa Atanda
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Youth leader and technologist bridging governance, innovation, and sustainable development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Portfolio</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/leadership" className="text-gray-400 hover:text-blue-300 transition-colors">
                  Leadership & Impact
                </Link>
              </li>
              <li>
                <Link href="/career" className="text-gray-400 hover:text-cyan-300 transition-colors">
                  Career & Innovation
                </Link>
              </li>
              <li>
                <Link href="/sdg-work" className="text-gray-400 hover:text-green-300 transition-colors">
                  SDG Work
                </Link>
              </li>
              <li>
                <Link href="/recognition" className="text-gray-400 hover:text-yellow-300 transition-colors">
                  Recognition
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <p className="text-gray-400 text-sm mb-3">
              Let&apos;s collaborate on innovations that create impact.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-white">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-white">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-blue-500 rounded-lg flex items-center justify-center transition-colors">
                <span className="text-white">in</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Inioluwa Atanda. All rights reserved. | Designed with purpose and built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
