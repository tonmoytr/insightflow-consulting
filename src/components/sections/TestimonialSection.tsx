"use client";

import { useState } from "react";

const testimonials = [
  {
    name: "Growth-focused SaaS team",
    role: "VP of Operations",
    quote:
      "InsightFlow helped us cut manual reporting time by 40% and gave our leadership team a single source of truth. The AI suggestions quickly became part of every weekly meeting.",
    impact: "40% time saved",
    color: "blue",
  },
  {
    name: "Regional services company",
    role: "Managing Director",
    quote:
      "They translated the AI hype into a clear roadmap tailored to our business. The automation wins paid for the project within the first quarter.",
    impact: "ROI in Q1",
    color: "purple",
  },
  {
    name: "Product-led startup",
    role: "Founder",
    quote:
      "What stood out was how pragmatic they were. No fluff—just practical experiments, quick iterations, and honest recommendations.",
    impact: "3x faster iterations",
    color: "cyan",
  },
];

const stats = [
  { value: "50+", label: "Projects Completed" },
  { value: "98%", label: "Client Retention" },
  { value: "2.8x", label: "Avg ROI" },
  { value: "12 wks", label: "Avg Time to Value" },
];

const colorConfig = {
  blue: "from-blue-500 to-blue-600",
  purple: "from-purple-500 to-purple-600",
  cyan: "from-cyan-500 to-cyan-600",
};

export function TestimonialsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100 to-transparent blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-gradient-to-tl from-purple-100 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-20">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
            <svg
              className="h-4 w-4 text-amber-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Trusted by teams that need{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              clarity, not noise
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            We work best with teams that care about sustainable growth,
            thoughtful automation, and measurable ROI.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm"
            >
              <div className="text-3xl font-bold text-slate-900">
                {stat.value}
              </div>
              <div className="mt-1 text-xs text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {testimonials.map((testimonial, idx) => (
            <figure
              key={testimonial.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient top border */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                  colorConfig[testimonial.color as keyof typeof colorConfig]
                } transition-opacity ${
                  hoveredIndex === idx ? "opacity-100" : "opacity-0"
                }`}
              />

              <div className="flex flex-1 flex-col p-6">
                {/* Quote icon */}
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">
                  <svg
                    className="h-5 w-5 text-slate-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote */}
                <blockquote className="flex-1">
                  <p className="text-sm leading-relaxed text-slate-700">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </blockquote>

                {/* Divider */}
                <div className="my-4 h-px bg-slate-200" />

                {/* Attribution & Impact */}
                <div className="flex items-end justify-between gap-4">
                  <figcaption className="text-sm">
                    <div className="font-semibold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-slate-500">
                      {testimonial.role}
                    </div>
                  </figcaption>

                  {/* Impact badge */}
                  <div
                    className={`shrink-0 rounded-full bg-gradient-to-r ${
                      colorConfig[testimonial.color as keyof typeof colorConfig]
                    } px-3 py-1 text-xs font-semibold text-white shadow-md`}
                  >
                    {testimonial.impact}
                  </div>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-slate-50 opacity-0 transition-opacity group-hover:opacity-100" />
            </figure>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <div className="flex items-center justify-center gap-1 md:justify-start">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-amber-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">4.9/5</span>{" "}
                average rating from{" "}
                <span className="font-semibold text-slate-900">50+</span> client
                engagements
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-emerald-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>NDA Protected</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <span>SOC 2 Compliant</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <svg
                  className="h-4 w-4 text-purple-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>Dedicated Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
