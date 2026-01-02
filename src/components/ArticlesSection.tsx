import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  created_at: string;
}

const ArticlesSection = () => {
  const [articles, setArticles] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, excerpt, category, read_time, created_at")
        .eq("published", true)
        .order("created_at", { ascending: false })
        .limit(6);

      if (error) {
        console.error("Error fetching articles:", error);
      } else {
        setArticles(data || []);
      }
      setLoading(false);
    };

    fetchArticles();
  }, []);

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

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-64 rounded-xl bg-card animate-pulse" />
            ))}
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <p className="text-lg">No articles yet. Be the first to publish!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                readTime={article.read_time}
                date={format(new Date(article.created_at), "MMM d, yyyy")}
                featured={index === 0}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArticlesSection;
