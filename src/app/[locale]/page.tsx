import { getDictionary } from '@/lib/dictionaries'
import HeroSection from "../../components/HeroSection";
import SocialProof from "../../components/SocialProof";
import FeaturesSection from "../../components/FeaturesSection";
import HowItWorks from "../../components/HowItWorks";
import AboutSection from "../../components/AboutSection";
import OfferSection from "../../components/OfferSection";
import FAQSection from "../../components/FAQSection";
import SecondaryCTA from "../../components/SecondaryCTA";
import Footer from "../../components/Footer";

type Props = {
  params: {
    locale: string
  }
}
export default async function Home({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)
//export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection dict={dict} />
      <OfferSection dict={dict}/>
      <SocialProof dict={dict}/>
      <FeaturesSection dict={dict}/>
      <HowItWorks dict={dict}/>
      <AboutSection dict={dict}/>   
      <FAQSection dict={dict}/>
      <SecondaryCTA dict={dict}/>
      <Footer dict={dict}/>
    </div>
  );
}
