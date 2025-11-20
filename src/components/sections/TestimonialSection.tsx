"use client";

import { useState, useEffect } from "react";

const quickTestimonials = [
  {
    name: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Dynamics",
    content: "InsightFlow transformed our operations completely. We achieved 340% efficiency increase in just 6 months.",
    avatar: "SC",
    industry: "Technology",
    result: "+340% efficiency"
  },
  {
    name: "Marcus Rodriguez", 
    role: "COO",
    company: "Global Logistics Pro",
    content: "The AI automation delivered beyond expectations. Customer satisfaction increased 85% while reducing costs significantly.",
    avatar: "MR", 
    industry: "Logistics",
    result: "+85% satisfaction"
  },
  {
    name: "Emily Watson",
    role: "VP Operations",
    company: "HealthTech Solutions", 
    content: "Working with InsightFlow was game-changing. We process patient data 10x faster with 99.9% accuracy.",
    avatar: "EW",
    industry: "Healthcare", 
    result: "10x faster processing"
  }
];

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quickTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            Client Success Stories
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how forward-thinking companies are achieving remarkable results with our AI solutions
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {quickTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 transform ${
                index === currentIndex 
                  ? 'ring-2 ring-green-500 shadow-xl scale-105' 
                  : 'hover:shadow-xl hover:-translate-y-1'
              }`}
            >
              <div className="space-y-6">
                {/* Quote */}
                <div className="relative">
                  <svg className="w-8 h-8 text-green-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                  <blockquote className="text-gray-800 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                </div>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">{testimonial.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    <div className="text-green-600 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>

                {/* Result Badge */}
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                      {testimonial.industry}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      {testimonial.result}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {quickTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-green-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <p className="text-sm text-gray-500 mb-4">Trusted by 50+ industry leaders</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$50M+</div>
              <div className="text-gray-600 text-sm">Cost Savings Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4.8x</div>
              <div className="text-gray-600 text-sm">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
