import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import BonusSection from "@/components/BonusSection";
import FeaturesSection from "@/components/FeaturesSection";
import SocialBar from "@/components/SocialBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="font-sans">
      <HeroSection />
      <IntroSection />
      <BonusSection />
      <FeaturesSection />
      <SocialBar />
    </main>
  );
}
