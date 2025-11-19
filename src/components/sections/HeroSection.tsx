"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const stats = [
  { value: "250+", label: "Projects Delivered" },
  { value: "94%", label: "Client Satisfaction" },
  { value: "3.2x", label: "Avg. ROI Increase" },
];

const engagementSteps = [
  {
    title: "Workflow audit",
    duration: "2 weeks",
    icon: "📊",
  },
  {
    title: "AI opportunity map",
    metric: "+18% efficiency",
    icon: "🎯",
  },
  {
    title: "Team enablement",
    detail: "Playbooks & training",
    icon: "🚀",
  },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Use setTimeout to defer the state update and avoid cascading renders
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100/40 to-purple-100/40 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-100/30 to-cyan-100/30 blur-3xl" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-24">
        {/* Main content grid */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Content */}
          <div
            className={`flex flex-col justify-center space-y-6 transition-all duration-700 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </div>
              <span className="text-xs font-semibold text-blue-700">
                AI-Powered Business Transformation
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                AI-integrated consulting for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  smarter, faster
                </span>{" "}
                decisions
              </h1>
              <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
                We help modern businesses weave AI into their strategy,
                operations, and analytics—without the buzzword overload.
              </p>
            </div>

            {/* Value proposition points */}
            <div className="flex flex-wrap gap-3">
              {[
                "Clear roadmaps",
                "Measurable outcomes",
                "Tools teams love",
              ].map((point, idx) => (
                <div
                  key={point}
                  className="flex items-center gap-2 rounded-lg bg-white/80 px-3 py-2 shadow-sm ring-1 ring-slate-900/5 backdrop-blur-sm"
                  style={{
                    transitionDelay: mounted ? `${idx * 100}ms` : "0ms",
                  }}
                >
                  <svg
                    className="h-4 w-4 text-emerald-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm font-medium text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
              >
                Book a discovery call
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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
                href="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50 active:scale-95"
              >
                Explore services
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
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

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 rounded-xl border border-slate-200 bg-white/50 p-4 backdrop-blur-sm">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-slate-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Engagement card */}
          <div
            className={`flex items-center justify-center transition-all duration-700 delay-200 ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <div className="relative w-full max-w-md">
              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 blur-2xl" />

              {/* Main card */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
                {/* Card header */}
                <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50 to-white px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Sample Engagement
                      </p>
                      <p className="mt-1 text-lg font-bold text-slate-900">
                        Your AI Journey
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-2xl shadow-lg shadow-blue-500/25">
                      ⚡
                    </div>
                  </div>
                </div>

                {/* Steps */}
                <div className="p-6">
                  <div className="space-y-4">
                    {engagementSteps.map((step, idx) => (
                      <div
                        key={step.title}
                        className="group relative overflow-hidden rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4 transition-all hover:border-blue-200 hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-xl shadow-sm ring-1 ring-slate-900/5">
                              {step.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-slate-900">
                                {step.title}
                              </h3>
                              <p className="mt-1 text-xs text-slate-500">
                                Step {idx + 1} of {engagementSteps.length}
                              </p>
                            </div>
                          </div>
                          <div className="shrink-0">
                            {step.duration && (
                              <span className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
                                {step.duration}
                              </span>
                            )}
                            {step.metric && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                                <svg
                                  className="h-3 w-3"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                  />
                                </svg>
                                {step.metric}
                              </span>
                            )}
                            {step.detail && (
                              <span className="inline-flex text-xs text-slate-600">
                                {step.detail}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom note */}
                  <div className="mt-6 rounded-lg bg-blue-50/50 p-4 ring-1 ring-blue-100">
                    <p className="text-sm leading-relaxed text-slate-700">
                      <span className="font-semibold text-blue-900">
                        Designed for lean teams
                      </span>{" "}
                      that want AI to support existing workflows, not replace
                      them.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
