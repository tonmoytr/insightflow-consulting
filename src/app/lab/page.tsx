"use client";

import { useState } from "react";
import Link from "next/link";

const labTools = [
  {
    id: "service-recommender",
    title: "AI Service Recommender",
    description: "Get personalized AI service recommendations based on your company profile and business goals",
    icon: "🎯",
    color: "from-blue-500 to-blue-600",
    badge: "Most Popular",
    href: "/lab/service-recommender",
    features: ["Company Analysis", "Goal Assessment", "Custom Recommendations", "ROI Projections"]
  },
  {
    id: "brief-analyzer",
    title: "AI Brief Analyzer",
    description: "Upload your project brief and get structured analysis with risks, gaps, and actionable insights",
    icon: "📊",
    color: "from-green-500 to-green-600", 
    badge: "New",
    href: "/lab/brief-analyzer",
    features: ["Brief Analysis", "Risk Assessment", "Gap Identification", "Follow-up Questions"]
  },
  {
    id: "proposal-generator",
    title: "Proposal Generator",
    description: "Generate comprehensive project proposals with scope, timeline, deliverables, and pricing",
    icon: "📝",
    color: "from-purple-500 to-purple-600",
    badge: "Coming Soon",
    href: "/lab/proposal-generator",
    features: ["Scope Definition", "Timeline Planning", "Deliverable Mapping", "Pricing Structure"]
  },
  {
    id: "roadmap-generator",
    title: "AI Roadmap Generator",
    description: "Create detailed 6-month AI implementation roadmaps tailored to your company's needs",
    icon: "🗺️",
    color: "from-indigo-500 to-indigo-600",
    badge: "Beta",
    href: "/lab/roadmap-generator",
    features: ["Strategy Planning", "Milestone Definition", "Resource Allocation", "Success Metrics"]
  }
];

const recentAnalyses = [
  {
    company: "TechStartup Inc.",
    industry: "SaaS",
    service: "Workflow Automation",
    score: "92/100",
    date: "2 hours ago"
  },
  {
    company: "RetailCorp",
    industry: "E-commerce", 
    service: "AI Strategy",
    score: "87/100",
    date: "1 day ago"
  },
  {
    company: "HealthTech Solutions",
    industry: "Healthcare",
    service: "Custom AI Tools",
    score: "94/100", 
    date: "3 days ago"
  }
];

export default function LabPage() {
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
              🧪 InsightFlow Lab
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">Business Tools</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Experience the power of AI-driven business analysis with our suite of intelligent tools. 
              Get instant insights, recommendations, and strategic guidance powered by advanced AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#tools" className="btn-primary px-8 py-4">
                Explore AI Tools
              </a>
              <Link href="/contact" className="btn-secondary px-8 py-4">
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Tools Grid */}
      <section id="tools" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Professional AI Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Try our AI-powered business tools and experience the intelligence behind our consulting services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {labTools.map((tool, index) => (
              <div
                key={tool.id}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group transform hover:-translate-y-2"
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <span className="text-3xl">{tool.icon}</span>
                    </div>
                    {tool.badge && (
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        tool.badge === 'Most Popular' ? 'bg-blue-100 text-blue-800' :
                        tool.badge === 'New' ? 'bg-green-100 text-green-800' :
                        tool.badge === 'Beta' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{tool.description}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href={tool.href}
                    className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                      tool.badge === 'Coming Soon'
                        ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                        : 'bg-gradient-to-r ' + tool.color + ' text-white hover:shadow-lg transform hover:-translate-y-1'
                    }`}
                  >
                    {tool.badge === 'Coming Soon' ? 'Coming Soon' : 'Try Now'}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insight Dashboard */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Recent Analyses
              </h2>
              <p className="text-xl text-gray-600">
                See how other companies are leveraging our AI tools for strategic insights
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {recentAnalyses.map((analysis, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                        {analysis.industry}
                      </span>
                      <span className="text-sm text-gray-500">{analysis.date}</span>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{analysis.company}</h3>
                      <p className="text-gray-600 text-sm">Recommended: {analysis.service}</p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-gray-600 text-sm">AI Readiness Score</span>
                      <span className="text-2xl font-bold text-green-600">{analysis.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">
                Ready to get your own AI analysis and recommendations?
              </p>
              <Link href="/lab/service-recommender" className="btn-primary px-8 py-4">
                Start Your Analysis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                How Our AI Tools Work
              </h2>
              <p className="text-xl text-gray-600">
                Advanced AI algorithms analyze your business context to provide personalized recommendations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">📝</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">1. Input Your Data</h3>
                <p className="text-gray-600">
                  Share your company details, goals, and challenges through our intuitive forms
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">🤖</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">2. AI Analysis</h3>
                <p className="text-gray-600">
                  Our advanced AI processes your information using proven consulting frameworks
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">3. Get Insights</h3>
                <p className="text-gray-600">
                  Receive detailed recommendations, analysis, and actionable next steps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              Why Our AI Tools Stand Out
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Consulting-Grade Logic</h3>
                <p className="text-gray-600">
                  Built on proven consulting frameworks and methodologies used by top-tier firms
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Results</h3>
                <p className="text-gray-600">
                  Get professional-quality analysis and recommendations in minutes, not weeks
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Private</h3>
                <p className="text-gray-600">
                  Your data is processed securely and never stored or shared with third parties
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📈</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Actionable Insights</h3>
                <p className="text-gray-600">
                  Every recommendation comes with clear next steps and implementation guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience AI-Powered Insights?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Try our AI tools for free and discover how intelligent analysis can transform your business strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/lab/service-recommender" className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Try Service Recommender
              </Link>
              <Link href="/lab/brief-analyzer" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Analyze Your Brief
              </Link>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-blue-100 text-sm">
                ✨ Free to use • 🔒 Secure & Private • ⚡ Instant Results
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
