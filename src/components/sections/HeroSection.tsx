"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const impactNumbers = [
  { value: "+40%", label: "Efficiency Increase", icon: "📈" },
  { value: "50+", label: "Founders Trust Us", icon: "👥" },
  { value: "98%", label: "AI Readiness Score", icon: "🎯" },
  { value: "24hr", label: "Implementation Start", icon: "⚡" },
];

const problemSolutions = [
  {
    problem: "Manual workflows",
    solution: "Automated insights",
    icon: "🤖",
    description: "Transform repetitive tasks into intelligent automation",
  },
  {
    problem: "Unclear scope",
    solution: "AI-generated proposals",
    icon: "📋",
    description: "Get precise project scopes with AI-powered analysis",
  },
  {
    problem: "Slow ideation",
    solution: "Strategy in minutes",
    icon: "💡",
    description: "Generate comprehensive strategies using AI intelligence",
  },
];

const featuredTools = [
  {
    name: "AI Service Recommender",
    description:
      "Get personalized AI service recommendations based on your business needs",
    icon: "🎯",
    link: "/lab#recommender",
    badge: "Most Popular",
  },
  {
    name: "AI Brief Analyzer",
    description:
      "Analyze project briefs and identify potential risks and opportunities",
    icon: "📊",
    link: "/lab#analyzer",
    badge: "New",
  },
  {
    name: "Proposal Generator",
    description: "Generate comprehensive project proposals with AI assistance",
    icon: "📝",
    link: "/lab#generator",
    badge: "Coming Soon",
  },
];

export function HeroSection() {
  const [animatedNumbers, setAnimatedNumbers] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedNumbers(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Split Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50 overflow-hidden">
        {/* Abstract Gradient Backgrounds */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-200 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        </div>

        {/* Main Content - Fixed Centering */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="space-y-8 animate-fade-in-up">
                <div className="space-y-6">
                  <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold tracking-wide uppercase">
                    🚀 AI-Integrated Business Consulting
                  </span>

                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-gray-900">
                    <span className="block">InsightFlow</span>
                    <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                      Consulting
                    </span>
                  </h1>

                  <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                    Transform your business operations with AI-powered
                    strategies. From automated workflows to intelligent
                    insights, we help companies achieve measurable growth
                    through strategic AI integration.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="btn-primary group px-8 py-4 text-lg"
                  >
                    Book Free Consultation
                    <svg
                      className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>

                  <Link
                    href="/lab"
                    className="btn-secondary group px-8 py-4 text-lg"
                  >
                    <svg
                      className="mr-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Try AI Tools
                  </Link>
                </div>

                {/* Impact Numbers */}
                <div className="pt-8 border-t border-gray-200">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {impactNumbers.map((stat, index) => (
                      <div
                        key={stat.label}
                        className="text-center group cursor-pointer"
                      >
                        <div className="flex items-center justify-center mb-2">
                          <span className="text-2xl mr-2">{stat.icon}</span>
                          <div
                            className={`text-2xl font-bold text-green-600 ${
                              animatedNumbers ? "animate-fade-in" : "opacity-0"
                            }`}
                          >
                            {stat.value}
                          </div>
                        </div>
                        <div className="text-sm text-gray-600 font-medium">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: AI-themed Dashboard Mockup */}
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">
                        AI Insights Dashboard
                      </h3>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-green-600 font-medium">
                          Live
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-green-600">
                          340%
                        </div>
                        <div className="text-sm text-gray-600">
                          Efficiency Boost
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">
                          98.7%
                        </div>
                        <div className="text-sm text-gray-600">
                          Accuracy Rate
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          AI Automation Score
                        </span>
                        <span className="text-sm font-medium text-gray-900">
                          92/100
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full w-[92%] animate-pulse"></div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-600 mb-2">
                        Recent AI Implementations
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">
                            Workflow Automation Deployed
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">
                            Predictive Analytics Active
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">
                            Smart Recommendations Running
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500 rounded-full opacity-20 animate-bounce"></div>
                <div
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full opacity-20 animate-bounce"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              What is InsightFlow?
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're AI strategy experts who help forward-thinking businesses
              transform their operations through intelligent automation. Our
              proven methodology combines deep industry knowledge with
              cutting-edge AI technology to deliver measurable results in weeks,
              not months.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <span className="flex items-center space-x-2">
                <span>✓</span>
                <span>500+ Successful Projects</span>
              </span>
              <span className="flex items-center space-x-2">
                <span>✓</span>
                <span>98% Client Satisfaction</span>
              </span>
              <span className="flex items-center space-x-2">
                <span>✓</span>
                <span>$50M+ Cost Savings Generated</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transform Business Challenges into AI Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI solutions address common business pain points
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {problemSolutions.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-center space-y-6">
                  <div className="text-4xl">{item.icon}</div>

                  <div className="space-y-4">
                    <div className="text-red-600 font-medium">
                      <span className="text-sm uppercase tracking-wide">
                        Problem
                      </span>
                      <div className="text-lg">{item.problem}</div>
                    </div>

                    <div className="flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>

                    <div className="text-green-600 font-medium">
                      <span className="text-sm uppercase tracking-wide">
                        Solution
                      </span>
                      <div className="text-lg">{item.solution}</div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm">{item.description}</p>

                  <button className="w-full bg-green-50 text-green-700 py-2 px-4 rounded-lg font-medium hover:bg-green-100 transition-colors group-hover:bg-green-500 group-hover:text-white">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Try Our AI Tools in the Lab
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of AI-driven business solutions with our
              interactive tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredTools.map((tool, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100"
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="text-4xl">{tool.icon}</div>
                    {tool.badge && (
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          tool.badge === "Most Popular"
                            ? "bg-green-100 text-green-800"
                            : tool.badge === "New"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {tool.name}
                    </h3>
                    <p className="text-gray-600">{tool.description}</p>
                  </div>

                  <Link
                    href={tool.link}
                    className="block w-full bg-green-50 text-green-700 py-3 px-4 rounded-lg font-medium hover:bg-green-100 transition-colors group-hover:bg-green-500 group-hover:text-white text-center"
                  >
                    {tool.badge === "Coming Soon" ? "Coming Soon" : "Try Now"}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/lab" className="btn-primary px-8 py-4 text-lg">
              Explore All AI Tools
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
