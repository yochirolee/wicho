import HeroSection from "../components/HeroSection";
import SocialProof from "../components/SocialProof";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks";
import AboutSection from "../components/AboutSection";
import OfferSection from "../components/OfferSection";
import FAQSection from "../components/FAQSection";
import SecondaryCTA from "../components/SecondaryCTA";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <OfferSection />
      <SocialProof />
      <FeaturesSection />
      <HowItWorks />
      <AboutSection />   
      <FAQSection />
      <SecondaryCTA />
      <Footer />
    </div>
  );
}
