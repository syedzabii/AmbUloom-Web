import HeroSection from "../components/HeroSection";
import FeatureGrid from "../components/FeatureGrid";
import CoursesSection from "../components/CoursesSection";
import SocialProof from "../components/SocialProof";
import FAQs from "../components/FAQs";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Why Choose Us - Bento Grid */}
      <FeatureGrid />

      {/* Courses Section */}
      <CoursesSection />

      {/* Social Proof / Trust */}
      <SocialProof />

      {/* FAQ Accordion */}
      <FAQs />
    </main>
  );
}
