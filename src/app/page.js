import CTASection from "@/components/home/CTASection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HeroSection from "@/components/home/HeroSection";
import JobBoardSection from "@/components/home/JobSection";
import PricingSection from "@/components/home/PricingSection";

export default function Home() {
  return (
   <div>
    <HeroSection/>
   <JobBoardSection/>
   <FeaturesSection/>
   <PricingSection/>
   <CTASection/>
   </div>
  );
}
