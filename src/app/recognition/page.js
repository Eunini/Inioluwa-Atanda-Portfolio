import LeadershipNavbar from "../components/LeadershipNavbar";
import LeadershipFooter from "../components/LeadershipFooter";

export const metadata = {
  title: "Recognition",
  description: "Inioluwa Atanda's leadership appointments, ambassador roles, certificates, and professional affiliations.",
};

export default function Recognition() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <LeadershipNavbar />

      <main className="pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <section className="mb-20">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-6">
                Recognition & Affiliations
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-8"></div>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-4xl">
              Leadership appointments, ambassador roles, and professional affiliations that reflect
              institutional trust and recognition of contributions to governance and development.
            </p>
          </section>

          {/* Leadership Appointments */}
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 flex items-center">
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-400 rounded mr-4"></div>
              Leadership Appointments
            </h2>

            <div className="grid gap-6">
              {/* Vice President-elect */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-blue-500 p-7 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Vice President-elect</h3>
                    <p className="text-blue-400 font-medium">Computer Science Department, University of Ibadan</p>
                  </div>
                  <div className="text-right mt-2 sm:mt-0">
                    <p className="text-gray-400 text-sm">2024 - Present</p>
                    <p className="text-green-400 text-sm font-bold mt-1">● Active</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  Elected leadership position responsible for departmental coordination, student representation
                  in academic governance, and facilitating communication between faculty, students, and administration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-900/40 text-blue-300 border border-blue-500/30 px-4 py-2 rounded-full text-sm font-medium">Student Governance</span>
                  <span className="bg-blue-900/40 text-blue-300 border border-blue-500/30 px-4 py-2 rounded-full text-sm font-medium">Academic Leadership</span>
                  <span className="bg-blue-900/40 text-blue-300 border border-blue-500/30 px-4 py-2 rounded-full text-sm font-medium">Institutional Representation</span>
                </div>
              </div>

              {/* Representative Council */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Honorable</h3>
                    <p className="text-blue-600">Representative Council</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">2023 - Present</p>
                    <p className="text-green-600 text-sm font-medium mt-1">Active</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Appointed position in the university&apos;s legislative body, participating in policy development
                  and decision-making processes that affect student welfare and institutional governance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Policy Development</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Student Advocacy</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Governance</span>
                </div>
              </div>

              {/* Chapter Lead */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-purple-500 p-7 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Chapter Lead</h3>
                    <p className="text-purple-400 font-medium">Interswitch Developer Community, University of Ibadan</p>
                  </div>
                  <div className="text-right mt-2 sm:mt-0">
                    <p className="text-gray-400 text-sm">2023 - Present</p>
                    <p className="text-green-400 text-sm font-bold mt-1">● Active</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  Leadership role in establishing and managing a developer community focused on technology
                  education, professional development, and industry-academia collaboration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-900/40 text-purple-300 border border-purple-500/30 px-4 py-2 rounded-full text-sm font-medium">Community Leadership</span>
                  <span className="bg-purple-900/40 text-purple-300 border border-purple-500/30 px-4 py-2 rounded-full text-sm font-medium">Technology Education</span>
                  <span className="bg-purple-900/40 text-purple-300 border border-purple-500/30 px-4 py-2 rounded-full text-sm font-medium">Industry Partnership</span>
                </div>
              </div>
            </div>
          </section>

          {/* Ambassador Roles */}
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 flex items-center">
              <div className="h-1 w-12 bg-gradient-to-r from-orange-500 to-yellow-400 rounded mr-4"></div>
              Brand Ambassador Roles
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Interswitch Ambassador */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-orange-500 p-7 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                <div className="flex items-center mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-orange-500/30">
                    <span className="text-white font-bold text-xl">I</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Interswitch</h3>
                    <p className="text-orange-400 text-sm font-medium">Brand Ambassador</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  Representing Nigeria&apos;s leading fintech company in educational outreach, community engagement,
                  and promoting digital financial inclusion initiatives.
                </p>
                <div className="text-xs text-gray-400 mb-4 font-semibold">2023 - Present</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-900/40 text-orange-300 border border-orange-500/30 px-3 py-1 rounded-full text-xs font-medium">Fintech</span>
                  <span className="bg-orange-900/40 text-orange-300 border border-orange-500/30 px-3 py-1 rounded-full text-xs font-medium">Digital Inclusion</span>
                </div>
              </div>

              {/* Cowrywise Ambassador */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-blue-500 p-7 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="flex items-center mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-blue-500/30">
                    <span className="text-white font-bold text-xl">C</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Cowrywise</h3>
                    <p className="text-blue-400 text-sm font-medium">Brand Ambassador</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  Advocating for innovative financial technology solutions and promoting financial literacy
                  among young adults and students.
                </p>
                <div className="text-xs text-gray-400 mb-4 font-semibold">2023 - Present</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-900/40 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-medium">Financial Tech</span>
                  <span className="bg-blue-900/40 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full text-xs font-medium">Youth Finance</span>
                </div>
              </div>

              {/* GeeksforGeeks Ambassador */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-700 border border-slate-600 hover:border-green-500 p-7 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
                <div className="flex items-center mb-5">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mr-4 shadow-lg shadow-green-500/30">
                    <span className="text-white font-bold text-lg">G</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">GeeksforGeeks</h3>
                    <p className="text-green-400 text-sm font-medium">Mantri / Ambassador</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  Promoting computer science education and technical literacy through community building,
                  educational content creation, and mentorship programs.
                </p>
                <div className="text-xs text-gray-400 mb-4 font-semibold">2023 - Present</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-900/40 text-green-300 border border-green-500/30 px-3 py-1 rounded-full text-xs font-medium">Tech Education</span>
                  <span className="bg-green-900/40 text-green-300 border border-green-500/30 px-3 py-1 rounded-full text-xs font-medium">Community</span>
                </div>
              </div>
            </div>
          </section>

          {/* Global Programs & Certifications */}
          <section className="mb-20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 flex items-center">
              <div className="h-1 w-12 bg-gradient-to-r from-red-500 to-pink-400 rounded mr-4"></div>
              Global Programs & Certifications
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Harvard ALP */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-red-600 font-bold text-lg">H</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Harvard Advanced Leadership Program</h3>
                    <p className="text-gray-600">Alumni</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Competitive global leadership development program focusing on institutional leadership,
                  governance, and strategic planning. Selected through rigorous application process.
                </p>
                <div className="text-sm text-gray-500 mb-3">Completed 2024</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Global Leadership</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Institutional Governance</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Strategic Planning</span>
                </div>
              </div>

              {/* AIIDEV */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-indigo-600 font-bold text-lg">A</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">AIIDEV</h3>
                    <p className="text-gray-600">SDG Alumni & Delegate</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  International development program focused on youth leadership in sustainable development
                  and global policy processes. Competitive selection for SDG advocacy and implementation.
                </p>
                <div className="text-sm text-gray-500 mb-3">2023 - Present</div>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">SDG Advocacy</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Global Policy</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">Youth Leadership</span>
                </div>
              </div>
            </div>
          </section>

          {/* Certificates & Awards */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Certificates & Professional Development</h2>

            <div className="grid gap-4">
              {/* AWS Certifications */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">AWS Certified Solutions Architect</h3>
                    <p className="text-orange-600">Amazon Web Services</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">2023</p>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Active</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Professional certification demonstrating expertise in designing distributed systems on AWS platform,
                  including architectural best practices and cost optimization.
                </p>
              </div>

              {/* Google Cloud Professional */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Google Cloud Professional Developer</h3>
                    <p className="text-blue-600">Google Cloud Platform</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">2023</p>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Active</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Certification validating skills in building scalable applications and managing cloud infrastructure
                  on Google Cloud Platform with focus on DevOps practices.
                </p>
              </div>

              {/* Microsoft Azure */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Microsoft Certified: Azure AI Engineer</h3>
                    <p className="text-purple-600">Microsoft Azure</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">2024</p>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Active</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Professional certification demonstrating competence in implementing AI solutions on Azure,
                  including machine learning model deployment and responsible AI practices.
                </p>
              </div>

              {/* Leadership Certificate */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Advanced Leadership Certificate</h3>
                    <p className="text-red-600">Harvard University</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-500 text-sm">2024</p>
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Completed</span>
                  </div>
                </div>
                <p className="text-gray-700">
                  Comprehensive leadership development program covering institutional governance, strategic planning,
                  and cross-cultural leadership dynamics in global contexts.
                </p>
              </div>
            </div>
          </section>

          {/* Professional Affiliations */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Professional Affiliations</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Computer Science Department */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Computer Science Department</h3>
                <p className="text-blue-600 mb-2">University of Ibadan</p>
                <p className="text-gray-700 mb-4">
                  Active member of the departmental community contributing to academic governance,
                  student development, and institutional advancement.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Academic Governance</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Student Leadership</span>
                </div>
              </div>

              {/* Interswitch Developer Community */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Interswitch Developer Community</h3>
                <p className="text-orange-600 mb-2">Chapter Lead & Member</p>
                <p className="text-gray-700 mb-4">
                  Founding member and current leader of the developer community focused on technology
                  education and industry-academia collaboration.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Community Leadership</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Technology Education</span>
                </div>
              </div>

              {/* Techqings Foundation */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Techqings Foundation</h3>
                <p className="text-purple-600 mb-2">Founder & Executive Director</p>
                <p className="text-gray-700 mb-4">
                  Founder and leader of the gender-equity intervention focused on capacity building
                  for women in technology through structured training and mentorship.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Gender Equity</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Social Impact</span>
                </div>
              </div>

              {/* SDG Networks */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">SDG Implementation Networks</h3>
                <p className="text-green-600 mb-2">AIIDEV Alumni & Delegate</p>
                <p className="text-gray-700 mb-4">
                  Active participant in global sustainable development networks, contributing to
                  SDG advocacy and implementation at local and international levels.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">SDG Advocacy</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Global Networks</span>
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