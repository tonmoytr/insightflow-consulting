"use client";

import { useActionState } from "react";


const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "hello@insightflow-demo.com",
    link: "mailto:hello@insightflow-demo.com",
  },
  {
    icon: "🌍",
    label: "Time zones",
    value: "Remote-first across North America and Europe",
  },
  {
    icon: "⚡",
    label: "Response time",
    value: "Within 1 business day",
  },
];

type FormState = {
  success: boolean;
  message: string;
} | null;

// Server action simulation
async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Basic validation
  if (!name || !email || !message) {
    return {
      success: false,
      message: "All fields are required.",
    };
  }

  // Simulate successful submission
  return {
    success: true,
    message:
      "Message sent successfully! This is a demo, so no real email was delivered.",
  };
}

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState<FormState, FormData>(
    submitContactForm,
    null
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-linear-to-br from-slate-50 via-white to-slate-50">
        <div className="absolute inset-0 overflow-hidden opacity-40">
          <div className="absolute -right-1/4 top-0 h-96 w-96 rounded-full bg-linear-to-br from-blue-100 to-purple-100 blur-3xl" />
          <div className="absolute -left-1/4 bottom-0 h-96 w-96 rounded-full bg-linear-to-tr from-cyan-100 to-blue-100 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/50 px-4 py-1.5 backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs font-semibold text-blue-700">
                Available for New Projects
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Let&apos;s talk about{" "}
              <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                your AI journey
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              Share a bit about your team, your current challenges, and what
              you&apos;d like to explore. We typically respond within one
              business day.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Form Section */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 lg:py-20">
          {state?.success ? (
            <div className="mx-auto max-w-2xl rounded-2xl border border-emerald-200 bg-emerald-50 p-12 text-center shadow-sm">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                <svg
                  className="h-10 w-10 text-emerald-600"
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
              <h3 className="mb-3 text-2xl font-bold text-slate-900">
                Message sent successfully!
              </h3>
              <p className="text-slate-600">{state.message}</p>
              <button
                onClick={() => window.location.reload()}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800"
              >
                Send another message
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
              </button>
            </div>
          ) : (
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Left: Visual Section */}
              <div className="flex flex-col justify-center">
                <div className="relative">
                  {/* Decorative background */}
                  <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-blue-50 via-purple-50 to-cyan-50 opacity-60 blur-2xl" />

                  {/* Main visual content */}
                  <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
                    {/* Illustration placeholder - you can replace with actual image or Lottie */}
                    <div className="mb-6 flex justify-center">
                      <div className="relative h-48 w-48">
                        {/* Animated circles */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="h-40 w-40 animate-pulse rounded-full bg-linear-to-br from-blue-400 to-purple-400 opacity-20" />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="h-32 w-32 animate-pulse rounded-full bg-linear-to-br from-cyan-400 to-blue-400 opacity-30"
                            style={{ animationDelay: "1s" }}
                          />
                        </div>
                      </div>
                    </div>

                    <h3 className="mb-4 text-center text-2xl font-bold text-slate-900">
                      We&apos;re here to help
                    </h3>
                    <p className="mb-6 text-center text-slate-600">
                      Whether you&apos;re just starting to explore AI or ready
                      to scale, we&apos;ll guide you through every step of the
                      journey.
                    </p>

                    {/* Contact info cards */}
                    <div className="space-y-3">
                      {contactInfo.map((info) => (
                        <div
                          key={info.label}
                          className="flex items-center gap-3 rounded-lg bg-slate-50 p-3"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-xl shadow-sm">
                            {info.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                              {info.label}
                            </div>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="block truncate text-sm font-medium text-blue-600 hover:text-blue-700"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <div className="text-sm text-slate-700">
                                {info.value}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
                    Get in touch
                  </h2>
                  <p className="mt-2 text-slate-600">
                    Fill out the form and we&apos;ll get back to you within 24
                    hours.
                  </p>
                </div>

                <form action={formAction} className="space-y-5">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-slate-900"
                    >
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={isPending}
                      className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition-all placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-900"
                    >
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={isPending}
                      className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition-all placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500"
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* Company Field */}
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-2 block text-sm font-medium text-slate-900"
                    >
                      Company{" "}
                      <span className="text-sm font-normal text-slate-500">
                        (optional)
                      </span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      disabled={isPending}
                      className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition-all placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500"
                      placeholder="Your company name"
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-slate-900"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      disabled={isPending}
                      className="block w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 shadow-sm transition-all placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-500"
                      placeholder="Tell us about your project, goals, and how we can help..."
                    />
                  </div>

                  {/* Error Message */}
                  {state?.success === false && (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      <div className="flex items-start gap-3">
                        <svg
                          className="mt-0.5 h-5 w-5 shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{state.message}</span>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isPending}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-[15px] text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100 active:scale-95"
                  >
                    {isPending ? (
                      <>
                        <svg
                          className="h-5 w-5 animate-spin"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending message...
                      </>
                    ) : (
                      <>
                        Send message
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
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    We&apos;ll respond within 24 hours. Your information is kept
                    private and secure.
                  </p>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
