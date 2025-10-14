import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import product images for the carousel
import productDrill from "@/assets/product-drill.jpg";
import productKeurig from "@/assets/product-keurig.jpeg";
import productBoots from "@/assets/product-boots.jpeg";
import productHelmet from "@/assets/product-helmet.jpg";
import productToaster from "@/assets/product-toaster.jpeg";

const heroImages = [
  { src: productDrill, title: "Power Tools", subtitle: "Professional Grade" },
  { src: productKeurig, title: "Home Appliances", subtitle: "Modern Living" },
  { src: productBoots, title: "Safety Gear", subtitle: "Work Ready" },
  { src: productHelmet, title: "Protection", subtitle: "Safety First" },
  { src: productToaster, title: "Kitchen Essentials", subtitle: "Daily Comfort" },
];

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-110"
              style={{
                backgroundImage: `url(${image.src})`,
                animation: index === currentSlide ? "kenburns 20s ease-out" : "none",
              }}
            />
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-primary/75" />
          </div>
        ))}
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary/40 via-transparent to-accent/20 animate-pulse" 
           style={{ animationDuration: "8s" }} />

      {/* Content */}
      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md animate-fade-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
            </span>
            <span className="text-sm font-semibold text-primary-foreground tracking-wide">
              {heroImages[currentSlide].title} • {heroImages[currentSlide].subtitle}
            </span>
          </div>

          {/* Main Heading with animation */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] tracking-tight">
            <span className="block animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Your Marketplace
            </span>
            <span className="block mt-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent to-primary-foreground">
                for Everything
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed animate-fade-up backdrop-blur-sm" 
             style={{ animationDelay: "0.3s" }}>
            From tools and electronics to home essentials. Discover quality products at unbeatable prices in Kitchener.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 animate-fade-up" 
               style={{ animationDelay: "0.4s" }}>
            <Link to="/products">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-7 text-lg rounded-full shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300 group"
              >
                Browse Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#categories">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-md px-10 py-7 text-lg rounded-full hover:scale-105 transition-all duration-300"
              >
                Explore Categories
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 pt-8">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "w-8 bg-accent" 
                    : "w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Smooth bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
    </section>
  );
};
