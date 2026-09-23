import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Award,
  ArrowRight,
  Star,
  ShoppingBag,
  Sparkles,
  Truck,
  Shield,
  Heart,
} from "lucide-react";
import { allProducts } from "@/data/products";

const heroImages = [
  "/hero image 1.png",
  "/hero image 2.png",
  "/hero image 3.jpg",
  "/hero image 4.jpg",
];

const featuredProducts = allProducts.slice(0, 8);

const categories = [
  {
    title: "Ladies Fashion",
    description: "Elegant dresses, occasion wear & everyday styling",
    image: "/products/product clothes 1.jpg",
    href: "/shop?category=Ladies%20Fashion",
  },
  {
    title: "House & Home",
    description: "Sofas, furniture & soft furnishings",
    image: "/products/product sofa1.jpg",
    href: "/shop?category=House%20%26%20Home",
  },
  {
    title: "Home Décor",
    description: "Tables, shelves & decorative pieces",
    image: "/products/product feniture 3.jpg",
    href: "/shop?category=Home%20Décor",
  },
  {
    title: "Accessories",
    description: "Bags, jewellery & finishing touches",
    image: "/products/product1.jpg",
    href: "/shop?category=Accessories",
  },
];

const branches = [
  { name: "Town Branch", city: "Harare", type: "Fashion & Home" },
  { name: "Westgate Mall", city: "Harare", type: "Fashion & Home" },
  { name: "Borrowdale", city: "Harare", type: "Fashion & Home" },
  { name: "East Park Mall", city: "Lusaka", type: "House & Home" },
  { name: "East Park Mall", city: "Lusaka", type: "Fashion" },
];

const features = [
  {
    icon: Truck,
    title: "Personal Shopping",
    desc: "Marina herself helps you find the perfect look",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    desc: "Every product curated with intention",
  },
  {
    icon: Heart,
    title: "5 Branches",
    desc: "Across Zimbabwe & Zambia",
  },
  {
    icon: Sparkles,
    title: "10+ Awards",
    desc: "Industry recognised excellence",
  },
];

export const metadata: Metadata = {
  title: "Brand Marina — Fashion & Homeware | Harare & Lusaka",
  description:
    "Discover curated fashion and homeware collections across Zimbabwe and Zambia. Ladies fashion, menswear, kids wear, home décor, furniture & personal styling.",
};

