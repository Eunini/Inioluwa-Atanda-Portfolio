import CareerNavbar from "../components/CareerNavbar";
import CareerFooter from "../components/CareerFooter";
import Link from "next/link";

export const metadata = {
  title: "Career & Innovation",
  description: "Inioluwa Atanda's technical expertise in AI, DevOps, and cloud technologies, demonstrating competence to execute ideas at scale.",
};

export default function Career() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <CareerNavbar />

      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <section className="mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Career & Innovation
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-4xl">
              Technical competence in AI, DevOps, and cloud technologies with demonstrated ability to execute
              complex systems at scale and deliver measurable impact.
            </p>
          </section>

          {/* A. Professional Identity */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Professional Identity</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Inioluwa Atanda</h3>
              <h4 className="text-lg text-blue-600 mb-6">AI Software Engineer | Cloud & DevOps | Systems Builder</h4>

              <p className="text-gray-700 leading-relaxed mb-4">
                Inioluwa Atanda is a software engineer specializing in AI systems and cloud infrastructure,
                with expertise in building scalable applications and automated platforms. Her work focuses
                on developing technical solutions that improve efficiency, reliability, and access to technology.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                She designs and implements systems that serve real-world needs, from AI-powered applications
                to cloud-native architectures. Her approach combines technical depth with practical problem-solving,
                ensuring solutions are both innovative and sustainable.
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                Her technical foundation enables her to execute complex projects at scale while contributing
                to broader objectives in development, infrastructure, and innovation.
              </p>

              <div>
                <h5 className="font-semibold text-gray-900 mb-3">Tech Focus Areas</h5>
                <ul className="text-gray-700 space-y-1">
                  <li>• Artificial Intelligence & Intelligent Systems</li>
                  <li>• Backend & Distributed Systems</li>
                  <li>• Cloud Infrastructure & DevOps</li>
                  <li>• Automation & Platform Engineering</li>
                  <li>• Impact-Driven Technology Solutions</li>
                </ul>
              </div>
            </div>
          </section>

          {/* B. Technical Skills */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Technical Skills</h2>

            <div className="grid gap-8">
              {/* Programming Languages */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Programming Languages</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Python</h4>
                    <p className="text-gray-600 text-sm">Advanced - AI/ML, data processing, automation</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">JavaScript/TypeScript</h4>
                    <p className="text-gray-600 text-sm">Advanced - Full-stack development, frameworks</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Java</h4>
                    <p className="text-gray-600 text-sm">Intermediate - Enterprise applications</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Go</h4>
                    <p className="text-gray-600 text-sm">Intermediate - Cloud services, APIs</p>
                  </div>
                </div>
              </div>

              {/* Frameworks & Tools */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Frameworks & Tools</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Frontend</h4>
                    <p className="text-gray-600 text-sm">React, Next.js, TypeScript, Tailwind CSS</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Backend</h4>
                    <p className="text-gray-600 text-sm">Node.js, Django, Express, FastAPI</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">AI/ML</h4>
                    <p className="text-gray-600 text-sm">TensorFlow, PyTorch, Scikit-learn, Pandas</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">DevOps</h4>
                    <p className="text-gray-600 text-sm">Docker, Kubernetes, Jenkins, Terraform</p>
                  </div>
                </div>
              </div>

              {/* AI / ML Stack */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI / ML Stack</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">Deep Learning</h4>
                    <p className="text-gray-600 text-sm">Neural networks, CNNs, RNNs, transformers</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">NLP & Computer Vision</h4>
                    <p className="text-gray-600 text-sm">Text processing, image recognition, model deployment</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">MLOps</h4>
                    <p className="text-gray-600 text-sm">Model versioning, pipeline automation, monitoring</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Data Science Tools</h4>
                    <p className="text-gray-600 text-sm">NumPy, Pandas, Jupyter, data visualization</p>
                  </div>
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud & DevOps</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">Cloud Platforms</h4>
                    <p className="text-gray-600 text-sm">AWS, Google Cloud Platform, Azure</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Infrastructure</h4>
                    <p className="text-gray-600 text-sm">Terraform, CloudFormation, Kubernetes</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">CI/CD</h4>
                    <p className="text-gray-600 text-sm">Jenkins, GitHub Actions, GitLab CI</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Monitoring</h4>
                    <p className="text-gray-600 text-sm">Prometheus, Grafana, ELK stack</p>
                  </div>
                </div>
              </div>

              {/* Databases */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Databases</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">SQL</h4>
                    <p className="text-gray-600 text-sm">PostgreSQL, MySQL, query optimization</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">NoSQL</h4>
                    <p className="text-gray-600 text-sm">MongoDB, Redis, DynamoDB</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Data Modeling</h4>
                    <p className="text-gray-600 text-sm">Schema design, indexing, performance</p>
                  </div>
                </div>
              </div>

              {/* System Design / Architecture */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">System Design / Architecture</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-gray-900">Microservices</h4>
                    <p className="text-gray-600 text-sm">Service decomposition, API design, inter-service communication</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">APIs</h4>
                    <p className="text-gray-600 text-sm">REST, GraphQL, API gateways, authentication</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Scalability</h4>
                    <p className="text-gray-600 text-sm">Load balancing, caching, database scaling, horizontal scaling</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Event-Driven Systems</h4>
                    <p className="text-gray-600 text-sm">Message queues, pub/sub patterns, stream processing</p>
                  </div>
                </div>
              </div>

              {/* Developer Tools */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Developer Tools</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Version Control</h4>
                    <p className="text-gray-600 text-sm">Git, GitHub, GitLab, branching strategies</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Containers</h4>
                    <p className="text-gray-600 text-sm">Docker, container orchestration, image optimization</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Testing</h4>
                    <p className="text-gray-600 text-sm">Unit testing, integration testing, TDD</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Monitoring</h4>
                    <p className="text-gray-600 text-sm">Application monitoring, logging, alerting</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* C. Projects */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Projects</h2>

            <div className="space-y-8">
              {/* Ubuy E-commerce Platform */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Ubuy - Modern E-commerce Platform</h3>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Problem Statement</h4>
                  <p className="text-gray-700 text-sm">Mobile phone e-commerce platforms lacked intuitive browsing, detailed specifications, and secure checkout processes, leading to poor user experience and abandoned carts.</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Your Role</h4>
                  <p className="text-gray-700 text-sm">Full-stack developer leading frontend architecture and user experience design</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Tech Stack</h4>
                  <p className="text-gray-700 text-sm">React, Next.js, Node.js, MongoDB, Stripe API, Tailwind CSS</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Architecture Overview</h4>
                  <p className="text-gray-700 text-sm">Microservices architecture with separate services for product catalog, user management, payment processing, and order fulfillment</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Outcome / Impact</h4>
                  <p className="text-gray-700 text-sm">Built platform handling 10K+ monthly transactions with 95% user satisfaction rate and 30% reduction in cart abandonment</p>
                </div>

                <div className="mt-4">
                  <a href="https://u-buy-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Demo →</a>
                </div>
              </div>

              {/* Repropack */}
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Repropack - Python Project Packaging Solution</h3>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Problem Statement</h4>
                  <p className="text-gray-700 text-sm">Python developers faced complex dependency management and deployment challenges when migrating projects across different machines and environments.</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Your Role</h4>
                  <p className="text-gray-700 text-sm">Lead developer designing automation framework and cross-platform compatibility</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Tech Stack</h4>
                  <p className="text-gray-700 text-sm">Python, Docker, FastAPI, PostgreSQL, Redis, shell scripting</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Architecture Overview</h4>
                  <p className="text-gray-700 text-sm">Containerized packaging system with automated dependency resolution, environment detection, and one-click deployment capabilities</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Outcome / Impact</h4>
                  <p className="text-gray-700 text-sm">Reduced project setup time from 2 hours to 5 minutes, enabling 500+ developers to deploy projects seamlessly across different environments</p>
                </div>

                <div className="mt-4">
                  <a href="https://repro-pack-frontend.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-sm font-medium">View Demo →</a>
                </div>
              </div>
            </div>
          </section>

          {/* F. Certifications & Technical Programs */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Certifications & Technical Programs</h2>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Harvard Advanced Leadership Program (ALP)</h3>
                <p className="text-blue-600 mb-2">Focus: Leadership Development & Systems Thinking</p>
                <p className="text-gray-500 text-sm mb-3">2024</p>
                <p className="text-gray-700 text-sm">Completed intensive program focusing on leadership in complex systems, strategic decision-making, and organizational change management. Applied learnings to youth leadership initiatives and governance structures.</p>
              </div>
            </div>
          </section>

          {/* I. Career Vision */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Career Vision</h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                My career focuses on developing technical solutions that improve access, efficiency, and equity in systems that matter. I work at the intersection of AI, cloud infrastructure, and scalable platforms to address real-world challenges in development and innovation.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The problems I aim to solve include infrastructure limitations that restrict access to technology, inefficient systems that waste resources, and technical barriers that prevent equitable participation in digital economies. My work demonstrates how technical competence enables execution at scale.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Moving forward, I will continue building systems that create sustainable value while supporting broader objectives in infrastructure development, AI accessibility, and technological equity. This work requires both deep technical expertise and understanding of how technology serves human development goals.
              </p>
            </div>
          </section>

          {/* Navigation Links */}
          <section className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/leadership"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
              >
                View Leadership Portfolio
              </Link>
              <Link
                href="/sdg-work"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                View SDG Work
              </Link>
            </div>
          </section>

        </div>
      </main>

      <CareerFooter />
    </div>
  );
}