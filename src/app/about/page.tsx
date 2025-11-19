"use client";

import Link from "next/link";


const workProcess = [
  {
    step: "01",
    title: "Understand your context",
    description:
      "We map your current processes, tools, constraints, and goals. No generic frameworks—just a clear picture of where you are.",
    icon: "🔍",
  },
  {
    step: "02",
    title: "Identify leverage points",
    description:
      "Together, we prioritize high-impact, low-risk AI use cases: faster decision cycles, reduced manual work, or better visibility.",
    icon: "🎯",
  },
  {
    step: "03",
    title: "Design and iterate",
    description:
      "We move from prototype to pilot with tight feedback loops, measuring outcomes and simplifying where needed.",
    icon: "🚀",
  },
];

const whyChooseUs = [
  {
    title: "Clear, honest guidance",
    description:
      "We're transparent about what AI can and cannot do for your specific situation.",
    icon: "💡",
  },
  {
    title: "Built for operators",
    description:
      "Our work centers the people running your processes every day, not just slide decks.",
    icon: "👥",
  },
  {
    title: "Implementation and enablement",
    description:
      "Documentation, training, and simple playbooks ensure that what we build keeps delivering value after the engagement ends.",
    icon: "📚",
  },
];

const values = [
  { label: "Pragmatic", description: "Real solutions over buzzwords" },
  { label: "Collaborative", description: "Your team at the center" },
  { label: "Transparent", description: "Honest about what works" },
  { label: "Results-focused", description: "Measurable outcomes" },
];

export default function AboutPage() {
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
                About InsightFlow
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              AI consulting built for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                real teams
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              InsightFlow exists to help growing teams use AI in ways that are
              practical, reliable, and grounded in their real workflows. We
              combine product thinking, operations experience, and modern AI
              tooling to create systems your team can trust.
            </p>

            {/* Values pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {values.map((value) => (
                <div
                  key={value.label}
                  className="group relative rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition-all hover:border-blue-300 hover:shadow-md"
                >
                  <div className="text-sm font-semibold text-slate-900">
                    {value.label}
                  </div>
                  <div className="text-xs text-slate-500">
                    {value.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              How we work
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              A straightforward, collaborative process focused on your success
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {workProcess.map((item, idx) => (
              <div key={item.step} className="group relative">
                {/* Connecting line (desktop only) */}
                {idx < workProcess.length - 1 && (
                  <div className="absolute left-full top-16 hidden h-px w-full bg-gradient-to-r from-slate-300 to-transparent md:block" />
                )}

                <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  {/* Step number badge */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-lg font-bold text-white shadow-lg shadow-blue-500/25">
                    {item.step}
                  </div>

                  {/* Icon */}
                  <div className="mb-3 text-3xl">{item.icon}</div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-20">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Why teams choose us
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We&apos;re different because we focus on what actually matters
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 text-2xl">
                  {item.icon}
                </div>

                <h3 className="mb-3 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-slate-50 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-20">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { value: "50+", label: "Projects Completed" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "2.8x", label: "Average ROI" },
              { value: "12 wks", label: "Avg Time to Value" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-slate-900 sm:text-5xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-600">{stat.label}</div>
              </div>
            ))}
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
                  Ready to work together?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-300">
                  Let&apos;s discuss how we can help your team leverage AI
                  effectively.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
                >
                  Get in touch
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
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-600 bg-slate-700/50 px-6 py-3 text-sm font-semibold text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-600/50 hover:text-white active:scale-95"
                >
                  View services
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
