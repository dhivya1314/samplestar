import { Eye, Lightbulb, Globe } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Vision</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We envision a future where computational barriers never limit scientific discovery, 
            and every researcher has access to the tools they need to change the world.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Eye className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Democratizing Science</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Making advanced computational tools accessible to researchers worldwide, 
                    regardless of their institutional resources or technical background.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Lightbulb className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Accelerating Discovery</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Reducing the time from hypothesis to breakthrough by providing 
                    intuitive, powerful computational platforms that enhance research velocity.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Globe className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Fostering collaboration across institutions and borders to tackle 
                    humanity's greatest challenges through computational science.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-300 border border-border/50">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 gradient-text">
                    Transforming Research
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    "We believe that the next great scientific breakthroughs will come 
                    from empowering every researcher with computational superpowers, 
                    turning complex algorithms into simple, powerful tools."
                  </p>
                  <div className="mt-6 text-sm text-muted-foreground">
                    — Mirai Dynamics Foundation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;