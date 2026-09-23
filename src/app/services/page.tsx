"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shirt,
  User,
  Baby,
  Sparkles,
  Lamp,
  Armchair,
  Image as ImageIcon,
  BedDouble,
  MessageCircle,
  Star,
  Truck,
  Shield,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
} from "lucide-react";

type Tab = "all" | "fashion" | "home";

const fashionCategories = [
  {
    id: "ladies",
    title: "Ladies Fashion",
    subtitle: "Dresses · Occasion Wear · Everyday",
    description:
      "Elegant dresses, occasion wear, everyday styling — from boardroom power looks to weekend elegance. Curated collections that make you feel extraordinary.",
    image: "/products/product clothes 1.jpg",
    gallery: [
      "/products/product clothes 2.jpg",
      "/products/product clothes 3.jpg",
      "/products/product clothes 4.jpg",
    ],
    icon: Shirt,
    whatsappMessage:
      "Hi Brand Marina! I'm interested in your Ladies Fashion collection.",
    stats: { items: "50+", rating: 4.8 },
  },
  {
    id: "menswear",
    title: "Menswear",
    subtitle: "Shirts · Trousers · Suits",
    description:
      "Sharp, modern, and effortlessly stylish. Clothing that commands respect without trying too hard. From casual to formal.",
    image: "/products/product clothes 5.jpg",
    gallery: [
      "/products/product clothes 6.jpg",
      "/products/product clothes 7.jpg",
      "/products/product clothes 8.jpg",
    ],
    icon: User,
    whatsappMessage:
      "Hi Brand Marina! I'm interested in your Menswear collection.",
    stats: { items: "30+", rating: 4.7 },
  },
  {
    id: "kids",
    title: "Kids Wear",
    subtitle: "Play Wear · Party · School",
    description:
      "Fun, durable, and adorable — because little ones deserve to look just as good as the grown-ups. Quality that lasts through adventures.",
    image: "/products/product clothes 9.jpeg",
    gallery: [
      "/products/product clothes 10.jpeg",
      "/products/product clothes 1.jpg",
      "/products/product clothes 2.jpg",
    ],
    icon: Baby,
    whatsappMessage:
      "Hi Brand Marina! I'm interested in your Kids Wear collection.",
    stats: { items: "25+", rating: 4.9 },
  },
  {
    id: "styling",
    title: "Personal Styling",
    subtitle: "By Marina Herself",
    description:
      "Marina herself will help you try four or five outfits and find the perfect look. It's not just shopping — it's a transformation that boosts your confidence.",
    image: "/products/product clothes 5.jpg",
    gallery: [
      "/products/product clothes 1.jpg",
      "/products/product clothes 3.jpg",
      "/products/product clothes 7.jpg",
    ],
    icon: Sparkles,
    whatsappMessage:
      "Hi Brand Marina! I'd like to book a personal styling session with Marina.",
    featured: true,
    stats: { items: "100%", rating: 5.0 },
  },
];

