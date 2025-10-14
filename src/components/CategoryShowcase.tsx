import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Package, Shield, Zap, Heart } from "lucide-react";
import productLight from "@/assets/product-light.jpeg";
import productChandelier from "@/assets/product-chandelier.jpeg";
import productMassageGun from "@/assets/product-massage-gun.jpeg";

export const CategoryShowcase = () => {
  return (
    <section id="categories" className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      
      <div className="container relative z-10 mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Curated collections for every need
          </p>
        </div>

        {/* Split layout sections */}
        <div className="space-y-32">
          {/* Tools & Equipment */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Zap className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Power Tools</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Professional Grade Tools
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From power drills to work lights, find the equipment you need for any job. Quality tools at prices that work for you.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/products">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 group">
                    Shop Tools
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={productLight} 
                  alt="Tools & Equipment"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm">Products</div>
              </div>
            </div>
          </div>

          {/* Home & Living */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={productChandelier} 
                  alt="Home & Living"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">New</div>
                <div className="text-sm">Arrivals</div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <Heart className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Home Essentials</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Transform Your Space
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lighting, furniture, and decor to make your house a home. Quality items for modern living.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/products">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 group">
                    Browse Home
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Health & Wellness */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
                <Package className="h-4 w-4 text-accent" />
                <span className="text-sm font-semibold text-accent">Electronics</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Tech & More
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From headphones to power banks, discover the latest electronics and gadgets at great prices.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/products">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 group">
                    Shop Electronics
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative order-1 lg:order-2 group">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={productMassageGun} 
                  alt="Electronics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 max-w-5xl mx-auto">
          <div className="text-center space-y-2">
            <Shield className="h-8 w-8 text-accent mx-auto" />
            <div className="text-2xl font-bold text-foreground">Quality</div>
            <div className="text-sm text-muted-foreground">Guaranteed</div>
          </div>
          <div className="text-center space-y-2">
            <Package className="h-8 w-8 text-accent mx-auto" />
            <div className="text-2xl font-bold text-foreground">Fast</div>
            <div className="text-sm text-muted-foreground">Pickup</div>
          </div>
          <div className="text-center space-y-2">
            <Zap className="h-8 w-8 text-accent mx-auto" />
            <div className="text-2xl font-bold text-foreground">Best</div>
            <div className="text-sm text-muted-foreground">Prices</div>
          </div>
          <div className="text-center space-y-2">
            <Heart className="h-8 w-8 text-accent mx-auto" />
            <div className="text-2xl font-bold text-foreground">Local</div>
            <div className="text-sm text-muted-foreground">Service</div>
          </div>
        </div>
      </div>
    </section>
  );
};
