import { ShoppingCart, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.png";
import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-background/98 backdrop-blur-xl border-b border-border shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Bigger size with transition */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Next Level Contracting" 
              className={`w-auto transition-all duration-500 group-hover:scale-105 ${
                isScrolled 
                  ? "h-12 sm:h-14 md:h-16 lg:h-18" 
                  : "h-16 sm:h-20 md:h-24 lg:h-28"
              }`}
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button 
                variant="ghost" 
                className={`text-sm font-medium hover:text-accent transition-all duration-300 ${
                  !isScrolled ? "text-white hover:bg-white/10" : ""
                }`}
              >
                Home
              </Button>
            </Link>
            <Link to="/products">
              <Button 
                variant="ghost" 
                className={`text-sm font-medium hover:text-accent transition-all duration-300 ${
                  !isScrolled ? "text-white hover:bg-white/10" : ""
                }`}
              >
                All Products
              </Button>
            </Link>
            <a href="/#categories">
              <Button 
                variant="ghost" 
                className={`text-sm font-medium hover:text-accent transition-all duration-300 ${
                  !isScrolled ? "text-white hover:bg-white/10" : ""
                }`}
              >
                Categories
              </Button>
            </a>
            <Link to="/contact">
              <Button 
                variant="ghost" 
                className={`text-sm font-medium hover:text-accent transition-all duration-300 ${
                  !isScrolled ? "text-white hover:bg-white/10" : ""
                }`}
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Cart */}
            <Button 
              variant="ghost" 
              size="icon" 
              className={`relative transition-all duration-300 ${
                !isScrolled 
                  ? "text-white hover:bg-white/10" 
                  : "hover:bg-accent/10"
              }`}
            >
              <ShoppingCart className="h-5 w-5" />
              <Badge 
                variant="default" 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground text-xs"
              >
                0
              </Badge>
            </Button>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className={`md:hidden transition-all duration-300 ${
                !isScrolled ? "text-white hover:bg-white/10" : ""
              }`}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
