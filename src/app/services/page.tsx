"use client";

import Link from "next/link";

const services = [
  {
    title: "AI Strategy & Portfolio",
    summary:
      "Clarify which AI initiatives matter most and how they align with your business roadmap.",
    details: [
      "Executive & team workshops",
      "Use case discovery & prioritization",
      "Risk, compliance & data considerations",
    ],
    icon: "🎯",
    color: "blue",
  },
  {
    title: "Workflow & Assistant Design",
    summary:
      "Transform repetitive workflows into guided, AI-supported flows that reduce manual effort.",
    details: [
      "Process mapping and redesign",
      "AI assistant and automation design",
      "Tool and integration recommendations",
    ],
    icon: "⚡",
    color: "purple",
  },
  {
    title: "Insight & Reporting Layer",
    summary:
      "Turn fragmented data into decision-ready insights for leaders and operators.",
    details: [
      "Metrics & KPI definition",
      "Dashboard structure & alerting",
      "Experiment tracking and ROI reporting",
    ],
    icon: "📊",
    color: "cyan",
  },
  {
    title: "Pilot & Change Support",
    summary:
      "Support your team through pilot launches, feedback loops, and iteration.",
    details: [
      "Pilot planning and rollout",
      "Training & enablement materials",
      "Iteration based on real usage",
    ],
    icon: "🚀",
    color: "emerald",
  },
];

const colorConfig = {
  blue: {
    gradient: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  purple: {
    gradient: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    text: "text-purple-600",
  },
  cyan: {
    gradient: "from-cyan-500 to-cyan-600",
    bg: "bg-cyan-50",
    text: "text-cyan-600",
  },
  emerald: {
    gradient: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
};

const process = [
  {
    step: "Discovery",
    description: "We learn your context, constraints, and goals",
  },
  {
    step: "Design",
    description: "We propose solutions and iterate with your team",
  },
  {
    step: "Delivery",
    description: "We implement, train, and enable your team",
  },
  {
    step: "Support",
    description: "We measure outcomes and refine as needed",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute -right-1/4 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 blur-3xl" />
          <div className="absolute -left-1/4 bottom-0 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-100 to-blue-100 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 backdrop-blur-sm">
              <span className="text-xs font-semibold text-blue-700">
                Our Services
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              AI services for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                practical teams
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              We partner with operators, founders, and leadership teams that
              want to integrate AI into their strategy and operations in a
              measured, sustainable way.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-20">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, idx) => {
              const colors =
                colorConfig[service.color as keyof typeof colorConfig];
              return (
                <div
                  key={service.title}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Top gradient line */}
                  <div className={`h-1 bg-gradient-to-r ${colors.gradient}`} />

                  <div className="flex flex-1 flex-col p-6">
                    {/* Icon */}
                    <div
                      className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${colors.gradient} text-2xl shadow-lg`}
                    >
                      {service.icon}
                    </div>

                    {/* Title & Summary */}
                    <h2 className="text-xl font-bold text-slate-900">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {service.summary}
                    </p>

                    {/* Details List */}
                    <div className={`mt-6 rounded-lg ${colors.bg} p-4`}>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                        What&apos;s included
                      </p>
                      <ul className="space-y-2">
                        {service.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-start gap-2 text-sm text-slate-700"
                          >
                            <svg
                              className={`mt-0.5 h-4 w-4 shrink-0 ${colors.text}`}
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
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Our process
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A collaborative approach from start to finish
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, idx) => (
              <div
                key={item.step}
                className="relative rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                {/* Step number */}
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-lg font-bold text-white shadow-lg">
                  {idx + 1}
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {item.step}
                </h3>
                <p className="text-sm text-slate-600">{item.description}</p>

                {/* Arrow connector (desktop only) */}
                {idx < process.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                    <svg
                      className="h-6 w-6 text-slate-300"
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ/Not Sure Section */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center md:px-6 lg:py-20">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 lg:p-12">
            <div className="mx-auto max-w-2xl">
              <div className="mb-4 text-4xl">💭</div>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                Not sure where to start?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                A short discovery call is often the easiest way to identify
                whether there&apos;s a fit. We&apos;ll discuss your challenges,
                explore potential solutions, and outline next steps—no pressure,
                no commitment.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
                >
                  Schedule a discovery call
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-20">
          <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm lg:p-12">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Ready to get started?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  Let&apos;s discuss how we can help your team integrate AI
                  effectively.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
                >
                  Contact us
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
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-600 bg-slate-700/50 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-600/50 hover:text-white active:scale-95"
                >
                  Learn more
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
