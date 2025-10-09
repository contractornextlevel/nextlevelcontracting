import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
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

  // New Arrivals
  const newArrivals = [
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
      id: 19,
      image: productChandelier,
      name: "Epic Lighting Coventry Chandelier",
      price: "$50",
      category: "Lighting",
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
    {
      id: 13,
      image: productFootrest,
      name: "HUANUO Adjustable Footrest Under Desk",
      price: "$20",
      category: "Office Equipment",
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
      id: 15,
      image: productCommode,
      name: "Drive Medical Steel Folding Frame Commode",
      price: "$50",
      category: "Medical Equipment",
      isNew: true,
    },
    {
      id: 16,
      image: productJeepStorage,
      name: "Center Console Hanging Storage Box for Jeep Wrangler",
      price: "$10",
      category: "Automotive Accessories",
      isNew: true,
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
      
      <ProductGrid 
        id="featured"
        products={featuredProducts}
        title="Featured Products"
        subtitle="Handpicked selection of our most popular items"
      />

      <div className="bg-card py-24">
        <ProductGrid 
          id="new-arrivals"
          products={newArrivals}
          title="New Arrivals"
          subtitle="Fresh stock just added to our collection"
        />
      </div>

      <ProductGrid 
        id="top-sellers"
        products={topSellers}
        title="Top Sellers"
        subtitle="Customer favorites that keep coming back"
      />

      <Footer />
    </div>
  );
};

export default Index;
