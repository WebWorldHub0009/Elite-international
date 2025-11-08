// src/data/servicesData.js
import img1 from "../assets/service/rice-semi.jpg"
import img2 from "../assets/service/basmati.jpg"
import img3 from "../assets/service/milled.jpg"
import img4 from "../assets/service/coffe.jpg"
import img5 from "../assets/service/chai.jpg"
import img6 from "../assets/service/ginger.avif"
import img7 from "../assets/service/saffron.avif"
import img8 from "../assets/service/meat.avif"
import img9 from "../assets/service/chicken.avif"
import img10 from "../assets/service/fruit.avif"
import img11 from "../assets/service/vegi.avif"
import img12 from "../assets/service/hardware.jpg"
import img13 from "../assets/service/home-decor.jpg"
import img14 from "../assets/service/garment.jpg"
import img15 from "../assets/service/turmeric.avif"

const servicesData = [
  {
    title: "Rice Semi Milled",
    route: "/services/rice-semi-milled",
    img: img1,
    subtitle: "Refined & Export-Grade",
    quote: "Perfect balance of nutrition and texture for everyday excellence.",
    overview:
 "    Our Semi-Milled Rice combines nutrition and refinement, offering an ideal balance of flavor and texture for everyday use. Each grain is partially milled to preserve essential nutrients while ensuring a soft, fluffy finish. At Elite International Trading Co., we maintain international export standards through precision milling, advanced sorting, and hygiene protocols. This product is ideal for global distribution, meeting the needs of consumers seeking health and taste in perfect harmony, while ensuring consistent quality, purity, and satisfaction worldwide.",
    whyUs:
      "Expert milling, consistent quality, and export-certified grains make our rice stand out globally.",
    features: [
      "Rich aroma and texture",
      "Preserves natural nutrients",
      "Certified export quality",
      "Ideal for versatile cooking",
      "Consistent grain size and purity",
    ],
    cta: "Explore Rice",
  },
  {
    title: "Glazed Basmati Rice",
    route: "/services/glazed-basmati-rice",
    img: img2,
    subtitle: "Aromatic & Luxurious Grain",
    quote: "Every grain tells a story of heritage and excellence.",
    overview:
      "Our Glazed Basmati Rice is a hallmark of premium quality, offering long, aromatic grains with a natural sheen and exquisite taste. Each batch is carefully polished to enhance its visual appeal while preserving authentic basmati aroma and flavor. Perfect for high-end restaurants, retail markets, and export packaging, this rice guarantees a luxurious dining experience. Elite International Trading Co. ensures every grain meets global food safety standards, providing quality that appeals to connoisseurs and international distributors alike.",
    whyUs:
      "Aromatic, long-grain perfection with a polished finish that meets international culinary standards.",
    features: [
      "Long-grain premium basmati",
      "Smooth glazing for visual appeal",
      "High export demand",
      "Rich fragrance and taste",
      "Ideal for global markets",
    ],
    cta: "View Basmati",
  },
  {
    title: "Wholly Milled Rice",
    route: "/services/wholly-milled-rice",
    img: img3,
    subtitle: "Fully Processed Excellence",
    quote: "Pure, refined, and processed to perfection.",
    overview:
      "Our Wholly Milled Rice is a symbol of complete refinement and premium quality. Thoroughly processed to remove husk and bran, it delivers a smooth texture, pristine color, and unmatched purity. With strict international quality certifications, each batch is processed under hygienic conditions to ensure consistent grain size and long shelf life. Ideal for export markets and large-scale retail packaging, our rice offers both aesthetic appeal and superior taste that satisfies global culinary and commercial demands.",
    whyUs:
      "Uniform milling, global food safety compliance, and superior purity for high-end export buyers.",
    features: [
      "Fully milled for smoothness",
      "High shelf life",
      "Ideal for export packaging",
      "Meets international standards",
      "Premium texture and color",
    ],
    cta: "Order Now",
  },
  {
    title: "Coffee",
    route: "/services/coffee",
    img: img4,
    subtitle: "Freshly Roasted Perfection",
    quote: "From farm to cup — pure excellence in every sip.",
    overview:
      "Our premium coffee collection captures the true essence of flavor, freshness, and craftsmanship. Sourced from sustainable farms, each bean undergoes expert roasting to preserve its aroma and body. Available in whole, ground, and custom blends, our coffee caters to diverse global markets. We maintain export-grade consistency, ensuring smooth delivery and freshness through eco-friendly packaging. At Elite International Trading Co., we bring together quality, sustainability, and authenticity to deliver coffee that defines luxury and satisfaction in every sip.",
    whyUs:
      "Sustainably sourced, expertly roasted, and globally certified for premium taste and quality.",
    features: [
      "Ethically sourced beans",
      "Custom roast levels",
      "Premium packaging for freshness",
      "Available in bulk and retail",
      "Export quality certified",
    ],
    cta: "Explore Coffee",
  },
  {
    title: "Chai Patti",
    route: "/services/chai-patti",
    img: img5,
    subtitle: "Rich Aroma & Authentic Taste",
    quote: "Brew happiness, one cup at a time.",
    overview:
      "Our Chai Patti blends heritage and flavor in every leaf. Carefully handpicked from the best tea estates, it undergoes hygienic processing to ensure strong aroma, rich color, and deep taste. Perfect for both local and international markets, our tea is available in loose and packaged forms with customizable options. Elite International Trading Co. guarantees quality that reflects India’s authentic tea legacy while meeting modern export demands. Each cup delivers warmth, energy, and an unforgettable sensory experience.",
    whyUs:
      "Rich in flavor, naturally sourced, and processed with care to preserve its authentic Indian essence.",
    features: [
      "Strong flavor & aroma",
      "Hygienically processed",
      "Sourced from top tea estates",
      "Multiple packaging options",
      "Export-grade quality",
    ],
    cta: "Buy Tea",
  },
  {
    title: "Ginger",
    route: "/services/ginger",
    img: img6,
    subtitle: "Pure & Organic Roots",
    quote: "Naturally grown, globally trusted.",
    overview:
      "Our premium organic Ginger is cultivated using sustainable farming techniques and processed with utmost precision to retain its natural oils, aroma, and potency. Perfect for culinary, medicinal, and industrial applications, it meets international export standards and purity benchmarks. We offer both fresh and dried forms with eco-friendly packaging that preserves freshness and extends shelf life. Elite International Trading Co. ensures consistent quality, natural taste, and high curative value, making our ginger a preferred choice in global markets.",
    whyUs:
      "Certified organic quality, high potency, and freshness that meet global import standards.",
    features: [
      "100% organic and natural",
      "Fresh and dried forms available",
      "Rich aroma and flavor",
      "Medicinal-grade quality",
      "Eco-friendly packaging",
    ],
    cta: "View Ginger",
  },
  {
    title: "Saffron",
    route: "/services/saffron",
    img: img7,
    subtitle: "Luxury in Every Thread",
    quote: "Handpicked saffron of unmatched purity and aroma.",
    overview:
      "Our Saffron embodies luxury and authenticity, handpicked from trusted farms known for their heritage cultivation. Each thread is carefully selected and naturally dried to retain its vibrant red hue, strong aroma, and unmatched purity. Used in gourmet cuisines, health supplements, and cosmetics, our saffron is a true mark of quality. Elite International Trading Co. ensures lab-tested purity and export-standard packaging, making it ideal for premium retailers, chefs, and distributors across international markets seeking excellence and trust..",
    whyUs:
      "Uncompromised quality, lab-tested purity, and handpicked excellence for luxury markets.",
    features: [
      "Premium-grade saffron threads",
      "Naturally dried & processed",
      "Rich aroma and color",
      "Culinary & medicinal use",
      "Export-certified packaging",
    ],
    cta: "Order Saffron",
  },
  {
    title: "Turmeric (Curcuma)",
    route: "/services/turmeric-curcuma-",
    img:img15,
    subtitle: "Golden Health & Flavor",
    quote: "Nature’s golden gift — vibrant and pure.",
    overview:
      "Our Turmeric (Curcuma longa) is a golden marvel cultivated organically under stringent quality conditions. Rich in curcumin, it delivers vibrant color, aroma, and powerful health benefits. Ideal for use in food, pharmaceuticals, and cosmetics, it meets all export certifications and global safety standards. Each batch is naturally dried and finely processed to preserve nutritional value. At Elite International Trading Co., we take pride in delivering turmeric that symbolizes purity, wellness, and excellence in every shipment.",
    whyUs:
      "High curcumin content and organic cultivation ensure unmatched purity and potency.",
    features: [
      "Rich color and aroma",
      "High curcumin concentration",
      "Organic certified farms",
      "Food & medicinal grade",
      "Global quality standards",
    ],
    cta: "Explore Turmeric",
  },
  {
    title: "Buffalo Frozen & Chilled Meat",
    route: "/services/buffalo-frozen-chilled-meat",
    img: img8,
    subtitle: "Hygienically Processed Protein",
    quote: "Freshness sealed, quality guaranteed.",
    overview:
      "Our Buffalo Frozen & Chilled Meat is processed in HALAL-certified facilities under strict hygiene and temperature-controlled environments. Each cut is vacuum-sealed to maintain freshness, tenderness, and quality throughout transit. Backed by robust cold-chain logistics, our meat reaches international destinations in prime condition. With certifications for global export, we ensure premium-grade safety, flavor, and nutritional value. Elite International Trading Co. delivers trust, quality, and reliability—making us a preferred choice among global meat importers and distributors.",
    whyUs:
      "Hygienic processing, HALAL certification, and global cold chain expertise ensure trust and quality.",
    features: [
      "HALAL certified",
      "Frozen & chilled variants",
      "Vacuum-sealed packaging",
      "Strict cold chain monitoring",
      "Export-approved facilities",
    ],
    cta: "View Meat",
  },
  {
    title: "Fresh Fruits",
    route: "/services/fresh-fruits",
    img:img10,
    subtitle: "Naturally Ripened & Export-Ready",
    quote: "Freshness that travels the world.",
    overview:
      "Our Fresh Fruits are carefully sourced from trusted orchards to ensure superior taste, nutrition, and freshness. Each fruit undergoes rigorous quality checks and is packed in export-grade materials to retain its natural flavor during transport. We maintain a sustainable supply chain supported by advanced cold storage and eco-friendly logistics. At Elite International Trading Co., we combine quality, freshness, and responsible sourcing to deliver fruits that meet the expectations of international retailers and health-conscious consumers alike.",
    whyUs:
      "Expert handling, freshness preservation, and sustainable sourcing for global markets.",
    features: [
      "Farm-fresh quality",
      "Eco-friendly packaging",
      "Wide variety of fruits",
      "Cold-chain logistics",
      "Export certifications",
    ],
    cta: "Explore Fruits",
  },
  {
    title: "Garments",
    route: "/services/garments",
    img: img14,
    subtitle: "Style Beyond Borders",
    quote: "Where craftsmanship meets global fashion.",
    overview:
      "Our Garment exports showcase craftsmanship, creativity, and quality tailored for global markets. From casual wear to corporate fashion, every piece is crafted with precision stitching, premium fabrics, and modern designs. We cater to international retail and wholesale buyers, ensuring timely delivery and export-ready packaging. With flexible customization and strict quality control, Elite International Trading Co. blends cultural artistry with global trends—offering garments that define sophistication, comfort, and elegance across diverse fashion markets worldwide.",
    whyUs:
      "Fashion-forward designs, premium fabrics, and unmatched export finishing quality.",
    features: [
      "High-quality fabric",
      "Modern and classic styles",
      "Export-ready packaging",
      "Custom labeling available",
      "Strict quality control",
    ],
    cta: "View Collection",
  },
  {
    title: "Fresh Vegetables",
    route: "/services/fresh-vegetables",
    img: img11,
    subtitle: "From Farm to Fork, Naturally Fresh",
    quote: "Nature’s best, packed with care.",
    overview:
      "Our Fresh Vegetables are sourced directly from certified farms using organic and sustainable cultivation methods. Each vegetable is handpicked at the right stage of maturity to ensure flavor, freshness, and nutritional value. Elite International Trading Co. employs advanced grading and hygienic packaging standards to maintain product integrity during storage and transport. We serve global clients who value freshness, health, and reliable supply chains for their food businesses.",
    whyUs:
      "Guaranteed freshness, eco-friendly supply chain, and consistent export quality.",
    features: [
      "Naturally grown vegetables",
      "Strict hygiene and quality checks",
      "Sustainable sourcing",
      "Export-grade packaging",
      "Cold-chain transportation",
    ],
    cta: "Explore Vegetables",
  },
  {
    title: "Whole Chicken",
    route: "/services/whole-chicken",
    img: img9,
    subtitle: "Premium Quality, Farm-Raised Poultry",
    quote: "Pure taste. Superior quality. Trusted worldwide.",
    overview:
      "Elite International Trading Co. offers farm-raised Whole Chicken that meets the highest global food safety and halal standards. Our poultry products are processed in certified facilities, maintaining strict hygiene protocols and cold storage chains to ensure freshness and tenderness. We cater to both domestic and international clients, delivering premium-quality chicken that retains its natural flavor and nutritional value from farm to table.",
    whyUs:
      "Strict hygiene, global halal standards, and superior meat quality for export.",
    features: [
      "Halal-certified poultry",
      "High-protein, fresh meat",
      "Cold storage preservation",
      "Export-compliant packaging",
      "Farm-to-table traceability",
    ],
    cta: "Explore Chicken",
  },
  {
    title: "Home Decoration Items",
    route: "/services/home-decoration-items",
    img: img13,
    subtitle: "Crafted with Elegance, Designed for Perfection",
    quote: "Beautify your space with global sophistication.",
    overview:
      "Our Home Decoration Items blend craftsmanship with modern aesthetics to create timeless pieces for global interiors. From handcrafted decor to contemporary accents, every item reflects creativity, cultural richness, and enduring quality. At Elite International Trading Co., we partner with skilled artisans and sustainable manufacturers to deliver export-quality decor that enhances every home and office environment.",
    whyUs:
      "Global-quality craftsmanship, sustainable materials, and stylish modern appeal.",
    features: [
      "Premium handcrafted decor",
      "Eco-conscious production",
      "Modern and traditional designs",
      "Custom export packaging",
      "Durable and aesthetic materials",
    ],
    cta: "Explore Decor",
  },
  {
    title: "Hardware",
    route: "/services/hardware",
    img: img12,
    subtitle: "Precision Built, Globally Trusted",
    quote: "Strong, reliable, and engineered to last.",
    overview:
      "Elite International Trading Co. offers a diverse range of high-quality Hardware products, including tools, fittings, and construction accessories. Our hardware solutions are crafted from durable materials and meet international strength and safety standards. We ensure every shipment is packaged securely and delivered efficiently, supporting industrial, commercial, and construction needs worldwide.",
    whyUs:
      "Durable materials, tested performance, and global export reliability.",
    features: [
      "Wide range of hardware tools",
      "Corrosion-resistant materials",
      "Industrial-grade quality",
      "Precision engineering",
      "Custom export packaging",
    ],
    cta: "Explore Hardware",
  },
];

export default servicesData;
