import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, ClipboardCheck, Truck, Lightbulb, Hammer, Package, PhoneCall, Shield, Clock } from "lucide-react";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";
import serviceDelivery from "@/assets/service-delivery.jpg";

const services = [
  {
    id: 1,
    icon: Wrench,
    image: serviceInstallation,
    title: "Professional Installation",
    description: "Expert installation services for lighting, fixtures, and home improvements. Our skilled team ensures quality workmanship and attention to detail on every project.",
    features: ["Lighting fixtures", "Home appliances", "Safety equipment", "Quality guarantee"],
  },
  {
    id: 2,
    icon: ClipboardCheck,
    image: serviceConsultation,
    title: "Free Consultation",
    description: "Get expert advice on your next project. We'll help you choose the right products, plan your home improvements, and provide cost estimates.",
    features: ["Project planning", "Product recommendations", "Budget assessment", "Timeline planning"],
  },
  {
    id: 3,
    icon: Truck,
    image: serviceDelivery,
    title: "Delivery & Pickup",
    description: "Fast and reliable delivery service for all your purchases. Local pickup options available for your convenience. We ensure safe transport of all items.",
    features: ["Same-day delivery", "Local pickup", "Safe packaging", "Tracking available"],
  },
  {
    id: 4,
    icon: Lightbulb,
    image: serviceInstallation,
    title: "Lighting Design",
    description: "Transform your space with custom lighting solutions. We help design and implement lighting systems that enhance both functionality and aesthetics.",
    features: ["Custom design", "Energy efficient", "Mood lighting", "Smart home integration"],
  },
  {
    id: 5,
    icon: Hammer,
    image: serviceConsultation,
    title: "Home Renovation",
    description: "Complete home renovation services from planning to execution. We handle everything from small repairs to major remodeling projects.",
    features: ["Room remodeling", "Fixture upgrades", "Repair services", "Project management"],
  },
  {
    id: 6,
    icon: Package,
    image: serviceDelivery,
    title: "Product Sourcing",
    description: "Can't find what you need? We can source specialty items and hard-to-find products. Our network ensures you get exactly what you're looking for.",
    features: ["Custom orders", "Specialty items", "Bulk purchasing", "Competitive pricing"],
  },
  {
    id: 7,
    icon: PhoneCall,
    image: serviceConsultation,
    title: "24/7 Support",
    description: "Round-the-clock customer support for your questions and concerns. Our team is always ready to help with product information and service inquiries.",
    features: ["Always available", "Quick response", "Expert guidance", "Problem resolution"],
  },
  {
    id: 8,
    icon: Shield,
    image: serviceInstallation,
    title: "Warranty & Protection",
    description: "Comprehensive warranty coverage on all our services and products. We stand behind our work with quality guarantees and protection plans.",
    features: ["Service warranty", "Product protection", "Repair coverage", "Satisfaction guarantee"],
  },
  {
    id: 9,
    icon: Clock,
    image: serviceDelivery,
    title: "Flexible Scheduling",
    description: "Book services at times that work for you. We offer flexible scheduling including evenings and weekends to fit your busy lifestyle.",
    features: ["Evening availability", "Weekend service", "Emergency calls", "Advance booking"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 sm:px-6 py-24 md:py-28 mt-16">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Professional Services
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            From installation to consultation, we provide comprehensive services to meet all your home improvement needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border bg-card hover:shadow-xl transition-all duration-500 rounded-2xl sm:rounded-3xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                    <div className="bg-accent text-accent-foreground rounded-full p-2.5 sm:p-3 shadow-lg">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <ul className="space-y-2 pt-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 sm:mt-20 text-center bg-muted/30 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Need a Custom Service?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Don't see what you're looking for? Contact us to discuss your specific needs and we'll create a custom solution for you.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8"
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
