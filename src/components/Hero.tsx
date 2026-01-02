import heroImage from "@/assets/hero-data-science.jpg";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Data Science Visualization"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              The Future of Data is Now
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Data Science in{" "}
            <span className="text-gradient">2026</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Exploring the cutting edge of AI, machine learning, and data analytics 
            shaping our tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a
              href="#articles"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all glow-primary flex items-center gap-2 group"
            >
              Explore Articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="px-8 py-4 rounded-lg border border-border text-foreground font-semibold hover:bg-secondary transition-colors"
            >
              About the Blog
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "150+", label: "Articles" },
            { value: "50K+", label: "Readers" },
            { value: "25", label: "Topics" },
            { value: "Weekly", label: "Updates" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-card/50 backdrop-blur border border-border">
              <div className="font-display text-3xl font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
