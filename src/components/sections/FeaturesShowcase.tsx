"use client";

import { useState } from "react";

const features = [
  {
    id: "strategy",
    title: "AI Strategy & Roadmap",
    description:
      "Comprehensive AI assessment and strategic planning tailored to your business goals",
    icon: "🎯",
    color: "from-blue-500 to-blue-600",
    benefits: [
      "Custom AI opportunity mapping",
      "ROI projections and timeline",
      "Risk assessment and mitigation",
      "Technology stack recommendations",
    ],
    tools: [
      "AI Readiness Assessment",
      "ROI Calculator",
      "Risk Matrix",
      "Technology Audit",
    ],
    timeline: "2-4 weeks",
    price: "Starting at $25,000",
  },
  {
    id: "implementation",
    title: "AI Implementation & Integration",
    description:
      "End-to-end AI solution development and seamless integration with your existing systems",
    icon: "⚙️",
    color: "from-primary-500 to-primary-600",
    benefits: [
      "Custom AI model development",
      "Seamless system integration",
      "Performance optimization",
      "Scalable architecture design",
    ],
    tools: [
      "Custom Models",
      "API Integration",
      "Performance Monitor",
      "Scalability Framework",
    ],
    timeline: "4-8 weeks",
    price: "Starting at $50,000",
  },
  {
    id: "optimization",
    title: "Workflow Optimization",
    description:
      "Intelligent automation and process optimization to maximize efficiency and reduce costs",
    icon: "🚀",
    color: "from-purple-500 to-purple-600",
    benefits: [
      "Automated workflow design",
      "Process bottleneck elimination",
      "Quality assurance systems",
      "Continuous improvement loops",
    ],
    tools: [
      "Workflow Designer",
      "Automation Engine",
      "Quality Monitor",
      "Analytics Dashboard",
    ],
    timeline: "3-6 weeks",
    price: "Starting at $35,000",
  },
  {
    id: "analytics",
    title: "Advanced Analytics & Insights",
    description:
      "Transform your data into actionable insights with cutting-edge AI analytics platforms",
    icon: "📊",
    color: "from-green-500 to-green-600",
    benefits: [
      "Real-time data processing",
      "Predictive analytics models",
      "Interactive dashboards",
      "Automated reporting systems",
    ],
    tools: [
      "Data Pipeline",
      "ML Models",
      "Dashboard Builder",
      "Report Generator",
    ],
    timeline: "3-5 weeks",
    price: "Starting at $40,000",
  },
  {
    id: "training",
    title: "Team Enablement & Training",
    description:
      "Comprehensive training programs to ensure your team maximizes AI tool adoption and productivity",
    icon: "🎓",
    color: "from-orange-500 to-orange-600",
    benefits: [
      "Customized training programs",
      "Hands-on workshops",
      "Ongoing support system",
      "Performance tracking",
    ],
    tools: [
      "Training Portal",
      "Workshop Materials",
      "Progress Tracker",
      "Support System",
    ],
    timeline: "2-3 weeks",
    price: "Starting at $15,000",
  },
  {
    id: "support",
    title: "24/7 AI Support & Maintenance",
    description:
      "Round-the-clock monitoring, maintenance, and optimization of your AI systems",
    icon: "🛡️",
    color: "from-red-500 to-red-600",
    benefits: [
      "24/7 system monitoring",
      "Proactive issue resolution",
      "Regular performance optimization",
      "Security updates and patches",
    ],
    tools: [
      "Monitoring Dashboard",
      "Alert System",
      "Optimization Engine",
      "Security Scanner",
    ],
    timeline: "Ongoing",
    price: "Starting at $5,000/month",
  },
];

const caseStudies = [
  {
    title: "E-commerce Giant Achieves 300% Revenue Growth",
    company: "RetailTech Solutions",
    industry: "E-commerce",
    challenge: "Manual inventory management and poor customer personalization",
    solution:
      "AI-powered inventory optimization and personalized recommendation engine",
    results: [
      "300% revenue increase",
      "85% reduction in inventory costs",
      "92% customer satisfaction",
    ],
    image: "📦",
  },
  {
    title: "Healthcare Provider Streamlines Operations by 75%",
    company: "MedFlow Systems",
    industry: "Healthcare",
    challenge: "Inefficient patient data processing and appointment scheduling",
    solution: "Automated patient intake and intelligent scheduling system",
    results: [
      "75% faster processing",
      "99.9% data accuracy",
      "60% reduction in wait times",
    ],
    image: "🏥",
  },
  {
    title: "Manufacturing Company Reduces Defects by 95%",
    company: "TechManufacturing Co",
    industry: "Manufacturing",
    challenge: "High defect rates and quality control issues",
    solution: "Computer vision quality control and predictive maintenance",
    results: [
      "95% defect reduction",
      "$2M cost savings",
      "Zero downtime incidents",
    ],
    image: "🏭",
  },
];

