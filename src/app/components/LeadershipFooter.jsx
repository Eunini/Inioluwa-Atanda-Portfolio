"use client";
import Link from "next/link";

const LeadershipFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Leadership Portfolio</h3>
            <p className="text-gray-400">Governance, youth representation, and SDG-aligned impact.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/leadership" className="hover:text-white transition-colors">Leadership & Impact</Link></li>
              <li><Link href="/sdg-work" className="hover:text-white transition-colors">SDG Work</Link></li>
              <li><Link href="/initiatives" className="hover:text-white transition-colors">Initiatives</Link></li>
              <li><Link href="/recognition" className="hover:text-white transition-colors">Recognition</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://github.com/Eunini" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Inioluwa Atanda. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <Link href="/" className="hover:text-white transition-colors">View Tech Portfolio</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LeadershipFooter;
