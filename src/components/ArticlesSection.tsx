import ArticleCard from "./ArticleCard";

const articles = [
  {
    title: "The Rise of Multimodal AI: Beyond Text and Images",
    excerpt: "2026 marks the year where AI systems seamlessly integrate text, images, audio, and video understanding. We explore how these multimodal models are revolutionizing industries from healthcare diagnostics to autonomous systems.",
    category: "AI Trends",
    readTime: "8 min read",
    date: "Jan 2, 2026",
    featured: true,
  },
  {
    title: "Quantum Machine Learning: From Theory to Practice",
    excerpt: "Quantum computing is finally delivering on its promise for ML applications. Here's what data scientists need to know.",
    category: "Quantum ML",
    readTime: "6 min read",
    date: "Dec 28, 2025",
  },
  {
    title: "Edge AI: Processing Data Where It's Generated",
    excerpt: "How edge computing is reshaping real-time analytics and reducing latency in critical applications.",
    category: "Edge Computing",
    readTime: "5 min read",
    date: "Dec 25, 2025",
  },
  {
    title: "Synthetic Data: The New Training Ground",
    excerpt: "Privacy-preserving synthetic datasets are becoming the standard for training models. We analyze the best practices.",
    category: "Data Privacy",
    readTime: "7 min read",
    date: "Dec 22, 2025",
  },
  {
    title: "AutoML 3.0: Self-Optimizing Pipelines",
    excerpt: "The latest generation of automated machine learning tools can now handle end-to-end model development.",
    category: "AutoML",
    readTime: "4 min read",
    date: "Dec 20, 2025",
  },
  {
    title: "Explainable AI in Production Systems",
    excerpt: "Regulatory requirements are pushing XAI from research to production. Here's how companies are adapting.",
    category: "XAI",
    readTime: "6 min read",
    date: "Dec 18, 2025",
  },
];

const ArticlesSection = () => {
  return (
    <section id="articles" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Deep dives into the technologies and trends shaping data science in 2026 and beyond.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 md:mt-0 text-primary font-medium hover:underline"
          >
            View all articles →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
