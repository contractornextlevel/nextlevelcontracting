// Centralized product catalog to keep product data in one place
// This prevents mismatches between list and detail pages.

// Image imports
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

export interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
  category: string;
  condition?: string;
  isNew?: boolean;
}

export const products: Product[] = [
  { id: 1, image: productBoots, name: "Steplite EasyGrip Safety Boots – Steel Toe (S4)", price: "$75", category: "Safety Footwear", condition: "Like New" },
  { id: 2, image: productLight, name: "Epic Lighting Coventry Pendant Light", price: "$40", category: "Lighting", condition: "Excellent" },
  { id: 3, image: productGloves, name: "Premium Leather Work Gloves", price: "$35", category: "Safety Gear", isNew: true },
  { id: 4, image: productDrill, name: "Professional Power Drill Set", price: "$120", category: "Power Tools", condition: "Like New" },
  { id: 5, image: productHelmet, name: "Premium Safety Hard Hat", price: "$45", category: "Safety Equipment", isNew: true },
  { id: 6, image: productWorklight, name: "LED Professional Work Light", price: "$55", category: "Lighting", isNew: true },
  { id: 7, image: productFootrest, name: "HUANUO Adjustable Footrest Under Desk", price: "$20", category: "Office Equipment", isNew: true },
  { id: 8, image: productKeurig, name: "Keurig K-Elite Single Serve Coffee Maker", price: "$120", category: "Appliances", isNew: true },
  { id: 9, image: productCommode, name: "Drive Medical Steel Folding Frame Commode", price: "$50", category: "Medical Equipment", isNew: true },
  { id: 10, image: productJeepStorage, name: "Center Console Hanging Storage Box for Jeep Wrangler", price: "$10", category: "Automotive Accessories", isNew: true },
  { id: 11, image: productEyewash, name: "CGOLDENWALL Portable Eye Wash Station", price: "$20", category: "Safety Equipment", isNew: true },
  { id: 12, image: productPendantLight, name: "Epic Lighting Coventry Pendant Light", price: "$30", category: "Lighting", isNew: true },
  { id: 13, image: productChandelier, name: "Epic Lighting Coventry Chandelier", price: "$50", category: "Lighting", isNew: true },
  { id: 14, image: productKodiakBoots, name: "Kodiak Women's Safety Boots – Size 7.5 US", price: "$60", category: "Safety Footwear", condition: "Excellent" },
  { id: 15, image: productIcHousing, name: "Lightolier 302MRIC7SPX IC Housing", price: "$60", category: "Lighting", isNew: true },
  { id: 16, image: productMassageGun, name: "Deep Tissue Fascia Relaxer – 30-Speed Muscle Massager", price: "$45", category: "Health & Wellness", isNew: true },
  { id: 17, image: productInverter, name: "Power Bright 12V 400W Inverter", price: "$20", category: "Electronics", isNew: true },
  { id: 18, image: productSunglasses, name: "Guess GU 6096 Sunglasses", price: "$45", category: "Accessories", condition: "Like New" },
  { id: 19, image: productAirConditioner, name: "Portable Air Conditioner 4-in-1 Mini Evaporative Cooler", price: "$25", category: "Home Appliances", isNew: true },
  { id: 20, image: productJvcHeadphones, name: "JVC HA-S36W Bluetooth Headphones", price: "$40", category: "Electronics", isNew: true },
  { id: 21, image: productGamingHeadset, name: "BINNUNE Wireless Gaming Headset", price: "$20", category: "Electronics", condition: "Great" },
  { id: 22, image: productPowerbank, name: "Philips Power Bank 10,000 mAh", price: "$20", category: "Electronics", isNew: true },
  { id: 23, image: productAirDuster, name: "CAGIWIRU Compressed Air Duster 4.0 – Cordless Electric Air Blower", price: "$20", category: "Electronics", isNew: true },
  { id: 24, image: productShowerCurtain, name: "AmazerBath Shower Curtain Liner – 72x72 Beige", price: "$12", category: "Home & Bath", isNew: true },
  { id: 25, image: productBlackoutCurtain, name: "H.VERSAILTEX Blackout Curtain – Storm Blue, 52\" W × 96\" L", price: "$20", category: "Home Decor", isNew: true },
  { id: 26, image: productDrainStopper, name: "Generic Bathroom Sink Drain Stopper – Pop-Up Hair Catcher", price: "$5", category: "Home & Bath", isNew: true },
  { id: 27, image: productWirelessCharger, name: "HaloLock™️ MINI Wireless Charger – Slim Magnetic", price: "$10", category: "Electronics", isNew: true },
  { id: 28, image: productChristmasDvd, name: "The Original Christmas Specials Collection DVD", price: "$10", category: "Entertainment", condition: "Like New" },
  { id: 29, image: productElfDoll, name: "10\" Elf Doll with a Book – Perfect for Kids 3-10", price: "$10", category: "Toys", isNew: true },
  { id: 30, image: productScreenProtector, name: "Peslv Magnetic Anti Blue Light Screen Protector – MacBook Pro 14\"", price: "$10", category: "Electronics", isNew: true },
  { id: 31, image: productFogLight, name: "KaiDengZhe 2PCS H3 LED Fog Light Bulbs – 6000K White", price: "$10", category: "Automotive", isNew: true },
  { id: 32, image: productValanceCurtain, name: "Feelyou Cute Christmas Valance Curtain – 1 Panel 52\"x12\"", price: "$8", category: "Home Decor", isNew: true },
  { id: 33, image: productVacuumFilters, name: "BuyParts 2 HEPA + 4 Foam Filters for Shark Vacuum", price: "$10", category: "Home Appliances", isNew: true },
  { id: 34, image: productCasterWheel, name: "Caster Wheel for Ridgid Wet Dry Shop Vac", price: "$10", category: "Tools & Hardware", isNew: true },
  { id: 35, image: productSunShade, name: "XHRING Windshield Sun Shade – Fits Kia Models", price: "$12", category: "Automotive", isNew: true },
  { id: 36, image: productBohoCurtain, name: "Lecloud Black Stall Boho Shower Curtain – 36\" W × 72\" L", price: "$10", category: "Home & Bath", isNew: true },
  { id: 37, image: productHoseConnector, name: "Yardworks Plastic Quick Connect Starter Set – 5pcs", price: "$7", category: "Garden & Outdoor", isNew: true },
  { id: 38, image: productPinkHeadset, name: "SIMGAL Gaming Headset with Mic – Pink", price: "$15", category: "Electronics", isNew: true },
  { id: 39, image: productMetalTreeStand, name: "Rocky Mountain Goods Metal Christmas Tree Stand – Red", price: "$20", category: "Holiday & Seasonal", isNew: true },
  { id: 40, image: productGreenTreeStand, name: "Jack Post 506-ST Christmas Tree Stand – Green Plastic, 6 Ft. Tree", price: "$20", category: "Holiday & Seasonal", isNew: true },
  { id: 41, image: productToaster, name: "OVENTE Electric 2-Slice Toaster – Black TP2210B", price: "$25", category: "Appliances", isNew: true },
  { id: 42, image: productCoolingMat, name: "Mora Pets Dog Cooling Mat – 65 × 50 CM / 25.5 x 19.5 inch", price: "$20", category: "Pet Supplies", isNew: true },
  { id: 43, image: productRugPad, name: "Rug Pad – Non-Slip Felt Rug Gripper 2.5 x 2 m", price: "$15", category: "Home Decor", isNew: true },
  { id: 44, image: productBucket, name: "3.5 Gallon White Bucket & Lid – Food Grade, BPA Free (4 Pack)", price: "$20", category: "Storage & Organization", isNew: true },
  { id: 45, image: productSlipcover, name: "TAOCOCO Recliner Loveseat Slipcover – 6 Pieces, Charcoal Grey", price: "$30", category: "Home Decor", isNew: true },
  { id: 46, image: productCarStorageBox, name: "Car Central Control Storage Box – Gear Storage Bin (2018-2021)", price: "$8", category: "Automotive Accessories", isNew: true },
  { id: 47, image: productColdTherapy, name: "Cold Therapy Machine – Ice Therapy for Knee", price: "$70", category: "Health & Wellness", isNew: true },
  { id: 48, image: productInsulatedBoxes, name: "6pcs Reusable Insulated Shipping Boxes – Aluminum Foil Liner", price: "$20", category: "Storage & Organization", isNew: true },
  { id: 49, image: productAerostarFilters, name: "Aerostar AC & Furnace Pleated Air Conditioner Filters – 20x20x1, MERV 8 (6 Pack)", price: "$50", category: "Home Appliances", isNew: true },
  { id: 50, image: productFauxFurRug, name: "Faux Fur Fluffy Rug – White, 1.9 × 4.9 Feet", price: "$25", category: "Home Decor", isNew: true },
  { id: 51, image: productGatorWheels, name: "Peg Perego Gator HPX Front Wheels – 2 Pack", price: "$20", category: "Automotive Accessories", isNew: true },
  { id: 52, image: productWindowTrim, name: "Savadicar 4-Piece Black Window Beltline Trim Cover – Ford F150 (2021-Present)", price: "$15", category: "Automotive Accessories", isNew: true },
  { id: 53, image: productCarpetProtector, name: "Uross Carpet Protector for Pets – 3.6FT, 2PCS", price: "$10", category: "Pet Supplies", isNew: true },
  { id: 54, image: productVicksHumidifier, name: "Vicks Mini Filter Free Cool Mist Humidifier – Small Room", price: "$10", category: "Home Appliances", isNew: true },
  { id: 55, image: productRegisterPaper, name: "Cash Register Paper Rolls – For STAR SP700 & POS Printers (50 Rolls)", price: "$20", category: "Office Equipment", isNew: true },
  { id: 56, image: productDrillBitSet, name: "Mastercraft Drill & Screwdriver Bit Set – 253 Pieces", price: "$50", category: "Power Tools", isNew: true },
  { id: 57, image: productCanvasDropcloth, name: "Everbilt Canvas Dropcloth – 3 ft. 9 in. x 14 ft. 9 in., Medium Duty", price: "$10", category: "Tools & Hardware", isNew: true },
  { id: 58, image: productSheetSander, name: "Mastercraft 2A Sheet Sander – Used / 1/3 Condition", price: "$20", category: "Power Tools", condition: "Used (1/3)" },
  { id: 59, image: productWallLaundryBasket, name: "Wall Laundry Basket Folding Laundry Hamper – White", price: "$20", category: "Storage & Organization", isNew: true },
  { id: 60, image: productCabinetPulls, name: "Franklin Brass P29618K-SN-B Satin Nickel 5-Inch Cabinet Pulls (10 Pack)", price: "$15", category: "Tools & Hardware", isNew: true },
  { id: 61, image: productWasherPump, name: "Trico 11-614 Spray Windshield Washer Pump (1 Pack)", price: "$15", category: "Automotive", isNew: true },
  { id: 62, image: productWaterSlide, name: "Inflatable Water Slide – Backyard Fun for Kids", price: "$25", category: "Toys", isNew: true },
  { id: 63, image: productPillowCovers, name: "MIULEE Decorative Pillow Covers Combo – Set of 3 (White + Beige)", price: "$25", category: "Home Decor", isNew: true },
  { id: 64, image: productStapler, name: "Arrow Fastener T50X Tac Mate Stapler – Grey", price: "$15", category: "Tools & Hardware", condition: "Like New" },
  { id: 65, image: productTablecloth, name: "Misaya Rectangle Vinyl Tablecloth – Green, 30\" × 72\"", price: "$15", category: "Home & Bath", isNew: true },
  { id: 66, image: productDogBedCover, name: "SUNNYTEX Waterproof Dog Bed Cover / Pet Blanket – Furniture Protector", price: "$15", category: "Pet Supplies", isNew: true },
  { id: 67, image: productSeatCushion, name: "3D Inflatable Seat Cushion – Portable Comfort Pad", price: "$20", category: "Accessories", isNew: true },
  { id: 68, image: productLunchBox, name: "Lunch Box for Men & Women – Portable & Reusable", price: "$10", category: "Accessories", isNew: true },
  { id: 69, image: productFirePitMat, name: "UNCO 36\" Round Fire Pit Mat – Fireproof & Portable", price: "$20", category: "Garden & Outdoor", isNew: true },
  { id: 70, image: productToiletRug, name: "OLANLY Luxury U-Shaped Toilet Rug – Soft & Absorbent (Yellow)", price: "$15", category: "Home & Bath", isNew: true },
  { id: 71, image: productPantyhose, name: "Women's Fashion Pantyhose – Soft & Comfortable", price: "$8", category: "Accessories", isNew: true },
  { id: 72, image: productBohoCurtainDetail, name: "Jinchan Boho Linen Curtains – Grey Farmhouse Style (84\")", price: "$25", category: "Home Decor", isNew: true },
];
