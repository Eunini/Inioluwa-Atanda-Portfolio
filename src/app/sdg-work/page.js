import LeadershipNavbar from "../components/LeadershipNavbar";
import LeadershipFooter from "../components/LeadershipFooter";

export const metadata = {
  title: "SDG Work",
  description: "Inioluwa Atanda's work aligned with United Nations Sustainable Development Goals, focusing on quality education, gender equality, decent work, and industry innovation.",
};

export default function SDGWork() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <LeadershipNavbar />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <section className="mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Work Aligned with the United Nations Sustainable Development Goals
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl">
              Inioluwa Atanda&apos;s initiatives and leadership roles contribute to multiple Sustainable Development Goals
              through structured interventions in education, gender equity, and technology innovation.
            </p>
          </section>

          {/* SDG 4 - Quality Education */}
          <section className="mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  4
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Quality Education</h2>
                  <p className="text-gray-600">Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h3>
                  <p className="text-gray-700 mb-4">
                    Limited access to practical technology education and skills development opportunities,
                    particularly for students outside computer science disciplines and women in technology fields.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Programs / Roles Involved</h3>
                  <ul className="text-gray-700 space-y-1 mb-4">
                    <li>• Skillsphere Program (Vice President, CS Department)</li>
                    <li>• QUACITO Initiative (Departmental Innovation)</li>
                    <li>• Interswitch Developer Community (Chapter Lead)</li>
                    <li>• Techqings Foundation (Gender Equity in Tech)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Target Population</h3>
                  <p className="text-gray-700 mb-4">
                    University students, particularly those from non-technical disciplines and women pursuing
                    technology education and careers.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Outcome / Contribution</h3>
                  <p className="text-gray-700">
                    Established sustainable frameworks for technology education delivery, reaching 200+ students
                    through structured programs and creating pathways for underrepresented groups to access
                    quality technology education and career opportunities.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SDG 5 - Gender Equality */}
          <section className="mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-pink-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  5
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Gender Equality</h2>
                  <p className="text-gray-600">Achieve gender equality and empower all women and girls</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h3>
                  <p className="text-gray-700 mb-4">
                    Persistent gender disparities in technology education and careers, with women underrepresented
                    in STEM fields and facing systemic barriers to entry and advancement.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Programs / Roles Involved</h3>
                  <ul className="text-gray-700 space-y-1 mb-4">
                    <li>• Techqings Foundation (Founder & Lead)</li>
                    <li>• Vice President, CS Department (Gender Equity Advocacy)</li>
                    <li>• Interswitch Developer Community (Inclusive Leadership)</li>
                    <li>• AIIDEV SDG Alumni & Delegate (Gender Advocacy)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Target Population</h3>
                  <p className="text-gray-700 mb-4">
                    Women and girls aged 18-35 pursuing technology education, with focus on those facing
                    barriers to entry in technology sectors.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Outcome / Contribution</h3>
                  <p className="text-gray-700">
                    Developed targeted interventions addressing gender gaps in technology, established mentorship
                    frameworks, and created inclusive environments that support women&apos;s advancement in technology
                    fields and leadership roles.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SDG 8 - Decent Work & Economic Growth */}
          <section className="mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  8
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Decent Work & Economic Growth</h2>
                  <p className="text-gray-600">Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h3>
                  <p className="text-gray-700 mb-4">
                    Skills gaps between academic training and industry requirements limit employment opportunities,
                    particularly in technology sectors where practical competencies are essential for decent work.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Programs / Roles Involved</h3>
                  <ul className="text-gray-700 space-y-1 mb-4">
                    <li>• Interswitch Developer Community (Industry-Academia Bridge)</li>
                    <li>• Interswitch & Cowrywise Brand Ambassador (Fintech Career Pathways)</li>
                    <li>• Skillsphere Program (Employability Enhancement)</li>
                    <li>• QUACITO Initiative (Industry-Relevant Skills)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Target Population</h3>
                  <p className="text-gray-700 mb-4">
                    University students and graduates seeking technology careers, with emphasis on developing
                    practical skills required for productive employment in digital economy sectors.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Outcome / Contribution</h3>
                  <p className="text-gray-700">
                    Created structured pathways connecting education with employment opportunities, facilitated
                    industry partnerships, and developed practical training programs that enhance employability
                    and support decent work in technology and fintech sectors.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SDG 9 - Industry, Innovation & Infrastructure */}
          <section className="mb-16">
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mr-4">
                  9
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Industry, Innovation & Infrastructure</h2>
                  <p className="text-gray-600">Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h3>
                  <p className="text-gray-700 mb-4">
                    Limited innovation capacity and infrastructure for technology development in academic settings,
                    with gaps between theoretical education and practical innovation processes.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Programs / Roles Involved</h3>
                  <ul className="text-gray-700 space-y-1 mb-4">
                    <li>• QUACITO Initiative (Innovation Framework)</li>
                    <li>• Interswitch Developer Community (Technology Innovation)</li>
                    <li>• Vice President, CS Department (Infrastructure Development)</li>
                    <li>• Harvard ALP Alumni (Global Innovation Networks)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Target Population</h3>
                  <p className="text-gray-700 mb-4">
                    Technology students, researchers, and faculty seeking to develop innovation capabilities
                    and contribute to technology infrastructure development.
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Outcome / Contribution</h3>
                  <p className="text-gray-700">
                    Established innovation frameworks and infrastructure for technology development, created
                    collaborative environments for industry-academia partnerships, and developed systems that
                    support sustainable technology innovation and infrastructure development.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Global Programs & Affiliations */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Global Programs & Affiliations</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Harvard ALP */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Harvard Advanced Leadership Program</h3>
                <p className="text-blue-600 mb-2">Alumni</p>
                <p className="text-gray-700 mb-4">
                  Competitive global leadership development program focusing on institutional leadership,
                  governance, and systems thinking.
                </p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Leadership Exposure Gained</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Institutional governance frameworks</li>
                    <li>• Strategic planning and execution</li>
                    <li>• Cross-cultural leadership dynamics</li>
                    <li>• Policy development processes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Local Application</h4>
                  <p className="text-gray-700 text-sm">
                    Applied frameworks in university governance roles and initiative development,
                    bringing global best practices to local institutional contexts.
                  </p>
                </div>
              </div>

              {/* AIIDEV */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AIIDEV</h3>
                <p className="text-blue-600 mb-2">SDG Alumni & Delegate</p>
                <p className="text-gray-700 mb-4">
                  International development program focused on youth leadership in sustainable development
                  and global policy processes.
                </p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Leadership Exposure Gained</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• Global policy and advocacy frameworks</li>
                    <li>• International development processes</li>
                    <li>• Cross-sector collaboration models</li>
                    <li>• SDG implementation strategies</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Local Application</h4>
                  <p className="text-gray-700 text-sm">
                    Translated global insights into local initiatives, establishing connections between
                    international frameworks and community-level implementation.
                  </p>
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