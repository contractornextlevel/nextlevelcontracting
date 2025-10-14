import { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SlidersHorizontal } from "lucide-react";

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
import productIcHousing from "@/assets/product-ic-housing.jpeg";
import productMassageGun from "@/assets/product-massage-gun.jpeg";
import productInverter from "@/assets/product-inverter.jpeg";
import productSunglasses from "@/assets/product-sunglasses.jpeg";
import productAirConditioner from "@/assets/product-air-conditioner.jpeg";
import productJvcHeadphones from "@/assets/product-jvc-headphones.jpeg";
import productGamingHeadset from "@/assets/product-gaming-headset.jpeg";
import productPowerbank from "@/assets/product-powerbank.jpeg";
import productAirDuster from "@/assets/product-air-duster.jpeg";
import productShowerCurtain from "@/assets/product-shower-curtain.jpeg";
import productBlackoutCurtain from "@/assets/product-blackout-curtain.jpeg";
import productDrainStopper from "@/assets/product-drain-stopper.jpeg";
import productWirelessCharger from "@/assets/product-wireless-charger.jpeg";
import productChristmasDvd from "@/assets/product-christmas-dvd.jpeg";
import productElfDoll from "@/assets/product-elf-doll.jpeg";
import productScreenProtector from "@/assets/product-screen-protector.jpeg";
import productFogLight from "@/assets/product-fog-light.jpeg";
import productValanceCurtain from "@/assets/product-valance-curtain.jpeg";
import productVacuumFilters from "@/assets/product-vacuum-filters.jpeg";
import productCasterWheel from "@/assets/product-caster-wheel.jpeg";
import productSunShade from "@/assets/product-sun-shade.jpeg";

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  category: string;
  condition?: string;
  isNew?: boolean;
}

