"use client";
import Link from "next/link";

const CareerFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-900 py-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Career & Innovation</h3>
            <p className="text-gray-600">Technical expertise in AI, DevOps, and cloud technologies.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link href="/career" className="hover:text-gray-900 transition-colors">Career & Innovation</Link></li>
              <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="https://github.com/Eunini" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">GitHub</a></li>
              <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">LinkedIn</a></li>
              <li><Link href="/contact" className="hover:text-gray-900 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} Inioluwa Atanda. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <Link href="/" className="hover:text-gray-900 transition-colors">View Leadership Portfolio</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default CareerFooter;
