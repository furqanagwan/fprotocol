import React from "react";
import {
  Smile,
  Dumbbell,
  Wallet,
  Sparkles,
  Utensils,
  Activity,
  Milk,
  Pill,
  Zap,
} from "lucide-react";

export type ProductTier = "essential" | "advanced" | "optional";

export interface Product {
  id: number;
  category: string;
  subcategory: string;
  name: string;
  reason: string;
  frequency: string;
  sideEffect?: string;
  note?: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
  price: string;
  appleLink?: string;
  androidLink?: string;
  link?: string;
  hideButton?: boolean;
  buttonText?: string;
  tier?: ProductTier;
}

export interface Bundle {
  id: string;
  name: string;
  description: string;
  productIds: number[];
  icon: React.ReactNode;
  color: string;
  bg: string;
}

export const products: Product[] = [
  // Oral
  {
    id: 1,
    category: "Health",
    subcategory: "Oral",
    name: "Oral B iO10 Electric Toothbrush",
    reason:
      "Manual brushing fails to break up biofilm. Sonic vibrations (62k/min) force fluid between teeth.",
    frequency: "2x Daily (Morning & Night)",
    icon: <Smile className="w-6 h-6" />,
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-900/20",
    price: "$$$",
    link: "https://shop.oralb.co.uk/p/oral-b-io-10-black-electric-toothbrush-designed-by-braun/17370615/",
  },
  {
    id: 2,
    category: "Health",
    subcategory: "Oral",
    name: "Crest Pro-Health Advanced Gum Protection",
    reason:
      "Contains Stannous Fluoride which is more effective against gingivitis and plaque than sodium fluoride.",
    frequency: "2x Daily",
    icon: <Smile className="w-6 h-6" />,
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-900/20",
    price: "$",
    link: "https://crest.com/en-us/oral-care-products/toothpaste/pro-health-advanced-gum-protection/?srsltid=AfmBOooR5PxvqrVqueutPM-87Sdg60Buk44BNU_JFR3JhszyFqllSpEG",
  },
  {
    id: 3,
    category: "Health",
    subcategory: "Oral",
    name: "Crest Pro-Health Multi-Protection",
    reason:
      "Contains CPC (Cetylpyridinium Chloride) which is a proven antigingivitis and antiplaque agent.",
    frequency: "1x Daily (Before brushing)",
    icon: <Smile className="w-6 h-6" />,
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-900/20",
    price: "$",
    link: "https://crest.com/en-us/oral-care-products/mouthwash/pro-health-advanced-extra-whitening-mouthwash",
  },
  {
    id: 4,
    category: "Health",
    subcategory: "Oral",
    name: "Copper Tongue Scraper",
    reason:
      "90% of bad breath originates from the back of the tongue. Copper is naturally antimicrobial.",
    frequency: "1x Daily (First thing AM)",
    icon: <Smile className="w-6 h-6" />,
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-900/20",
    price: "$",
  },
  {
    id: 33,
    category: "Health",
    subcategory: "Oral",
    name: "TePe® Interdental Brush Original Mixed Pack",
    reason:
      "Cleans between teeth where regular brushes miss. Essential for gum health.",
    frequency: "Daily",
    icon: <Smile className="w-6 h-6" />,
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-900/20",
    price: "$",
    link: "https://www.tepe.com/uk/Products/interdental-brushes/tepe-interdental-brush-original-mixed-pack",
  },

  // FITNESS
  {
    id: 5,
    category: "Health",
    subcategory: "Fitness",
    name: "Insanity",
    reason:
      "High Intensity Interval Training improves VO2 max and metabolic rate more efficiently than steady state.",
    frequency: "Daily (30-60 mins)",
    icon: <Activity className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    price: "$$",
    link: "https://www.beachbodyondemand.com/programs/insanity/start-here?locale=en_GB",
    buttonText: "View Program",
  },
  {
    id: 6,
    category: "Health",
    subcategory: "Fitness",
    name: "P90X",
    reason:
      "Resistance training is the only natural way to maintain bone density and muscle mass as you age.",
    frequency: "4x Week (Split Routine)",
    icon: <Dumbbell className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    price: "$$",
    link: "https://www.beachbodyondemand.com/programs/p90x/start-here",
    buttonText: "View Program",
  },
  {
    id: 7,
    category: "Health",
    subcategory: "Supplements",
    name: "Optimum Nutrition Micronised Creatine Powder",
    reason:
      "The most researched supplement. Boosts ATP for strength and improves cognitive function.",
    frequency: "Daily (5g scoop)",
    icon: <Zap className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    price: "$",
    link: "https://www.optimumnutrition.com/en-gb/products/micronised-creatine-powder",
  },
  {
    id: 13,
    category: "Health",
    subcategory: "Supplements",
    name: "Multivitamin",
    reason:
      "Fills nutritional gaps in modern diets. Ensures baseline micronutrient sufficiency.",
    frequency: "Daily (Morning)",
    icon: <Pill className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    price: "$$",
  },
  {
    id: 28,
    category: "Health",
    subcategory: "Supplements",
    name: "Platinum Hydrowhey Hydrolysed Whey Protein Powder",
    reason: "Easy on stomach and pre-digested whey for faster absorption.",
    frequency: "Post-Workout",
    icon: <Milk className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    price: "$$",
    link: "https://www.optimumnutrition.com/en-gb/products/platinum-hydrowhey-hydrolysed-whey-protein-powder-eu?gad_campaignid=19632621789&gad_source=1&gbraid=0AAAAACY5u4s_OmIRcOjO-YINx4jBuanxB&gclid=CjwKCAiA0eTJBhBaEiwA-Pa-hWqUWOSSTLdYaW8kalFJc4-hppJRdVg32nnF6Kt3Yp9414AFEu3zpBoCV8AQAvD_BwE&gclsrc=aw.ds",
  },
  {
    id: 29,
    category: "Health",
    subcategory: "Supplements",
    name: "Gold Standard 100% Casein Protein Powder",
    reason: "Slow-digesting protein prevents muscle breakdown during sleep.",
    frequency: "Daily (Before Bed)",
    icon: <Milk className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    price: "$$",
    link: "https://www.optimumnutrition.com/en-gb/products/gold-standard-100-casein-protein-powder-eu",
  },
  {
    id: 30,
    category: "Health",
    subcategory: "Supplements",
    name: "Optimum Nutrition Electrolyte Powder",
    reason:
      "Replenishes minerals lost during training to maintain performance and hydration.",
    frequency: "Intra-Workout",
    icon: <Zap className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-900/20",
    price: "$",
    link: "https://www.optimumnutrition.com/en-gb/products/electrolyte-powder?_pos=1&_psq=Electro&_ss=e&_v=1.0",
  },

  // NUTRITION
  {
    id: 8,
    category: "Health",
    subcategory: "Nutrition",
    name: "MyFitnessPal",
    reason:
      "Large database for tracking calories. Essential for understanding portion sizes and macro composition.",
    frequency: "Daily (Every meal)",
    note: "Application",
    icon: <Utensils className="w-6 h-6" />,
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
    price: "Free/$$",
    appleLink:
      "https://apps.apple.com/us/app/myfitnesspal-calorie-counter/id341232718",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.myfitnesspal.android&rdid=com.myfitnesspal.android&pli=1",
  },
  {
    id: 22,
    category: "Health",
    subcategory: "Nutrition",
    name: "MacroFactor",
    reason:
      "Adherence-neutral calorie tracker that adapts to your metabolism dynamically.",
    frequency: "Daily (Every meal)",
    note: "Application",
    icon: <Utensils className="w-6 h-6" />,
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-900/20",
    price: "$$",
    appleLink:
      "https://apps.apple.com/us/app/macrofactor-macro-tracker/id1553503471",
    androidLink:
      "https://play.google.com/store/apps/details?id=com.sbs.diet&hl=en_GB",
  },

  // FINANCE
  {
    id: 9,
    category: "Wealth",
    subcategory: "Finance",
    name: "YNAB (You Need A Budget)",
    reason:
      "Shifts mindset from tracking past spending to allocating future money. Stops lifestyle creep.",
    frequency: "Weekly Reconciliation",
    icon: <Wallet className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    price: "$$/yr",
  },
  {
    id: 10,
    category: "Wealth",
    subcategory: "Finance",
    name: "S&P 500 ETF (VOO)",
    reason:
      "The math-based approach to wealth. Low expense ratio, historical compound growth.",
    frequency: "Monthly (Automated)",
    icon: <Wallet className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    price: "$$$",
    hideButton: true,
  },
  {
    id: 23,
    category: "Wealth",
    subcategory: "Finance",
    name: "High Yield Savings Account",
    reason: "Risk-free return. Inflation hedge for liquidity.",
    frequency: "Monthly (Automated)",
    note: "Liquid",
    icon: <Wallet className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    price: "Free",
    hideButton: true,
  },
  {
    id: 24,
    category: "Wealth",
    subcategory: "Finance",
    name: "Real Estate / Property",
    reason:
      "Appreciating hard asset. Provides leverage and potential cash flow.",
    frequency: "Long-term",
    note: "Asset",
    icon: <Wallet className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    price: "$$$$",
    hideButton: true,
  },
  {
    id: 31,
    category: "Wealth",
    subcategory: "Finance",
    name: "Workplace Pension",
    reason:
      "Contributed by the worker then either matched percentage or lower by the employer. Essential tax-efficient saving.",
    frequency: "Monthly (Automated)",
    note: "Matched",
    icon: <Wallet className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    price: "%",
    hideButton: true,
  },

  // LIFESTYLE - FASHION (Female)
  {
    id: 25,
    category: "Lifestyle",
    subcategory: "Fashion",
    name: "White Leather Sneakers (Common Projects)",
    reason:
      "Minimalist Italian-made sneakers. Versatile foundation for almost any outfit from jeans to dresses.",
    frequency: "Daily",
    note: "Essential",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    price: "$$$",
    link: "https://www.commonprojects.com/",
  },
  {
    id: 26,
    category: "Lifestyle",
    subcategory: "Fashion",
    name: "Tailored Blazer (Theory / Reiss)",
    reason:
      "A well-fitted blazer elevates any outfit. Choose neutral colors like black, navy, or camel.",
    frequency: "As needed",
    note: "Essential",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    price: "$$$",
    link: "https://www.theory.com/",
  },
  {
    id: 27,
    category: "Lifestyle",
    subcategory: "Fashion",
    name: "Cashmere Sweater (Everlane / Naadam)",
    reason:
      "Luxurious warmth that lasts for years. Essential for layering in cooler months.",
    frequency: "Seasonal",
    note: "Luxury",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    price: "$$",
    link: "https://www.everlane.com/",
  },
  {
    id: 37,
    category: "Lifestyle",
    subcategory: "Fashion",
    name: "Designer Tote Bag (Goyard / YSL)",
    reason:
      "A statement bag that functions as art. Goyard Saint Louis or YSL Shopping Tote are timeless investments.",
    frequency: "Daily",
    note: "Investment",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    price: "$$$$",
    link: "https://www.goyard.com/",
  },
  {
    id: 38,
    category: "Lifestyle",
    subcategory: "Fashion",
    name: "Silk Blouse (Equipment / Zimmermann)",
    reason:
      "Effortlessly elegant. Transitions from office to evening. Machine-washable silk options exist now.",
    frequency: "Weekly",
    note: "Elevated",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    price: "$$$",
    link: "https://www.equipmentfr.com/",
  },
  {
    id: 39,
    category: "Lifestyle",
    subcategory: "Fashion",
    name: "High-Waisted Denim (Agolde / Citizens of Humanity)",
    reason:
      "The perfect fitting jeans are life-changing. High-waisted styles are universally flattering.",
    frequency: "Daily",
    note: "Essential",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    price: "$$",
    link: "https://agolde.com/",
  },
  {
    id: 40,
    category: "Lifestyle",
    subcategory: "Fashion",
    name: "Heeled Boots (Gianvito Rossi / Stuart Weitzman)",
    reason:
      "Ankle boots with a block heel work for everything from dresses to jeans. Invest in quality leather.",
    frequency: "Seasonal",
    note: "Statement",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    price: "$$$",
    link: "https://www.stuartweitzman.com/",
  },
  {
    id: 41,
    category: "Lifestyle",
    subcategory: "Fashion",
    name: "Kith Women's Hoodie",
    reason:
      "Premium streetwear meets comfort. Limited drops and collaborations make each piece special.",
    frequency: "Casual",
    note: "Streetwear",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    price: "$$",
    link: "https://kith.com/collections/kith-women",
  },
  {
    id: 42,
    category: "Lifestyle",
    subcategory: "Fashion",
    name: "Gucci Horsebit Loafers",
    reason:
      "Iconic Italian craftsmanship. The horsebit detail is instantly recognizable. Classic investment.",
    frequency: "Daily",
    note: "Luxury",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    price: "$$$$",
    link: "https://www.gucci.com/",
  },
  {
    id: 43,
    category: "Lifestyle",
    subcategory: "Fashion",
    name: "Lululemon Define Jacket",
    reason:
      "The best athleisure-to-street transition piece. Flattering fit, technical fabric, endless versatility.",
    frequency: "Daily",
    note: "Athleisure",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    price: "$$",
    link: "https://shop.lululemon.com/",
  },
  {
    id: 44,
    category: "Lifestyle",
    subcategory: "Fashion",
    name: "Reformation Midi Dress",
    reason:
      "Sustainable, flattering, and Instagram-worthy. Their signature silhouettes suit all body types.",
    frequency: "Occasion",
    note: "Sustainable",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-pink-50 dark:bg-pink-900/20",
    price: "$$",
    link: "https://www.thereformation.com/",
  },

  // SKIN
  {
    id: 11,
    category: "Aesthetics",
    subcategory: "Skin",
    name: "Cerave PM Moisturizer",
    reason:
      "Contains Niacinamide to reduce redness. Oil-free, so it won't cause breakouts.",
    frequency: "2x Daily (AM/PM)",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$",
  },
  {
    id: 15,
    category: "Aesthetics",
    subcategory: "Skin",
    name: "Wellman Anti-Ageing Moisturiser",
    reason:
      "Specifically formulated for men's skin with Retinol and antioxidants to reduce wrinkles.",
    frequency: "Daily (PM)",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$",
    link: "https://www.vitabiotics.com/products/wellman-anti-ageing-moisturiser?srsltid=AfmBOoohqKUJvA6fupCxU_-OrWyvAS16Tr6eW1AdX7DlX0yknb31AXvp",
  },
  {
    id: 16,
    category: "Aesthetics",
    subcategory: "Skin",
    name: "SPF 50+ Sunscreen (La Roche-Posay)",
    reason:
      "UV radiation is responsible for 80% of visible skin aging. Daily protection is non-negotiable.",
    frequency: "Daily (AM)",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$",
  },

  // GROOMING (Female Hair Removal)
  {
    id: 12,
    category: "Aesthetics",
    subcategory: "Grooming",
    name: "Philips Lumea IPL 9900 Series",
    reason:
      "IPL (Intense Pulsed Light) targets melanin in hair follicles, providing long-term hair reduction. FDA-cleared for permanent hair reduction.",
    frequency: "Every 2 weeks initially, then monthly maintenance",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$$",
    link: "https://www.philips.co.uk/c-p/BRI958_00/lumea-ipl-9000-series-ipl-hair-removal-device",
  },

  // HAIR (Female Pattern Hair Loss)
  {
    id: 14,
    category: "Aesthetics",
    subcategory: "Hair",
    name: "Spironolactone (Aldactone)",
    reason:
      "Anti-androgen medication that blocks testosterone and DHT at the receptor level. First-line treatment for female pattern hair loss.",
    frequency: "Daily (Prescription)",
    sideEffect:
      "Can cause potassium elevation, breast tenderness, menstrual irregularities. Not safe during pregnancy. Consult a doctor.",
    note: "Hormonal",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$",
    hideButton: true,
  },
  {
    id: 35,
    category: "Aesthetics",
    subcategory: "Hair",
    name: "Derma Roller (0.5mm Microneedling)",
    reason:
      "Microneedling stimulates collagen and activates stem cells in hair follicles. Studies show 40% improvement in hair count when combined with Minoxidil.",
    frequency: "1x Weekly",
    sideEffect: "Temporary redness and scalp sensitivity for 24-48 hours.",
    note: "Stimulation",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$",
    link: "https://www.amazon.co.uk/dp/B0BZR4LQWQ",
  },
  {
    id: 36,
    category: "Aesthetics",
    subcategory: "Hair",
    name: "Low-Level Laser Therapy Cap (Theradome/iRestore)",
    reason:
      "FDA-cleared photobiomodulation device that stimulates hair follicles using red light (650nm). Increases ATP production in hair cells.",
    frequency: "Every other day, 20-30 min sessions",
    note: "Light Therapy",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$$",
    link: "https://www.theradome.com/",
  },
  {
    id: 17,
    category: "Aesthetics",
    subcategory: "Hair",
    name: "Rogaine (Minoxidil)",
    reason:
      "Vasodilator that extends the anagen growth phase of hair follicles. Works best in combination with 5AR inhibitors.",
    frequency: "2x Daily (Topical)",
    note: "Genetic",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$",
    hideButton: true,
  },
  {
    id: 19,
    category: "Aesthetics",
    subcategory: "Hair",
    name: "Pyrilutimide (KX-826)",
    reason:
      "Topical Androgen Receptor antagonist that prevents DHT binding in the scalp.",
    frequency: "1-2x Daily (Topical)",
    sideEffect: "Limited long-term safety data. Consult a doctor.",
    note: "Genetic",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$$",
    hideButton: true,
  },

  // ACNE / SKIN
  {
    id: 20,
    category: "Aesthetics",
    subcategory: "Skin",
    name: "Accutane / Roaccutane (Isotretinoin)",
    reason:
      "The only drug that permanently alters oil production and cures severe nodular acne.",
    frequency: "Daily (Prescription Course)",
    sideEffect:
      "Extreme dryness, potential mood changes, birth defects (teratogenic). Strict medical supervision required.",
    note: "Genetic",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$$",
    hideButton: true,
  },
  {
    id: 21,
    category: "Aesthetics",
    subcategory: "Skin",
    name: "Retin-A (Tretinoin)",
    reason:
      "Increases cell turnover to prevent pore clogging. Gold standard for acne and anti-aging.",
    frequency: "Daily (PM)",
    sideEffect: "Purging phase, dryness, sun sensitivity.",
    note: "Genetic",
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$",
    hideButton: true,
  },
  {
    id: 32,
    category: "Aesthetics",
    subcategory: "Teeth",
    name: "Crest 3D Whitestrips",
    reason:
      "Effective teeth whitening. Adjust levels based on tolerance, if sensitive use Crest 3DWhitestrips Sensitive.",
    frequency: "As needed",
    icon: <Smile className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-900/20",
    price: "$$",
    link: "https://crest.com/en-us/oral-care-products/3d-whitestrips-glamorous-white",
  },
];

