import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Users } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Advancing Science Through
            <span className="block gradient-text">Computational Innovation</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Mirai Dynamics develops cutting-edge computational products that empower researchers 
            and scientists to push the boundaries of discovery and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="hero-glow text-lg px-8 py-6"
              onClick={() => scrollToSection('about')}
            >
              Learn More About Us
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6"
            >
              Our Products
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center group cursor-pointer card-hover p-6 rounded-lg bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">High Performance</h3>
              <p className="text-muted-foreground">
                Optimized algorithms and cutting-edge technology for maximum computational efficiency.
              </p>
            </div>

            <div className="text-center group cursor-pointer card-hover p-6 rounded-lg bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Scientific Focus</h3>
              <p className="text-muted-foreground">
                Purpose-built solutions designed specifically for the scientific research community.
              </p>
            </div>

            <div className="text-center group cursor-pointer card-hover p-6 rounded-lg bg-card/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
              <p className="text-muted-foreground">
                Built by researchers, for researchers, with continuous community feedback and support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;