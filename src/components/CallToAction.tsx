import { Button } from "@/components/ui/button";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { ArrowRight, Star } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Deep Space Background */}
      <div className="absolute inset-0 bg-gradient-cosmic" />
      
      {/* Ember Star Field */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 animate-pulse">
          <Star className="w-4 h-4 text-accent" />
        </div>
        <div className="absolute top-3/4 right-1/4 animate-pulse" style={{ animationDelay: '1s' }}>
          <Star className="w-3 h-3 text-primary-glow" />
        </div>
        <div className="absolute top-1/2 left-3/4 animate-pulse" style={{ animationDelay: '2s' }}>
          <Star className="w-5 h-5 text-primary" />
        </div>
        <div className="absolute top-1/3 right-1/3 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Star className="w-2 h-2 text-accent" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <Star className="w-3 h-3 text-primary" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Main CTA Content */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-nebula bg-clip-text text-transparent">
            Ready to Resonate?
          </h2>
          
          <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
            The cosmos awaits your voice. Join the Lyra Union and become part of a constellation 
            that's redefining cooperation, governance, and collective prosperity.
          </p>
          
          <p className="text-lg text-accent mb-12">
            Together, we create harmony from chaos, strength from unity, and infinite possibility from shared vision.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <ButtonColorful 
            label="Join the Union of Stars" 
            className="h-14 px-12 text-lg"
          />
          
          <Button variant="constellation" size="xl">
            Explore the Cosmos
          </Button>
        </div>

        {/* Union Statement - Ember Theme */}
        <div className="mt-16 p-8 bg-card/30 backdrop-blur-sm border border-primary/20 rounded-xl">
          <p className="text-lg text-muted-foreground italic">
            "Like embers in the cosmic fire, every voice matters. Every spark resonates. 
            Every choice kindles the constellation of our shared future."
          </p>
          <div className="mt-4 text-sm text-primary-glow font-medium">
            — The Lyra Manifesto
          </div>
        </div>

      </div>
    </section>
  );
};