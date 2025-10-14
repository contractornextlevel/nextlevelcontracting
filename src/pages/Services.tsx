import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Store, Wrench, ClipboardCheck } from "lucide-react";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";
import serviceDelivery from "@/assets/service-delivery.jpg";
import heroServices from "@/assets/hero-services.jpg";

const services = [
  {
    id: 1,
    icon: Store,
    image: serviceDelivery,
    title: "Resell Store",
    description: "Discover quality pre-owned tools, equipment, and home improvement items at unbeatable prices. We carefully inspect and verify all items to ensure they meet our high standards.",
    features: [
      "Quality inspected items",
      "Competitive pricing",
      "Wide product selection",
      "Sustainability focused"
    ],
  },
  {
    id: 2,
    icon: Wrench,
    image: serviceInstallation,
    title: "Professional Installation",
    description: "Expert installation services for lighting, fixtures, and home improvements. Our skilled team ensures quality workmanship and attention to detail on every project.",
    features: [
      "Lighting fixtures",
      "Home appliances", 
      "Safety equipment",
      "Quality guarantee"
    ],
  },
  {
    id: 3,
    icon: ClipboardCheck,
    image: serviceConsultation,
    title: "Free Consultation",
    description: "Get expert advice on your next project. We'll help you choose the right products, plan your home improvements, and provide cost estimates.",
    features: [
      "Project planning",
      "Product recommendations",
      "Budget assessment",
      "Timeline planning"
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroServices} 
            alt="Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-24">
          <p className="text-sm sm:text-base font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
            What We Offer
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-6 animate-fade-in drop-shadow-2xl">
            Services
          </h1>
          <p className="text-lg sm:text-xl text-white/95 max-w-2xl mx-auto animate-fade-in drop-shadow-lg">
            From our resell store to professional installations, we're here to help with all your home improvement needs
          </p>
        </div>

        {/* Decorative Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg className="w-full h-12 sm:h-16 md:h-20" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <main className="bg-background py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="group bg-card rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-border"
                >
                  {/* Image with Icon */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Icon Badge */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-accent text-accent-foreground rounded-full p-4 shadow-2xl">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-5">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <ul className="space-y-3 pt-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm text-muted-foreground">
                          <span className="w-2 h-2 rounded-full bg-accent mt-1.5 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Button 
                      className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-6 text-base font-semibold shadow-md hover:shadow-lg transition-all"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-20 text-center bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-12 sm:p-16 border border-border max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-5">
            Need a Custom Service?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Don't see what you're looking for? Contact us to discuss your specific needs and we'll create a custom solution for you.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-6 text-base font-semibold"
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
