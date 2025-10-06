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

const Index = () => {
  // Featured Products
  const featuredProducts = [
    {
      id: 1,
      image: productBoots,
      name: "Steplite EasyGrip Safety Boots – Steel Toe (S4)",
      price: "$75",
      category: "Safety Footwear",
      condition: "Like New",
    },
    {
      id: 2,
      image: productLight,
      name: "Epic Lighting Coventry Pendant Light",
      price: "$40",
      category: "Lighting",
      condition: "Excellent",
    },
    {
      id: 3,
      image: productGloves,
      name: "Premium Leather Work Gloves",
      price: "$35",
      category: "Safety Gear",
      isNew: true,
    },
    {
      id: 4,
      image: productDrill,
      name: "Professional Power Drill Set",
      price: "$120",
      category: "Power Tools",
      condition: "Like New",
    },
  ];

  // New Arrivals
  const newArrivals = [
    {
      id: 5,
      image: productHelmet,
      name: "Premium Safety Hard Hat",
      price: "$45",
      category: "Safety Equipment",
      isNew: true,
    },
    {
      id: 6,
      image: productWorklight,
      name: "LED Professional Work Light",
      price: "$55",
      category: "Lighting",
      isNew: true,
    },
    {
      id: 7,
      image: productGloves,
      name: "Heavy Duty Work Gloves",
      price: "$28",
      category: "Safety Gear",
      isNew: true,
    },
    {
      id: 8,
      image: productDrill,
      name: "Cordless Drill Kit",
      price: "$95",
      category: "Power Tools",
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
