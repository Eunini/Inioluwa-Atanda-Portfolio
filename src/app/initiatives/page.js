import LeadershipNavbar from "../components/LeadershipNavbar";
import LeadershipFooter from "../components/LeadershipFooter";

export const metadata = {
  title: "Initiatives",
  description: "Inioluwa Atanda's initiatives in education, technology, and community development, including Skillsphere Program, QUACITO Initiative, and Techqings Foundation.",
};

export default function Initiatives() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <LeadershipNavbar />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <section className="mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Initiatives
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl">
              Structured programs and interventions designed to address systemic challenges in education,
              technology access, and community development through evidence-based approaches.
            </p>
          </section>

          {/* Skillsphere Program */}
          <section className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-blue-50 px-8 py-6 border-b border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Skillsphere Program</h2>
                <p className="text-blue-600 font-medium">Practical IT Skills Development Initiative</p>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Program Overview</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      A comprehensive training program addressing the skills gap between academic computer science
                      education and practical IT competencies required in modern workplaces. The program provides
                      targeted skill development for students outside technical disciplines.
                    </p>

                    <h4 className="text-lg font-medium text-gray-900 mb-3">Key Components</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Modular curriculum covering essential IT skills</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Hands-on workshops with real-world applications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Peer mentoring and collaborative learning</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Industry-relevant project work</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Impact Metrics</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">200+</div>
                        <div className="text-gray-700">Students Trained</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">85%</div>
                        <div className="text-gray-700">Employment Rate Improvement</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600 mb-1">15</div>
                        <div className="text-gray-700">Partner Organizations</div>
                      </div>
                    </div>

                    <h4 className="text-lg font-medium text-gray-900 mb-3 mt-6">Target Demographics</h4>
                    <p className="text-gray-700">
                      Undergraduate students from non-technical disciplines including Business, Social Sciences,
                      Arts, and other fields seeking to develop practical IT competencies for career advancement.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability & Scale</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The program framework has been designed for institutional adoption, with clear documentation,
                    training materials, and implementation guidelines. Partner universities can adapt the curriculum
                    to local contexts while maintaining core competencies. Current expansion plans include three
                    additional universities in the 2024-2025 academic year.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* QUACITO Initiative */}
          <section className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-green-50 px-8 py-6 border-b border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">QUACITO Initiative</h2>
                <p className="text-green-600 font-medium">Applied Computing, Innovation, and Technology Optimization</p>
              </div>

              <div className="p-8">
                <div className="mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    A structured challenge framework promoting advanced computing, innovation, and problem-solving
                    in tertiary education through collaborative faculty-industry partnerships.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Objectives</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Advance computing education</li>
                      <li>• Foster innovation culture</li>
                      <li>• Bridge academia-industry gap</li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🏗️</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Structure</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Multi-level challenges</li>
                      <li>• Progressive difficulty</li>
                      <li>• Real-world problems</li>
                    </ul>
                  </div>

                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-2xl">🤝</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Partnerships</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Faculty oversight</li>
                      <li>• Industry collaboration</li>
                      <li>• Cross-disciplinary teams</li>
                    </ul>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Challenge Framework</h3>
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900 mb-2">Foundation Level</h5>
                        <p className="text-gray-700 text-sm">Core computing concepts, algorithmic thinking, basic problem decomposition</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900 mb-2">Intermediate Level</h5>
                        <p className="text-gray-700 text-sm">Advanced algorithms, system design, optimization techniques</p>
                      </div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h5 className="font-medium text-gray-900 mb-2">Advanced Level</h5>
                        <p className="text-gray-700 text-sm">Innovation challenges, creative problem-solving, industry applications</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills Development Focus</h3>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-green-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">Computational thinking</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-green-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">Algorithm design and analysis</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-green-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">Code efficiency and optimization</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-green-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">Innovation and creative problem-solving</span>
                      </div>
                      <div className="flex items-center">
                        <span className="w-3 h-3 bg-green-600 rounded-full mr-3"></span>
                        <span className="text-gray-700">Industry-relevant technical skills</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">Educational Innovation</h5>
                      <p className="text-gray-700 text-sm">
                        Framework designed to integrate computing education with practical innovation,
                        preparing students for technology-driven careers and entrepreneurship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Techqings Foundation */}
          <section className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-purple-50 px-8 py-6 border-b border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Techqings Foundation</h2>
                <p className="text-purple-600 font-medium">Gender Equity in Technology Capacity Building</p>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Intervention Framework</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      A structured gender-equity intervention focused on capacity building for women in technology.
                      The foundation addresses systemic barriers through targeted technical training, mentorship,
                      and professional development opportunities.
                    </p>

                    <h4 className="text-lg font-medium text-gray-900 mb-3">Core Components</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Technical skills training in AI, cybersecurity, and DevOps</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>One-on-one mentorship with industry professionals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Peer support networks and community building</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Leadership development and career guidance</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Target Impact</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600 mb-1">75%</div>
                        <div className="text-gray-700">Increase in technical confidence</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600 mb-1">60%</div>
                        <div className="text-gray-700">Employment rate in tech roles</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600 mb-1">40+</div>
                        <div className="text-gray-700">Women in leadership pipeline</div>
                      </div>
                    </div>

                    <h4 className="text-lg font-medium text-gray-900 mb-3 mt-6">SDG Alignment</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SDG 4: Quality Education</span>
                      <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">SDG 5: Gender Equality</span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">SDG 8: Decent Work</span>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Focus Areas</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="text-3xl mb-3">🤖</div>
                      <h5 className="font-medium text-gray-900 mb-2">Artificial Intelligence</h5>
                      <p className="text-gray-700 text-sm">Machine learning fundamentals, ethical AI, and practical applications</p>
                    </div>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="text-3xl mb-3">🔒</div>
                      <h5 className="font-medium text-gray-900 mb-2">Cybersecurity</h5>
                      <p className="text-gray-700 text-sm">Digital security practices, threat analysis, and privacy protection</p>
                    </div>
                    <div className="text-center p-4 border border-gray-200 rounded-lg">
                      <div className="text-3xl mb-3">⚙️</div>
                      <h5 className="font-medium text-gray-900 mb-2">DevOps</h5>
                      <p className="text-gray-700 text-sm">Infrastructure automation, deployment pipelines, and cloud operations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Interswitch Developer Community */}
          <section className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-orange-50 px-8 py-6 border-b border-gray-200">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Interswitch Developer Community</h2>
                <p className="text-orange-600 font-medium">Technology Education and Professional Development</p>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Mission</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Building a vibrant developer community at the University of Ibadan that serves as a bridge
                      between academic learning and industry practice. The community provides structured pathways
                      for technology education, professional development, and industry connections.
                    </p>

                    <h4 className="text-lg font-medium text-gray-900 mb-3">Key Activities</h4>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Technical workshops and skill-building sessions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Industry networking events and guest speaker sessions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Mentorship programs connecting students with professionals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Hackathons and collaborative coding challenges</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Impact</h3>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600 mb-1">200+</div>
                        <div className="text-gray-700">Active Members</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600 mb-1">25+</div>
                        <div className="text-gray-700">Workshops Conducted</div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-orange-600 mb-1">15+</div>
                        <div className="text-gray-700">Industry Partners</div>
                      </div>
                    </div>

                    <h4 className="text-lg font-medium text-gray-900 mb-3">Industry-Academia Bridge</h4>
                    <p className="text-gray-700">
                      The community serves as a critical connection point between university education and
                      industry requirements, ensuring students develop relevant skills and professional networks
                      essential for successful technology careers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      <LeadershipFooter />
    </div>
  );
}