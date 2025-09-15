import { Rocket, Shield, Heart, Award } from "lucide-react";

const Mission = () => {
  return (
    <section id="mission" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To develop, deliver, and support computational products that enhance scientific research 
            capabilities while fostering innovation and collaboration in the global research community.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main mission statement */}
          <div className="bg-gradient-primary rounded-3xl p-12 mb-16 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">
              Empowering Scientific Excellence
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto">
              We are committed to bridging the gap between complex computational science 
              and practical research applications, making advanced algorithms accessible, 
              reliable, and impactful for scientists across all disciplines.
            </p>
          </div>

          {/* Mission pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-card rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card group-hover:shadow-elegant transition-all duration-300 card-hover">
                <Rocket className="text-primary" size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Innovation</h4>
              <p className="text-muted-foreground leading-relaxed">
                Continuously pushing the boundaries of computational science 
                with cutting-edge algorithms and methodologies.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-card rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card group-hover:shadow-elegant transition-all duration-300 card-hover">
                <Shield className="text-primary" size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Reliability</h4>
              <p className="text-muted-foreground leading-relaxed">
                Ensuring our products meet the highest standards of 
                accuracy, performance, and scientific rigor.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-card rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card group-hover:shadow-elegant transition-all duration-300 card-hover">
                <Heart className="text-primary" size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Community</h4>
              <p className="text-muted-foreground leading-relaxed">
                Building strong relationships with researchers and 
                fostering collaborative scientific advancement.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-card rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-card group-hover:shadow-elegant transition-all duration-300 card-hover">
                <Award className="text-primary" size={32} />
              </div>
              <h4 className="text-xl font-semibold mb-3">Excellence</h4>
              <p className="text-muted-foreground leading-relaxed">
                Delivering products that exceed expectations and 
                enable breakthrough scientific discoveries.
              </p>
            </div>
          </div>

          {/* Mission commitment */}
          <div className="mt-16 text-center">
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Our Commitment to Science
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every product we create is designed with the scientific method at its core. 
                We believe in transparency, reproducibility, and open collaboration. 
                Our mission extends beyond software development to actively supporting 
                the scientific community through education, partnerships, and continuous innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;