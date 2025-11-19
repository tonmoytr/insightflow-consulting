import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TestimonialsSection } from "@/components/sections/TestimonialSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
