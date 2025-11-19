"use client";

import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-20">
        <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-8 backdrop-blur-sm lg:p-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-12">
            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready to explore where AI fits in your business?
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                Share a bit about your team, your challenges, and your goals.
                We&apos;ll outline a focused, low-risk way to start.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 active:scale-95"
              >
                Contact InsightFlow
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
  );
}
