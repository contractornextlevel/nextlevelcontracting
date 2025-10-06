import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import logo from "@/assets/logo.jpg";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Next Level Contracting" className="h-8 w-auto" />
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#featured" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Featured
            </a>
            <a href="#collections" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Collections
            </a>
            <a href="#new-arrivals" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              New Arrivals
            </a>
            <a href="#top-sellers" className="text-sm font-medium text-foreground hover:text-accent transition-colors">
              Top Sellers
            </a>
          </div>

          {/* Cart */}
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <Badge 
              variant="default" 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground"
            >
              0
            </Badge>
          </Button>
        </div>
      </div>
    </nav>
  );
};
