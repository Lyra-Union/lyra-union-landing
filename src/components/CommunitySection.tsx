import communityConstellation from "@/assets/community-constellation.png";
import { Button } from "@/components/ui/button";

export const CommunitySection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-constellation opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-nebula bg-clip-text text-transparent">
              Constellation of Minds
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              In the Lyra Union, every voice becomes a star in our collective constellation. 
              Connected by invisible threads of shared purpose, we form patterns of cooperation 
              that illuminate new possibilities for decentralized governance.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join a community where individual brilliance amplifies collective wisdom, 
              where diverse perspectives create the most beautiful harmonies, and where 
              every contribution helps shape the future of cooperative economics.
            </p>

            {/* Community Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow mb-2">2,847</div>
                <div className="text-sm text-muted-foreground">Union Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow mb-2">156</div>
                <div className="text-sm text-muted-foreground">Active Cooperatives</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-glow mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities</div>
              </div>
            </div>

            <Button variant="constellation" size="lg" className="group">
              <span>Explore the Network</span>
              <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse ml-2" />
            </Button>
          </div>

          {/* Community Visualization - Abstract Constellation */}
          <div className="relative h-96">
            {/* Central Community Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 bg-gradient-nebula rounded-full animate-pulse" />
            </div>

            {/* Connected Community Members */}
            <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary rounded-full opacity-80" />
            <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-accent rounded-full opacity-90" />
            <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-secondary rounded-full opacity-70" />
            <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-primary-glow rounded-full opacity-85" />
            <div className="absolute top-1/5 left-1/2 w-3 h-3 bg-accent rounded-full opacity-75" />
            <div className="absolute bottom-1/5 left-1/2 w-5 h-5 bg-primary rounded-full opacity-95" />
            
            {/* Ember Connection Threads */}
            <svg className="absolute inset-0 w-full h-full animate-constellation" viewBox="0 0 400 400">
              <g stroke="hsl(var(--primary))" strokeWidth="1" fill="none" opacity="0.6">
                <line x1="200" y1="200" x2="133" y2="100" className="animate-pulse" />
                <line x1="200" y1="200" x2="300" y2="133" className="animate-pulse" />
                <line x1="200" y1="200" x2="100" y2="267" className="animate-pulse" />
                <line x1="200" y1="200" x2="267" y2="300" className="animate-pulse" />
                <line x1="200" y1="200" x2="200" y2="80" className="animate-pulse" />
                <line x1="200" y1="200" x2="200" y2="320" className="animate-pulse" />
              </g>
              <g stroke="hsl(var(--accent))" strokeWidth="0.5" fill="none" opacity="0.4">
                <line x1="133" y1="100" x2="300" y2="133" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
                <line x1="300" y1="133" x2="267" y2="300" className="animate-pulse" style={{ animationDelay: '1s' }} />
                <line x1="267" y1="300" x2="100" y2="267" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
                <line x1="100" y1="267" x2="133" y2="100" className="animate-pulse" style={{ animationDelay: '2s' }} />
              </g>
            </svg>
            
            {/* Floating Ember Particles */}
            <div className="absolute top-1/6 left-1/5 w-1 h-1 bg-accent rounded-full animate-ping opacity-60" />
            <div className="absolute top-5/6 right-1/5 w-0.5 h-0.5 bg-primary-glow rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 right-1/6 w-1.5 h-1.5 bg-primary rounded-full animate-ping opacity-50" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};