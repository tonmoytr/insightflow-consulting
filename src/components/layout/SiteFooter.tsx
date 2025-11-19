export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-linear-to-br from-slate-50 via-slate-50 to-slate-100">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-linear-to-br from-blue-100 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-linear-to-tr from-slate-200 to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6">
        {/* Main content grid */}
        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {/* Brand section */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-blue-700 shadow-lg shadow-blue-500/20">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-900">
                InsightFlow
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              AI-Integrated Business Strategy
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Transforming businesses through intelligent solutions and
              strategic innovation.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
              Services
            </h3>
            <ul className="space-y-2">
              {[
                "AI Strategy",
                "Business Analytics",
                "Digital Transformation",
                "Consulting",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group inline-flex items-center text-sm text-slate-600 transition-colors hover:text-blue-600"
                  >
                    <span className="mr-1 opacity-0 transition-opacity group-hover:opacity-100">
                      →
                    </span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-900">
              Connect
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@insightflow.com"
                  className="group inline-flex items-center text-sm text-slate-600 transition-colors hover:text-blue-600"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  hello@insightflow.com
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                {["linkedin", "twitter", "github"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600 hover:shadow-sm"
                    aria-label={social}
                  >
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {social === "linkedin" && (
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      )}
                      {social === "twitter" && (
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      )}
                      {social === "github" && (
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      )}
                    </svg>
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p className="flex items-center gap-2">
            <span>© {year} InsightFlow Consulting.</span>
            <span className="hidden sm:inline">All rights reserved.</span>
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href="#" className="transition-colors hover:text-slate-900">
              Privacy Policy
            </a>
            <span className="text-slate-300">•</span>
            <a href="#" className="transition-colors hover:text-slate-900">
              Terms of Service
            </a>
            <span className="text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              Built with
              <span className="font-medium text-slate-700">Next.js</span>
              <span className="text-slate-300">&</span>
              <span className="font-medium text-slate-700">TypeScript</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
