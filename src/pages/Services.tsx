import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, Wrench, ClipboardCheck } from "lucide-react";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";
import serviceDelivery from "@/assets/service-delivery.jpg";
import heroBg from "@/assets/hero-bg.jpg";

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
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-background" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center pt-20">
          <p className="text-sm sm:text-base font-semibold text-accent uppercase tracking-wider mb-4 animate-fade-in">
            What We Offer
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 animate-fade-in">
            Services
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
            From our resell store to professional installations, we're here to help with all your home improvement needs
          </p>
        </div>
      </section>

      {/* Services Cards */}
      <main className="container mx-auto px-4 sm:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border bg-card hover:shadow-2xl transition-all duration-500 rounded-3xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-accent text-accent-foreground rounded-full p-4 shadow-xl">
                      <Icon className="h-7 w-7" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <CardContent className="p-8 space-y-5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-3 pt-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-accent mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className="w-full mt-6 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full py-6 text-base font-semibold"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-20 text-center bg-gradient-to-br from-muted/50 to-muted/30 rounded-3xl p-12 sm:p-16 border border-border">
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
      </main>

      <Footer />
    </div>
  );
};

export default Services;
