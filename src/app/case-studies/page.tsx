"use client";

import Link from "next/link";
import { useState } from "react";

const caseStudies = [
  {
    id: "retailtech-300-growth",
    title: "E-commerce Platform Achieves 300% Revenue Growth",
    company: "RetailTech Solutions", 
    industry: "E-commerce",
    logo: "🛒",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    challenge: "Manual inventory management causing stockouts and poor customer experience due to lack of personalization.",
    solution: "Implemented AI-powered inventory optimization system and personalized recommendation engine with real-time analytics.",
    timeline: "6 months",
    investment: "\,000",
    results: {
      revenue: "+300%",
      inventory_costs: "-85%", 
      customer_satisfaction: "+92%",
      conversion_rate: "+156%",
      time_to_market: "-75%"
    },
    testimonial: {
      text: "InsightFlow transformed our entire business. The AI solutions didn't just meet our expectations - they exceeded them by orders of magnitude.",
      author: "Sarah Chen",
      role: "CEO, RetailTech Solutions"
    },
    technologies: ["Machine Learning", "Predictive Analytics", "Recommendation Engine", "Real-time Data Processing"],
    metrics: [
      { label: "Revenue Growth", value: "300%", description: "Year-over-year revenue increase" },
      { label: "Cost Reduction", value: "85%", description: "Inventory management costs" },
      { label: "Customer Satisfaction", value: "92%", description: "Increase in satisfaction scores" },
      { label: "Conversion Rate", value: "156%", description: "Improvement in sales conversion" }
    ]
  },
  {
    id: "healthcare-streamline",
    title: "Healthcare Provider Streamlines Operations by 75%",
    company: "MedFlow Systems",
    industry: "Healthcare", 
    logo: "🏥",
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    challenge: "Inefficient patient data processing, appointment scheduling bottlenecks, and compliance reporting issues.",
    solution: "Automated patient intake system with intelligent scheduling and compliance monitoring dashboard.",
    timeline: "4 months",
    investment: "\,000",
    results: {
      processing_speed: "+75%",
      accuracy: "99.9%",
      wait_times: "-60%",
      staff_productivity: "+120%",
      compliance_score: "100%"
    },
    testimonial: {
      text: "The automation solutions have been transformative. Our staff can now focus on patient care instead of administrative tasks.",
      author: "Dr. Marcus Rodriguez",
      role: "COO, MedFlow Systems"
    },
    technologies: ["Natural Language Processing", "Automated Workflows", "Compliance AI", "Data Integration"],
    metrics: [
      { label: "Processing Speed", value: "75%", description: "Faster patient data processing" },
      { label: "Data Accuracy", value: "99.9%", description: "Patient information accuracy" },
      { label: "Wait Time Reduction", value: "60%", description: "Average patient wait time" },
      { label: "Compliance Score", value: "100%", description: "Regulatory compliance rate" }
    ]
  },
  {
    id: "manufacturing-quality",
    title: "Manufacturing Giant Reduces Defects by 95%",
    company: "TechManufacturing Co",
    industry: "Manufacturing",
    logo: "🏭", 
    heroImage: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    challenge: "High defect rates in production line, quality control inconsistencies, and unexpected equipment failures.",
    solution: "Computer vision quality control system with predictive maintenance and real-time monitoring.",
    timeline: "8 months",
    investment: "\,000",
    results: {
      defect_reduction: "-95%",
      cost_savings: "\.1M",
      downtime: "0 incidents",
      efficiency: "+89%",
      waste_reduction: "-78%"
    },
    testimonial: {
      text: "The AI-powered quality control system has revolutionized our production. We've achieved quality standards we never thought possible.",
      author: "Jennifer Adams",
      role: "Director of Operations, TechManufacturing Co"
    },
    technologies: ["Computer Vision", "Predictive Maintenance", "Real-time Analytics", "IoT Integration"],
    metrics: [
      { label: "Defect Reduction", value: "95%", description: "Reduction in production defects" },
      { label: "Cost Savings", value: "\.1M", description: "Annual operational savings" },
      { label: "Zero Downtime", value: "100%", description: "Uptime achievement rate" },
      { label: "Efficiency Gain", value: "89%", description: "Overall production efficiency" }
    ]
  }
];

const industries = ["All", "E-commerce", "Healthcare", "Manufacturing", "Finance", "Technology"];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  
  const filteredCases = selectedIndustry === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.industry === selectedIndustry);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-500 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Client Success Stories</h1>
            <p className="text-xl text-primary-100 mb-8">
              Discover how leading companies achieved transformational results with our AI solutions. 
              Real challenges, innovative solutions, measurable outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="text-2xl font-bold">500+</span>
                <span className="block text-sm">Projects Delivered</span>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="text-2xl font-bold">\+</span>
                <span className="block text-sm">Client Savings</span>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <span className="text-2xl font-bold">98%</span>
                <span className="block text-sm">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            <span className="text-gray-600 font-medium">Filter by industry:</span>
            {industries.map(industry => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={px-4 py-2 rounded-lg font-medium transition-all }
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-12">
            {filteredCases.map((study, index) => (
              <div key={study.id} className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  
                  {/* Content Side */}
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="text-4xl">{study.logo}</span>
                      <div>
                        <div className="text-sm text-primary-600 font-medium">{study.industry}</div>
                        <h2 className="text-2xl font-bold text-gray-900">{study.title}</h2>
                        <div className="text-gray-600">{study.company}</div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Challenge</h3>
                        <p className="text-gray-700">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Solution</h3>
                        <p className="text-gray-700">{study.solution}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Technologies Used</h3>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                            {study.testimonial.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-gray-800 italic mb-2">"{study.testimonial.text}"</p>
                            <div className="text-sm">
                              <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                              <div className="text-gray-600">{study.testimonial.role}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Side */}
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-8 lg:p-12 text-white">
                    <h3 className="text-2xl font-bold mb-8">Results Achieved</h3>
                    
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {study.metrics.map((metric, i) => (
                        <div key={i} className="text-center">
                          <div className="text-3xl font-bold mb-2">{metric.value}</div>
                          <div className="text-primary-100 text-sm font-medium">{metric.label}</div>
                          <div className="text-primary-200 text-xs mt-1">{metric.description}</div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-primary-400 pt-6">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-primary-200">Timeline:</span>
                          <div className="font-semibold">{study.timeline}</div>
                        </div>
                        <div>
                          <span className="text-primary-200">Investment:</span>
                          <div className="font-semibold">{study.investment}</div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <span className="text-primary-200">ROI:</span>
                        <div className="text-2xl font-bold">400%+ in first year</div>
                      </div>
                    </div>

                    <button className="w-full mt-6 bg-white text-primary-600 py-3 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                      View Detailed Case Study
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join these industry leaders who transformed their businesses with AI. 
            Get a free consultation and see how we can help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 transition-colors">
              Get Free Consultation
            </Link>
            <Link href="/pricing" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