export function FeaturesShowcase() {
  const [activeFeature, setActiveFeature] = useState("strategy");
  const [showAllCases, setShowAllCases] = useState(false);

  const currentFeature =
    features.find((f) => f.id === activeFeature) || features[0];

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-primary-800">
            Our Services
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
            Complete AI Transformation
            <span className="bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
              {" "}
              Solutions
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            From strategy to implementation, we provide end-to-end AI solutions
            that drive measurable business results.
          </p>
        </div>

        {/* Feature Tabs */}
        <div className="mb-12">
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`flex items-center space-x-3 rounded-xl px-6 py-3 font-medium transition-all duration-300 ${
                  activeFeature === feature.id
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-primary-50 hover:text-primary-700"
                }`}
              >
                <span className="text-lg">{feature.icon}</span>
                <span className="hidden sm:block">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Feature Detail */}
          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-gray-50 to-white shadow-xl">
            <div className="grid gap-0 lg:grid-cols-2">
              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <div className="mb-6 flex items-center space-x-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${currentFeature.color} text-2xl`}
                  >
                    {currentFeature.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {currentFeature.title}
                    </h3>
                    <p className="text-gray-600">
                      {currentFeature.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">
                      Key Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {currentFeature.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="mr-3 h-5 w-5 flex-shrink-0 text-primary-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-3 font-semibold text-gray-900">
                      Tools & Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentFeature.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-primary-100 px-3 py-1 text-sm text-primary-800"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Side */}
              <div
                className={`bg-gradient-to-br ${currentFeature.color} p-8 text-white lg:p-12`}
              >
                <div className="space-y-8">
                  <div>
                    <h4 className="mb-4 text-xl font-semibold">
                      Project Details
                    </h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">Timeline:</span>
                        <span className="font-semibold">
                          {currentFeature.timeline}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">Investment:</span>
                        <span className="font-semibold">
                          {currentFeature.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/80">ROI Expected:</span>
                        <span className="font-semibold">300-500%</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl bg-white/20 p-6">
                    <h5 className="mb-3 font-semibold">What You Get:</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        Detailed project plan &amp; timeline
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        Dedicated project manager
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        Weekly progress updates
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        30-day post-launch support
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2">✓</span>
                        Performance guarantee
                      </li>
                    </ul>
                  </div>

                  <button className="w-full rounded-xl bg-white px-6 py-3 font-semibold text-gray-900 transition-colors hover:bg-gray-100">
                    Get Started with {currentFeature.title}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="mt-20">
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-3xl font-bold text-gray-900">
              Success Stories
            </h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              See how our clients achieved transformational results with our AI
              solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies
              .slice(0, showAllCases ? caseStudies.length : 3)
              .map((study, index) => (
                <div
                  key={index}
                  className="cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="mb-4 text-4xl">{study.image}</div>
                  <div className="mb-3 flex items-center space-x-2">
                    <span className="rounded-full bg-primary-100 px-2 py-1 text-xs text-primary-800">
                      {study.industry}
                    </span>
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    {study.title}
                  </h4>
                  <p className="mb-4 text-sm text-gray-600">
                    {study.challenge}
                  </p>

                  <div className="space-y-2">
                    {study.results.map((result, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <svg
                          className="mr-2 h-4 w-4 text-primary-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {!showAllCases && caseStudies.length > 3 && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAllCases(true)}
                className="btn-secondary px-6 py-3"
              >
                View More Case Studies
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-primary-500 to-primary-600 p-8 text-center text-white lg:p-12">
          <h3 className="mb-4 text-3xl font-bold">
            Ready to Transform Your Business?
          </h3>
          <p className="mx-auto mb-8 max-w-2xl text-primary-100">
            Join companies already leveraging AI for exponential growth. Get a
            free consultation and custom roadmap.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-primary-600 transition-colors hover:bg-gray-100">
              Get Free Consultation
            </button>
            <button className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