const allProducts: Product[] = [
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
    id: 21,
    image: productIcHousing,
    name: "Lightolier 302MRIC7SPX IC Housing",
    price: "$60",
    category: "Lighting",
    isNew: true,
  },
  {
    id: 22,
    image: productMassageGun,
    name: "Deep Tissue Fascia Relaxer – 30-Speed Muscle Massager",
    price: "$45",
    category: "Health & Wellness",
    isNew: true,
  },
  {
    id: 23,
    image: productInverter,
    name: "Power Bright 12V 400W Inverter",
    price: "$20",
    category: "Electronics",
    isNew: true,
  },
  {
    id: 24,
    image: productSunglasses,
    name: "Guess GU 6096 Sunglasses",
    price: "$45",
    category: "Accessories",
    condition: "Like New",
  },
  {
    id: 25,
    image: productAirConditioner,
    name: "Portable Air Conditioner 4-in-1 Mini Evaporative Cooler",
    price: "$25",
    category: "Home Appliances",
    isNew: true,
  },
  {
    id: 26,
    image: productJvcHeadphones,
    name: "JVC HA-S36W Bluetooth Headphones",
    price: "$40",
    category: "Electronics",
    isNew: true,
  },
  {
    id: 27,
    image: productGamingHeadset,
    name: "BINNUNE Wireless Gaming Headset",
    price: "$20",
    category: "Electronics",
    condition: "Great",
  },
  {
    id: 28,
    image: productPowerbank,
    name: "Philips Power Bank 10,000 mAh",
    price: "$20",
    category: "Electronics",
    isNew: true,
  },
  {
    id: 29,
    image: productAirDuster,
    name: "CAGIWIRU Compressed Air Duster 4.0 – Cordless Electric Air Blower",
    price: "$20",
    category: "Electronics",
    isNew: true,
  },
  {
    id: 30,
    image: productShowerCurtain,
    name: "AmazerBath Shower Curtain Liner – 72x72 Beige",
    price: "$12",
    category: "Home & Bath",
    isNew: true,
  },
  {
    id: 31,
    image: productBlackoutCurtain,
    name: "H.VERSAILTEX Blackout Curtain – Storm Blue, 52\" W × 96\" L",
    price: "$20",
    category: "Home Decor",
    isNew: true,
  },
  {
    id: 32,
    image: productDrainStopper,
    name: "Generic Bathroom Sink Drain Stopper – Pop-Up Hair Catcher",
    price: "$5",
    category: "Home & Bath",
    isNew: true,
  },
  {
    id: 33,
    image: productWirelessCharger,
    name: "HaloLock™️ MINI Wireless Charger – Slim Magnetic",
    price: "$10",
    category: "Electronics",
    isNew: true,
  },
  {
    id: 34,
    image: productChristmasDvd,
    name: "The Original Christmas Specials Collection DVD",
    price: "$10",
    category: "Entertainment",
    condition: "Like New",
  },
  {
    id: 35,
    image: productElfDoll,
    name: "10\" Elf Doll with a Book – Perfect for Kids 3-10",
    price: "$10",
    category: "Toys",
    isNew: true,
  },
  {
    id: 36,
    image: productScreenProtector,
    name: "Peslv Magnetic Anti Blue Light Screen Protector – MacBook Pro 14\"",
    price: "$10",
    category: "Electronics",
    isNew: true,
  },
  {
    id: 37,
    image: productFogLight,
    name: "KaiDengZhe 2PCS H3 LED Fog Light Bulbs – 6000K White",
    price: "$10",
    category: "Automotive",
    isNew: true,
  },
  {
    id: 38,
    image: productValanceCurtain,
    name: "Feelyou Cute Christmas Valance Curtain – 1 Panel 52\"x12\"",
    price: "$8",
    category: "Home Decor",
    isNew: true,
  },
  {
    id: 39,
    image: productVacuumFilters,
    name: "BuyParts 2 HEPA + 4 Foam Filters for Shark Vacuum",
    price: "$10",
    category: "Home Appliances",
    isNew: true,
  },
  {
    id: 40,
    image: productCasterWheel,
    name: "Caster Wheel for Ridgid Wet Dry Shop Vac",
    price: "$10",
    category: "Tools & Hardware",
    isNew: true,
  },
  {
    id: 41,
    image: productSunShade,
    name: "XHRING Windshield Sun Shade – Fits Kia Models",
    price: "$12",
    category: "Automotive",
    isNew: true,
  },
];

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCondition, setSelectedCondition] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(allProducts.map(p => p.category)));
    return cats.sort();
  }, []);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by condition
    if (selectedCondition !== "all") {
      if (selectedCondition === "new") {
        filtered = filtered.filter(p => p.isNew);
      } else {
        filtered = filtered.filter(p => p.condition === selectedCondition);
      }
    }

    // Sort
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)));
        break;
      case "price-high":
        filtered.sort((a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)));
        break;
      case "name":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default: // newest
        filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [selectedCategory, selectedCondition, sortBy]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedCondition("all");
    setSortBy("newest");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-6 py-24 mt-16">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            All Products
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse our complete collection of quality resale and stock items
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-12 space-y-6">
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <SlidersHorizontal className="h-5 w-5" />
            <span>Filters</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Condition Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Condition</label>
              <Select value={selectedCondition} onValueChange={setSelectedCondition}>
                <SelectTrigger>
                  <SelectValue placeholder="All Conditions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Conditions</SelectItem>
                  <SelectItem value="new">Brand New</SelectItem>
                  <SelectItem value="Excellent">Excellent</SelectItem>
                  <SelectItem value="Like New">Like New</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Sort By */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name">Name: A to Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Reset Button */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground invisible">Reset</label>
              <Button 
                variant="outline" 
                onClick={resetFilters}
                className="w-full"
              >
                Reset Filters
              </Button>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-sm text-muted-foreground">
            Showing {filteredProducts.length} of {allProducts.length} products
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="animate-fade-in">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground">
              No products found matching your filters.
            </p>
            <Button onClick={resetFilters} className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AllProducts;
