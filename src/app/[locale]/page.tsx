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

type Dict = {
  nav: {
    work: string;
    services: string;
    about: string;
    faq: string;
    contact: string;
  };
  hero: {
    headline: string;
    subtext: string;
    quote: string;
    view: string;
  };
  offerSection: {
    headline: string;
    headline2: string;
  };
  socialProof: {
    title: string;
    title2: string;
    services: Array<{
      title: string;
      description: string;
    }>;
  };
  whyChooseUs: {
    title: string;
    headline: string;
    description: string;
    features: Array<{
      name: string;
      description: string;
    }>;
  };
  howItWorks: {
    title: string;
    title2: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  about: {
    title: string;
    description: string;
    description2: string;
    description3: string;
    stats: Array<{
      name: string;
      value: string;
    }>;
  };
  faq: {
    label: string;
    title1: string;
    title2: string;
    questions: Array<{
      q: string;
      a: string;
    }>;
  };
  secondaryCTA: {
    title1: string;
    title2: string;
    description: string;
    button: string;
  };
  footer: {
    subheading: string;
    quickLinksTitle: string;
    addressLabel: string;
    hoursLabel: string;
    emailLabel: string;
    phoneLabel: string;
    contactTitle: string;
    copyright: string;
  };
}

interface PageProps {
  params: {
    locale: string;
  };
}

export default async function Home({ params }: PageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection dict={dict} />
      <OfferSection dict={dict} />
      <SocialProof dict={dict} />
      <FeaturesSection dict={dict} />
      <HowItWorks dict={dict} />
      <AboutSection dict={dict} />
      <FAQSection dict={dict} />
      <SecondaryCTA dict={dict} />
      <Footer dict={dict} />
    </div>
  );
}
