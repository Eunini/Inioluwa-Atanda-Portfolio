import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeHero3D from "./components/HomeHero3D";
import Link from "next/link";

export const metadata = {
  title: "Inioluwa Atanda | Youth Leader & Tech Professional",
  description: "Inioluwa Atanda - Youth Leader, SDG Advocate, and AI & Innovation Professional. Two portfolios: Leadership & Impact, and Career & Innovation.",
  openGraph: {
    title: "Inioluwa Atanda | Youth Leader & Tech Professional",
    description: "Youth Leader, SDG Advocate, AI Software Engineer, and Cloud DevOps Professional",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Inioluwa Atanda",
      }
    ],
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
        {/* Three.js 3D Background */}
        <HomeHero3D />

        {/* Animated CSS Background Elements (fallback) */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8 inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold">
            WELCOME TO MY PROFESSIONAL PORTFOLIO
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
            INIOLUWA ATANDA
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mx-auto mb-8"></div>

          <p className="text-xl sm:text-2xl text-gray-300 mb-4 font-light tracking-wide">
            Youth Leader | SDG Advocate | AI Engineer | Systems Builder
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Two distinct professional portfolios showcasing leadership in governance & sustainable development, 
            and technical expertise in AI, DevOps, and cloud infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/leadership"
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/40"
            >
              <span className="relative z-10">Leadership Portfolio</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="/career"
              className="group relative px-8 py-4 border-2 border-cyan-400/50 text-cyan-300 rounded-lg font-bold text-lg hover:border-cyan-300 hover:text-white transition-all duration-300 hover:bg-cyan-500/10"
            >
              Tech & Innovation Portfolio
            </Link>
          </div>

          <p className="text-gray-500 text-sm">Scroll to explore both portfolios</p>
        </div>
      </section>

      {/* Portfolio Cards Section */}
      <section className="py-24 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4">Two Portfolios, One Vision</h2>
          <p className="text-center text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
            Explore distinct professional identities tailored for different audiences and impact areas.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Leadership Portfolio Card */}
            <div className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-xs font-bold mb-6 uppercase">
                  Leadership Track
                </div>

                <h3 className="text-3xl font-black text-white mb-3">Leadership & Impact</h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  For policy reviewers, stakeholders, and those evaluating governance capabilities and youth leadership in sustainable development.
                </p>

                <div className="mb-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                    </div>
                    <span className="text-gray-300 text-sm">Leadership roles & governance experience</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                    </div>
                    <span className="text-gray-300 text-sm">Youth representation & advocacy</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                    </div>
                    <span className="text-gray-300 text-sm">SDG alignment & impact metrics</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                    </div>
                    <span className="text-gray-300 text-sm">Gender equity initiatives</span>
                  </div>
                </div>

                <Link
                  href="/leadership"
                  className="inline-block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg hover:from-blue-500 hover:to-blue-600 transition-all duration-300 font-bold text-sm uppercase tracking-wide group-hover:shadow-lg group-hover:shadow-blue-500/30"
                >
                  Explore Portfolio →
                </Link>
              </div>
            </div>

            {/* Career Portfolio Card */}
            <div className="group relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>

              <div className="relative z-10">
                <div className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded-full text-cyan-300 text-xs font-bold mb-6 uppercase">
                  Tech Track
                </div>

                <h3 className="text-3xl font-black text-white mb-3">Career & Innovation</h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  For tech companies, hiring managers, and those evaluating technical expertise in AI, DevOps, and systems architecture.
                </p>

                <div className="mb-8 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                    </div>
                    <span className="text-gray-300 text-sm">AI & Machine Learning expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                    </div>
                    <span className="text-gray-300 text-sm">Cloud infrastructure & DevOps</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                    </div>
                    <span className="text-gray-300 text-sm">Full-stack systems design</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-2 h-2 bg-black rounded-full"></span>
                    </div>
                    <span className="text-gray-300 text-sm">Professional certifications</span>
                  </div>
                </div>

                <Link
                  href="/career"
                  className="inline-block w-full text-center bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 font-bold text-sm uppercase tracking-wide group-hover:shadow-lg group-hover:shadow-cyan-500/30"
                >
                  Explore Portfolio →
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-16 pt-16 border-t border-slate-700">
            <h3 className="text-2xl font-bold mb-8 text-center">Quick Navigation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/leadership" className="p-4 border border-slate-600 rounded-lg hover:border-blue-500/50 text-center text-gray-300 hover:text-blue-300 transition-all text-sm font-semibold">
                Leadership
              </Link>
              <Link href="/career" className="p-4 border border-slate-600 rounded-lg hover:border-cyan-500/50 text-center text-gray-300 hover:text-cyan-300 transition-all text-sm font-semibold">
                Career
              </Link>
              <Link href="/recognition" className="p-4 border border-slate-600 rounded-lg hover:border-blue-500/50 text-center text-gray-300 hover:text-blue-300 transition-all text-sm font-semibold">
                Recognition
              </Link>
              <Link href="/sdg-work" className="p-4 border border-slate-600 rounded-lg hover:border-blue-500/50 text-center text-gray-300 hover:text-blue-300 transition-all text-sm font-semibold">
                SDG Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