export const mainCategories = [
  "All",
  "Health",
  "Wealth",
  "Aesthetics",
  "Lifestyle",
];

export const hierarchy: Record<string, string[]> = {
  Health: ["All", "Oral", "Fitness", "Nutrition", "Supplements"],
  Wealth: ["All", "Finance"],
  Aesthetics: ["All", "Grooming", "Hair", "Skin", "Teeth"],
  Lifestyle: ["All", "Fashion"],
};

// Protocol Bundles - Curated stacks for specific goals
export const bundles: Bundle[] = [
  {
    id: "oral-health",
    name: "Complete Oral Health Protocol",
    description:
      "Everything you need for optimal dental hygiene. Prevents cavities, gum disease, and bad breath.",
    productIds: [1, 2, 3, 4, 33],
    icon: <Smile className="w-6 h-6" />,
    color: "text-rose-500",
    bg: "bg-gradient-to-br from-rose-50 to-pink-100 dark:from-rose-900/20 dark:to-pink-900/20",
  },
  {
    id: "anti-aging",
    name: "Anti-Aging Skin Stack",
    description:
      "Science-backed products to slow visible aging. Protect, repair, and renew your skin daily.",
    productIds: [11, 15, 16, 21],
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-purple-500",
    bg: "bg-gradient-to-br from-purple-50 to-fuchsia-100 dark:from-purple-900/20 dark:to-fuchsia-900/20",
  },
  {
    id: "fitness-essentials",
    name: "Fitness Essentials",
    description:
      "The foundation for any training program. Build muscle, recover faster, and track progress.",
    productIds: [5, 6, 7, 28, 30],
    icon: <Dumbbell className="w-6 h-6" />,
    color: "text-orange-500",
    bg: "bg-gradient-to-br from-orange-50 to-amber-100 dark:from-orange-900/20 dark:to-amber-900/20",
  },
  {
    id: "wealth-building",
    name: "Wealth Building Fundamentals",
    description:
      "The proven path to financial independence. Budget, invest, and grow your net worth systematically.",
    productIds: [9, 10, 23, 31],
    icon: <Wallet className="w-6 h-6" />,
    color: "text-emerald-500",
    bg: "bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20",
  },
  {
    id: "beauty-essentials",
    name: "Beauty Essentials Stack",
    description:
      "Complete skincare routine from cleanser to sunscreen. Prevent aging and maintain glowing skin.",
    productIds: [11, 16, 21, 12],
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-pink-500",
    bg: "bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20",
  },
  {
    id: "capsule-wardrobe",
    name: "Capsule Wardrobe Foundation",
    description:
      "Investment pieces that mix and match endlessly. Build a timeless, versatile closet.",
    productIds: [25, 26, 27, 39, 42],
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-fuchsia-500",
    bg: "bg-gradient-to-br from-fuchsia-50 to-purple-100 dark:from-fuchsia-900/20 dark:to-purple-900/20",
  },
  {
    id: "hair-restoration",
    name: "Hair Restoration Protocol",
    description:
      "Comprehensive approach to addressing female pattern hair loss with proven treatments.",
    productIds: [14, 17, 35, 36],
    icon: <Sparkles className="w-6 h-6" />,
    color: "text-violet-500",
    bg: "bg-gradient-to-br from-violet-50 to-indigo-100 dark:from-violet-900/20 dark:to-indigo-900/20",
  },
];

