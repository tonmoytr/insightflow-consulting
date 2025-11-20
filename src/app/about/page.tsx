"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">InsightFlow</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're on a mission to make AI strategy accessible and actionable for forward-thinking businesses. 
              Founded in 2025, we bridge the gap between AI potential and practical implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            </div>
            
            <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
              <p>
                InsightFlow Consulting is a specialized AI strategy firm dedicated to helping businesses navigate the rapidly evolving landscape of artificial intelligence. We believe that every company, regardless of size or industry, deserves access to world-class AI consulting that drives real results.
              </p>
              <p>
                Our team combines deep technical expertise with practical business acumen to deliver AI solutions that don't just impress—they transform. We've helped over 500 companies automate workflows, optimize operations, and unlock new growth opportunities through strategic AI implementation.
              </p>
              <p>
                What sets us apart is our commitment to clarity and execution. We don't believe in AI for AI's sake. Every solution we recommend is designed to solve real business problems and deliver measurable ROI within months, not years.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Philosophy */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Foundation</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To democratize AI strategy and make intelligent automation accessible to businesses of all sizes, 
                  helping them achieve exponential growth through practical AI implementation.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A world where every business leverages AI to operate more efficiently, make better decisions, 
                  and create meaningful value for their customers and communities.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-3xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophy</h3>
                <p className="text-gray-600 leading-relaxed">
                  We focus on automation and clarity because AI should simplify, not complicate. 
                  Every solution we design prioritizes practical implementation over theoretical complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our 3-Step Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Proven Process</h2>
              <p className="text-xl text-gray-600">How we transform your business operations in three focused phases</p>
            </div>
            
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Discovery</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We begin with a comprehensive analysis of your current workflows, identifying automation opportunities and potential efficiency gains. Our team conducts stakeholder interviews, process audits, and technology assessments to understand your unique challenges and objectives.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Current state assessment</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Stakeholder alignment sessions</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">•</span>Opportunity identification</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategy</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Based on our discovery insights, we develop a customized AI strategy that aligns with your business goals. We prioritize initiatives by impact and feasibility, creating a clear roadmap with defined milestones and success metrics.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Custom AI roadmap development</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>ROI projections and timeline</li>
                    <li className="flex items-center"><span className="text-blue-500 mr-2">•</span>Risk assessment and mitigation</li>
                  </ul>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We execute the strategy through phased rollouts, ensuring minimal disruption to your operations. Our team provides hands-on support, comprehensive training, and ongoing optimization to guarantee success and sustained value delivery.
                  </p>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex items-center"><span className="text-purple-500 mr-2">•</span>Phased deployment approach</li>
                    <li className="flex items-center"><span className="text-purple-500 mr-2">•</span>Team training and enablement</li>
                    <li className="flex items-center"><span className="text-purple-500 mr-2">•</span>Performance monitoring and optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-4xl">IF</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      InsightFlow was founded in early 2025 with a simple observation: while AI technology was advancing rapidly, most businesses struggled to translate that potential into practical value. The gap between AI capability and business implementation was growing wider, not smaller.
                    </p>
                    <p>
                      Our founders, coming from backgrounds in both technology and business strategy, recognized that what the market needed wasn't more AI tools—it needed better AI strategy. Companies needed partners who could speak both languages: the language of technology and the language of business outcomes.
                    </p>
                    <p>
                      Today, we've helped over 500 companies bridge that gap, generating more than $50 million in cost savings and efficiency gains. Our mission remains unchanged: making AI strategy accessible, actionable, and profitable for businesses ready to embrace the future.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-xl text-gray-600">Key milestones in our mission to democratize AI strategy</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <div className="text-green-600 font-semibold mb-1">Late 2024</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Early Research & Development</h3>
                  <p className="text-gray-600">Conducted extensive research on AI implementation challenges across industries. Identified key gaps in the consulting market.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <div className="text-green-600 font-semibold mb-1">Early 2025</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">InsightFlow Lab Launch</h3>
                  <p className="text-gray-600">Built and launched our AI tools platform, including the Service Recommender and Brief Analyzer, to democratize access to AI strategy insights.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-4 h-4 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <div className="text-green-600 font-semibold mb-1">Mid 2025</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Full Consulting Platform</h3>
                  <p className="text-gray-600">Launched comprehensive consulting services, combining our digital tools with hands-on strategic guidance for enterprise clients.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-4 h-4 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <div className="text-blue-600 font-semibold mb-1">Today</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scaling Impact</h3>
                  <p className="text-gray-600">Serving 50+ clients with 500+ successful projects completed. Continuously expanding our AI toolkit and consulting methodologies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Team Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Why Choose Us */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose InsightFlow</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                      <p className="text-gray-600">500+ successful AI implementations with an average 4.8x ROI within 6 months.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Rapid Implementation</h3>
                      <p className="text-gray-600">Start seeing results within 24 hours of our first consultation call.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Business-First Approach</h3>
                      <p className="text-gray-600">We prioritize practical business outcomes over technological complexity.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Support</h3>
                      <p className="text-gray-600">End-to-end guidance from strategy through implementation and optimization.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">ROI Guarantee</h3>
                      <p className="text-gray-600">We stand behind our results with performance guarantees and success metrics.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Team Values */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="text-2xl mr-3">🧠</span>
                      First-Principles Thinking
                    </h3>
                    <p className="text-gray-600">We solve problems from the ground up, questioning assumptions and building solutions based on fundamental truths rather than conventional wisdom.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="text-2xl mr-3">⚡</span>
                      High Agency
                    </h3>
                    <p className="text-gray-600">We take ownership of outcomes and proactively drive results. When challenges arise, we find solutions rather than excuses.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="text-2xl mr-3">💬</span>
                      Clear Communication
                    </h3>
                    <p className="text-gray-600">We believe in transparent, jargon-free communication. Complex AI concepts are explained in business terms that drive decision-making.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
                      <span className="text-2xl mr-3">🚀</span>
                      Lightweight Execution
                    </h3>
                    <p className="text-gray-600">We favor speed and iteration over perfect plans. Better to ship working solutions quickly and improve them than to delay with theoretical perfection.</p>
                  </div>
                </div>
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
              Join the growing number of companies that trust InsightFlow to guide their AI transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Start Your Journey
              </a>
              <a href="/lab" className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors">
                Try Our Tools
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