const homeCategories = [
  {
    id: "decor",
    title: "Home Décor",
    subtitle: "Vases · Wall Art · Ornaments",
    description:
      "Vases, ornaments, wall art — the finishing touches that turn a house into a home that tells your story. Unique pieces curated for elegance.",
    image: "/products/product feniture 3.jpg",
    gallery: [
      "/products/product feniture 4.jpg",
      "/products/product feniture 5.jpg",
      "/products/product feniture 6.jpg",
    ],
    icon: Lamp,
    whatsappMessage:
      "Hi Brand Marina! I'm interested in your Home Décor collection.",
    stats: { items: "40+", rating: 4.8 },
  },
  {
    id: "furniture",
    title: "Furniture",
    subtitle: "Sofas · Tables · Chairs",
    description:
      "Statement pieces and everyday essentials — beautifully crafted furniture that elevates any room. Quality craftsmanship meets modern design.",
    image: "/products/product sofa1.jpg",
    gallery: [
      "/products/product sofa 2.jpg",
      "/products/product sofa 3.jpg",
      "/products/product sofa 4.jpg",
    ],
    icon: Armchair,
    whatsappMessage:
      "Hi Brand Marina! I'm interested in your Furniture collection.",
    stats: { items: "35+", rating: 4.9 },
  },
  {
    id: "carpets",
    title: "Carpets & Rugs",
    subtitle: "Persian · Modern · Custom",
    description:
      "Anchor your space with texture and warmth. From bold patterns to subtle neutrals — find the perfect foundation for your room.",
    image: "/products/product feniture 7.jpg",
    gallery: [
      "/products/product feniture 8.jpg",
      "/products/product feniture 9.jpg",
      "/products/product feniture 10.jpg",
    ],
    icon: ImageIcon,
    whatsappMessage:
      "Hi Brand Marina! I'm interested in your Carpets & Rugs collection.",
    stats: { items: "20+", rating: 4.6 },
  },
  {
    id: "bedding",
    title: "Bedding & Soft Furnishings",
    subtitle: "Pillows · Throws · Duvets",
    description:
      "Pillows, throws, duvet sets — wrap yourself in luxury. Because how you sleep matters as much as how you dress. Premium quality fabrics.",
    image: "/products/product feniture 11.jpg",
    gallery: [
      "/products/product feniture 12.jpg",
      "/products/product table 1.jpg",
      "/products/product table 2.jpg",
    ],
    icon: BedDouble,
    whatsappMessage:
      "Hi Brand Marina! I'm interested in your Bedding & Soft Furnishings.",
    stats: { items: "30+", rating: 4.7 },
  },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every product curated with intention and care",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "On orders over $100 across all branches",
  },
  {
    icon: CheckCircle,
    title: "Expert Curation",
    description: "Handpicked by Marina and her team",
  },
  {
    icon: Clock,
    title: "9 Years Experience",
    description: "Serving Zimbabwe & Zambia since 2017",
  },
];

function ServicesContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState<Tab>("all");

  useEffect(() => {
    if (tabParam === "fashion" || tabParam === "home") {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const filteredFashion = activeTab === "home" ? [] : fashionCategories;
  const filteredHome = activeTab === "fashion" ? [] : homeCategories;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-emerald-deep overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/products/product clothes 1.jpg"
            alt=""
            fill
            className="object-cover"
            loading="lazy"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <p className="text-brass-light font-medium text-xs tracking-[0.2em] uppercase mb-3">
                What We Offer
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                Two Worlds, One{" "}
                <span className="italic text-brass-light">Beautiful</span>{" "}
                Vision
              </h1>
              <p className="text-white/70 max-w-lg text-base sm:text-lg mb-8">
                Explore our curated collections. From head-turning fashion to
                homes that feel like a warm embrace.
              </p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-lg">
                  <Star size={16} className="text-brass-light fill-brass-light" />
                  <span className="text-white text-xs sm:text-sm font-medium">4.8 Rating</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-lg">
                  <Truck size={16} className="text-brass-light" />
                  <span className="text-white text-xs sm:text-sm font-medium">Free Delivery</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 sm:px-4 py-2 rounded-lg">
                  <MapPin size={16} className="text-brass-light" />
                  <span className="text-white text-xs sm:text-sm font-medium">5 Branches</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:grid grid-cols-2 gap-3">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
                <Image
                  src="/products/product clothes 1.jpg"
                  alt="Fashion"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-emerald-deep/20" />
              </div>
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden mt-8">
                <Image
                  src="/products/product sofa1.jpg"
                  alt="Home"
                  fill
                  className="object-cover"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-emerald-deep/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 sm:top-18 z-30 bg-warm-white/98 backdrop-blur-md border-b border-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 py-4 overflow-x-auto scrollbar-hide">
            {(
              [
                { key: "all", label: "All Services", icon: Sparkles },
                { key: "fashion", label: "Fashion", icon: Shirt },
                { key: "home", label: "House & Home", icon: Lamp },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.key
                    ? "bg-emerald-deep text-white shadow-md"
                    : "text-charcoal-light hover:bg-sand/50 border border-gray-200"
                }`}
              >
                <tab.icon size={14} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3 bg-white p-3 sm:p-4 rounded-xl shadow-sm">
                <div className="bg-emerald-deep/10 p-2.5 rounded-lg">
                  <item.icon size={20} className="text-emerald-deep" />
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal text-sm">{item.title}</h4>
                  <p className="text-gray-500 text-xs">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Fashion */}
          {filteredFashion.length > 0 && (
            <div className="mb-20">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-10 gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-terracotta/10 p-2 rounded-lg">
                    <Shirt size={22} className="text-terracotta" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
                      Fashion Collection
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {fashionCategories.reduce((acc, cat) => acc + parseInt(cat.stats.items), 0)}+ products available
                    </p>
                  </div>
                </div>
                <Link
                  href="/shop?category=Ladies%20Fashion"
                  className="inline-flex items-center gap-2 text-emerald-deep font-semibold text-sm hover:text-terracotta transition-colors"
                >
                  Shop All <ArrowRight size={14} />
                </Link>
              </div>

              {/* Featured Personal Styling - Full Width */}
              {filteredFashion
                .filter((cat) => cat.featured)
                .map((cat) => (
                  <div
                    key={cat.id}
                    className="mb-8 relative rounded-2xl overflow-hidden bg-gradient-to-r from-emerald-deep to-emerald-700"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          <span className="bg-brass text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                            ⭐ Featured Service
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                          <cat.icon size={18} className="text-brass-light" />
                          <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                            {cat.title}
                          </h3>
                        </div>
                        <p className="text-brass-light text-sm font-medium mb-3">
                          {cat.subtitle}
                        </p>
                        <p className="text-white/70 text-sm mb-6 max-w-md leading-relaxed">
                          {cat.description}
                        </p>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center gap-1">
                            <Star size={14} className="text-brass-light fill-brass-light" />
                            <span className="text-white text-sm font-medium">{cat.stats.rating}</span>
                          </div>
                          <div className="w-px h-4 bg-white/30" />
                          <span className="text-white/70 text-sm">100% Satisfaction</span>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <a
                            href={`https://wa.me/263772800883?text=${encodeURIComponent(cat.whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-brass text-white text-sm font-semibold rounded-lg hover:bg-brass-light hover:text-charcoal transition-all"
                          >
                            <MessageCircle size={16} />
                            Book Session
                          </a>
                          <a
                            href="/locations"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors"
                          >
                            Visit Branch
                            <ArrowRight size={14} />
                          </a>
                        </div>
                      </div>
                      <div className="relative h-48 sm:h-64 lg:h-auto">
                        <Image
                          src={cat.image}
                          alt={cat.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/50 to-transparent" />
                      </div>
                    </div>
                  </div>
                ))}

              {/* Other Fashion Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {filteredFashion
                  .filter((cat) => !cat.featured)
                  .map((cat) => (
                    <div
                      key={cat.id}
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={cat.image}
                          alt={cat.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-semibold text-emerald-deep">
                            {cat.stats.items} items
                          </div>
                        </div>
                        {/* Gallery Preview */}
                        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {cat.gallery.slice(0, 3).map((img, i) => (
                            <div key={i} className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/50">
                              <Image
                                src={img}
                                alt=""
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <cat.icon size={16} className="text-terracotta" />
                          <h3 className="font-display text-lg font-bold text-charcoal">
                            {cat.title}
                          </h3>
                        </div>
                        <p className="text-terracotta text-xs font-medium mb-2">
                          {cat.subtitle}
                        </p>
                        <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
                          {cat.description}
                        </p>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            <Star size={12} className="text-amber-400 fill-amber-400" />
                            <span className="text-sm text-gray-600">{cat.stats.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Truck size={12} className="text-emerald-deep" />
                            <span className="text-xs text-gray-500">Free delivery</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={`https://wa.me/263772800883?text=${encodeURIComponent(cat.whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-whatsapp text-white text-sm font-medium rounded-lg hover:bg-whatsapp/90 transition-colors"
                          >
                            <MessageCircle size={14} />
                            Enquire
                          </a>
                          <Link
                            href={`/shop?category=${encodeURIComponent(cat.title)}`}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-charcoal text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            View Items
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* House & Home */}
          {filteredHome.length > 0 && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-10 gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-emerald-deep/10 p-2 rounded-lg">
                    <Lamp size={22} className="text-emerald-deep" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-charcoal">
                      House & Home Collection
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      {homeCategories.reduce((acc, cat) => acc + parseInt(cat.stats.items), 0)}+ products available
                    </p>
                  </div>
                </div>
                <Link
                  href="/shop?category=House%20%26%20Home"
                  className="inline-flex items-center gap-2 text-emerald-deep font-semibold text-sm hover:text-terracotta transition-colors"
                >
                  Shop All <ArrowRight size={14} />
                </Link>
              </div>

              {/* Featured Furniture - Full Width */}
              <div className="mb-8 relative rounded-2xl overflow-hidden bg-gradient-to-r from-charcoal to-gray-800">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-48 sm:h-64 lg:h-auto order-2 lg:order-1">
                    <Image
                      src="/products/product sofa1.jpg"
                      alt="Premium Furniture"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-charcoal/50 to-transparent" />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                    <span className="bg-brass text-white text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full inline-block w-fit mb-3 sm:mb-4">
                      ⭐ Premium Collection
                    </span>
                    <div className="flex items-center gap-2 mb-3">
                      <Armchair size={18} className="text-brass-light" />
                      <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white">
                        Furniture
                      </h3>
                    </div>
                    <p className="text-brass-light text-sm font-medium mb-3">
                      Sofas · Tables · Chairs · Cabinets
                    </p>
                    <p className="text-white/70 text-sm mb-6 max-w-md leading-relaxed">
                      Statement pieces and everyday essentials — beautifully crafted furniture
                      that elevates any room. Quality craftsmanship meets modern design.
                    </p>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="text-brass-light fill-brass-light" />
                        <span className="text-white text-sm font-medium">4.9</span>
                      </div>
                      <div className="w-px h-4 bg-white/30" />
                      <span className="text-white/70 text-sm">35+ Items</span>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="https://wa.me/263772800883?text=Hi%20Brand%20Marina!%20I'm%20interested%20in%20your%20Furniture%20collection."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brass text-white text-sm font-semibold rounded-lg hover:bg-brass-light hover:text-charcoal transition-all"
                      >
                        <MessageCircle size={16} />
                        Enquire Now
                      </a>
                      <Link
                        href="/shop?category=House%20%26%20Home"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-colors"
                      >
                        View Collection
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Home Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                {filteredHome
                  .filter((cat) => cat.id !== "furniture")
                  .map((cat) => (
                    <div
                      key={cat.id}
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={cat.image}
                          alt={cat.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-semibold text-emerald-deep">
                            {cat.stats.items} items
                          </div>
                        </div>
                        {/* Gallery Preview */}
                        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {cat.gallery.slice(0, 3).map((img, i) => (
                            <div key={i} className="w-12 h-12 rounded-lg overflow-hidden border-2 border-white/50">
                              <Image
                                src={img}
                                alt=""
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <cat.icon size={16} className="text-emerald-deep" />
                          <h3 className="font-display text-lg font-bold text-charcoal">
                            {cat.title}
                          </h3>
                        </div>
                        <p className="text-emerald-deep text-xs font-medium mb-2">
                          {cat.subtitle}
                        </p>
                        <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
                          {cat.description}
                        </p>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1">
                            <Star size={12} className="text-amber-400 fill-amber-400" />
                            <span className="text-sm text-gray-600">{cat.stats.rating}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Truck size={12} className="text-emerald-deep" />
                            <span className="text-xs text-gray-500">Free delivery</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <a
                            href={`https://wa.me/263772800883?text=${encodeURIComponent(cat.whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-whatsapp text-white text-sm font-medium rounded-lg hover:bg-whatsapp/90 transition-colors"
                          >
                            <MessageCircle size={14} />
                            Enquire
                          </a>
                          <Link
                            href={`/shop?category=${encodeURIComponent(cat.title)}`}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-charcoal text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors"
                          >
                            View Items
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-deep relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep via-emerald-deep/95 to-emerald-700/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles size={32} className="mx-auto mb-6 text-brass-light" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Not sure where to start?
          </h2>
          <p className="text-white/70 mb-10 max-w-xl mx-auto text-lg">
            WhatsApp us and we&apos;ll guide you to the perfect product. Or visit
            any of our five branches for the full Brand Marina experience.
          </p>            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/263772800883?text=Hi%20Brand%20Marina!%20I'd%20like%20help%20finding%20the%20right%20product."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-whatsapp text-white font-semibold rounded-lg hover:bg-whatsapp/90 transition-colors"
            >
              <MessageCircle size={18} />
              Chat with Us
            </a>
            <a
              href="tel:+263772800883"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              <Phone size={18} />
              Call Us
            </a>
            <Link
              href="/locations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Find a Branch
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-warm-white" />}>
      <ServicesContent />
    </Suspense>
  );
}
