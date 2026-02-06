import LeadershipNavbar from "../components/LeadershipNavbar";
import LeadershipFooter from "../components/LeadershipFooter";
import Link from "next/link";

export const metadata = {
  title: "Leadership & Impact",
  description: "Inioluwa Atanda's leadership portfolio showcasing governance roles, institution-building initiatives, and youth representation in policy spaces.",
};

export default function Leadership() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <LeadershipNavbar />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <section className="mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Leadership & Impact
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl">
              Inioluwa Atanda serves in governance structures and leads initiatives focused on youth representation,
              gender equity, and sustainable development. Her work emphasizes evidence-based approaches to systems
              building and institutional development.
            </p>
          </section>

          {/* Leadership Overview */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Leadership Overview</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Inioluwa Atanda serves as Vice President-elect of the Computer Science Department at the University of Ibadan,
                where she leads departmental coordination and represents student interests in academic governance. Her role
                involves facilitating communication between faculty, students, and administration while contributing to
                decision-making processes that affect departmental policy and resource allocation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                As Chapter Lead for the Interswitch Developer Community at the University of Ibadan, she established and
                manages a developer community focused on technology education and professional development. This initiative
                serves as a bridge between industry and academia, providing students with practical skills and networking
                opportunities essential for technology careers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Her work as an Official Ambassador for Interswitch and Cowrywise extends her leadership into fintech advocacy,
                where she represents these organizations in educational outreach and community engagement activities.
                This role involves communicating complex financial technology concepts to diverse audiences and promoting
                digital financial inclusion initiatives.
              </p>
            </div>
          </section>

          {/* Formal Leadership Roles */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Formal Leadership Roles</h2>
            <div className="grid gap-6">

              {/* Vice President Role */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Vice President-elect</h3>
                <p className="text-blue-600 mb-1">Computer Science Department, University of Ibadan</p>
                <p className="text-gray-500 text-sm mb-4">2024 - Present</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Scope of Responsibility</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Departmental coordination and administration</li>
                    <li>• Student representation in academic governance</li>
                    <li>• Policy development and implementation oversight</li>
                    <li>• Resource allocation and budget management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Contributions</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Established structured communication channels between stakeholders</li>
                    <li>• Implemented feedback mechanisms for continuous improvement</li>
                    <li>• Coordinated cross-functional initiatives for departmental development</li>
                  </ul>
                </div>
              </div>

              {/* Representative Council Role */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Honorable</h3>
                <p className="text-blue-600 mb-1">Representative Council</p>
                <p className="text-gray-500 text-sm mb-4">2023 - Present</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Scope of Responsibility</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Legislative representation and policy advocacy</li>
                    <li>• Committee participation in governance decisions</li>
                    <li>• Stakeholder engagement and consensus building</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Contributions</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Contributed to policy development affecting student welfare</li>
                    <li>• Facilitated dialogue between administration and student body</li>
                    <li>• Promoted evidence-based decision making in governance</li>
                  </ul>
                </div>
              </div>

              {/* Chapter Lead Role */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Chapter Lead</h3>
                <p className="text-blue-600 mb-1">Interswitch Developer Community, University of Ibadan</p>
                <p className="text-gray-500 text-sm mb-4">2023 - Present</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Scope of Responsibility</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Community management and growth</li>
                    <li>• Program development and execution</li>
                    <li>• Industry-academia collaboration facilitation</li>
                    <li>• Member development and mentorship</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Contributions</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Built active developer community of 200+ members</li>
                    <li>• Organized technical workshops and industry networking events</li>
                    <li>• Established partnerships with technology companies</li>
                    <li>• Created pathways for student professional development</li>
                  </ul>
                </div>
              </div>

              {/* Brand Ambassador Role */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Official Ambassador</h3>
                <p className="text-blue-600 mb-1">Interswitch & Cowrywise</p>
                <p className="text-gray-500 text-sm mb-4">2023 - Present</p>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Scope of Responsibility</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Brand representation and advocacy</li>
                    <li>• Educational outreach and community engagement</li>
                    <li>• Partnership development and relationship management</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Key Contributions</h4>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Represented organizations in university and community settings</li>
                    <li>• Developed educational content for fintech awareness</li>
                    <li>• Facilitated industry connections for students and faculty</li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* Initiatives Founded */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Initiatives Founded</h2>

            {/* Skillsphere Program */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skillsphere Program</h3>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Problem Definition</h4>
                <p className="text-gray-700">
                  Computer Science curricula often focus on theoretical foundations but leave gaps in practical IT skills
                  needed for modern workplaces. Students outside the CS department lack access to technology training
                  essential for digital economy participation.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Target Population</h4>
                <p className="text-gray-700">
                  Undergraduate students from non-technical disciplines seeking to develop practical IT competencies
                  for career advancement and digital literacy.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Intervention Model</h4>
                <p className="text-gray-700 mb-3">
                  Structured training program combining theoretical instruction with hands-on application:
                </p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Modular curriculum covering essential IT skills</li>
                  <li>• Practical workshops with real-world applications</li>
                  <li>• Peer mentoring and collaborative learning</li>
                  <li>• Industry-relevant project work</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Outcomes</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Enhanced employability through practical skill development</li>
                  <li>• Improved digital literacy across disciplines</li>
                  <li>• Increased access to technology education for underrepresented groups</li>
                  <li>• Established sustainable training framework for ongoing implementation</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Scalability Potential</h4>
                <p className="text-gray-700">
                  Program framework can be adapted for other institutions and expanded to include advanced topics.
                  Partnership model enables resource sharing and broader implementation across university systems.
                </p>
              </div>
            </div>

            {/* QUACITO Initiative */}
            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">QUACITO Initiative</h3>
              <p className="text-gray-600 mb-6 italic">
                Applied computing, innovation, and problem-solving intervention in tertiary education
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Objectives</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Promote advanced computing and innovation in academic settings</li>
                  <li>• Develop problem-solving competencies through structured challenges</li>
                  <li>• Foster collaboration between faculty, industry, and students</li>
                  <li>• Create pathways for technology-driven educational innovation</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Structure</h4>
                <p className="text-gray-700 mb-3">
                  Multi-level challenge framework designed for progressive skill development:
                </p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• Foundational challenges focusing on core computing concepts</li>
                  <li>• Intermediate problems requiring algorithmic thinking</li>
                  <li>• Advanced challenges involving system design and optimization</li>
                  <li>• Innovation tracks for creative problem-solving approaches</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Skills Tested</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Computational thinking and algorithm design</li>
                  <li>• Problem decomposition and solution architecture</li>
                  <li>• Code efficiency and optimization techniques</li>
                  <li>• Innovation and creative problem-solving</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">Faculty + Industry Involvement</h4>
                <p className="text-gray-700">
                  Initiative involves Computer Science faculty for academic oversight and industry partners for
                  real-world problem scenarios and mentorship. This collaboration ensures relevance to current
                  technology industry standards and provides participants with professional networking opportunities.
                </p>
              </div>
            </div>
          </section>

          {/* Women's Rights & Gender Equity */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Women&apos;s Rights & Gender Equity</h2>

            <div className="bg-white border border-gray-200 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Techqings Foundation</h3>
              <p className="text-gray-600 mb-6 italic">
                A gender-equity intervention focused on capacity building for women in technology
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Gender Gap Problem Statement</h4>
                <p className="text-gray-700">
                  Women remain underrepresented in technology fields despite comprising half of the global population.
                  This gap results in lost innovation potential and perpetuates gender disparities in economic
                  opportunities and digital access.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Target Demographics</h4>
                <p className="text-gray-700">
                  Women and girls aged 18-35 pursuing technology education or careers, with focus on those facing
                  systemic barriers to entry and advancement in technology sectors.
                </p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Technical Focus Areas</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Artificial Intelligence and Machine Learning</li>
                  <li>• Cybersecurity fundamentals and practices</li>
                  <li>• DevOps and cloud computing</li>
                  <li>• Software development and programming</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2">Mentorship & Empowerment Model</h4>
                <p className="text-gray-700 mb-3">
                  Structured support system combining technical training with professional development:
                </p>
                <ul className="text-gray-700 space-y-1 ml-4">
                  <li>• One-on-one mentorship with industry professionals</li>
                  <li>• Peer support networks and community building</li>
                  <li>• Leadership development and career guidance</li>
                  <li>• Networking opportunities and industry exposure</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">SDG Relevance</h4>
                <p className="text-gray-700">
                  Initiative directly supports SDG 5 (Gender Equality) by addressing gender disparities in technology
                  access and participation. Contributes to SDG 4 (Quality Education) through targeted skill development
                  and SDG 8 (Decent Work) by improving economic opportunities for women in high-growth technology sectors.
                </p>
              </div>
            </div>
          </section>

          {/* Leadership Philosophy */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Leadership Philosophy</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                Effective leadership requires balancing youth perspectives with institutional responsibilities.
                My approach emphasizes evidence-based decision making, accountability, and long-term systems thinking.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Youth representation must go beyond symbolic participation to include meaningful contributions
                to governance processes. This involves building capacity for informed decision making and
                fostering environments where young voices can influence policy outcomes.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Equity and access form the foundation of sustainable development. Leadership roles carry
                responsibility to ensure that institutional processes serve diverse constituencies and
                create pathways for underrepresented groups to participate in decision making.
              </p>
            </div>
          </section>

          {/* Navigation Links */}
          <section className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/sdg-work"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                View SDG Work
              </Link>
              <Link
                href="/initiatives"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
              >
                View Initiatives
              </Link>
              <Link
                href="/recognition"
                className="inline-block bg-white text-gray-900 border-2 border-gray-900 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-medium"
              >
                View Recognition
              </Link>
            </div>
          </section>

        </div>
      </main>

      <LeadershipFooter />
    </div>
  );
}