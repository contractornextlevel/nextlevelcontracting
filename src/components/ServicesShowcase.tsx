import { ArrowRight, Wrench, ClipboardCheck, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import serviceInstallation from "@/assets/service-installation.jpg";
import serviceConsultation from "@/assets/service-consultation.jpg";
import serviceDelivery from "@/assets/service-delivery.jpg";

const services = [
  {
    id: 1,
    icon: Wrench,
    image: serviceInstallation,
    title: "Professional Installation",
    description: "Expert installation services for lighting, fixtures, and home improvements. Our skilled team ensures quality workmanship.",
  },
  {
    id: 2,
    icon: ClipboardCheck,
    image: serviceConsultation,
    title: "Free Consultation",
    description: "Get expert advice on your next project. We'll help you choose the right products and plan your home improvements.",
  },
  {
    id: 3,
    icon: Truck,
    image: serviceDelivery,
    title: "Delivery & Pickup",
    description: "Fast and reliable delivery service for all your purchases. Local pickup options available for your convenience.",
  },
];

export const ServicesShowcase = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <p className="text-xs sm:text-sm font-semibold text-accent uppercase tracking-wider mb-2">
              Services
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              What We Offer
            </h2>
          </div>
          <Button 
            variant="outline" 
            className="rounded-full px-5 sm:px-6 gap-2 group self-start sm:self-auto"
          >
            View More
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
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
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
