import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArticlesSection from "@/components/ArticlesSection";
import TopicsSection from "@/components/TopicsSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ArticlesSection />
      <TopicsSection />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
