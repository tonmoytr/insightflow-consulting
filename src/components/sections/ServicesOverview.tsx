"use client";

import Link from "next/link";

const services = [
  {
    title: "AI Strategy & Roadmapping",
    description:
      "Clarify where AI can add real value in your business, prioritize use cases, and define a realistic implementation plan.",
    icon: "🎯",
    color: "blue",
    features: [
      "Use case prioritization",
      "ROI modeling",
      "Implementation timeline",
    ],
  },
  {
    title: "Workflow Automation",
    description:
      "Streamline repetitive workflows with AI-driven assistants, integrations, and smart routing across your tools.",
    icon: "⚡",
    color: "purple",
    features: ["Process mapping", "Tool integration", "AI agent setup"],
  },
  {
    title: "Data & Insight Layer",
    description:
      "Turn raw data into decision-ready insights with dashboards, alerts, and tailored analytics for your team.",
    icon: "📊",
    color: "cyan",
    features: ["Custom dashboards", "Real-time alerts", "Predictive analytics"],
  },
];

const colorConfig = {
  blue: {
    gradient: "from-blue-500 to-blue-600",
    ring: "ring-blue-500/10",
    hover: "group-hover:ring-blue-500/20",
    text: "text-blue-600",
    bg: "bg-blue-50",
  },
  purple: {
    gradient: "from-purple-500 to-purple-600",
    ring: "ring-purple-500/10",
    hover: "group-hover:ring-purple-500/20",
    text: "text-purple-600",
    bg: "bg-purple-50",
  },
  cyan: {
    gradient: "from-cyan-500 to-cyan-600",
    ring: "ring-cyan-500/10",
    hover: "group-hover:ring-cyan-500/20",
    text: "text-cyan-600",
    bg: "bg-cyan-50",
  },
};

export function ServicesOverview() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-br from-blue-100/30 to-purple-100/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-20">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-600">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Practical AI services for{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              real teams
            </span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 sm:text-xl">
            No black-box magic. We focus on concrete, measurable outcomes: less
            manual work, faster decisions, and clearer insight across your
            operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:mt-16">
          {services.map((service, idx) => {
            const colors =
              colorConfig[service.color as keyof typeof colorConfig];
            return (
              <div
                key={service.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${colors.gradient} opacity-0 transition-opacity group-hover:opacity-100`}
                />

                <div className="flex flex-1 flex-col p-6">
                  {/* Icon */}
                  <div
                    className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colors.gradient} text-2xl shadow-lg ring-4 ${colors.ring} ${colors.hover} transition-all`}
                  >
                    {service.icon}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-6 space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <svg
                          className={`h-4 w-4 shrink-0 ${colors.text}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Bottom badge */}
                  <div className={`mt-6 rounded-lg ${colors.bg} p-3`}>
                    <p className="text-xs font-medium text-slate-600">
                      Includes discovery, solution design, and clear next steps
                    </p>
                  </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute bottom-6 right-6 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 opacity-0 transition-all group-hover:opacity-100">
                  <svg
                    className="h-4 w-4 text-slate-600"
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
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm lg:mt-16">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900">
                Ready to transform your operations?
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                From discovery workshops to implementation sprints, we adapt to
                your current stack and capacity.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-400 hover:bg-slate-50 active:scale-95"
              >
                View all services
                <svg
                  className="h-4 w-4"
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
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
              >
                Start a project
                <svg
                  className="h-4 w-4"
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
