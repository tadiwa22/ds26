import { Brain, Database, Shield, Cpu, BarChart3, Zap } from "lucide-react";

const topics = [
  {
    icon: Brain,
    name: "Machine Learning",
    count: 45,
  },
  {
    icon: Database,
    name: "Big Data",
    count: 32,
  },
  {
    icon: Shield,
    name: "Data Privacy",
    count: 28,
  },
  {
    icon: Cpu,
    name: "Deep Learning",
    count: 38,
  },
  {
    icon: BarChart3,
    name: "Analytics",
    count: 24,
  },
  {
    icon: Zap,
    name: "MLOps",
    count: 19,
  },
];

const TopicsSection = () => {
  return (
    <section id="topics" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Explore <span className="text-gradient">Topics</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dive deep into specialized areas of data science with our curated topic collections.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {topics.map((topic) => (
            <a
              key={topic.name}
              href="#"
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:glow-primary text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <topic.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                {topic.name}
              </h3>
              <p className="text-sm text-muted-foreground">{topic.count} articles</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
