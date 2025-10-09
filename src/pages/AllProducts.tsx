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
