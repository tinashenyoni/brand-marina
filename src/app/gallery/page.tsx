"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ShoppingBag } from "lucide-react";

type Filter = "all" | "fashion" | "home";

const galleryItems = [
  {
    src: "/hero image 1.png",
    alt: "Elegant fashion collection — Brand Marina",
    category: "fashion",
    span: "tall",
  },
  {
    src: "/hero image 3.jpg",
    alt: "Modern living room styling — Brand Marina Home",
    category: "home",
    span: "normal",
  },
  {
    src: "/hero image 2.png",
    alt: "Fashion editorial — Brand Marina",
    category: "fashion",
    span: "normal",
  },
  {
    src: "/hero image 4.jpg",
    alt: "Interior design inspiration — Brand Marina Home",
    category: "home",
    span: "tall",
  },
  {
    src: "/hero image 1.png",
    alt: "Occasion wear — Brand Marina Fashion",
    category: "fashion",
    span: "normal",
  },
  {
    src: "/hero image 3.jpg",
    alt: "Home décor collection — Brand Marina Home",
    category: "home",
    span: "normal",
  },
  {
    src: "/hero image 2.png",
    alt: "Personal styling session — Brand Marina",
    category: "fashion",
    span: "tall",
  },
  {
    src: "/hero image 4.jpg",
    alt: "Statement furniture piece — Brand Marina Home",
    category: "home",
    span: "normal",
  },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-24 bg-emerald-deep overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero image 1.png"
            alt=""
            fill
            className="object-cover"
            loading="lazy"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brass-light font-medium text-xs tracking-[0.2em] uppercase mb-3">
            Gallery
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            The Brand Marina{" "}
            <span className="italic text-brass-light">Lookbook</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-base sm:text-lg">
            A curated glimpse into our collections — fashion that turns heads
            and homes that feel like a warm embrace.
          </p>
        </div>
      </section>

      {/* Filter + Gallery */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-12">
            {(
              [
                { key: "all", label: "All" },
                { key: "fashion", label: "Fashion" },
                { key: "home", label: "House & Home" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-6 py-2.5 rounded text-sm font-medium transition-all ${
                  filter === tab.key
                    ? "bg-emerald-deep text-white"
                    : "text-charcoal-light hover:bg-sand/50 border border-sand-dark/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 sm:columns-3 gap-3 sm:gap-4 space-y-3 sm:space-y-4">
            {filtered.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className="break-inside-avoid group relative rounded-lg overflow-hidden product-card img-hover-zoom"
              >
                <div
                  className={`relative ${
                    item.span === "tall" ? "aspect-[3/4]" : "aspect-square"
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Hover overlay */}
                  <div className="product-overlay absolute inset-0 bg-black/30 flex flex-col items-center justify-center p-4">
                    <span
                      className={`inline-block text-[11px] font-semibold px-2 py-0.5 rounded mb-3 ${
                        item.category === "fashion"
                          ? "bg-terracotta text-white"
                          : "bg-emerald-deep text-white"
                      }`}
                    >
                      {item.category === "fashion" ? "Fashion" : "Home"}
                    </span>
                    <p className="text-white text-sm mb-3 text-center">{item.alt}</p>
                    <a
                      href="https://wa.me/263772800883?text=Hi%20Brand%20Marina!%20I'm%20interested%20in%20this%20product."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-charcoal px-5 py-2.5 rounded text-sm font-semibold hover:bg-charcoal hover:text-white transition-colors"
                    >
                      <ShoppingBag size={14} />
                      Enquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-4">
            See More on Instagram
          </h2>
          <p className="text-charcoal-light mb-8 max-w-xl mx-auto">
            Follow @brand_marina1 for daily style inspiration, new arrivals,
            and behind-the-scenes moments.
          </p>
          <a
            href="https://instagram.com/brand_marina1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Follow @brand_marina1
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
