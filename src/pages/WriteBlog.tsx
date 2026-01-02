import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Image, Send, Bold, Italic, List, Link2, Code } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const WriteBlog = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [isPublishing, setIsPublishing] = useState(false);

  const categories = [
    "Machine Learning",
    "Deep Learning",
    "Data Engineering",
    "AI Ethics",
    "Neural Networks",
    "Analytics",
    "Python",
    "Statistics",
  ];

  const calculateReadTime = (text: string) => {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  const handlePublish = async () => {
    if (!title || !content || !category) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsPublishing(true);
    try {
      const { error } = await supabase.from("blog_posts").insert({
        title,
        excerpt: excerpt || title,
        content,
        category,
        cover_image_url: coverImage || null,
        read_time: calculateReadTime(content),
        published: true,
      });

      if (error) throw error;

      toast.success("Blog post published successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error publishing post:", error);
      toast.error("Failed to publish post. Please try again.");
    } finally {
      setIsPublishing(false);
    }
  };

  const handleSaveDraft = async () => {
    if (!title || !content || !category) {
      toast.error("Please fill in title, content, and category first");
      return;
    }

    try {
      const { error } = await supabase.from("blog_posts").insert({
        title,
        excerpt: excerpt || title,
        content,
        category,
        cover_image_url: coverImage || null,
        read_time: calculateReadTime(content),
        published: false,
      });

      if (error) throw error;
      toast.success("Draft saved successfully!");
    } catch (error) {
      console.error("Error saving draft:", error);
      toast.error("Failed to save draft. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={handleSaveDraft}>
                Save Draft
              </Button>
              <Button onClick={handlePublish} className="gap-2" disabled={isPublishing}>
                <Send size={16} />
                {isPublishing ? "Publishing..." : "Publish"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">
              Write a New <span className="text-gradient">Blog Post</span>
            </h1>
            <p className="text-muted-foreground">
              Share your insights with the data science community
            </p>
          </div>

          <div className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-foreground">
                Title <span className="text-primary">*</span>
              </Label>
              <Input
                id="title"
                placeholder="Enter your blog title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-lg py-6 bg-card border-border focus:border-primary"
              />
            </div>

            {/* Category & Cover Image */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category" className="text-foreground">
                  Category <span className="text-primary">*</span>
                </Label>
                <Select value={category} onValueChange={setCategory}>
                  <SelectTrigger className="bg-card border-border">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat.toLowerCase()}>
                        {cat}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverImage" className="text-foreground">
                  Cover Image URL
                </Label>
                <div className="relative">
                  <Image className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                  <Input
                    id="coverImage"
                    placeholder="https://example.com/image.jpg"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    className="pl-10 bg-card border-border"
                  />
                </div>
              </div>
            </div>

            {/* Excerpt */}
            <div className="space-y-2">
              <Label htmlFor="excerpt" className="text-foreground">
                Excerpt
              </Label>
              <Textarea
                id="excerpt"
                placeholder="A brief summary of your post (optional)..."
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="bg-card border-border min-h-[80px]"
              />
            </div>

            {/* Formatting Toolbar */}
            <div className="flex items-center gap-1 p-2 rounded-lg bg-card border border-border">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Bold size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Italic size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <List size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Link2 size={16} />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Code size={16} />
              </Button>
            </div>

            {/* Content */}
            <div className="space-y-2">
              <Label htmlFor="content" className="text-foreground">
                Content <span className="text-primary">*</span>
              </Label>
              <Textarea
                id="content"
                placeholder="Write your blog content here... (Markdown supported)"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="bg-card border-border min-h-[400px] font-mono text-sm"
              />
            </div>

            {/* Preview Card */}
            {(title || excerpt) && (
              <div className="p-6 rounded-xl bg-card border border-border">
                <h3 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                  Preview
                </h3>
                <div className="space-y-2">
                  <h4 className="text-xl font-display font-bold text-foreground">
                    {title || "Your title here..."}
                  </h4>
                  <p className="text-muted-foreground">
                    {excerpt || "Your excerpt will appear here..."}
                  </p>
                  {category && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                      {category}
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WriteBlog;
