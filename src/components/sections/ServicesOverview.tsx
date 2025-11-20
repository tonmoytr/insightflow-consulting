"use client";

import Link from "next/link";

const coreServices = [
  {
    title: "AI Strategy & Planning",
    description: "Comprehensive AI assessment and strategic roadmap development tailored to your business objectives",
    icon: "🎯",
    features: ["AI Readiness Assessment", "Custom Implementation Roadmap", "ROI Projections", "Risk Analysis"],
    timeline: "2-4 weeks",
    startingPrice: "$15,000",
    href: "/services#strategy"
  },
  {
    title: "Workflow Automation",
    description: "Intelligent process automation that eliminates manual tasks and optimizes operational efficiency",
    icon: "⚙️",
    features: ["Process Analysis", "Custom Automation", "Integration Setup", "Performance Monitoring"],
    timeline: "3-6 weeks", 
    startingPrice: "$25,000",
    href: "/services#automation"
  },
  {
    title: "AI Integration & Training",
    description: "End-to-end AI implementation with comprehensive team training and ongoing support",
    icon: "🚀",
    features: ["System Integration", "Team Training", "Change Management", "24/7 Support"],
    timeline: "4-8 weeks",
    startingPrice: "$35,000",
    href: "/services#integration"
  },
  {
    title: "Data Intelligence",
    description: "Transform raw data into actionable insights with advanced analytics and AI-powered reporting",
    icon: "📊",
    features: ["Data Pipeline Setup", "Predictive Models", "Custom Dashboards", "Automated Reports"],
    timeline: "3-5 weeks",
    startingPrice: "$20,000",
    href: "/services#intelligence"
  }
];

export function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            Core Consulting Offerings
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Professional AI Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive consulting services designed to transform your business operations through strategic AI implementation
          </p>
        </div>

        {/* Professional Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {coreServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 transform hover:-translate-y-2"
            >
              <div className="space-y-6">
                {/* Service Icon & Title */}
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Details */}
                <div className="border-t border-gray-100 pt-6 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Timeline:</span>
                    <span className="text-sm font-medium text-gray-900">{service.timeline}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Starting at:</span>
                    <span className="text-lg font-bold text-green-600">{service.startingPrice}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link 
                  href={service.href}
                  className="block w-full bg-green-50 text-green-700 py-3 px-4 rounded-xl font-semibold text-center hover:bg-green-100 transition-colors group-hover:bg-green-500 group-hover:text-white"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to transform your business operations?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-secondary px-8 py-4">
              View All Services
            </Link>
            <Link href="/contact" className="btn-primary px-8 py-4">
              Start Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
