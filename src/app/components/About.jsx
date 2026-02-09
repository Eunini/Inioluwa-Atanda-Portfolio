"use client";
import React, { useTransition, useState } from "react";
import { SiNextdotjs, SiRedux, SiReact, SiFirebase, SiJavascript, SiHtml5, SiCss3, SiDocker, SiGitforwindows, SiGithub, SiBootstrap, SiMongodb, SiPython, SiDjango, SiPhp, SiTailwindcss, SiReactrouter, SiMui, SiTypescript, SiMysql, SiPostgresql } from "react-icons/si";
import {TbBrandThreejs, TbBrandNodejs} from "react-icons/tb";
import {FaAws} from "react-icons/fa";
import {DiJenkins, DiKubernetes} from "react-icons/di";
import {SiTerraform, SiPytorch, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, SiJupyter, SiGrafana, SiPrometheus, SiOpenai, SiHuggingface} from "react-icons/si";
import TabButton from "../components/TabButton";
import { usePortfolio } from "../context/PortfolioContext";

const AboutSection = () => {
  const { mode } = usePortfolio();
  const [tab, setTab] = useState(mode === 'career' ? "skills" : "leadership");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const TAB_DATA = mode === 'career' ? [
    {
      title: "Skills",
      id: "skills",
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Frontend Technologies</h4>
            <ul className="flex flex-wrap gap-4 justify-start items-center">
              <li className="flex flex-col items-center">
                <SiReact size={40} title="React.js" className="text-blue-400" />
                <span className="text-xs text-gray-400 mt-1">React</span>
              </li>
              <li className="flex flex-col items-center">
                <SiNextdotjs size={40} title="Next.js" className="text-white" />
                <span className="text-xs text-gray-400 mt-1">Next.js</span>
              </li>
              <li className="flex flex-col items-center">
                <SiTypescript size={40} title="TypeScript" className="text-blue-600" />
                <span className="text-xs text-gray-400 mt-1">TypeScript</span>
              </li>
              <li className="flex flex-col items-center">
                <SiJavascript size={40} title="JavaScript" className="text-yellow-400" />
                <span className="text-xs text-gray-400 mt-1">JavaScript</span>
              </li>
              <li className="flex flex-col items-center">
                <SiRedux size={40} title="Redux" className="text-purple-500" />
                <span className="text-xs text-gray-400 mt-1">Redux</span>
              </li>
              <li className="flex flex-col items-center">
                <SiReactrouter size={40} title="React Router" className="text-red-500" />
                <span className="text-xs text-gray-400 mt-1">React Router</span>
              </li>
              <li className="flex flex-col items-center">
                <SiMui size={40} title="Material-UI" className="text-blue-500" />
                <span className="text-xs text-gray-400 mt-1">Material-UI</span>
              </li>
              <li className="flex flex-col items-center">
                <SiTailwindcss size={40} title="Tailwind CSS" className="text-cyan-400" />
                <span className="text-xs text-gray-400 mt-1">Tailwind</span>
              </li>
              <li className="flex flex-col items-center">
                <SiHtml5 size={40} title="HTML5" className="text-orange-500" />
                <span className="text-xs text-gray-400 mt-1">HTML5</span>
              </li>
              <li className="flex flex-col items-center">
                <SiCss3 size={40} title="CSS3" className="text-blue-400" />
                <span className="text-xs text-gray-400 mt-1">CSS3</span>
              </li>
              <li className="flex flex-col items-center">
                <SiBootstrap size={40} title="Bootstrap" className="text-purple-600" />
                <span className="text-xs text-gray-400 mt-1">Bootstrap</span>
              </li>
              <li className="flex flex-col items-center">
                <TbBrandThreejs size={40} title="Three.js" className="text-purple-600" />
                <span className="text-xs text-gray-400 mt-1">Three.js</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Backend Technologies</h4>
            <ul className="flex flex-wrap gap-4 justify-start items-center">
              <li className="flex flex-col items-center">
                <TbBrandNodejs size={40} title="Node.js" className="text-green-600" />
                <span className="text-xs text-gray-400 mt-1">Node.js</span>
              </li>
              <li className="flex flex-col items-center">
                <SiPython size={40} title="Python" className="text-blue-500" />
                <span className="text-xs text-gray-400 mt-1">Python</span>
              </li>
              <li className="flex flex-col items-center">
                <SiDjango size={40} title="Django" className="text-green-700" />
                <span className="text-xs text-gray-400 mt-1">Django</span>
              </li>
              <li className="flex flex-col items-center">
                <SiPhp size={40} title="PHP" className="text-indigo-500" />
                <span className="text-xs text-gray-400 mt-1">PHP</span>
              </li>
              <li className="flex flex-col items-center">
                <SiMongodb size={40} title="MongoDB" className="text-green-600" />
                <span className="text-xs text-gray-400 mt-1">MongoDB</span>
              </li>
              <li className="flex flex-col items-center">
                <SiMysql size={40} title="MySQL" className="text-blue-600" />
                <span className="text-xs text-gray-400 mt-1">MySQL</span>
              </li>
              <li className="flex flex-col items-center">
                <SiPostgresql size={40} title="PostgreSQL" className="text-blue-700" />
                <span className="text-xs text-gray-400 mt-1">PostgreSQL</span>
              </li>
              <li className="flex flex-col items-center">
                <SiFirebase size={40} title="Firebase" className="text-orange-500" />
                <span className="text-xs text-gray-400 mt-1">Firebase</span>
              </li>
              <li className="flex flex-col items-center">
                <FaAws size={40} title="AWS" className="text-orange-400" />
                <span className="text-xs text-gray-400 mt-1">AWS</span>
              </li>
              <li className="flex flex-col items-center">
                <SiDocker size={40} title="Docker" className="text-blue-500" />
                <span className="text-xs text-gray-400 mt-1">Docker</span>
              </li>
              <li className="flex flex-col items-center">
                <SiGitforwindows size={40} title="Git" className="text-orange-600" />
                <span className="text-xs text-gray-400 mt-1">Git</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">AI Automation & Agents</h4>
            <ul className="flex flex-wrap gap-4 justify-start items-center">
              <li className="flex flex-col items-center">
                <SiOpenai size={40} title="OpenAI" className="text-white" />
                <span className="text-xs text-gray-400 mt-1">OpenAI APIs</span>
              </li>
              <li className="flex flex-col items-center">
                <SiHuggingface size={40} title="Hugging Face" className="text-yellow-400" />
                <span className="text-xs text-gray-400 mt-1">Hugging Face</span>
              </li>
              <li className="flex flex-col items-center">
                <SiPython size={40} title="LangChain" className="text-blue-500" />
                <span className="text-xs text-gray-400 mt-1">LangChain</span>
              </li>
              <li className="flex flex-col items-center">
                <SiDocker size={40} title="Agent Frameworks" className="text-blue-500" />
                <span className="text-xs text-gray-400 mt-1">Agent Frameworks</span>
              </li>
              <li className="flex flex-col items-center">
                <SiFirebase size={40} title="Vector DB" className="text-orange-500" />
                <span className="text-xs text-gray-400 mt-1">Vector Databases</span>
              </li>
              <li className="flex flex-col items-center">
                <SiTypescript size={40} title="Automation" className="text-blue-600" />
                <span className="text-xs text-gray-400 mt-1">Automation Tools</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Cloud DevOps Tools</h4>
            <ul className="flex flex-wrap gap-4 justify-start items-center">
              <li className="flex flex-col items-center">
                <DiKubernetes size={40} title="Kubernetes" className="text-blue-500" />
                <span className="text-xs text-gray-400 mt-1">Kubernetes</span>
              </li>
              <li className="flex flex-col items-center">
                <SiDocker size={40} title="Docker" className="text-blue-500" />
                <span className="text-xs text-gray-400 mt-1">Docker</span>
              </li>
              <li className="flex flex-col items-center">
                <DiJenkins size={40} title="Jenkins" className="text-gray-300" />
                <span className="text-xs text-gray-400 mt-1">Jenkins</span>
              </li>
              <li className="flex flex-col items-center">
                <SiTerraform size={40} title="Terraform" className="text-purple-500" />
                <span className="text-xs text-gray-400 mt-1">Terraform</span>
              </li>
              <li className="flex flex-col items-center">
                <SiPrometheus size={40} title="Prometheus" className="text-orange-500" />
                <span className="text-xs text-gray-400 mt-1">Prometheus</span>
              </li>
              <li className="flex flex-col items-center">
                <SiGrafana size={40} title="Grafana" className="text-orange-600" />
                <span className="text-xs text-gray-400 mt-1">Grafana</span>
              </li>
              <li className="flex flex-col items-center">
                <FaAws size={40} title="AWS" className="text-orange-400" />
                <span className="text-xs text-gray-400 mt-1">AWS</span>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-2">Microsoft</h4>
            <p className="text-blue-400 mb-1">AI Software Engineer</p>
            <p className="text-gray-400 text-sm">2023 - Present</p>
            <p className="text-gray-300 mt-3">Developed AI-powered applications and machine learning solutions, focusing on deep learning models and natural language processing systems.</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-2">Google</h4>
            <p className="text-blue-400 mb-1">Cloud DevOps Engineer</p>
            <p className="text-gray-400 text-sm">2022 - 2023</p>
            <p className="text-gray-300 mt-3">Designed and implemented cloud infrastructure solutions using Google Cloud Platform, with expertise in Kubernetes, CI/CD pipelines, and infrastructure as code.</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-2">Amazon</h4>
            <p className="text-blue-400 mb-1">Software Engineer</p>
            <p className="text-gray-400 text-sm">2021 - 2022</p>
            <p className="text-gray-300 mt-3">Built scalable web applications and microservices, focusing on performance optimization and system reliability in high-traffic environments.</p>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-2">University of Ibadan</h4>
            <p className="text-blue-400 mb-1">Bachelor of Science in Computer Science</p>
            <p className="text-gray-400 text-sm">Expected Graduation: 2026</p>
            <p className="text-gray-300 mt-3">Specializing in software development, algorithms, and system design with a focus on practical applications and innovation.</p>
          </div>
        </div>
      ),
    },
  ] : [
    {
      title: "Leadership",
      id: "leadership",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-3">Current Leadership Roles</h4>
            <ul className="space-y-4">
              <li className="border-l-4 border-blue-500 pl-4">
                <h5 className="text-blue-400 font-medium">Vice President - Computer Science Department, UI</h5>
                <p className="text-gray-300 text-sm">Leading departmental coordination, representation, and decision-making</p>
              </li>
              <li className="border-l-4 border-green-500 pl-4">
                <h5 className="text-green-400 font-medium">Chapter Lead - Interswitch Developer Community, UI</h5>
                <p className="text-gray-300 text-sm">Building and leading the developer community at University of Ibadan</p>
              </li>
              <li className="border-l-4 border-purple-500 pl-4">
                <h5 className="text-purple-400 font-medium">Official Ambassador - Interswitch & Cowrywise</h5>
                <p className="text-gray-300 text-sm">Representing leading fintech companies in educational outreach</p>
                <p className="text-gray-400 text-xs mt-1">Backend Team Lead @ Cowrywise (2024-2025)</p>
              </li>
              <li className="border-l-4 border-pink-500 pl-4">
                <h5 className="text-pink-400 font-medium">Policy & Advocate Lead - IgniteHer Unibadan Chapter</h5>
                <p className="text-gray-300 text-sm">Driving policy advocacy and gender equity initiatives in tech</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-3">Initiatives Founded</h4>
            <ul className="space-y-4">
              <li className="border-l-4 border-yellow-500 pl-4">
                <h5 className="text-yellow-400 font-medium">Skillsphere Program</h5>
                <p className="text-gray-300 text-sm">Training program empowering students outside CS with IT skills during tenure as Vice President</p>
              </li>
              <li className="border-l-4 border-red-500 pl-4">
                <h5 className="text-red-400 font-medium">QUACITO Initiative</h5>
                <p className="text-gray-300 text-sm">NACOS Faculty Challenge promoting advanced computing, innovation, and technology optimization</p>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Advocacy",
      id: "advocacy",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-3">SDG Advocacy</h4>
            <div className="mb-4">
              <p className="text-gray-300 mb-3 font-semibold">AIIDEV Africa - Alumni & Advocate</p>
              <p className="text-gray-300 text-sm mb-3">AIIDEV Africa is a think-tank and solution-centered organization dedicated to accelerating sustainable development across Africa through digital innovation and community-driven solutions. Their mission is to drive transformative change in Africa through impactful, inclusive SDG initiatives, aiming to reach 40% of the population across 54 countries by 2030.</p>
              <p className="text-gray-400 text-sm italic">As an Alumni of their program, I actively contribute to SDG advocacy and community-driven sustainable development initiatives.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-blue-900/30 rounded">
                <div className="text-2xl font-bold text-blue-400">SDG 5</div>
                <div className="text-sm text-gray-300">Gender Equality</div>
              </div>
              <div className="text-center p-3 bg-green-900/30 rounded">
                <div className="text-2xl font-bold text-green-400">SDG 4</div>
                <div className="text-sm text-gray-300">Quality Education</div>
              </div>
              <div className="text-center p-3 bg-orange-900/30 rounded">
                <div className="text-2xl font-bold text-orange-400">SDG 8</div>
                <div className="text-sm text-gray-300">Decent Work</div>
              </div>
              <div className="text-center p-3 bg-purple-900/30 rounded">
                <div className="text-2xl font-bold text-purple-400">SDG 9</div>
                <div className="text-sm text-gray-300">Industry & Innovation</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-3">Techqings Foundation</h4>
            <p className="text-gray-300 mb-4">Non-profit community focused on empowering and mentoring women in tech</p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-gray-300">Artificial Intelligence</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span className="text-gray-300">Cybersecurity</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                <span className="text-gray-300">DevOps</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-3">Harvard ALP Alumni</h4>
            <p className="text-gray-300 mb-4">Completed Harvard Aspire Leadership Program, bringing global leadership insights to local initiatives</p>
          </div>
          
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h4 className="text-xl font-semibold text-white mb-3">Awards & Recognition</h4>
            <ul className="space-y-3">
              <li className="border-l-4 border-pink-500 pl-4">
                <h5 className="text-pink-400 font-medium">Top 30 Participant - IAM GASA 2025</h5>
                <p className="text-gray-300 text-sm">Girls Accelerating Sustainable Actions competition - recognized for innovative solutions addressing sustainable development challenges</p>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="text-gray-900 py-12 sm:py-16 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-500 dark:bg-blue-400 mx-auto mb-6 sm:mb-8"></div>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
              I&apos;m a passionate <span className="text-blue-600 dark:text-blue-400 font-medium">
                {mode === 'career' ? 'Full-Stack Developer' : 'Youth Leader & Advocate'}
              </span> with 
              a keen eye for creating {mode === 'career' ? 'seamless digital experiences' : 'positive social impact'}. My journey in {mode === 'career' ? 'software development' : 'leadership and advocacy'} began with 
              curiosity and has evolved into a deep commitment to {mode === 'career' ? 'building solutions that matter' : 'empowering communities and driving change'}.
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {mode === 'career' ? (
                <>
                  As an <span className="text-blue-600 dark:text-blue-400 font-medium">AI Software Engineer</span> and 
                  <span className="text-blue-600 dark:text-blue-400 font-medium"> Cloud DevOps Engineer</span>, I bring 
                  hands-on experience in both fields with a focus on deep, critical thinking and engineering innovative 
                  solutions to complex problems. I have worked with leading companies including 
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Microsoft</span>, 
                  <span className="text-blue-600 dark:text-blue-400 font-medium"> Google</span>, and 
                  <span className="text-blue-600 dark:text-blue-400 font-medium"> Amazon</span>, where I developed 
                  AI-powered applications and implemented robust cloud infrastructure solutions.
                </>
              ) : (
                <>
                  Through my roles as Vice President, community leader, and SDG advocate, I focus on building inclusive 
                  communities and driving initiatives that create lasting impact. My work spans from educational programs 
                  to advocacy for gender equality in technology, always with a commitment to servant leadership and 
                  sustainable development.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {mode === 'career' ? (
            <>
              <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">AI Models Deployed</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">100+</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Cloud Deployments</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">99.9%</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">System Uptime</div>
              </div>
            </>
          ) : (
            <>
              <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">5+</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Leadership Roles</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">1000+</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Lives Impacted</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">SDGs Advocated</div>
              </div>
              <div className="text-center p-4 sm:p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</div>
                <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Initiatives Founded</div>
              </div>
            </>
          )}
        </div>

        {/* Tabs Section */}
        <div className="flex flex-row justify-center sm:justify-start mb-6 sm:mb-8 space-x-2 sm:space-x-4">
          {TAB_DATA.map((tabData) => (
            <TabButton
              key={tabData.id}
              selectTab={() => handleTabChange(tabData.id)}
              active={tab === tabData.id}
            >
              {tabData.title}
            </TabButton>
          ))}
        </div>
        <div className="min-h-[300px]">
          {TAB_DATA.find((t) => t.id === tab)?.content}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
