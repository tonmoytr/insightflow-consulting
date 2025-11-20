"use client";

import { useState } from "react";

type ServiceId =
  | "discovery-audit"
  | "workflow-automation"
  | "custom-ai-tooling"
  | "strategy-roadmapping"
  | "readiness-scorecard";

type GradientColorClass =
  | "from-blue-500 to-blue-600"
  | "from-green-500 to-green-600"
  | "from-purple-500 to-purple-600"
  | "from-indigo-500 to-indigo-600"
  | "from-emerald-500 to-emerald-600";

interface ServiceProcess {
  input: string;
  analysis: string;
  delivery: string;
  improvements: string;
}

interface ServiceCaseStudy {
  title: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: string[];
}

interface DetailedService {
  id: ServiceId;
  title: string;
  shortDescription: string;
  longDescription: string;
  timeline: string;
  investment: string;
  deliverables: string[];
  process: ServiceProcess;
  caseStudy: ServiceCaseStudy;
  icon: string;
  color: GradientColorClass;
  lottieUrl: string;
}

const detailedServices: DetailedService[] = [
  {
    id: "discovery-audit",
    title: "AI Discovery & Automation Audit",
    shortDescription:
      "Comprehensive analysis of your current workflows to identify automation opportunities and AI readiness gaps.",
    longDescription:
      "Our AI Discovery & Automation Audit provides a complete assessment of your business operations, identifying specific areas where artificial intelligence can drive immediate value. We analyze your current workflows, data infrastructure, and team capabilities to create a prioritized roadmap for AI implementation.",
    timeline: "2-3 weeks",
    investment: "$15,000 - $25,000",
    deliverables: [
      "AI Readiness Assessment Report",
      "Workflow Automation Opportunities Map",
      "Technology Stack Recommendations",
      "Implementation Priority Matrix",
      "Custom ROI Projections",
      "Executive Presentation Deck",
    ],
    process: {
      input: "Current workflows, team interviews, system documentation",
      analysis:
        "Process mapping, inefficiency identification, AI opportunity scoring",
      delivery: "Comprehensive audit report with actionable recommendations",
      improvements:
        "Ongoing optimization suggestions and follow-up assessments",
    },
    caseStudy: {
      title: "SaaS Platform Efficiency Boost",
      challenge: "Manual customer onboarding taking 3 days per client",
      solution: "AI-powered workflow automation and document processing",
      result: "Reduced onboarding to 4 hours - 85% time savings",
      metrics: [
        "85% faster onboarding",
        "60% cost reduction",
        "95% accuracy improvement",
      ],
    },
    icon: "🔍",
    color: "from-blue-500 to-blue-600",
    lottieUrl: "/animations/discovery.json",
  },
  {
    id: "workflow-automation",
    title: "Workflow & Process Automation",
    shortDescription:
      "Custom automation solutions that eliminate repetitive tasks and optimize operational efficiency across your organization.",
    longDescription:
      "Transform your manual processes into intelligent, automated workflows that run 24/7. Our team designs and implements custom automation solutions that integrate seamlessly with your existing systems while providing real-time monitoring and optimization capabilities.",
    timeline: "4-6 weeks",
    investment: "$25,000 - $50,000",
    deliverables: [
      "Custom Automation Scripts & Workflows",
      "Integration with Existing Systems",
      "Real-time Monitoring Dashboard",
      "Process Documentation & Training",
      "Performance Analytics Setup",
      "Maintenance & Support Plan",
    ],
    process: {
      input: "Process documentation, system requirements, stakeholder needs",
      analysis:
        "Workflow mapping, bottleneck identification, automation design",
      delivery: "Deployed automation with training and documentation",
      improvements:
        "Performance monitoring, optimization, and scaling recommendations",
    },
    caseStudy: {
      title: "E-commerce Order Processing Revolution",
      challenge: "Manual order processing causing delays and errors",
      solution: "End-to-end automation from order receipt to fulfillment",
      result: "99.7% accuracy with 10x faster processing speed",
      metrics: [
        "10x faster processing",
        "99.7% accuracy",
        "70% cost reduction",
      ],
    },
    icon: "⚙️",
    color: "from-green-500 to-green-600",
    lottieUrl: "/animations/automation.json",
  },
  {
    id: "custom-ai-tooling",
    title: "Custom AI Tooling",
    shortDescription:
      "Bespoke AI applications and tools designed specifically for your business needs and industry requirements.",
    longDescription:
      "Go beyond off-the-shelf solutions with custom AI tools built specifically for your unique challenges. We develop intelligent applications that understand your business context, integrate with your data sources, and provide the specific functionality your team needs to excel.",
    timeline: "6-12 weeks",
    investment: "$50,000 - $150,000",
    deliverables: [
      "Custom AI Application Development",
      "Machine Learning Model Training",
      "User Interface & Experience Design",
      "Data Pipeline Integration",
      "API Development & Documentation",
      "Deployment & Scaling Infrastructure",
    ],
    process: {
      input: "Business requirements, data sources, user feedback",
      analysis: "Technical architecture, model selection, development planning",
      delivery: "Fully functional custom AI tool with training and support",
      improvements:
        "Model refinement, feature additions, performance optimization",
    },
    caseStudy: {
      title: "Healthcare Diagnostic Assistant",
      challenge: "Complex patient data analysis taking hours per case",
      solution: "Custom AI tool for rapid pattern recognition and insights",
      result: "Diagnostic suggestions generated in under 2 minutes",
      metrics: [
        "15 minutes → 2 minutes",
        "95% accuracy rate",
        "$500K annual savings",
      ],
    },
    icon: "🛠️",
    color: "from-purple-500 to-purple-600",
    lottieUrl: "/animations/development.json",
  },
  {
    id: "strategy-roadmapping",
    title: "AI Strategy & Roadmapping",
    shortDescription:
      "Comprehensive AI strategy development with clear implementation roadmaps and success metrics for long-term growth.",
    longDescription:
      "Develop a winning AI strategy that aligns with your business objectives and market position. Our strategic roadmapping process ensures you have a clear path to AI adoption, with defined milestones, resource requirements, and success metrics that drive measurable results.",
    timeline: "3-4 weeks",
    investment: "$20,000 - $40,000",
    deliverables: [
      "Comprehensive AI Strategy Document",
      "3-Year Implementation Roadmap",
      "Budget Planning & Resource Allocation",
      "Risk Assessment & Mitigation Plan",
      "Success Metrics & KPI Framework",
      "Stakeholder Alignment Workshop",
    ],
    process: {
      input: "Business goals, market analysis, competitive landscape",
      analysis:
        "Strategic planning, feasibility assessment, roadmap development",
      delivery: "Complete strategy document with executive presentation",
      improvements: "Quarterly strategy reviews and roadmap adjustments",
    },
    caseStudy: {
      title: "Manufacturing AI Transformation",
      challenge: "No clear AI strategy across multiple facility locations",
      solution: "Unified AI strategy with phased implementation plan",
      result: "15% efficiency gains within 6 months of strategy deployment",
      metrics: [
        "15% efficiency gain",
        "$2M cost savings",
        "3 facilities automated",
      ],
    },
    icon: "🎯",
    color: "from-indigo-500 to-indigo-600",
    lottieUrl: "/animations/strategy.json",
  },
  {
    id: "readiness-scorecard",
    title: "AI Readiness Scorecard",
    shortDescription:
      "Detailed assessment of your organization's AI readiness with actionable recommendations for improvement.",
    longDescription:
      "Get a comprehensive evaluation of your organization's readiness for AI adoption. Our scorecard assesses your data infrastructure, team capabilities, process maturity, and technology stack to provide a clear picture of where you stand and what steps are needed for successful AI implementation.",
    timeline: "1-2 weeks",
    investment: "$8,000 - $15,000",
    deliverables: [
      "Detailed AI Readiness Score (1-100)",
      "Capability Assessment Matrix",
      "Gap Analysis Report",
      "Improvement Recommendations",
      "Quick Wins Identification",
      "Preparation Checklist",
    ],
    process: {
      input: "Organizational assessment, team interviews, system audit",
      analysis: "Scoring against AI readiness framework, gap identification",
      delivery: "Comprehensive scorecard with improvement roadmap",
      improvements: "Periodic re-assessment and progress tracking",
    },
    caseStudy: {
      title: "Financial Services AI Readiness",
      challenge:
        "Uncertain about AI implementation readiness across departments",
      solution: "Comprehensive readiness assessment with improvement plan",
      result: "Improved readiness score from 45 to 78 in 3 months",
      metrics: [
        "45 → 78 readiness score",
        "5 departments aligned",
        "2 pilot projects launched",
      ],
    },
    icon: "📊",
    color: "from-emerald-500 to-emerald-600",
    lottieUrl: "/animations/scorecard.json",
  },
];

