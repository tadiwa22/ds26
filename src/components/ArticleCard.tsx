import { Clock, ArrowUpRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  featured?: boolean;
}

const ArticleCard = ({ title, excerpt, category, readTime, date, featured = false }: ArticleCardProps) => {
  return (
    <article
      className={`group relative rounded-xl bg-card border border-border overflow-hidden card-hover ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className={`relative p-6 ${featured ? "md:p-10" : ""} h-full flex flex-col`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
            {category}
          </span>
          <span className="text-muted-foreground text-sm">{date}</span>
        </div>

        <h3 className={`font-display font-bold mb-3 group-hover:text-primary transition-colors ${
          featured ? "text-2xl md:text-3xl" : "text-xl"
        }`}>
          {title}
        </h3>

        <p className={`text-muted-foreground mb-6 flex-grow ${
          featured ? "text-lg" : "text-sm line-clamp-2"
        }`}>
          {excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
          
          <button className="flex items-center gap-1 text-primary font-medium text-sm group/btn">
            Read More
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
