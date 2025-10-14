import { ShoppingCart, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Bigger size */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Next Level Contracting" 
              className="h-12 sm:h-14 md:h-16 w-auto transition-transform group-hover:scale-105" 
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant="ghost" className="text-sm font-medium hover:text-accent transition-colors">
                Home
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="ghost" className="text-sm font-medium hover:text-accent transition-colors">
                All Products
              </Button>
            </Link>
            <a href="/#featured">
              <Button variant="ghost" className="text-sm font-medium hover:text-accent transition-colors">
                Featured
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="ghost" className="text-sm font-medium hover:text-accent transition-colors">
                Contact
              </Button>
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative hover:bg-accent/10">
              <ShoppingCart className="h-5 w-5" />
              <Badge 
                variant="default" 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground text-xs"
              >
                0
              </Badge>
            </Button>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
