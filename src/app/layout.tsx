import type { Metadata } from "next";
import "../lib/styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ChatWidget } from "@/components/chat/ChatWidget";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://insightflow.com"), // change to your real domain later
  title: {
    default: "InsightFlow Consulting",
    template: "%s | InsightFlow Consulting",
  },
  description:
    "InsightFlow Consulting helps modern teams integrate AI into strategy, operations, and analytics with clear, practical roadmaps.",
  openGraph: {
    title: "InsightFlow Consulting",
    description:
      "AI-integrated consulting for teams that need clarity, not noise.",
    url: "https://insightflow.com",
    siteName: "InsightFlow Consulting",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InsightFlow Consulting",
    description: "AI-integrated consulting for smarter, faster decisions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.className} bg-white text-slate-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 bg-white">
            {/* Page content */}
            {children}
          </main>
          <SiteFooter />
        </div>

        {/* Global AI chat widget */}
        <ChatWidget />
      </body>
    </html>
  );
}
