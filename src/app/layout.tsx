import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ChatWidget } from "@/components/chat/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InsightFlow - AI Consulting & Transformation | Next-Gen Business Solutions",
  description: "Transform your business with expert AI consulting. Strategic planning, implementation, and training for exponential growth. 500+ successful projects, 98% client satisfaction.",
  keywords: "AI consulting, artificial intelligence, business transformation, automation, machine learning, digital transformation, AI strategy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#2ed573" />
      </head>
      
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <SiteHeader />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <SiteFooter />
        </div>
        
        <ChatWidget />
      </body>
    </html>
  );
}
