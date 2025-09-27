import prismToken from "@/assets/Prismtoakne.png";
import axisToken from "@/assets/AxisToken.png";
import sparkToken from "@/assets/SparkToken.png";

const tokens = [
  {
    name: "PRISM",
    title: "The Light Key of Governance",
    description: "Refracts collective voice into democratic action, where every perspective adds to the spectrum of decision-making.",
    image: prismToken,
    gradient: "bg-gradient-nebula",
    icon: "refracted-beam"
  },
  {
    name: "AXIS",
    title: "The Anchor of Labor and Capital",
    description: "Creates orbital stability between effort and reward, ensuring balanced circulation of value through the cooperative.",
    image: axisToken,
    gradient: "bg-gradient-constellation",
    icon: "orbital-lines"
  },
  {
    name: "SPARK",
    title: "The Ignition of Effort",
    description: "Kindles individual contribution into collective momentum, transforming personal energy into shared prosperity.",
    image: sparkToken,
    gradient: "bg-gradient-aurora",
    icon: "radiant-burst"
  }
];

export const TokenShowcase = () => {
  return (
    <section className="py-24 px-6 bg-gradient-cosmic">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-nebula bg-clip-text text-transparent">
            Stellar Tokens
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three cosmic forces that power the Lyra Union ecosystem, each representing a fundamental aspect of our decentralized cooperative.
          </p>
        </div>

        {/* Token Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tokens.map((token, index) => (
            <div 
              key={token.name}
              className="relative group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Ember Card */}
              <div className="bg-card/60 backdrop-blur-sm border border-primary/20 rounded-xl p-8 shadow-cosmic hover:shadow-cosmic transition-all duration-500 group-hover:scale-105">
                {/* Token Visual */}
                <div className="relative mb-6 h-32 flex items-center justify-center">
                  {token.icon === "refracted-beam" && (
                    <>
                      <img src={prismToken} className="h-40 w-40" />
                      
                    </>
                  )}
                  {token.icon === "orbital-lines" && (
                    <>
                      <img src={axisToken} className="h-24 w-24" />
                    </>
                  )}
                  {token.icon === "radiant-burst" && (
                    <>
                      <img src={sparkToken} className="h-24 w-24" />
                    </>
                  )}
                </div>

                {/* Token Name */}
                <h3 className="text-3xl font-bold text-primary-glow mb-2 text-center">
                  {token.name}
                </h3>

                {/* Token Title */}
                <h4 className="text-xl font-semibold text-accent mb-4 text-center">
                  {token.title}
                </h4>

                {/* Token Description */}
                <p className="text-muted-foreground leading-relaxed text-center">
                  {token.description}
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};