import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ShoppingCart, Plus, Minus } from "lucide-react";
import { toast } from "sonner";
import { useCart } from "@/contexts/CartContext";

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
import { products as baseProducts } from "@/data/products";

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
  "34": {
    id: 34,
    image: productChristmasDvd,
    name: "The Original Christmas Specials Collection DVD",
    price: "$10",
    category: "Entertainment",
    condition: "Like New",
    description: "Enjoy the magic of the holidays with this classic Christmas DVD collection — perfect for family movie nights! Includes multiple holiday specials. Great condition, perfect gift or holiday entertainment.",
  },
  "35": {
    id: 35,
    image: productElfDoll,
    name: "10\" Elf Doll with a Book – Perfect for Kids 3-10",
    price: "$10",
    category: "Toys",
    isNew: true,
    description: "Adorable elf doll with a book — a great gift idea for kids! Fun, educational, and perfect for playtime. Size: 10 inches, includes book, great for kids ages 3-10. Brand new – never used.",
  },
  "36": {
    id: 36,
    image: productScreenProtector,
    name: "Peslv Magnetic Anti Blue Light Screen Protector – MacBook Pro 14\"",
    price: "$10",
    category: "Electronics",
    isNew: true,
    description: "Protect your eyes and your MacBook screen with this magnetic anti-blue light filter — easy to install and removable. Fits 14.2\" MacBook Pro (2021-2024, M1, M2, M3, M4). Magnetic attachment – easy to apply & remove, reduces glare & blocks blue light, protects screen from scratches & dust, removable & reusable.",
  },
  "37": {
    id: 37,
    image: productFogLight,
    name: "KaiDengZhe 2PCS H3 LED Fog Light Bulbs – 6000K White",
    price: "$10",
    category: "Automotive",
    isNew: true,
    description: "Upgrade your vehicle's fog lights with these super bright LED bulbs — perfect for safer driving in any weather. 2PCS H3 LED Bulbs, 55W, 6000K bright white light, 600% brighter than standard halogen, mini size – fits standard fog light sockets, rapid heat dissipation – long lasting, ideal for fog lamps & DRL.",
  },
  "38": {
    id: 38,
    image: productValanceCurtain,
    name: "Feelyou Cute Christmas Valance Curtain – 1 Panel 52\"x12\"",
    price: "$8",
    category: "Home Decor",
    isNew: true,
    description: "Decorate your kitchen or bathroom with this cute Christmas valance curtain. Perfect for adding a fun and festive touch to your home! Size: 52\"x12\", 1 panel, Christmas Axolotl/Salamander design, ideal for kitchen, bathroom, or windows. Festive decoration.",
  },
  "39": {
    id: 39,
    image: productVacuumFilters,
    name: "BuyParts 2 HEPA + 4 Foam Filters for Shark Vacuum",
    price: "$10",
    category: "Home Appliances",
    isNew: true,
    description: "Keep your Shark Navigator Lift-Away vacuum running like new with this replacement filter set — includes HEPA and foam filters. Fits Models: NV350, NV351, NV352, NV355, NV356E, NV357, NV360, NV370, NV391, UV440, UV490, UV500, UV540, UV541, UV550. Part Numbers: XFF350, XHF350. Includes 2 HEPA + 4 foam filters. Easy to install.",
  },
  "40": {
    id: 40,
    image: productCasterWheel,
    name: "Caster Wheel for Ridgid Wet Dry Shop Vac",
    price: "$10",
    category: "Tools & Hardware",
    isNew: true,
    description: "Replace your old or broken caster wheel with this durable replacement — perfect for Ridgid shop vacs. Fits Ridgid Wet Dry Shop Vac, easy to install, durable & reliable.",
  },
  "41": {
    id: 41,
    image: productSunShade,
    name: "XHRING Windshield Sun Shade – Fits Kia Models",
    price: "$12",
    category: "Automotive",
    isNew: true,
    description: "Protect your car interior from sun and heat with this durable windshield sun shade — perfect for multiple Kia models. Fits: Kia K5 2021-2026, Optima 2011-2020, Soul 2010-2025, Sportage 1995-2026, Seltos 2020-, Forte 2019-2025, Rio. Blocks sun & reduces heat, easy to install & remove, protects dashboard & interior, durable & foldable design.",
  },
  "42": {
    id: 42,
    image: productBohoCurtain,
    name: "Lecloud Black Stall Boho Shower Curtain – 36\" W × 72\" L",
    price: "$10",
    category: "Home & Bath",
    isNew: true,
    description: "Add a modern farmhouse touch to your bathroom with this boho textured fabric shower curtain — stylish and durable. Size: 36\" W × 72\" L, boho/farmhouse design, tufted plaid striped pattern, clip jacquard textured fabric. Half-size curtain – perfect for bathrooms.",
  },
  "43": {
    id: 43,
    image: productHoseConnector,
    name: "Yardworks Plastic Quick Connect Starter Set – 5pcs",
    price: "$7",
    category: "Garden & Outdoor",
    isNew: true,
    description: "Make your gardening and watering easier with this plastic quick connect set — perfect for hoses and outdoor use. 5-piece starter set, quick connect design, durable plastic material, easy to use & install.",
  },
  "44": {
    id: 44,
    image: productPinkHeadset,
    name: "SIMGAL Gaming Headset with Mic – Pink",
    price: "$15",
    category: "Electronics",
    isNew: true,
    description: "Cute and fun cat ear gaming headset with RGB lights — compatible with PS4, PS5, Xbox One (adapter not included), PC, and mobile. Perfect for girls and women gamers! Removable cat ears, surround sound, built-in microphone, RGB lights. Compatible with PS4, PS5, Xbox One*, PC, Mobile (*adapter not included).",
  },
  "45": {
    id: 45,
    image: productMetalTreeStand,
    name: "Rocky Mountain Goods Metal Christmas Tree Stand – Red",
    price: "$20",
    category: "Holiday & Seasonal",
    isNew: true,
    description: "Keep your live Christmas tree stable and fresh this holiday season with this easy-to-use metal tree stand. Fits trees up to 8 feet, stable metal base, holds 1.125 gallons of water, easy assembly – no tools needed. Model: RMG-MTS8, color: Red.",
  },
  "46": {
    id: 46,
    image: productGreenTreeStand,
    name: "Jack Post 506-ST Christmas Tree Stand – Green Plastic, 6 Ft. Tree",
    price: "$20",
    category: "Holiday & Seasonal",
    isNew: true,
    description: "Keep your live Christmas tree stable and upright with this easy-to-use plastic tree stand — perfect for holiday decorating. Fits trees up to 6 feet, durable green plastic, simple assembly. Quantity: 1.",
  },
  "47": {
    id: 47,
    image: productToaster,
    name: "OVENTE Electric 2-Slice Toaster – Black TP2210B",
    price: "$25",
    category: "Appliances",
    isNew: true,
    description: "Perfect for toasting bread, thin bagels, and waffles — compact design with easy-to-use features. 6-shade browning selector, 700W power, removable crumb tray, compact & stylish design, easy to use & clean.",
  },
  "48": {
    id: 48,
    image: productCoolingMat,
    name: "Mora Pets Dog Cooling Mat – 65 × 50 CM / 25.5 x 19.5 inch",
    price: "$20",
    category: "Pet Supplies",
    isNew: true,
    description: "Keep your pets cool and comfortable with this self-cooling gel mat — perfect for dogs and cats of all sizes. Size: 65 × 50 CM (25.5 x 19.5 inch), pressure-activated cooling gel, suitable for large, medium, and small dogs, self-cooling – no electricity needed, ideal for hot days & indoor/outdoor use.",
  },
  "49": {
    id: 49,
    image: productAerostarFilters,
    name: "Aerostar AC & Furnace Pleated Air Conditioner Filters – 20x20x1, MERV 8 (6 Pack)",
    price: "$50",
    category: "Home Appliances",
    isNew: true,
    description: "Keep your home air clean with these high-efficiency pleated filters — removes dust, lint, mold, and allergens. Size: 20 x 20 x 1 inch, MERV 8 – High Efficiency, 6 Pack, Pleated Design for Maximum Filtration, Ideal for AC & Furnace systems.",
  },
  "50": {
    id: 50,
    image: productFauxFurRug,
    name: "Faux Fur Fluffy Rug – White, 1.9 × 4.9 Feet",
    price: "$25",
    category: "Home Decor",
    isNew: true,
    description: "Add a soft and cozy touch to your home with this faux sheepskin rug — perfect for bedrooms, living rooms, or kids' rooms. Size: 1.9 × 4.9 Feet, Fluffy & Soft Faux Fur, Perfect for Bedroom, Living Room, or Hallway, Cozy Bedside or Runner Rug, Stylish & Easy to Clean.",
  },
  "51": {
    id: 51,
    image: productGatorWheels,
    name: "Peg Perego Gator HPX Front Wheels – 2 Pack",
    price: "$20",
    category: "Automotive Accessories",
    isNew: true,
    description: "Replacement front wheels for your Peg Perego Gator HPX — fits pre-2010 manufactured models only. 2 Front Wheels Included, Compatible with Pre-2010 Gator HPX Models, Durable & Easy to Install, Perfect Replacement Part.",
  },
  "52": {
    id: 52,
    image: productWindowTrim,
    name: "Savadicar 4-Piece Black Window Beltline Trim Cover – Ford F150 (2021-Present)",
    price: "$15",
    category: "Automotive Accessories",
    isNew: true,
    description: "Upgrade your Ford F150's exterior with these sleek window sill overlay accents — stylish and easy to install. Fits Ford F150 (2021-Present), 4-Piece Set, Window Sill Overlay Accent, Exterior Styling Upgrade, Durable & Easy to Install.",
  },
  "53": {
    id: 53,
    image: productCarpetProtector,
    name: "Uross Carpet Protector for Pets – 3.6FT, 2PCS",
    price: "$10",
    category: "Pet Supplies",
    isNew: true,
    description: "Protect your carpets from cat scratches with these easy-to-use plastic mats — perfect for doorways or any scratch-prone area. Size: 3.6FT, 2 Pieces Included, Anti-Scratch Design, Easy to Cut & Fit Any Carpet, Protects Carpet from Pets.",
  },
  "54": {
    id: 54,
    image: productVicksHumidifier,
    name: "Vicks Mini Filter Free Cool Mist Humidifier – Small Room",
    price: "$10",
    category: "Home Appliances",
    isNew: true,
    description: "Keep your room comfortable and your air fresh with this compact humidifier — works with Vicks VapoPads for soothing relief. Filter-Free Design – Easy to Use, Variable Mist Control, Works with Vicks VapoPads, Small & Portable – Perfect for Bedrooms or Offices, Includes 2 Parts as Shown in Photo.",
  },
  "55": {
    id: 55,
    image: productRegisterPaper,
    name: "Cash Register Paper Rolls – For STAR SP700 & POS Printers (50 Rolls)",
    price: "$20",
    category: "Office Equipment",
    isNew: true,
    description: "High-quality bond paper rolls — perfect for restaurants, shops, or any POS system. Size: 3\" x 150', 50 Non-Thermal Rolls, 50 GSM, Compatible with STAR SP700, TMU200, SRP275, New & Ready to Use.",
  },
  "56": {
    id: 56,
    image: productDrillBitSet,
    name: "Mastercraft Drill & Screwdriver Bit Set – 253 Pieces",
    price: "$50",
    category: "Power Tools",
    isNew: true,
    description: "Complete drill and screwdriver bit set — perfect for home, garage, or professional use. 253 Pieces Included, Compatible with Most Drills & Screwdrivers, Durable & Long-Lasting, Ideal for DIY, Repairs, & Projects.",
  },
  "57": {
    id: 57,
    image: productCanvasDropcloth,
    name: "Everbilt Canvas Dropcloth – 3 ft. 9 in. x 14 ft. 9 in., Medium Duty",
    price: "$10",
    category: "Tools & Hardware",
    isNew: true,
    description: "Protect your floors and furniture during painting or projects with this washable and reusable canvas dropcloth. Size: 3 ft. 9 in. x 14 ft. 9 in., 8oz Medium Duty Canvas, Washable & Reusable, Ideal for Painting, DIY, & Home Projects.",
  },
  "58": {
    id: 58,
    image: productSheetSander,
    name: "Mastercraft 2A Sheet Sander – Used / 1/3 Condition",
    price: "$20",
    category: "Power Tools",
    condition: "Used (1/3)",
    description: "Durable sheet sander for sanding wood, metal, or DIY projects — reliable and ready for use. Brand: Mastercraft, Model: 2A, Used – 1/3 Condition, Ideal for DIY, Home, or Workshop Projects, Easy to Use.",
  },
  "59": {
    id: 59,
    image: productWallLaundryBasket,
    name: "Wall Laundry Basket Folding Laundry Hamper – White",
    price: "$20",
    category: "Storage & Organization",
    isNew: true,
    description: "Keep your bathroom or laundry area tidy with this foldable wall-mounted laundry basket — perfect for saving space and keeping clothes organized. Folding & Space-Saving Design, Wall-Mounted for Easy Access, Ideal for Laundry, Clothes, or Waste Storage, Durable Plastic Material, Color: White.",
  },
  "60": {
    id: 60,
    image: productCabinetPulls,
    name: "Franklin Brass P29618K-SN-B Satin Nickel 5-Inch Cabinet Pulls (10 Pack)",
    price: "$15",
    category: "Tools & Hardware",
    isNew: true,
    description: "Upgrade your kitchen or furniture with this beautiful set of satin nickel drawer pulls. Perfect for cabinets, drawers, or furniture renovation projects. Brand: Franklin Brass, Model: P29618K-SN-B \"Francisco\", Finish: Satin Nickel, Size: 5-inch (center-to-center), Includes: 10 handles (with screws), Condition: Brand New – Unopened.",
  },
  "61": {
    id: 61,
    image: productWasherPump,
    name: "Trico 11-614 Spray Windshield Washer Pump (1 Pack)",
    price: "$15",
    category: "Automotive",
    isNew: true,
    description: "Original Equipment replacement windshield washer pump. Complete instructions included, No fitting adjustments required, Includes electronic circuit board and relay, Includes reservoir filter. Brand new condition.",
  },
  "62": {
    id: 62,
    image: productWaterSlide,
    name: "Inflatable Water Slide – Backyard Fun for Kids",
    price: "$25",
    category: "Toys",
    isNew: true,
    description: "Bring water fun to your backyard with this giant inflatable slide. Perfect for kids and family, ideal for sunny days and summer parties. Easy to inflate and use, Durable and sturdy, Includes water connection accessories. Warning: contains small parts, not suitable for children under 3.",
  },
  "63": {
    id: 63,
    image: productPillowCovers,
    name: "MIULEE Decorative Pillow Covers Combo – Set of 3 (White + Beige)",
    price: "$25",
    category: "Home Decor",
    isNew: true,
    description: "Add a cozy and elegant touch to your home with this MIULEE decorative pillow cover combo — perfect for your sofa, bed, or any modern space. Includes: 1 White Corduroy Pillow Cover (26 x 26 inches) and 2 Velvet Beige Pillow Covers (20 x 20 inches). Hidden zipper design, Easy to wash and maintain, Great for sofa, bed, or car decoration.",
  },
  "64": {
    id: 64,
    image: productStapler,
    name: "Arrow Fastener T50X Tac Mate Stapler – Grey",
    price: "$15",
    category: "Tools & Hardware",
    condition: "Like New",
    description: "High-quality Arrow T50X Tac Mate Stapler, perfect for home repairs, upholstery, crafts, and DIY projects. This unit is used but in excellent, like-new condition — works perfectly! Compatible Staples: T50 series, Ergonomic design for comfortable use, Durable metal body with easy squeeze handle. Ideal for: Upholstery, insulation, crafting, and general home repairs.",
  },
  "65": {
    id: 65,
    image: productTablecloth,
    name: "Misaya Rectangle Vinyl Tablecloth – Green, 30\" × 72\"",
    price: "$15",
    category: "Home & Bath",
    isNew: true,
    description: "Keep your table protected and stylish with this Misaya Elastic Fitted Vinyl Tablecloth — perfect for indoor or outdoor use! Size: 30\" × 72\" (Fits standard 6-foot folding tables), Color: Green, 100% waterproof vinyl with soft flannel backing, Elastic edges for a snug fit, Waterproof and easy to clean, Ideal for picnics, camping, BBQs, and everyday use.",
  },
  "66": {
    id: 66,
    image: productDogBedCover,
    name: "SUNNYTEX Waterproof Dog Bed Cover / Pet Blanket – Furniture Protector",
    price: "$15",
    category: "Pet Supplies",
    isNew: true,
    description: "Keep your furniture clean and cozy with this SUNNYTEX Waterproof Pet Cover — ideal for dogs and cats. Protects your sofa, bed, or car seat from fur, dirt, and accidents! 100% waterproof & leakproof, Non-slip backing keeps it in place, Machine washable & durable, Perfect for couch, sofa, bed, or car seat, Comfortable for pets to rest or sleep on.",
  },
  "67": {
    id: 67,
    image: productSeatCushion,
    name: "3D Inflatable Seat Cushion – Portable Comfort Pad",
    price: "$20",
    category: "Accessories",
    isNew: true,
    description: "Travel, work, or relax in comfort with this 3D inflatable seat cushion — perfect for long flights, car rides, office chairs, camping, wheelchairs, or stadium seating. No pump required and comes with a convenient storage bag. 3D Inflatable Design for Pressure Relief, Portable & Lightweight with Storage Bag, Ideal for Airplane Travel, Car, Office, Camping, Wheelchair, or Stadium, Easy to Inflate & Deflate, No Pump Needed.",
  },
  "68": {
    id: 68,
    image: productLunchBox,
    name: "Lunch Box for Men & Women – Portable & Reusable",
    price: "$10",
    category: "Accessories",
    isNew: true,
    description: "Keep your meals fresh and easy to carry with this compact lunch bag — perfect for office, work, or picnics. Durable, reusable, and lightweight for everyday use. Compact & Portable Design, Reusable & Easy to Clean, Ideal for Office, Work, School, or Picnic, Durable Material, Color: Black.",
  },
  "69": {
    id: 69,
    image: productFirePitMat,
    name: "UNCO 36\" Round Fire Pit Mat – Fireproof & Portable",
    price: "$20",
    category: "Garden & Outdoor",
    isNew: true,
    description: "Protect your deck or patio with this 36-inch round fire pit mat — double-sided, fireproof, and perfect for outdoor grills or fire pits. Reusable, waterproof, and easy to clean for safe and convenient use. 36\" Round Fire Pit Mat, Double-Sided & Fireproof Design, 3-Layer Durable Construction, Waterproof & Easy to Clean, Ideal for Outdoor Grills, Decks, or Patios.",
  },
  "70": {
    id: 70,
    image: productToiletRug,
    name: "OLANLY Luxury U-Shaped Toilet Rug – Soft & Absorbent (Yellow)",
    price: "$15",
    category: "Home & Bath",
    isNew: true,
    description: "Upgrade your bathroom with this extra soft and plush U-shaped toilet rug. Made with absorbent microfiber and non-slip backing, it keeps your floor dry and comfortable. Machine washable for easy cleaning. U-Shaped Design for Toilet Base, Extra Soft & Absorbent Microfiber, Non-Slip Plush Shaggy Surface, Machine Washable & Quick Dry, Color: Yellow, Size: 24 x 20 inches.",
  },
  "71": {
    id: 71,
    image: productPantyhose,
    name: "Women's Fashion Pantyhose – Soft & Comfortable",
    price: "$8",
    category: "Accessories",
    isNew: true,
    description: "Essential everyday pantyhose designed for all-day comfort and style. Soft, lightweight, and perfect for any outfit. Soft & Comfortable Material, Perfect for Everyday Wear, Lightweight & Stretchy, Fashionable & Versatile, Color: Black (or assorted), Size: One Size Fits Most.",
  },
  "72": {
    id: 72,
    image: productBohoCurtainDetail,
    name: "Jinchan Boho Linen Curtains – Grey Farmhouse Style (84\")",
    price: "$25",
    category: "Home Decor",
    isNew: true,
    description: "Enhance your living room or bedroom with these elegant boho linen curtains. Featuring a geometric striped mudcloth pattern, they provide light filtering while adding a stylish touch to any space. Includes 2 panels with grommet tops for easy hanging. Boho & Farmhouse Style, Light Filtering Linen Material, Geometric Striped Mudcloth Pattern, Easy-to-Hang Grommet Top, Set of 2 Panels, Size: 84 inches length, Color: Grey on Beige.",
  },
};

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
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
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: quantity,
    });
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
