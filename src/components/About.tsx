import { Users, Code, Beaker, BookOpen } from "lucide-react";
const About = () => {
  return <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Mirai Dynamics</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">Founded by scientists for scientists, Mirai Dynamics is at the forefront of computational innovation, transforming how research is conducted across all disciplines.</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Company story */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Mirai Dynamics was born from a simple observation: brilliant researchers 
                  were spending more time wrestling with computational tools than advancing 
                  their groundbreaking research. Our founders, experienced computational 
                  scientists themselves, recognized the need for a new approach.
                </p>
                <p>
                  Today, we serve researchers across universities, government laboratories, 
                  and private institutions worldwide. Our products have enabled discoveries 
                  in fields ranging from climate science to drug discovery, from materials 
                  engineering to astrophysics.
                </p>
                
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">
              </div>
                <div className="text-sm text-muted-foreground">Research Institutions</div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">
              </div>
                <div className="text-sm text-muted-foreground">Active Researchers</div>
              </div>
              <div className="bg-card p-6 shadow-card text-center rounded-3xl">
                <div className="text-3xl font-bold text-primary mb-2">
              </div>
                <div className="text-sm text-muted-foreground">Materails modelling </div>
              </div>
              <div className="bg-card rounded-xl p-6 shadow-card text-center">
                <div className="text-3xl font-bold text-primary mb-2">
              </div>
                <div className="text-sm text-muted-foreground">Computations Processed</div>
              </div>
            </div>
          </div>

          {/* What we do */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">What We Do</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Code className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-3">Software Development</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Creating sophisticated computational tools with intuitive interfaces 
                  that make complex algorithms accessible to all researchers.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Beaker className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-3">Research Collaboration</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Partnering with leading institutions to understand real-world 
                  challenges and develop solutions that truly meet researcher needs.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-3">Education & Training</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Providing comprehensive training programs and resources to help 
                  researchers maximize the potential of computational tools.
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-3">Community Building</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Fostering connections between researchers worldwide and creating 
                  platforms for knowledge sharing and collaboration.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-card rounded-3xl p-12 shadow-card border border-border/50">
            <h3 className="text-3xl font-bold text-center mb-8 gradient-text">Our Values</h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h4 className="text-xl font-semibold mb-3">Scientific Integrity</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain the highest standards of accuracy and reproducibility 
                  in everything we create.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">Open Innovation</h4>
                <p className="text-muted-foreground leading-relaxed">
                  We believe in transparency, collaboration, and sharing knowledge 
                  for the benefit of all.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3">User-Centric Design</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Every decision we make is guided by the real needs and feedback 
                  of our research community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;