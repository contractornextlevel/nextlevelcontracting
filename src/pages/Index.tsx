import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryShowcase } from "@/components/CategoryShowcase";
import { ServicesShowcase } from "@/components/ServicesShowcase";
import { ProductGrid } from "@/components/ProductGrid";
import { Footer } from "@/components/Footer";

// Import product images
import productBoots from "@/assets/product-boots.jpeg";
import productLight from "@/assets/product-light.jpeg";
import productGloves from "@/assets/product-gloves.jpg";
import productDrill from "@/assets/product-drill.jpg";
import productHelmet from "@/assets/product-helmet.jpg";
import productWorklight from "@/assets/product-worklight.jpg";
import productFootrest from "@/assets/product-footrest.jpeg";
import productKeurig from "@/assets/product-keurig.jpeg";
import productCommode from "@/assets/product-commode.jpeg";
import productJeepStorage from "@/assets/product-jeep-storage.jpeg";
import productEyewash from "@/assets/product-eyewash.jpeg";
import productPendantLight from "@/assets/product-pendant-light.jpeg";
import productChandelier from "@/assets/product-chandelier.jpeg";
import productKodiakBoots from "@/assets/product-kodiak-boots.jpeg";
import productInverter from "@/assets/product-inverter.jpeg";
import productSunglasses from "@/assets/product-sunglasses.jpeg";
import productAirConditioner from "@/assets/product-air-conditioner.jpeg";
import productJvcHeadphones from "@/assets/product-jvc-headphones.jpeg";
import productPowerbank from "@/assets/product-powerbank.jpeg";
import productWirelessCharger from "@/assets/product-wireless-charger.jpeg";

const Index = () => {
  // Featured Products
  const featuredProducts = [
    {
      id: 17,
      image: productEyewash,
      name: "CGOLDENWALL Portable Eye Wash Station",
      price: "$20",
      category: "Safety Equipment",
      isNew: true,
    },
    {
      id: 18,
      image: productPendantLight,
      name: "Epic Lighting Coventry Pendant Light",
      price: "$30",
      category: "Lighting",
      isNew: true,
    },
    {
      id: 14,
      image: productKeurig,
      name: "Keurig K-Elite Single Serve Coffee Maker",
      price: "$120",
      category: "Appliances",
      isNew: true,
    },
    {
      id: 20,
      image: productKodiakBoots,
      name: "Kodiak Women's Safety Boots – Size 7.5 US",
      price: "$60",
      category: "Safety Footwear",
      condition: "Excellent",
    },
  ];


  // Top Sellers
  const topSellers = [
    {
      id: 9,
      image: productBoots,
      name: "Professional Safety Boots",
      price: "$85",
      category: "Safety Footwear",
      condition: "Excellent",
    },
    {
      id: 10,
      image: productHelmet,
      name: "Industrial Hard Hat Pro",
      price: "$50",
      category: "Safety Equipment",
    },
    {
      id: 11,
      image: productLight,
      name: "Designer Pendant Light",
      price: "$60",
      category: "Lighting",
      condition: "Like New",
    },
    {
      id: 12,
      image: productDrill,
      name: "Impact Driver Set",
      price: "$140",
      category: "Power Tools",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Category Showcase - New Section */}
      <CategoryShowcase />
      
      {/* Services Showcase - New Section */}
      <ServicesShowcase />
      
      {/* Featured Products */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10" />
        <ProductGrid 
          id="featured"
          products={featuredProducts}
          title="Featured Products"
          subtitle="Handpicked selection of our most popular items"
        />
      </div>

      {/* Top Sellers */}
      <div className="bg-card/50 backdrop-blur-sm">
        <ProductGrid 
          id="top-sellers"
          products={topSellers}
          title="Top Sellers"
          subtitle="Customer favorites that keep coming back"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
