import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/HeroSection";
import { TokenShowcase } from "@/components/TokenShowcase";
import { CommunitySection } from "@/components/CommunitySection";
import { CallToAction } from "@/components/CallToAction";
import FooterSection from "@/components/ui/footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <TokenShowcase />
        <CommunitySection />
        <CallToAction />
        <FooterSection />
      </div>
    </main>
  );
};

export default Index;
