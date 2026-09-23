"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Star,
  Heart,
  Truck,
  Filter,
  Percent,
} from "lucide-react";
import { allProducts, shopCategories, categoryCards } from "@/data/products";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [wishlist, setWishlist] = useState<number[]>([]);

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-8 sm:pt-32 sm:pb-10 bg-emerald-deep overflow-hidden">
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
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
          <p className="text-brass-light font-medium text-xs tracking-[0.2em] uppercase mb-2">
            Brand Marina Store
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2">
            Shop Our <span className="italic text-brass-light">Collections</span>
          </h1>
          <p className="text-white/70 max-w-xl text-sm">
            Browse 36+ curated products across fashion, home & accessories.
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white border-b border-gray-200 py-3 sticky top-16 sm:top-18 z-30">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">              <div className="flex gap-2 sm:gap-3 items-center">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search Brand Marina products..."
                className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-deep/20 focus:bg-white transition-all"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2.5 bg-gray-100 rounded-lg text-sm focus:outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>              <button className="flex items-center gap-2 px-3 sm:px-4 py-2.5 bg-emerald-deep text-white rounded-lg text-sm font-medium hover:bg-emerald-deep/90 transition-colors">
              <Filter size={16} />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 bg-gray-50 min-h-screen">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex gap-6">
            {/* Left Sidebar - Categories */}
            <div className="hidden lg:block w-56 flex-shrink-0">
              <div className="bg-white rounded-lg p-4 sticky top-36 shadow-sm">
                <h3 className="font-bold text-charcoal text-sm mb-3 pb-2 border-b border-gray-200">
                  Shop by Category
                </h3>
                <div className="space-y-1">
                  {shopCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                        selectedCategory === cat
                          ? "bg-emerald-deep text-white font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Price Range */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-bold text-charcoal text-sm mb-3">
                    Price Range
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        className="text-emerald-deep accent-emerald-deep"
                        defaultChecked
                      />
                      All Prices
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        className="text-emerald-deep accent-emerald-deep"
                      />
                      Under $50
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        className="text-emerald-deep accent-emerald-deep"
                      />
                      $50 - $100
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        className="text-emerald-deep accent-emerald-deep"
                      />
                      $100 - $200
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        className="text-emerald-deep accent-emerald-deep"
                      />
                      $200+
                    </label>
                  </div>
                </div>

                {/* Customer Rating */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-bold text-charcoal text-sm mb-3">
                    Customer Rating
                  </h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        className="accent-emerald-deep"
                        defaultChecked
                      />
                      All Ratings
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        className="accent-emerald-deep"
                      />
                      <span className="flex text-amber-400 text-xs">
                        ★★★★★
                      </span>
                    </label>
                    <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        className="accent-emerald-deep"
                      />
                      <span className="flex text-amber-400 text-xs">
                        ★★★★
                      </span>
                      <span className="text-gray-300 text-xs">★</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Category Cards Row */}
              <div className="mb-6">
                <h2 className="font-bold text-charcoal text-lg mb-4">
                  Shop by Category
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                  {categoryCards.map((cat, i) => (
                    <Link
                      key={i}
                      href={cat.href}
                      className="group bg-white rounded-lg p-3 hover:shadow-md transition-all border border-gray-100"
                    >
                      <div className="relative aspect-[4/3] rounded overflow-hidden mb-2">
                        <Image
                          src={cat.image}
                          alt={cat.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        />
                      </div>
                      <h3 className="font-semibold text-charcoal text-sm text-center group-hover:text-emerald-deep">
                        {cat.title}
                      </h3>
                      <p className="text-gray-500 text-xs text-center">
                        {cat.count} items
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Flash Deals Banner */}
              <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-lg p-4 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Percent size={20} className="text-white" />
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      Deals of the Day
                    </h3>
                    <p className="text-white/80 text-xs">
                      Up to 30% off selected items
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  <span className="bg-white text-red-600 font-bold px-2 py-1 rounded text-sm">
                    02
                  </span>
                  <span className="text-white/60">:</span>
                  <span className="bg-white text-red-600 font-bold px-2 py-1 rounded text-sm">
                    45
                  </span>
                  <span className="text-white/60">:</span>
                  <span className="bg-white text-red-600 font-bold px-2 py-1 rounded text-sm">
                    30
                  </span>
                </div>
              </div>

              {/* Mobile Category Tabs */}
              <div className="flex lg:hidden gap-2 overflow-x-auto pb-3 mb-4 scrollbar-hide">
                {shopCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`flex-shrink-0 px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                      selectedCategory === cat
                        ? "bg-emerald-deep text-white"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Results Header */}
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
                <p className="text-sm text-gray-600">
                  <span className="font-bold text-charcoal">
                    {filteredProducts.length}
                  </span>{" "}
                  results
                  {selectedCategory !== "All" && (
                    <span>
                      {" "}
                      for{" "}
                      <span className="text-emerald-deep">
                        {selectedCategory}
                      </span>
                    </span>
                  )}
                </p>
              </div>

              {/* Products Grid - 4 to 6 columns */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-200 overflow-hidden group"
                  >
                    {/* Image */}
                    <div className="relative aspect-square overflow-hidden bg-white p-2">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain group-hover:scale-105 transition-transform duration-300 p-2"
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                      />
                      {/* Badges */}
                      {product.badge && (
                        <span
                          className={`absolute top-1 left-1 px-1.5 py-0.5 rounded text-[9px] font-bold ${
                            product.badge === "New"
                              ? "bg-emerald-600 text-white"
                              : product.badge === "Sale"
                              ? "bg-red-600 text-white"
                              : "bg-amber-500 text-white"
                          }`}
                        >
                          {product.badge}
                        </span>
                      )}
                      {/* Wishlist */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="absolute top-1 right-1 p-1.5 bg-white rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart
                          size={12}
                          className={
                            wishlist.includes(product.id)
                              ? "text-red-500 fill-red-500"
                              : "text-gray-400"
                          }
                        />
                      </button>
                    </div>
                    {/* Info */}
                    <div className="p-2 border-t border-gray-100">
                      <h3 className="text-xs text-gray-700 mb-1 line-clamp-2 hover:text-emerald-deep cursor-pointer">
                        {product.name}
                      </h3>
                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-1">
                        <div className="flex text-amber-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={8}
                              className={
                                i < Math.floor(product.rating)
                                  ? "fill-current"
                                  : "text-gray-300"
                              }
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-blue-600 hover:text-red-600 cursor-pointer">
                          {product.reviews}
                        </span>
                      </div>
                      {/* Price */}
                      <div className="mb-1">
                        <span className="text-[10px] text-gray-500">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-[10px] text-gray-400 line-through ml-1">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      {/* Prime Delivery */}
                      <div className="flex items-center gap-1">
                        <Truck size={8} className="text-emerald-deep" />
                        <span className="text-[9px] text-gray-500">
                          Free delivery
                        </span>
                      </div>
                      {/* Add to Cart */}
                      <a
                        href={`https://wa.me/263772800883?text=${encodeURIComponent(
                          product.whatsapp
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 w-full block text-center bg-amber-400 hover:bg-amber-500 text-charcoal text-xs font-semibold py-1.5 rounded-full transition-colors"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-8 mb-4">
                <button className="bg-gray-100 hover:bg-gray-200 text-charcoal font-medium text-sm px-12 py-2.5 rounded-lg transition-colors">
                  See more results
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