export default function HomePage() {
  return (
    <>
      {/* ============ HERO SLIDESHOW ============ */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-emerald-deep">
        <div className="hero-slideshow">
          {heroImages.map((img, i) => (
            <div key={i} className="hero-slide">
              <Image
                src={img}
                alt={`Brand Marina collection ${i + 1}`}
                fill
                className="object-cover hero-img"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-[1]" />

        <div className="relative z-[2] h-full flex items-center pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-lg">
              <p className="text-brass-light font-medium text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-3 sm:mb-4">
                Fashion &amp; Homeware · Zimbabwe &amp; Zambia
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] mb-4 sm:mb-6">
                Elevate Your
                <br />
                <span className="italic text-brass-light">Everyday Style</span>
              </h1>
              <p className="text-white/70 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-md">
                From head-turning fashion to homes that feel like a warm
                embrace. Discover curated collections across two countries.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/shop" className="btn-primary">
                  Shop Now
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/services"
                  className="btn-outline border-white/30 text-white hover:bg-white hover:text-charcoal"
                >
                  Explore Services
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-[2]">
          {heroImages.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-white" : "bg-white/30"
              } pulse-dot`}
            />
          ))}
        </div>
      </section>

      {/* ============ FOUNDER FEATURE ============ */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <Image
                  src="/brand marina owner .png"
                  alt="Marina Timburwa, founder of Brand Marina"
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-5 -right-5 bg-emerald-deep text-white px-6 py-4 rounded-lg shadow-xl">
                <div className="flex items-center gap-2 mb-1">
                  <Award size={16} className="text-brass-light" />
                  <span className="font-display font-bold text-sm">
                    10+ Awards
                  </span>
                </div>
                <p className="text-white/60 text-xs">Industry Recognised</p>
              </div>
            </div>
            <div>
              <p className="text-terracotta font-medium text-xs tracking-[0.2em] uppercase mb-3">
                Meet the Founder
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
                The Dream That
                <br />
                <span className="italic text-emerald-deep">
                  Refused to Die
                </span>
              </h2>
              <p className="text-charcoal-light leading-relaxed mb-4">
                Marina Timburwa started Brand Marina from the boot of her car
                in Mutare — selling beautiful clothes to women who deserved to
                feel extraordinary. After a brief pause, she relaunched in Harare
                in 2017 with the same fire that started it all.
              </p>
              <p className="text-charcoal-light leading-relaxed mb-8">
                Nine years and five branches later, that fire hasn&apos;t dimmed.
                It&apos;s grown — into Zambia, into homes, into the lives of
                thousands of women who walk into Brand Marina and walk out
                transformed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="btn-terracotta">
                  Read Our Story
                  <ArrowRight size={16} />
                </Link>
                <Link href="/shop" className="btn-outline">
                  Browse Collections
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURES STRIP ============ */}
      <section className="border-b border-sand/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-sand/60">
            {features.map((f, i) => (
              <div key={i} className="py-6 sm:py-8 px-4 sm:px-6 text-center">
                <f.icon size={24} className="mx-auto mb-3 text-terracotta" />
                <h4 className="font-display font-semibold text-charcoal text-sm mb-1">
                  {f.title}
                </h4>
                <p className="text-charcoal-light text-xs">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SHOP BY CATEGORY ============ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-terracotta font-medium text-xs tracking-[0.2em] uppercase mb-3">
                Shop by Category
              </p>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal">
                Discover Our Collections
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden sm:inline-flex items-center gap-2 text-emerald-deep font-semibold text-sm hover:text-terracotta transition-colors group"
            >
              View All Products
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {categories.map((cat, i) => (
              <Link
                key={i}
                href={cat.href}
                className="group relative block aspect-[4/5] rounded-xl overflow-hidden product-card"
              >
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-bold text-white mb-1">
                    {cat.title}
                  </h3>
                  <p className="text-white/60 text-xs mb-3">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-brass-light text-sm font-medium group-hover:gap-3 transition-all">
                    Shop Now <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-emerald-deep font-semibold text-sm"
            >
              View All Products
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FEATURED PRODUCTS ============ */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-terracotta font-medium text-xs tracking-[0.2em] uppercase mb-3">
                Featured
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
                Trending Now
              </h2>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-emerald-deep font-semibold text-sm hover:text-terracotta transition-colors group"
            >
              View All
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              >
                <div className="relative aspect-square overflow-hidden bg-white p-3">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {product.badge && (
                    <span
                      className={`absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold ${
                        product.badge === "New"
                          ? "bg-emerald-600 text-white"
                          : product.badge === "Sale"
                          ? "bg-red-500 text-white"
                          : "bg-amber-500 text-white"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-3">
                  <p className="text-[10px] text-emerald-deep font-semibold uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-display font-semibold text-charcoal text-sm mb-2 line-clamp-2 group-hover:text-emerald-deep transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={10}
                          className={
                            i < Math.floor(product.rating)
                              ? "text-amber-400 fill-amber-400"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <span className="text-[10px] text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-charcoal text-base">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-gray-400 text-xs line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <a
                    href={`https://wa.me/263772800883?text=${encodeURIComponent(
                      product.whatsapp
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-emerald-deep text-white py-2.5 rounded-lg text-sm font-semibold hover:bg-emerald-deep/90 transition-colors"
                  >
                    <ShoppingBag size={14} />
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-emerald-deep text-white font-semibold text-sm px-8 py-3 rounded-lg hover:bg-emerald-deep/90 transition-colors"
            >
              View All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ PERSONAL STYLING CTA ============ */}
      <section className="relative py-24 sm:py-32 overflow-hidden bg-emerald-deep">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep via-emerald-deep/95 to-emerald-700/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles size={32} className="mx-auto mb-6 text-brass-light" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Personal Styling
            <br />
            <span className="italic text-brass-light">
              By Marina Herself
            </span>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Marina will help you try four or five outfits, find the perfect fit,
            and walk out feeling like the best version of yourself. This
            isn&apos;t just shopping — it&apos;s a transformation.
          </p>
          <a
            href="https://wa.me/263772800883?text=Hi%20Brand%20Marina!%20I'd%20like%20to%20book%20a%20personal%20styling%20session."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-brass hover:bg-brass-light hover:text-charcoal text-white"
          >
            Book a Session
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* ============ LOCATIONS ============ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-terracotta font-medium text-xs tracking-[0.2em] uppercase mb-3">
              Find Us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-3">
              Visit a Branch
            </h2>
            <div className="section-divider mt-4" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {branches.map((branch, i) => (
              <Link
                key={i}
                href="/locations"
                className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all text-center group card-hover border border-gray-100"
              >
                <MapPin
                  size={18}
                  className="mx-auto mb-2 text-terracotta group-hover:scale-110 transition-transform"
                />
                <h4 className="font-display font-semibold text-charcoal text-sm mb-1">
                  {branch.name}
                </h4>
                <p className="text-charcoal-light text-xs mb-2">
                  {branch.city}
                </p>
                <span className="inline-block text-[10px] font-medium text-emerald-deep bg-emerald-deep/5 px-2 py-0.5 rounded">
                  {branch.type}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-charcoal font-semibold text-sm hover:text-terracotta transition-colors group"
            >
              View All Locations & Maps
              <ArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ AWARDS BAR ============ */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <Award size={28} className="text-brass" />
              <div>
                <p className="text-white font-display font-semibold text-lg">
                  10+ Industry Awards
                </p>
                <p className="text-white/50 text-xs">
                  Recognised excellence
                </p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <div className="flex items-center gap-3">
              <Star size={28} className="text-brass" fill="currentColor" />
              <div>
                <p className="text-white font-display font-semibold text-lg">
                  Outstanding Woman in Fashion
                </p>
                <p className="text-white/50 text-xs">
                  Diamond Category Winner
                </p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/20" />
            <div className="flex items-center gap-3">
              <ShoppingBag size={28} className="text-brass" />
              <div>
                <p className="text-white font-display font-semibold text-lg">
                  9 Years Strong
                </p>
                <p className="text-white/50 text-xs">
                  Since 2017 · Still growing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INSTAGRAM FEED ============ */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-terracotta font-medium text-xs tracking-[0.2em] uppercase mb-3">
              @brand_marina1
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-3">
              Follow the Journey
            </h2>
            <div className="section-divider mt-4" />
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3">
            {heroImages.slice(0, 6).map((img, i) => (
              <a
                key={i}
                href="https://instagram.com/brand_marina1"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square rounded-lg overflow-hidden img-hover-zoom"
              >
                <Image
                  src={img}
                  alt={`Brand Marina Instagram post ${i + 1}`}
                  fill
                  className="object-cover"
                  loading="lazy"
                  sizes="(max-width: 768px) 33vw, 16vw"
                />
                <div className="absolute inset-0 bg-emerald-deep/0 group-hover:bg-emerald-deep/40 transition-all duration-300 flex items-center justify-center">
                  <ShoppingBag
                    size={20}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://instagram.com/brand_marina1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Follow @brand_marina1
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Ready to Transform Your Style?
          </h2>
          <p className="text-charcoal-light mb-10 max-w-xl mx-auto">
            Chat with us on WhatsApp or visit any of our five branches for the
            full Brand Marina experience.
          </p>            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href="https://wa.me/263772800883?text=Hi%20Brand%20Marina!%20I'd%20like%20to%20enquire%20about%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-whatsapp hover:bg-whatsapp/90"
            >
              Chat on WhatsApp
              <ArrowRight size={16} />
            </a>
            <Link href="/shop" className="btn-outline">
              Browse All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
