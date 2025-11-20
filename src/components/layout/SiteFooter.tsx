"use client";

import Link from "next/link";
import { useState } from "react";

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
];

const servicesLinks = [
  { name: "AI Strategy", href: "/services#strategy" },
  { name: "Workflow Design", href: "/services#workflow" },
  { name: "AI Implementation", href: "/services#implementation" },
  { name: "Team Training", href: "/services#training" },
  { name: "AI Lab Tools", href: "/lab" },
];

const resourcesLinks = [
  { name: "AI Readiness Guide", href: "/resources/readiness" },
  { name: "ROI Calculator", href: "/resources/calculator" },
  { name: "Case Studies", href: "/resources/cases" },
  { name: "Whitepapers", href: "/resources/papers" },
  { name: "Documentation", href: "/docs" },
];

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Ahead with AI Insights
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Get weekly insights, case studies, and AI strategy tips delivered to your inbox.
              Join 5,000+ forward-thinking business leaders.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none text-white"
                required
              />
              <button
                type="submit"
                className="btn-primary px-8 py-3 whitespace-nowrap"
              >
                {subscribed ? "✓ Subscribed!" : "Subscribe"}
              </button>
            </form>
            
            <p className="text-gray-500 text-sm mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">IF</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">InsightFlow</div>
                <div className="text-gray-400 text-sm">AI Consulting</div>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-6 max-w-md">
              Transforming businesses through strategic AI implementation. 
              We help companies unlock exponential growth with intelligent automation 
              and data-driven insights.
            </p>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-400">500+ Projects Delivered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-400">98% Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div>
              <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center space-x-3">
                  <span>📧</span>
                  <span>hello@insightflow.ai</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📞</span>
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span>📍</span>
                  <span>San Francisco, CA & New York, NY</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
                <div className="text-green-400 text-xs mt-2">
                  24/7 support for Enterprise clients
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {["LinkedIn", "Twitter", "GitHub", "YouTube"].map((social) => (
                  <div
                    key={social}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors group cursor-pointer"
                  >
                    <span className="text-gray-400 group-hover:text-white text-sm">
                      {social.charAt(0)}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h5 className="text-sm font-semibold text-white mb-2">Certifications</h5>
                <div className="flex space-x-3 text-xs text-gray-400">
                  <span className="bg-gray-800 px-2 py-1 rounded">SOC 2</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">ISO 27001</span>
                  <span className="bg-gray-800 px-2 py-1 rounded">GDPR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <div className="mb-4 md:mb-0">
              © 2025 InsightFlow Consulting. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-green-400 transition-colors">
                Cookie Policy
              </Link>
              <div className="text-gray-600">
                Made with ❤️ in San Francisco
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
