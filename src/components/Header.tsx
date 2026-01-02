import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, PenLine } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Articles", href: "#articles" },
    { name: "Topics", href: "#topics" },
    { name: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground">DS</span>
            </div>
            <span className="font-display font-bold text-xl">
              DataPulse<span className="text-primary">2026</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <Link 
              to="/write" 
              className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <PenLine size={16} />
              Write Post
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4 animate-fade-in">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link 
              to="/write" 
              className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity w-full flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <PenLine size={16} />
              Write Post
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
