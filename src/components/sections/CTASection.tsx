"use client";

import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-500 via-green-600 to-green-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Ready to Transform Your Business with AI?
              </h2>
              <p className="text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
                Join 50+ forward-thinking founders who have already transformed their operations. 
                Get a free AI readiness assessment and custom strategy session.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/contact" 
                className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl group"
              >
                Book Free Consultation
                <svg className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/lab" 
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 backdrop-blur-sm"
              >
                Try AI Tools First
              </Link>
            </div>

            {/* Value Props */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">⚡</div>
                <div className="text-lg font-semibold mb-2">Quick Implementation</div>
                <div className="text-green-100 text-sm">Start seeing results within 24 hours of our first call</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">📈</div>
                <div className="text-lg font-semibold mb-2">Guaranteed ROI</div>
                <div className="text-green-100 text-sm">Average 4.8x return on investment within 6 months</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl mb-3">🏆</div>
                <div className="text-lg font-semibold mb-2">Proven Success</div>
                <div className="text-green-100 text-sm">500+ successful AI implementations across industries</div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="text-sm text-green-100 mb-4">
                ⭐ Rated 4.9/5 by clients • 🔒 SOC 2 Compliant • 🏆 Industry Awards Winner
              </div>
              <div className="text-xs text-green-200">
                "The fastest way to implement AI in your business" - TechCrunch
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
