import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { ButtonColorful } from "@/components/ui/button-colorful";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Cosmic Nebula Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(/src/assets/cosmic-nebula-header.png)` }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Scattered Additional Stars */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-60" />
          <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
          <div className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-white rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/5 right-1/4 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-50" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/4 right-1/5 w-1 h-1 bg-white rounded-full animate-pulse opacity-45" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-white rounded-full animate-pulse opacity-35" style={{ animationDelay: '2.5s' }} />
        </div>
      </div>

      {/* Lyra Constellation Lines */}
      <div className="absolute inset-0 animate-constellation opacity-50">
        <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          {/* Lyra Constellation Lines */}
          <g stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" opacity="0.8">
            <line x1="400" y1="200" x2="600" y2="300" className="animate-pulse" />
            <line x1="600" y1="300" x2="800" y2="250" className="animate-pulse" />
            <line x1="800" y1="250" x2="1000" y2="400" className="animate-pulse" />
            <line x1="1000" y1="400" x2="1200" y2="350" className="animate-pulse" />
            <line x1="600" y1="300" x2="900" y2="500" className="animate-pulse" />
            <line x1="900" y1="500" x2="1100" y2="600" className="animate-pulse" />
          </g>
          {/* Constellation Stars */}
          <g fill="hsl(var(--accent))" className="animate-pulse">
            <circle cx="400" cy="200" r="3" />
            <circle cx="600" cy="300" r="4" />
            <circle cx="800" cy="250" r="3" />
            <circle cx="1000" cy="400" r="5" />
            <circle cx="1200" cy="350" r="3" />
            <circle cx="900" cy="500" r="4" />
            <circle cx="1100" cy="600" r="3" />
          </g>
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Glowing Prism - Nebula Refraction */}
        {/*<div className="mb-8 animate-float">
          <div className="relative w-24 h-24 mx-auto">
            <div className="absolute inset-0 bg-gradient-nebula rounded-lg opacity-90" 
                 style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
            {/* Refraction Lines 
            <div className="absolute top-0 left-1/2 w-0.5 h-32 bg-gradient-to-t from-primary to-transparent opacity-60 transform -translate-x-1/2 -translate-y-8" />
            <div className="absolute top-0 left-1/2 w-0.5 h-24 bg-gradient-to-t from-accent to-transparent opacity-50 transform -translate-x-1/2 -translate-y-6 rotate-12" />
            <div className="absolute top-0 left-1/2 w-0.5 h-20 bg-gradient-to-t from-primary-glow to-transparent opacity-40 transform -translate-x-1/2 -translate-y-4 -rotate-12" />
          </div>
        </div>*/}

        {/*<img src={logo} className="h-16 w-16 justify-center" />*/}

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-nebula bg-clip-text text-transparent leading-tight">
          Lyra Union
        </h1>
        
        {/* Subheadline */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-primary-glow">
          Harmony of Voices, Strength in Resonance
        </h2>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Where resonance becomes governance, and collective harmony drives creation.
        </p>

        {/* CTA Button */}
        {/*<Button variant="cosmic" size="xl">
          Join the Union of Stars
        </Button>*/}
        <ButtonColorful 
          label="Join the Union of Stars"
          className="h-14 px-12 text-lg"
          href="https://lyra-victory-dapp.vercel.app/"
        />

      </div>
    </section>
  );
};