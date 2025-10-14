import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import AI generated hero images
import heroTools from "@/assets/hero-tools.jpg";
import heroElectronics from "@/assets/hero-electronics.jpg";
import heroHome from "@/assets/hero-home.jpg";
import heroSafety from "@/assets/hero-safety.jpg";
import heroAppliances from "@/assets/hero-appliances.jpg";

const heroImages = [
  { src: heroTools, title: "Power Tools", subtitle: "Professional Grade" },
  { src: heroElectronics, title: "Electronics", subtitle: "Tech Essentials" },
  { src: heroHome, title: "Home & Living", subtitle: "Modern Comfort" },
  { src: heroSafety, title: "Safety Gear", subtitle: "Work Ready" },
  { src: heroAppliances, title: "Appliances", subtitle: "Kitchen & More" },
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
    <section className="relative min-h-[550px] sm:min-h-[650px] md:min-h-[700px] lg:min-h-[75vh] flex items-center justify-center overflow-hidden">
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
            {/* Enhanced overlay for better navbar integration */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-primary/85 to-primary/75" />
          </div>
        ))}
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary/40 via-transparent to-accent/20 animate-pulse" 
           style={{ animationDuration: "8s" }} />

      {/* Content - Compact padding */}
      <div className="container relative z-10 px-4 sm:px-6 py-24 sm:py-28 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-md animate-fade-in">
            <span className="relative flex h-2.5 w-2.5 sm:h-3 sm:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 sm:h-3 sm:w-3 bg-accent"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold text-primary-foreground tracking-wide">
              {heroImages[currentSlide].title} • {heroImages[currentSlide].subtitle}
            </span>
          </div>

          {/* Main Heading with animation - Compact sizing */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] tracking-tight">
            <span className="block animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Your Marketplace
            </span>
            <span className="block mt-2 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-accent to-primary-foreground">
                for Everything
              </span>
            </span>
          </h1>

          {/* Subheading - Compact */}
          <p className="text-sm sm:text-base md:text-lg text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed animate-fade-up backdrop-blur-sm px-4" 
             style={{ animationDelay: "0.3s" }}>
            From tools and electronics to home essentials. Quality products at great prices in Kitchener.
          </p>

          {/* CTA Buttons - Compact */}
          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center items-center pt-3 sm:pt-4 animate-fade-up px-4" 
               style={{ animationDelay: "0.4s" }}>
            <Link to="/products" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-full shadow-2xl hover:shadow-accent/50 hover:scale-105 transition-all duration-300 group"
              >
                Browse Products
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#categories" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-md px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-full hover:scale-105 transition-all duration-300"
              >
                Explore Categories
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 pt-4 sm:pt-6">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? "w-6 sm:w-8 bg-accent" 
                    : "w-1.5 sm:w-2 bg-primary-foreground/30 hover:bg-primary-foreground/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Smooth wave transition to next section - Compact */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="w-full h-12 sm:h-16 md:h-20" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,64 C240,100 480,100 720,64 C960,28 1200,28 1440,64 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};
