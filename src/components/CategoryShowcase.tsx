import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Shield, Zap, Heart } from "lucide-react";
import productLight from "@/assets/product-light.jpeg";
import productChandelier from "@/assets/product-chandelier.jpeg";
import productMassageGun from "@/assets/product-massage-gun.jpeg";

export const CategoryShowcase = () => {
  return (
    <section id="categories" className="relative py-8 sm:py-12 md:py-16 overflow-hidden bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section header - Clean and minimal */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Explore Our Best-Selling
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Discover quality products across our curated categories
          </p>
        </div>

        {/* Best Selling Cards - Mobile first grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {/* Card 1 - Tools */}
          <div className="group relative bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={productLight} 
                alt="Power Tools"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                Power Tools & Equipment
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">Professional grade tools for any job</p>
              <Link to="/products">
                <Button className="bg-white text-foreground hover:bg-white/90 rounded-full px-4 sm:px-6 text-xs sm:text-sm">
                  Explore
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2 - Home */}
          <div className="group relative bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={productChandelier} 
                alt="Home & Living"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                Home & Living
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">Transform your space with style</p>
              <Link to="/products">
                <Button className="bg-white text-foreground hover:bg-white/90 rounded-full px-4 sm:px-6 text-xs sm:text-sm">
                  Explore
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 3 - Electronics */}
          <div className="group relative bg-card rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 sm:col-span-2 lg:col-span-1">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={productMassageGun} 
                alt="Electronics"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                Electronics & Tech
              </h3>
              <p className="text-white/80 text-xs sm:text-sm mb-3 sm:mb-4">Latest gadgets and accessories</p>
              <Link to="/products">
                <Button className="bg-white text-foreground hover:bg-white/90 rounded-full px-4 sm:px-6 text-xs sm:text-sm">
                  Explore
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Product Categories List - Modern vertical layout */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center">
            Product Categories
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Categories List */}
            <div className="space-y-3 sm:space-y-4">
              <Link to="/products" className="group flex items-center justify-between p-4 rounded-xl hover:bg-muted/50 transition-all duration-300">
                <span className="text-base sm:text-lg font-medium text-foreground">Tools & Equipment</span>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all" />
              </Link>
              <Link to="/products" className="group flex items-center justify-between p-4 rounded-xl hover:bg-muted/50 transition-all duration-300">
                <span className="text-base sm:text-lg font-medium text-foreground">Home Essentials</span>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all" />
              </Link>
              <Link to="/products" className="group flex items-center justify-between p-4 rounded-xl hover:bg-muted/50 transition-all duration-300">
                <span className="text-base sm:text-lg font-medium text-foreground">Electronics</span>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all" />
              </Link>
              <Link to="/products" className="group flex items-center justify-between p-4 rounded-xl hover:bg-muted/50 transition-all duration-300">
                <span className="text-base sm:text-lg font-medium text-foreground">Safety Gear</span>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all" />
              </Link>
              <Link to="/products" className="group flex items-center justify-between p-4 rounded-xl hover:bg-muted/50 transition-all duration-300">
                <span className="text-base sm:text-lg font-medium text-foreground">Seasonal Items</span>
                <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-2 transition-all" />
              </Link>
            </div>

            {/* Featured Stats Card */}
            <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-border/50">
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4">
                    <Package className="h-4 w-4 text-accent" />
                    <span className="text-xs font-semibold text-accent">100% Quality</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    350+
                  </h3>
                  <p className="text-sm text-muted-foreground">Products Available</p>
                </div>
                
                <div className="pt-4 border-t border-border">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-foreground">4.9★</div>
                      <div className="text-xs text-muted-foreground">Customer Rating</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold text-foreground">50+</div>
                      <div className="text-xs text-muted-foreground">Categories</div>
                    </div>
                  </div>
                </div>

                <Link to="/products" className="block">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                    View All Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators - Compact mobile grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="text-center space-y-1.5 sm:space-y-2">
            <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-accent mx-auto" />
            <div className="text-lg sm:text-xl font-bold text-foreground">Quality</div>
            <div className="text-xs text-muted-foreground">Guaranteed</div>
          </div>
          <div className="text-center space-y-1.5 sm:space-y-2">
            <Package className="h-5 w-5 sm:h-6 sm:w-6 text-accent mx-auto" />
            <div className="text-lg sm:text-xl font-bold text-foreground">Fast</div>
            <div className="text-xs text-muted-foreground">Pickup</div>
          </div>
          <div className="text-center space-y-1.5 sm:space-y-2">
            <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-accent mx-auto" />
            <div className="text-lg sm:text-xl font-bold text-foreground">Best</div>
            <div className="text-xs text-muted-foreground">Prices</div>
          </div>
          <div className="text-center space-y-1.5 sm:space-y-2">
            <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-accent mx-auto" />
            <div className="text-lg sm:text-xl font-bold text-foreground">Local</div>
            <div className="text-xs text-muted-foreground">Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};
