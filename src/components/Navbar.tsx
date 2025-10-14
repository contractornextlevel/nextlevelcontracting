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

  // Check if we're on a page that needs a solid navbar
  const isOnProductsPage = window.location.pathname.includes('/products') || 
                           window.location.pathname.includes('/services') ||
                           window.location.pathname.includes('/contact');
  
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-background/95 backdrop-blur-md shadow-lg rounded-full border border-border/50">
          <div className="flex items-center justify-between h-16 sm:h-20 px-6">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img 
                src={logo} 
                alt="Next Level Contracting" 
                className="h-12 sm:h-14 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/">
                <Button 
                  variant="ghost" 
                  className="text-sm font-medium hover:text-accent transition-all duration-300"
                >
                  Home
                </Button>
              </Link>
              <Link to="/products">
                <Button 
                  variant="ghost" 
                  className="text-sm font-medium hover:text-accent transition-all duration-300"
                >
                  All Products
                </Button>
              </Link>
              <Link to="/services">
                <Button 
                  variant="ghost" 
                  className="text-sm font-medium hover:text-accent transition-all duration-300"
                >
                  Services
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="ghost" 
                  className="text-sm font-medium hover:text-accent transition-all duration-300"
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
                className="relative hover:bg-accent/10 transition-all duration-300"
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
                className="md:hidden transition-all duration-300"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
