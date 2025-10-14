import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Shield, Zap, Heart } from "lucide-react";
import productLight from "@/assets/product-light.jpeg";
import productChandelier from "@/assets/product-chandelier.jpeg";
import productMassageGun from "@/assets/product-massage-gun.jpeg";

export const CategoryShowcase = () => {
  return (
    <section id="categories" className="relative py-12 sm:py-16 md:py-20 overflow-hidden -mt-1">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Section header - Mobile optimized */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Curated collections for every need
          </p>
        </div>

        {/* Split layout sections - Mobile first, tighter spacing */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20">
          {/* Tools & Equipment */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            <div className="space-y-4 sm:space-y-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/20">
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                <span className="text-xs sm:text-sm font-semibold text-accent">Power Tools</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Professional Grade Tools
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                From power drills to work lights, find the equipment you need for any job.
              </p>
              <div className="pt-2 sm:pt-4">
                <Link to="/products">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 sm:px-6 text-sm sm:text-base group">
                    Shop Tools
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 group">
              <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src={productLight} 
                  alt="Tools & Equipment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="text-2xl sm:text-3xl font-bold">50+</div>
                <div className="text-xs sm:text-sm">Products</div>
              </div>
            </div>
          </div>

          {/* Home & Living */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            <div className="relative group">
              <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src={productChandelier} 
                  alt="Home & Living"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="text-2xl sm:text-3xl font-bold">New</div>
                <div className="text-xs sm:text-sm">Arrivals</div>
              </div>
            </div>
            <div className="space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20">
                <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                <span className="text-xs sm:text-sm font-semibold text-primary">Home Essentials</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Transform Your Space
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                Lighting, furniture, and decor to make your house a home.
              </p>
              <div className="pt-2 sm:pt-4">
                <Link to="/products">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 sm:px-6 text-sm sm:text-base group">
                    Browse Home
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Electronics - Mobile optimized */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
            <div className="space-y-4 sm:space-y-5 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-accent/10 border border-accent/20">
                <Package className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                <span className="text-xs sm:text-sm font-semibold text-accent">Electronics</span>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                Tech & More
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                From headphones to power banks, discover the latest electronics.
              </p>
              <div className="pt-2 sm:pt-4">
                <Link to="/products">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 sm:px-6 text-sm sm:text-base group">
                    Shop Electronics
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 group">
              <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src={productMassageGun} 
                  alt="Electronics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators - Mobile grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-16 sm:mt-20 md:mt-24 max-w-5xl mx-auto">
          <div className="text-center space-y-2">
            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-accent mx-auto" />
            <div className="text-xl sm:text-2xl font-bold text-foreground">Quality</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Guaranteed</div>
          </div>
          <div className="text-center space-y-2">
            <Package className="h-6 w-6 sm:h-8 sm:w-8 text-accent mx-auto" />
            <div className="text-xl sm:text-2xl font-bold text-foreground">Fast</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Pickup</div>
          </div>
          <div className="text-center space-y-2">
            <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-accent mx-auto" />
            <div className="text-xl sm:text-2xl font-bold text-foreground">Best</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Prices</div>
          </div>
          <div className="text-center space-y-2">
            <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-accent mx-auto" />
            <div className="text-xl sm:text-2xl font-bold text-foreground">Local</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Service</div>
          </div>
        </div>
      </div>

      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 -mb-1">
        <svg className="w-full h-12 sm:h-16 md:h-20" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,40 C240,60 480,60 720,40 C960,20 1200,20 1440,40 L1440,80 L0,80 Z" fill="hsl(var(--muted) / 0.2)" />
        </svg>
      </div>
    </section>
  );
};
