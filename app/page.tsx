import {
  AboutSection,
  ContactSection,
  LandingFooter,
  LandingHeader,
  LandingHero,
  ServicesSection,
  StatsStrip,
} from "@/components/landing";
import "@/styles/dr-alex-landing.css";

export default function HomePage() {
  return (
    <div className="dr-alex-landing">
      <LandingHeader />
      <LandingHero />
      <ServicesSection />
      <StatsStrip />
      <AboutSection />
      <ContactSection />
      <LandingFooter />
    </div>
  );
}
