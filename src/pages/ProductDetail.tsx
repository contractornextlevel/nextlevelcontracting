import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, Plus, Minus } from "lucide-react";
import { toast } from "sonner";

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

// Product data
type Product = {
  id: number;
  image: string;
  name: string;
  price: string;
  category: string;
  description: string;
  condition?: string;
  isNew?: boolean;
};

const products: Record<string, Product> = {
  "1": {
    id: 1,
    image: productBoots,
    name: "Steplite EasyGrip Safety Boots – Steel Toe (S4)",
    price: "$75",
    category: "Safety Footwear",
    condition: "Like New",
    description: "Almost new — worn only once! High-quality safety boots with steel toe protection. Perfect for construction, industrial work, and outdoor projects. Features slip-resistant sole and waterproof material.",
  },
  "2": {
    id: 2,
    image: productLight,
    name: "Epic Lighting Coventry Pendant Light",
    price: "$40",
    category: "Lighting",
    condition: "Excellent",
    description: "Modernize your space with this Epic Lighting Coventry 3 light chandelier. Its Roman Bronze Finish combined with Creme Cognac Glass Shades makes a beautiful addition to any home. Easy to install and maintain.",
  },
  "3": {
    id: 3,
    image: productGloves,
    name: "Premium Leather Work Gloves",
    price: "$35",
    category: "Safety Gear",
    isNew: true,
    description: "Brand new premium leather work gloves. High-quality construction with reinforced stitching. Perfect for construction work, gardening, and general outdoor labor. Excellent grip and durability.",
  },
  "4": {
    id: 4,
    image: productDrill,
    name: "Professional Power Drill Set",
    price: "$120",
    category: "Power Tools",
    condition: "Like New",
    description: "Professional-grade power drill set with multiple drill bits and carrying case. Barely used, in excellent condition. Variable speed control and ergonomic design for comfortable extended use.",
  },
  "5": {
    id: 5,
    image: productHelmet,
    name: "Premium Safety Hard Hat",
    price: "$45",
    category: "Safety Equipment",
    isNew: true,
    description: "Brand new premium safety hard hat with adjustable suspension system. Meets all safety standards. Lightweight yet durable construction. Perfect for construction sites and industrial environments.",
  },
  "6": {
    id: 6,
    image: productWorklight,
    name: "LED Professional Work Light",
    price: "$55",
    category: "Lighting",
    isNew: true,
    description: "High-powered LED work light with adjustable stand. Brand new condition. Provides bright, even illumination for any work area. Energy-efficient and long-lasting LED technology.",
  },
  "7": {
    id: 7,
    image: productGloves,
    name: "Heavy Duty Work Gloves",
    price: "$28",
    category: "Safety Gear",
    isNew: true,
    description: "Brand new heavy-duty work gloves. Durable construction with reinforced palm and fingers. Excellent protection for demanding work environments.",
  },
  "8": {
    id: 8,
    image: productDrill,
    name: "Cordless Drill Kit",
    price: "$95",
    category: "Power Tools",
    isNew: true,
    description: "Complete cordless drill kit with battery and charger. Brand new with warranty. Compact design with powerful motor. Includes carrying case and basic drill bit set.",
  },
  "9": {
    id: 9,
    image: productBoots,
    name: "Professional Safety Boots",
    price: "$85",
    category: "Safety Footwear",
    condition: "Excellent",
    description: "Professional-grade safety boots in excellent condition. Steel toe protection, slip-resistant sole, and comfortable fit. Perfect for industrial and construction work.",
  },
  "10": {
    id: 10,
    image: productHelmet,
    name: "Industrial Hard Hat Pro",
    price: "$50",
    category: "Safety Equipment",
    description: "Professional industrial hard hat with superior protection. Adjustable fit system and ventilation. Meets all safety certification requirements.",
  },
  "11": {
    id: 11,
    image: productLight,
    name: "Designer Pendant Light",
    price: "$60",
    category: "Lighting",
    condition: "Like New",
    description: "Beautiful designer pendant light in like-new condition. Elegant design that complements any interior. Easy installation with all mounting hardware included.",
  },
  "12": {
    id: 12,
    image: productDrill,
    name: "Impact Driver Set",
    price: "$140",
    category: "Power Tools",
    description: "Professional impact driver set with case and accessories. High-torque performance for demanding applications. Variable speed and LED work light.",
  },
  "13": {
    id: 13,
    image: productFootrest,
    name: "HUANUO Adjustable Footrest Under Desk",
    price: "$20",
    category: "Office Equipment",
    isNew: true,
    description: "Ergonomic footrest perfect for home or office use. Features 3 adjustable height levels, up to 30° tilt angle for better posture and comfort, non-slip massage surface texture. Helps improve circulation and reduce fatigue.",
  },
  "14": {
    id: 14,
    image: productKeurig,
    name: "Keurig K-Elite Single Serve Coffee Maker",
    price: "$120",
    category: "Appliances",
    isNew: true,
    description: "Top-rated Keurig machine in brushed silver. Features strong brew button for richer coffee flavor, iced setting for refreshing iced coffee, large 75 oz water reservoir. Brews in under a minute and compatible with all K-Cup pods.",
  },
  "15": {
    id: 15,
    image: productCommode,
    name: "Drive Medical Steel Folding Frame Commode",
    price: "$50",
    category: "Medical Equipment",
    isNew: true,
    description: "Durable and comfortable commode chair, perfect for home care or recovery use. Folds easily for storage or travel. Sturdy steel frame for maximum stability. Includes bucket with lid and splash guard. Tool-free assembly.",
  },
  "16": {
    id: 16,
    image: productJeepStorage,
    name: "Center Console Hanging Storage Box for Jeep Wrangler",
    price: "$10",
    category: "Automotive Accessories",
    isNew: true,
    description: "Perfect organizer for your Jeep Wrangler. Keeps your phone, keys, and small items within easy reach while driving. Fits most Jeep Wrangler models (JK, JL, JLU, Gladiator). Easy to install with no drilling required. Durable ABS material.",
  },
  "17": {
    id: 17,
    image: productEyewash,
    name: "CGOLDENWALL Portable Eye Wash Station",
    price: "$20",
    category: "Safety Equipment",
    isNew: true,
    description: "Portable emergency eye wash kit perfect for workplaces, garages, labs, or construction sites. Wall-mounted design with mirror and emergency sign. Includes 2 × 16.9 oz (500 ml) empty bottles (NO solution included). OSHA approved safety material. Compact, durable, and easy to install.",
  },
  "18": {
    id: 18,
    image: productPendantLight,
    name: "Epic Lighting Coventry Pendant Light",
    price: "$30",
    category: "Lighting",
    isNew: true,
    description: "Beautiful pendant light with elegant details perfect for living rooms, dining rooms, or entryways. Creme Cognac glass with Roman Bronze finish. Dimensions: 20 inches wide x 26 inches high. 3 x 100W max bulbs (not included). Includes 9' wire and 6' chain. Classic Coventry design adds warmth and luxury.",
  },
  "19": {
    id: 19,
    image: productChandelier,
    name: "Epic Lighting Coventry Chandelier",
    price: "$50",
    category: "Lighting",
    isNew: true,
    description: "Elegant and stylish chandelier perfect for your living room, dining room, or entryway. Creme Cognac glass with Roman Bronze finish. Dimensions: 22 inches wide x 20 inches high. 3 x 100W max bulbs (not included). Includes 9' wire and 6' chain for easy installation. Classic Coventry design adds luxury to any room.",
  },
  "20": {
    id: 20,
    image: productKodiakBoots,
    name: "Kodiak Women's Safety Boots – Size 7.5 US",
    price: "$60",
    category: "Safety Footwear",
    condition: "Excellent",
    description: "Stay protected and stylish with these premium Kodiak safety boots. Women's Size: 7.5 US. Top-quality Canadian brand with steel toe protection, slip-resistant sole, and durable leather construction. Excellent comfort and support. Gently used, excellent condition.",
  },
  "21": {
    id: 21,
    image: productIcHousing,
    name: "Lightolier 302MRIC7SPX IC Housing",
    price: "$60",
    category: "Lighting",
    isNew: true,
    description: "Upgrade your recessed lighting with this high-quality, brand-new Lightolier frame-in kit. IC-rated for direct contact with insulation. Silent Pack design for noise reduction. 3 3/4 inch aperture ideal for MR16 lamps. Easy installation compatible with standard ceiling setups.",
  },
  "22": {
    id: 22,
    image: productMassageGun,
    name: "Deep Tissue Fascia Relaxer – 30-Speed Muscle Massager",
    price: "$45",
    category: "Health & Wellness",
    isNew: true,
    description: "Soothe sore muscles and boost recovery with this powerful 30-speed massage gun perfect for athletes, gym users, or anyone needing deep tissue relief. Features 30 adjustable speed levels, multiple massage heads, quiet yet powerful motor, rechargeable battery, and includes carrying case.",
  },
  "23": {
    id: 23,
    image: productInverter,
    name: "Power Bright 12V 400W Inverter",
    price: "$20",
    category: "Electronics",
    isNew: true,
    description: "Convert your 12V DC power to 110V AC with this Power Bright inverter — perfect for camping, RVs, or emergency backup power. 400 Watts continuous power, compact & portable design, safe & reliable operation.",
  },
  "24": {
    id: 24,
    image: productSunglasses,
    name: "Guess GU 6096 Sunglasses",
    price: "$45",
    category: "Accessories",
    condition: "Like New",
    description: "Stylish and classic Guess sunglasses — perfect for everyday wear or special occasions. UV protection, trendy & comfortable fit. Excellent condition.",
  },
  "25": {
    id: 25,
    image: productAirConditioner,
    name: "Portable Air Conditioner 4-in-1 Mini Evaporative Cooler",
    price: "$25",
    category: "Home Appliances",
    isNew: true,
    description: "Stay cool anywhere with this compact 4-in-1 mini cooler — perfect for bedrooms, offices, or small spaces. Features cooling, humidifying, purifying, and fan functions. Compact & portable design, easy to use & energy efficient. Brand new (No Remote).",
  },
  "26": {
    id: 26,
    image: productJvcHeadphones,
    name: "JVC HA-S36W Bluetooth Headphones",
    price: "$40",
    category: "Electronics",
    isNew: true,
    description: "Enjoy wireless music with these JVC Bluetooth headphones — comfortable, stylish, and powerful sound. Bluetooth wireless connectivity, over-ear comfortable design, clear & powerful sound, long battery life.",
  },
  "27": {
    id: 27,
    image: productGamingHeadset,
    name: "BINNUNE Wireless Gaming Headset",
    price: "$20",
    category: "Electronics",
    condition: "Great",
    description: "Wireless headset perfect for gaming, streaming, or everyday use. Comfortable and clear sound! Wireless connectivity, built-in microphone, comfortable over-ear design. Great condition.",
  },
  "28": {
    id: 28,
    image: productPowerbank,
    name: "Philips Power Bank 10,000 mAh",
    price: "$20",
    category: "Electronics",
    isNew: true,
    description: "Keep your devices charged on the go with this high-capacity Philips power bank — reliable, portable, and stylish. 10,000 mAh capacity, fast charging, compact & portable design. Comes in original box.",
  },
  "29": {
    id: 29,
    image: productAirDuster,
    name: "CAGIWIRU Compressed Air Duster 4.0 – Cordless Electric Air Blower",
    price: "$20",
    category: "Electronics",
    isNew: true,
    description: "Keep your electronics clean and dust-free with this powerful cordless air duster — perfect for keyboards, PCs, cameras, and more. Cordless & rechargeable, LED light for precision cleaning, strong airflow, lightweight & portable, safe for electronics.",
  },
  "30": {
    id: 30,
    image: productShowerCurtain,
    name: "AmazerBath Shower Curtain Liner – 72x72 Beige",
    price: "$12",
    category: "Home & Bath",
    isNew: true,
    description: "Keep your bathroom clean and stylish with this lightweight waterproof shower curtain liner — designed for durability and easy use. Size: 72x72 inches, color: Beige/Cream. Made from PEVA – waterproof & eco-friendly. Includes 3 magnets & 12 grommets for secure fit.",
  },
  "31": {
    id: 31,
    image: productBlackoutCurtain,
    name: "H.VERSAILTEX Blackout Curtain – Storm Blue, 52\" W × 96\" L",
    price: "$20",
    category: "Home Decor",
    isNew: true,
    description: "Keep your room cool and private with this thermal insulated blackout curtain — perfect for living rooms, bedrooms, or offices. Extra long – 96 inches length, solid grommet top – easy to hang, thermal insulated – energy saving, blocks light & provides privacy. One panel.",
  },
  "32": {
    id: 32,
    image: productDrainStopper,
    name: "Generic Bathroom Sink Drain Stopper – Pop-Up Hair Catcher",
    price: "$5",
    category: "Home & Bath",
    isNew: true,
    description: "Keep your sink and floor drains clean with this easy-to-use pop-up drain stopper — perfect for bathroom or kitchen. Pop-up bounce core design, removable stainless steel filter basket, catches hair & debris, easy to clean & reusable.",
  },
  "33": {
    id: 33,
    image: productWirelessCharger,
    name: "HaloLock™️ MINI Wireless Charger – Slim Magnetic",
    price: "$10",
    category: "Electronics",
    isNew: true,
    description: "Charge your devices fast and wirelessly with this slim, magnetic wireless charger — stylish, portable, and reliable. Slim & lightweight design, magnetic alignment for easy charging, braided nylon cable – durable & tangle-free, compatible with Qi-enabled devices.",
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  const product = products[id as keyof typeof products];

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    toast.success(`Added ${quantity} ${product.name} to cart!`, {
      description: `Total: ${product.price}`,
    });
  };

  const incrementQuantity = () => setQuantity(q => q + 1);
  const decrementQuantity = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-6 py-24 mt-16">
        {/* Back Button */}
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-card shadow-lg">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.isNew && (
              <Badge className="absolute top-6 right-6 bg-accent text-accent-foreground text-base px-4 py-2">
                New
              </Badge>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              {product.condition && (
                <Badge variant="outline" className="text-base px-4 py-1">
                  Condition: {product.condition}
                </Badge>
              )}
            </div>

            <div className="text-5xl font-bold text-foreground">
              {product.price}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <label className="text-sm font-medium text-foreground">Quantity</label>
              <div className="flex items-center space-x-4">
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={decrementQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-2xl font-semibold w-12 text-center">
                  {quantity}
                </span>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={incrementQuantity}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>

            {/* Product Features */}
            <div className="border-t border-border pt-6 space-y-4">
              <h3 className="font-semibold text-lg">Product Features</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  High-quality construction
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Professional-grade performance
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Trusted by professionals
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  Excellent value for money
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