type TabId = "overview" | "process" | "deliverables" | "case-study";

export default function ServicesPage() {
  const [selectedService, setSelectedService] =
    useState<DetailedService | null>(null);
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold text-gray-900 lg:text-6xl">
              AI Consulting{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-600">
              Comprehensive AI solutions designed to transform your business
              operations, from initial discovery through full implementation and
              optimization.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="#services" className="btn-primary px-8 py-4">
                Explore Services
              </a>
              <a href="/contact" className="btn-secondary px-8 py-4">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section id="services" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900">
              Professional AI Services
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Choose from our comprehensive suite of AI consulting services,
              each designed to deliver measurable results for your business.
            </p>
          </div>

          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {detailedServices.map((service) => (
              <div
                key={service.id}
                className="group cursor-pointer transform rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                onClick={() => {
                  setSelectedService(service);
                  setActiveTab("overview");
                }}
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${service.color} transition-transform group-hover:scale-110`}
                    >
                      <span className="text-3xl text-white">
                        {service.icon}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">
                        {service.timeline}
                      </div>
                      <div className="text-lg font-bold text-green-600">
                        {service.investment}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-green-600">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="border-t border-gray-100 pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        Click for details
                      </span>
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 rounded-full bg-green-500" />
                        <div className="h-2 w-2 rounded-full bg-blue-500" />
                        <div className="h-2 w-2 rounded-full bg-purple-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Section */}
      {selectedService && (
        <section className="border-t border-gray-200 bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <div className="mx-auto max-w-6xl">
              {/* Service Header */}
              <div className="mb-12 text-center">
                <div className="mb-6 flex items-center justify-center space-x-4">
                  <div
                    className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${selectedService.color}`}
                  >
                    <span className="text-4xl text-white">
                      {selectedService.icon}
                    </span>
                  </div>
                  <div className="text-left">
                    <h2 className="text-3xl font-bold text-gray-900">
                      {selectedService.title}
                    </h2>
                    <p className="text-gray-600">
                      {selectedService.timeline} • {selectedService.investment}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 transition-colors hover:text-gray-700"
                >
                  ✕ Close Details
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="mb-12 flex flex-wrap justify-center gap-4">
                {[
                  { id: "overview", label: "Overview" },
                  { id: "process", label: "Process" },
                  { id: "deliverables", label: "Deliverables" },
                  { id: "case-study", label: "Case Study" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabId)}
                    className={`rounded-lg px-6 py-3 font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-green-500 text-white shadow-lg"
                        : "bg-white text-gray-700 hover:bg-green-50 hover:text-green-600"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="rounded-2xl bg-white p-8 shadow-lg lg:p-12">
                {activeTab === "overview" && (
                  <div className="space-y-6">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">
                      Service Overview
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-600">
                      {selectedService.longDescription}
                    </p>

                    <div className="mt-8 grid gap-8 md:grid-cols-2">
                      <div>
                        <h4 className="mb-3 font-semibold text-gray-900">
                          Investment Range
                        </h4>
                        <p className="text-2xl font-bold text-green-600">
                          {selectedService.investment}
                        </p>
                      </div>
                      <div>
                        <h4 className="mb-3 font-semibold text-gray-900">
                          Timeline
                        </h4>
                        <p className="text-2xl font-bold text-blue-600">
                          {selectedService.timeline}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "process" && (
                  <div className="space-y-8">
                    <h3 className="mb-6 text-2xl font-bold text-gray-900">
                      Our Process
                    </h3>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                      {[
                        {
                          title: "Input",
                          content: selectedService.process.input,
                          icon: "📥",
                          colorClass: "bg-blue-100",
                        },
                        {
                          title: "Analysis",
                          content: selectedService.process.analysis,
                          icon: "🔍",
                          colorClass: "bg-green-100",
                        },
                        {
                          title: "Delivery",
                          content: selectedService.process.delivery,
                          icon: "📦",
                          colorClass: "bg-purple-100",
                        },
                        {
                          title: "Improvements",
                          content: selectedService.process.improvements,
                          icon: "🚀",
                          colorClass: "bg-orange-100",
                        },
                      ].map((step, index) => (
                        <div key={index} className="text-center">
                          <div
                            className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${step.colorClass}`}
                          >
                            <span className="text-2xl">{step.icon}</span>
                          </div>
                          <h4 className="mb-2 font-bold text-gray-900">
                            {step.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {step.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "deliverables" && (
                  <div className="space-y-6">
                    <h3 className="mb-6 text-2xl font-bold text-gray-900">
                      What You'll Receive
                    </h3>

                    <div className="grid gap-6 md:grid-cols-2">
                      {selectedService.deliverables.map(
                        (deliverable, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                              <svg
                                className="h-4 w-4 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">
                                {deliverable}
                              </h4>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {activeTab === "case-study" && (
                  <div className="space-y-8">
                    <h3 className="mb-6 text-2xl font-bold text-gray-900">
                      Success Story
                    </h3>

                    <div className="rounded-xl bg-gradient-to-r from-gray-50 to-green-50 p-8">
                      <h4 className="mb-4 text-xl font-bold text-gray-900">
                        {selectedService.caseStudy.title}
                      </h4>

                      <div className="mb-6 grid gap-6 md:grid-cols-3">
                        <div>
                          <h5 className="mb-2 font-semibold text-gray-900">
                            Challenge
                          </h5>
                          <p className="text-gray-600">
                            {selectedService.caseStudy.challenge}
                          </p>
                        </div>
                        <div>
                          <h5 className="mb-2 font-semibold text-gray-900">
                            Solution
                          </h5>
                          <p className="text-gray-600">
                            {selectedService.caseStudy.solution}
                          </p>
                        </div>
                        <div>
                          <h5 className="mb-2 font-semibold text-gray-900">
                            Result
                          </h5>
                          <p className="text-gray-600">
                            {selectedService.caseStudy.result}
                          </p>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 pt-6">
                        <h5 className="mb-3 font-semibold text-gray-900">
                          Key Metrics
                        </h5>
                        <div className="flex flex-wrap gap-4">
                          {selectedService.caseStudy.metrics.map(
                            (metric, index) => (
                              <span
                                key={index}
                                className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-800"
                              >
                                {metric}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA for selected service */}
              <div className="mt-12 text-center">
                <div className="space-y-4">
                  <p className="text-gray-600">
                    Ready to get started with {selectedService.title}?
                  </p>
                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a href="/contact" className="btn-primary px-8 py-4">
                      Schedule Consultation
                    </a>
                    <a href="/lab" className="btn-secondary px-8 py-4">
                      Try Our AI Tools
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Our Services */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-12 text-4xl font-bold text-gray-900">
              Why Choose InsightFlow Services
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Rapid Results
                </h3>
                <p className="text-gray-600">
                  See measurable improvements within weeks, not months. Our
                  proven methodology accelerates time-to-value.
                </p>
              </div>

              <div className="space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Business-Focused
                </h3>
                <p className="text-gray-600">
                  We prioritize practical business outcomes over technical
                  complexity. Every solution drives real ROI.
                </p>
              </div>

              <div className="space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  End-to-End Support
                </h3>
                <p className="text-gray-600">
                  From initial strategy through implementation and optimization,
                  we're with you every step of the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-500 to-green-600 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mx-auto max-w-3xl text-white">
            <h2 className="mb-6 text-4xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="mb-8 text-xl text-green-100">
              Choose the service that fits your needs, or let us recommend the
              best approach for your business.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-green-600 transition-colors hover:bg-gray-100"
              >
                Schedule Free Consultation
              </a>
              <a
                href="/about"
                className="rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Learn About Our Process
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
