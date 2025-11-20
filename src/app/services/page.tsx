"use client";

import { useState } from "react";
import dynamic from 'next/dynamic';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const detailedServices = [
  {
    id: "discovery-audit",
    title: "AI Discovery & Automation Audit",
    shortDescription: "Comprehensive analysis of your current workflows to identify automation opportunities and AI readiness gaps.",
    longDescription: "Our AI Discovery & Automation Audit provides a complete assessment of your business operations, identifying specific areas where artificial intelligence can drive immediate value. We analyze your current workflows, data infrastructure, and team capabilities to create a prioritized roadmap for AI implementation.",
    timeline: "2-3 weeks",
    investment: "$15,000 - $25,000",
    deliverables: [
      "AI Readiness Assessment Report",
      "Workflow Automation Opportunities Map", 
      "Technology Stack Recommendations",
      "Implementation Priority Matrix",
      "Custom ROI Projections",
      "Executive Presentation Deck"
    ],
    process: {
      input: "Current workflows, team interviews, system documentation",
      analysis: "Process mapping, inefficiency identification, AI opportunity scoring",
      delivery: "Comprehensive audit report with actionable recommendations",
      improvements: "Ongoing optimization suggestions and follow-up assessments"
    },
    caseStudy: {
      title: "SaaS Platform Efficiency Boost",
      challenge: "Manual customer onboarding taking 3 days per client",
      solution: "AI-powered workflow automation and document processing",
      result: "Reduced onboarding to 4 hours - 85% time savings",
      metrics: ["85% faster onboarding", "60% cost reduction", "95% accuracy improvement"]
    },
    icon: "🔍",
    color: "from-blue-500 to-blue-600",
    // Using a placeholder for Lottie animation URL - you can replace with actual Lottie files
    lottieUrl: "/animations/discovery.json"
  },
  {
    id: "workflow-automation",
    title: "Workflow & Process Automation",
    shortDescription: "Custom automation solutions that eliminate repetitive tasks and optimize operational efficiency across your organization.",
    longDescription: "Transform your manual processes into intelligent, automated workflows that run 24/7. Our team designs and implements custom automation solutions that integrate seamlessly with your existing systems while providing real-time monitoring and optimization capabilities.",
    timeline: "4-6 weeks",
    investment: "$25,000 - $50,000",
    deliverables: [
      "Custom Automation Scripts & Workflows",
      "Integration with Existing Systems",
      "Real-time Monitoring Dashboard",
      "Process Documentation & Training",
      "Performance Analytics Setup",
      "Maintenance & Support Plan"
    ],
    process: {
      input: "Process documentation, system requirements, stakeholder needs",
      analysis: "Workflow mapping, bottleneck identification, automation design", 
      delivery: "Deployed automation with training and documentation",
      improvements: "Performance monitoring, optimization, and scaling recommendations"
    },
    caseStudy: {
      title: "E-commerce Order Processing Revolution",
      challenge: "Manual order processing causing delays and errors",
      solution: "End-to-end automation from order receipt to fulfillment",
      result: "99.7% accuracy with 10x faster processing speed",
      metrics: ["10x faster processing", "99.7% accuracy", "70% cost reduction"]
    },
    icon: "⚙️",
    color: "from-green-500 to-green-600",
    lottieUrl: "/animations/automation.json"
  },
  {
    id: "custom-ai-tooling",
    title: "Custom AI Tooling",
    shortDescription: "Bespoke AI applications and tools designed specifically for your business needs and industry requirements.",
    longDescription: "Go beyond off-the-shelf solutions with custom AI tools built specifically for your unique challenges. We develop intelligent applications that understand your business context, integrate with your data sources, and provide the specific functionality your team needs to excel.",
    timeline: "6-12 weeks",
    investment: "$50,000 - $150,000",
    deliverables: [
      "Custom AI Application Development",
      "Machine Learning Model Training",
      "User Interface & Experience Design",
      "Data Pipeline Integration",
      "API Development & Documentation",
      "Deployment & Scaling Infrastructure"
    ],
    process: {
      input: "Business requirements, data sources, user feedback",
      analysis: "Technical architecture, model selection, development planning",
      delivery: "Fully functional custom AI tool with training and support",
      improvements: "Model refinement, feature additions, performance optimization"
    },
    caseStudy: {
      title: "Healthcare Diagnostic Assistant",
      challenge: "Complex patient data analysis taking hours per case",
      solution: "Custom AI tool for rapid pattern recognition and insights",
      result: "Diagnostic suggestions generated in under 2 minutes",
      metrics: ["15 minutes → 2 minutes", "95% accuracy rate", "$500K annual savings"]
    },
    icon: "🛠️",
    color: "from-purple-500 to-purple-600",
    lottieUrl: "/animations/development.json"
  },
  {
    id: "strategy-roadmapping",
    title: "AI Strategy & Roadmapping",
    shortDescription: "Comprehensive AI strategy development with clear implementation roadmaps and success metrics for long-term growth.",
    longDescription: "Develop a winning AI strategy that aligns with your business objectives and market position. Our strategic roadmapping process ensures you have a clear path to AI adoption, with defined milestones, resource requirements, and success metrics that drive measurable results.",
    timeline: "3-4 weeks",
    investment: "$20,000 - $40,000",
    deliverables: [
      "Comprehensive AI Strategy Document",
      "3-Year Implementation Roadmap",
      "Budget Planning & Resource Allocation",
      "Risk Assessment & Mitigation Plan",
      "Success Metrics & KPI Framework",
      "Stakeholder Alignment Workshop"
    ],
    process: {
      input: "Business goals, market analysis, competitive landscape",
      analysis: "Strategic planning, feasibility assessment, roadmap development",
      delivery: "Complete strategy document with executive presentation",
      improvements: "Quarterly strategy reviews and roadmap adjustments"
    },
    caseStudy: {
      title: "Manufacturing AI Transformation",
      challenge: "No clear AI strategy across multiple facility locations",
      solution: "Unified AI strategy with phased implementation plan",
      result: "15% efficiency gains within 6 months of strategy deployment",
      metrics: ["15% efficiency gain", "$2M cost savings", "3 facilities automated"]
    },
    icon: "🎯",
    color: "from-indigo-500 to-indigo-600",
    lottieUrl: "/animations/strategy.json"
  },
  {
    id: "readiness-scorecard",
    title: "AI Readiness Scorecard",
    shortDescription: "Detailed assessment of your organization's AI readiness with actionable recommendations for improvement.",
    longDescription: "Get a comprehensive evaluation of your organization's readiness for AI adoption. Our scorecard assesses your data infrastructure, team capabilities, process maturity, and technology stack to provide a clear picture of where you stand and what steps are needed for successful AI implementation.",
    timeline: "1-2 weeks",
    investment: "$8,000 - $15,000",
    deliverables: [
      "Detailed AI Readiness Score (1-100)",
      "Capability Assessment Matrix",
      "Gap Analysis Report",
      "Improvement Recommendations",
      "Quick Wins Identification",
      "Preparation Checklist"
    ],
    process: {
      input: "Organizational assessment, team interviews, system audit",
      analysis: "Scoring against AI readiness framework, gap identification",
      delivery: "Comprehensive scorecard with improvement roadmap",
      improvements: "Periodic re-assessment and progress tracking"
    },
    caseStudy: {
      title: "Financial Services AI Readiness",
      challenge: "Uncertain about AI implementation readiness across departments",
      solution: "Comprehensive readiness assessment with improvement plan",
      result: "Improved readiness score from 45 to 78 in 3 months",
      metrics: ["45 → 78 readiness score", "5 departments aligned", "2 pilot projects launched"]
    },
    icon: "📊",
    color: "from-emerald-500 to-emerald-600",
    lottieUrl: "/animations/scorecard.json"
  }
];

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI Consulting <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Comprehensive AI solutions designed to transform your business operations, 
              from initial discovery through full implementation and optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI consulting services, 
              each designed to deliver measurable results for your business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {detailedServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:-translate-y-2"
                onClick={() => setSelectedService(service)}
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <span className="text-3xl text-white">{service.icon}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-500">{service.timeline}</div>
                      <div className="text-lg font-bold text-green-600">{service.investment}</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.shortDescription}</p>
                  </div>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Click for details</span>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal/Section */}
      {selectedService && (
        <section className="py-20 bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Service Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-r ${selectedService.color} rounded-2xl flex items-center justify-center`}>
                    <span className="text-4xl text-white">{selectedService.icon}</span>
                  </div>
                  <div className="text-left">
                    <h2 className="text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                    <p className="text-gray-600">{selectedService.timeline} • {selectedService.investment}</p>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  ✕ Close Details
                </button>
              </div>

              {/* Tab Navigation */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'process', label: 'Process' },
                  { id: 'deliverables', label: 'Deliverables' },
                  { id: 'case-study', label: 'Case Study' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-green-50 hover:text-green-600'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Overview</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{selectedService.longDescription}</p>
                    
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Investment Range</h4>
                        <p className="text-2xl font-bold text-green-600">{selectedService.investment}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Timeline</h4>
                        <p className="text-2xl font-bold text-blue-600">{selectedService.timeline}</p>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'process' && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {[
                        { title: 'Input', content: selectedService.process.input, icon: '📥', color: 'blue' },
                        { title: 'Analysis', content: selectedService.process.analysis, icon: '🔍', color: 'green' },
                        { title: 'Delivery', content: selectedService.process.delivery, icon: '📦', color: 'purple' },
                        { title: 'Improvements', content: selectedService.process.improvements, icon: '🚀', color: 'orange' }
                      ].map((step, index) => (
                        <div key={index} className="text-center">
                          <div className={`w-16 h-16 bg-${step.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                            <span className="text-2xl">{step.icon}</span>
                          </div>
                          <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                          <p className="text-sm text-gray-600">{step.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'deliverables' && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Receive</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {selectedService.deliverables.map((deliverable, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{deliverable}</h4>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'case-study' && (
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Story</h3>
                    
                    <div className="bg-gradient-to-r from-gray-50 to-green-50 rounded-xl p-8">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{selectedService.caseStudy.title}</h4>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Challenge</h5>
                          <p className="text-gray-600">{selectedService.caseStudy.challenge}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Solution</h5>
                          <p className="text-gray-600">{selectedService.caseStudy.solution}</p>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Result</h5>
                          <p className="text-gray-600">{selectedService.caseStudy.result}</p>
                        </div>
                      </div>
                      
                      <div className="border-t border-gray-200 pt-6">
                        <h5 className="font-semibold text-gray-900 mb-3">Key Metrics</h5>
                        <div className="flex flex-wrap gap-4">
                          {selectedService.caseStudy.metrics.map((metric, index) => (
                            <span key={index} className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* CTA for selected service */}
              <div className="text-center mt-12">
                <div className="space-y-4">
                  <p className="text-gray-600">Ready to get started with {selectedService.title}?</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Why Choose InsightFlow Services
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Rapid Results</h3>
                <p className="text-gray-600">See measurable improvements within weeks, not months. Our proven methodology accelerates time-to-value.</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Business-Focused</h3>
                <p className="text-gray-600">We prioritize practical business outcomes over technical complexity. Every solution drives real ROI.</p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">End-to-End Support</h3>
                <p className="text-gray-600">From initial strategy through implementation and optimization, we're with you every step of the way.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-green-100 mb-8">
              Choose the service that fits your needs, or let us recommend the best approach for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Schedule Free Consultation
              </a>
              <a href="/about" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Learn About Our Process
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
