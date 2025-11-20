"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";

type ContactFormData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  timeline: string;
  budget: string;
  message: string;
};

type ContactFAQ = {
  question: string;
  answer: string;
};

const contactFAQs: ContactFAQ[] = [
  {
    question: "How do engagements typically begin?",
    answer:
      "We start with a free 15-minute consultation to understand your needs, followed by a comprehensive discovery session to assess your current state and identify opportunities.",
  },
  {
    question: "What's the typical project timeline?",
    answer:
      "Most projects range from 2-12 weeks depending on scope. We provide detailed timelines during our initial consultation and maintain clear milestone tracking throughout.",
  },
  {
    question: "Do you work with companies of all sizes?",
    answer:
      "Yes! We've successfully helped startups, mid-market companies, and Fortune 500 organizations. Our approach scales to match your needs and budget.",
  },
  {
    question: "What's included in the free consultation?",
    answer:
      "We'll discuss your current challenges, explore potential AI opportunities, and provide initial recommendations. No obligation - just valuable insights for your business.",
  },
  {
    question: "How do you ensure project success?",
    answer:
      "We use proven methodologies, provide regular updates, include your team in the process, and offer performance guarantees with clear success metrics.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Reset form after success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          projectType: "",
          timeline: "",
          budget: "",
          message: "",
        });
      }, 3000);
    }, 2000);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ((prev) => (prev === index ? null : index));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-5xl font-bold text-gray-900 lg:text-6xl">
              Get in{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-600">
              Ready to transform your business with AI? Let's start with a free
              consultation to explore how we can help you achieve your goals.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="#contact-form" className="btn-primary px-8 py-4">
                Start Free Consultation
              </a>
              <a href="#quick-call" className="btn-secondary px-8 py-4">
                Book 15-Min Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <div
            id="contact-form"
            className="rounded-3xl bg-white p-8 shadow-lg lg:p-12"
          >
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Send Us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you within 24
                hours with personalized recommendations.
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-10 w-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Message Sent!
                </h3>
                <p className="mb-6 text-gray-600">
                  Thank you for reaching out. We'll review your inquiry and get
                  back to you within 24 hours with personalized recommendations
                  for your AI transformation journey.
                </p>
                <div className="rounded-xl border border-green-200 bg-green-50 p-4">
                  <p className="font-medium text-green-800">
                    📧 Confirmation sent to {formData.email}
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-green-500 focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select a service</option>
                      <option value="discovery">AI Discovery & Audit</option>
                      <option value="automation">Workflow Automation</option>
                      <option value="custom-ai">Custom AI Tools</option>
                      <option value="strategy">Strategy & Roadmapping</option>
                      <option value="readiness">AI Readiness Assessment</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="timeline"
                      className="mb-2 block text-sm font-medium text-gray-900"
                    >
                      Preferred Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-green-500 focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (within 2 weeks)</option>
                      <option value="month">Within 1 month</option>
                      <option value="quarter">Within 3 months</option>
                      <option value="flexible">Flexible timeline</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Estimated Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-green-500 focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-25k">Under $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-plus">$100,000+</option>
                    <option value="discuss">Prefer to discuss</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-gray-900"
                  >
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 transition-colors placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                    placeholder="Tell us about your current challenges, what you're hoping to achieve, and any specific requirements you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-4 text-lg disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg
                        className="mr-3 h-5 w-5 animate-spin text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          className="opacity-25"
                        ></circle>
                        <path
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          className="opacity-75"
                        ></path>
                      </svg>
                      Sending Message...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to our privacy policy.
                  We'll only use your information to respond to your inquiry.
                </p>
              </form>
            )}
          </div>

          {/* Contact Info & Additional Sections */}
          <div className="space-y-8">
            {/* Quick Call Booking */}
            <div id="quick-call" className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Book a Free 15-Minute Call
              </h3>
              <p className="mb-6 text-gray-600">
                Prefer to talk directly? Schedule a quick call to discuss your
                AI opportunities and get immediate insights.
              </p>

              {/* Calendly Embed Placeholder */}
              <div className="rounded-xl border-2 border-dashed border-green-300 bg-gradient-to-br from-green-50 to-blue-50 p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <span className="text-2xl">📅</span>
                </div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  Calendly Integration
                </h4>
                <p className="mb-4 text-gray-600">
                  Your Calendly booking widget would appear here
                </p>
                <a
                  href="https://calendly.com/your-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-6 py-3"
                >
                  Schedule on Calendly
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-green-100">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">hello@insightflow.ai</p>
                    <p className="text-sm text-green-600">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-blue-600">
                      Mon-Fri, 9 AM - 6 PM PST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-purple-100">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">
                      Office Locations
                    </h4>
                    <p className="text-gray-600">San Francisco, CA</p>
                    <p className="text-gray-600">New York, NY</p>
                    <p className="text-sm text-purple-600">
                      Remote consultations available globally
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="rounded-3xl bg-white p-8 shadow-lg lg:p-12">
            <div className="mb-12 text-center">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our AI consulting process and services
              </p>
            </div>

            <div className="space-y-4">
              {contactFAQs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-xl border border-gray-200"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.question}
                    </span>
                    <svg
                      className={`h-5 w-5 text-gray-500 transform transition-transform ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-gray-200 pt-8 text-center">
              <p className="mb-4 text-gray-600">Still have questions?</p>
              <a href="#contact-form" className="btn-secondary px-6 py-3">
                Send Us a Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
