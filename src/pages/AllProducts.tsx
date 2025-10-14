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
import productBohoCurtain from "@/assets/product-boho-curtain.jpeg";
import productHoseConnector from "@/assets/product-hose-connector.jpeg";
import productPinkHeadset from "@/assets/product-pink-headset.jpeg";
import productMetalTreeStand from "@/assets/product-metal-tree-stand.jpeg";
import productGreenTreeStand from "@/assets/product-green-tree-stand.jpeg";
import productToaster from "@/assets/product-toaster.jpeg";
import productCoolingMat from "@/assets/product-cooling-mat.jpeg";
import productRugPad from "@/assets/product-rug-pad.jpeg";
import productBucket from "@/assets/product-bucket.jpeg";
import productSlipcover from "@/assets/product-slipcover.jpeg";
import productCarStorageBox from "@/assets/product-car-storage-box.jpeg";
import productColdTherapy from "@/assets/product-cold-therapy.jpeg";
import productInsulatedBoxes from "@/assets/product-insulated-boxes.jpeg";
import productAerostarFilters from "@/assets/product-aerostar-filters.jpeg";
import productFauxFurRug from "@/assets/product-faux-fur-rug.jpeg";
import productGatorWheels from "@/assets/product-gator-wheels.jpeg";
import productWindowTrim from "@/assets/product-window-trim.jpeg";
import productCarpetProtector from "@/assets/product-carpet-protector.jpeg";
import productVicksHumidifier from "@/assets/product-vicks-humidifier.jpeg";
import productRegisterPaper from "@/assets/product-register-paper.jpeg";
import productDrillBitSet from "@/assets/product-drill-bit-set.jpeg";
import productCanvasDropcloth from "@/assets/product-canvas-dropcloth.jpeg";
import productSheetSander from "@/assets/product-sheet-sander.jpeg";
import productWallLaundryBasket from "@/assets/product-wall-laundry-basket.jpeg";
import productCabinetPulls from "@/assets/product-cabinet-pulls.jpeg";
import productWasherPump from "@/assets/product-washer-pump.jpeg";
import productWaterSlide from "@/assets/product-water-slide.jpeg";
import productPillowCovers from "@/assets/product-pillow-covers.jpeg";
import productStapler from "@/assets/product-stapler.jpeg";
import productTablecloth from "@/assets/product-tablecloth.jpeg";
import productDogBedCover from "@/assets/product-dog-bed-cover.jpeg";
import productSeatCushion from "@/assets/product-seat-cushion.jpeg";
import productLunchBox from "@/assets/product-lunch-box.jpeg";
import productFirePitMat from "@/assets/product-fire-pit-mat.jpeg";
import productToiletRug from "@/assets/product-toilet-rug.jpeg";
import productPantyhose from "@/assets/product-pantyhose.jpeg";
import productBohoCurtainDetail from "@/assets/product-boho-curtain-detail.jpeg";
import { products as allProducts } from "@/data/products";

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  category: string;
  condition?: string;
  isNew?: boolean;
}


// Category groups for better organization
const categoryGroups = {
  "Tools & Equipment": ["Power Tools", "Tools & Hardware", "Safety Equipment"],
  "Home Essentials": ["Home Decor", "Home & Bath", "Lighting", "Storage & Organization"],
  "Electronics": ["Electronics"],
  "Safety Gear": ["Safety Footwear", "Safety Gear"],
  "Seasonal Items": ["Holiday & Seasonal"],
  "Other": ["Appliances", "Home Appliances", "Automotive", "Automotive Accessories", 
            "Office Equipment", "Medical Equipment", "Health & Wellness", "Accessories", 
            "Entertainment", "Toys", "Garden & Outdoor", "Pet Supplies"]
};

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCondition, setSelectedCondition] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = [...allProducts];

    // Filter by category group
    if (selectedCategory !== "all") {
      const categoriesInGroup = categoryGroups[selectedCategory as keyof typeof categoryGroups];
      filtered = filtered.filter(p => categoriesInGroup.includes(p.category));
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

      <main className="container mx-auto px-4 sm:px-6 py-24 md:py-28 mt-16">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3 sm:mb-4">
            All Products
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Browse our complete collection of quality resale and stock items
          </p>
        </div>

        {/* Filters - Enhanced Design */}
        <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12 space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <SlidersHorizontal className="h-5 w-5" />
            <span>Filters</span>
          </div>

          {/* Category Pills - Main Categories */}
          <div className="space-y-3">
            <label className="text-sm font-medium text-foreground">Category</label>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  selectedCategory === "all"
                    ? "bg-foreground text-background"
                    : "bg-background border border-border text-foreground hover:bg-muted"
                }`}
              >
                All Categories
              </button>
              {Object.keys(categoryGroups).filter(key => key !== "Other").map((group) => (
                <button
                  key={group}
                  onClick={() => setSelectedCategory(group)}
                  className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                    selectedCategory === group
                      ? "bg-foreground text-background"
                      : "bg-background border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {group}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Filters Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pt-2">
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
              <label className="text-sm font-medium text-foreground sm:invisible">Reset</label>
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
          <div className="text-sm text-muted-foreground pt-2 border-t border-border">
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