// Tier assignments for key products (essential = must-have, advanced = optimization, optional = nice-to-have)
export const productTiers: Record<number, ProductTier> = {
  // Oral - essential basics
  1: "essential", // Electric toothbrush
  2: "essential", // Toothpaste
  3: "advanced", // Mouthwash
  4: "essential", // Tongue scraper
  33: "advanced", // Interdental brush

  // Fitness/Supplements
  5: "optional", // Insanity
  6: "optional", // P90X
  7: "essential", // Creatine
  13: "essential", // Multivitamin
  28: "advanced", // Hydrowhey
  29: "optional", // Casein
  30: "optional", // Electrolytes

  // Nutrition
  8: "essential", // MyFitnessPal
  22: "advanced", // MacroFactor

  // Finance
  9: "essential", // YNAB
  10: "essential", // S&P 500
  23: "essential", // HYSA
  24: "advanced", // Real Estate
  31: "essential", // Workplace pension

  // Skin
  11: "essential", // Cerave
  15: "advanced", // Wellman
  16: "essential", // Sunscreen
  20: "advanced", // Accutane
  21: "advanced", // Tretinoin

  // Grooming (Female)
  12: "essential", // Philips Lumea IPL

  // Hair (Female)
  14: "advanced", // Spironolactone
  17: "advanced", // Minoxidil
  19: "optional", // Pyrilutimide
  35: "essential", // Derma Roller
  36: "advanced", // LLLT Cap

  // Fashion
  25: "essential", // White Sneakers
  26: "essential", // Tailored Blazer
  27: "optional", // Cashmere Sweater
  37: "advanced", // Designer Tote
  38: "optional", // Silk Blouse
  39: "essential", // High-Waisted Denim
  40: "optional", // Heeled Boots
  41: "optional", // Kith Hoodie
  42: "advanced", // Gucci Loafers
  43: "essential", // Lululemon Define
  44: "optional", // Reformation Dress

  // Teeth
  32: "optional", // Whitestrips
};

// Helper to get tier for a product
export const getProductTier = (productId: number): ProductTier => {
  return productTiers[productId] || "optional";
};
