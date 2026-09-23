"use client";

import { useState } from "react";
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";

const branches = [
  {
    name: "Town Branch",
    city: "Harare, Zimbabwe",
    phone: "+263 772 800 883",
    whatsapp: "263772800883",
  },
  {
    name: "Westgate Mall",
    city: "Harare, Zimbabwe",
    phone: "+263 772 800 883",
    whatsapp: "263772800883",
  },
  {
    name: "Borrowdale",
    city: "Harare, Zimbabwe",
    phone: "+263 772 800 883",
    whatsapp: "263772800883",
  },
  {
    name: "East Park Mall — Home",
    city: "Lusaka, Zambia",
    phone: "+260 977 800 883",
    whatsapp: "260977800883",
  },
  {
    name: "East Park Mall — Fashion",
    city: "Lusaka, Zambia",
    phone: "+260 977 800 883",
    whatsapp: "260977800883",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    branch: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = encodeURIComponent(
      `Hi Brand Marina!\n\nName: ${formData.name}\nPhone: ${formData.phone}\nBranch: ${formData.branch}\n\n${formData.message}`
    );
    window.open(`https://wa.me/263772800883?text=${waMessage}`, "_blank");
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-24 bg-emerald-deep overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep to-terracotta/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brass-light font-medium text-xs tracking-[0.2em] uppercase mb-3">
            Get in Touch
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            We&apos;d Love to{" "}
            <span className="italic text-brass-light">Hear from You</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-base sm:text-lg">
            WhatsApp is our favourite way to connect — quick, personal, and
            always warm.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-charcoal mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-emerald-deep/5 border border-emerald-deep/20 rounded-lg p-8 text-center">
                  <CheckCircle
                    size={48}
                    className="mx-auto mb-4 text-emerald-deep"
                  />
                  <h3 className="font-display text-xl font-bold text-charcoal mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-charcoal-light mb-6">
                    We&apos;ve opened WhatsApp with your message. We&apos;ll get
                    back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        branch: "",
                        message: "",
                      });
                    }}
                    className="text-terracotta font-medium hover:text-terracotta-dark transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream border border-sand-dark/30 rounded text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-all"
                      placeholder="e.g. Tendai"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream border border-sand-dark/30 rounded text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-all"
                      placeholder="e.g. +263 77 123 4567"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="branch"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Nearest Branch
                    </label>
                    <select
                      id="branch"
                      name="branch"
                      value={formData.branch}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream border border-sand-dark/30 rounded text-charcoal focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-all"
                    >
                      <option value="">Select a branch</option>
                      {branches.map((b) => (
                        <option key={b.name} value={b.name}>
                          {b.name} — {b.city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-charcoal mb-1.5"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-cream border border-sand-dark/30 rounded text-charcoal placeholder:text-charcoal-light/50 focus:outline-none focus:ring-2 focus:ring-terracotta/30 focus:border-terracotta transition-all resize-none"
                      placeholder="Tell us what you're looking for..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full justify-center">
                    <Send size={16} />
                    Send via WhatsApp
                    <ArrowRight size={14} />
                  </button>
                  <p className="text-xs text-charcoal-light/60 text-center">
                    This form sends your message directly via WhatsApp for the
                    fastest response.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp Primary CTA */}
              <div className="bg-whatsapp/5 border border-whatsapp/20 rounded-lg p-6">
                <h3 className="font-display text-lg font-bold text-charcoal mb-2 flex items-center gap-2">
                  <MessageCircle size={18} className="text-whatsapp" />
                  Prefer WhatsApp?
                </h3>
                <p className="text-charcoal-light text-sm mb-4">
                  It&apos;s our fastest channel. Tap below to start a
                  conversation instantly.
                </p>
                <a
                  href="https://wa.me/263772800883?text=Hi%20Brand%20Marina!%20I'd%20like%20to%20enquire."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-whatsapp hover:bg-whatsapp/90 text-sm"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Email */}
              <div className="bg-cream rounded-lg p-6">
                <h3 className="font-display text-lg font-bold text-charcoal mb-3">
                  Email Us
                </h3>
                <a
                  href="mailto:marinated.marina@gmail.com"
                  className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark transition-colors text-sm"
                >
                  <Mail size={14} />
                  marinated.marina@gmail.com
                </a>
              </div>

              {/* Social Links */}
              <div className="bg-cream rounded-lg p-6">
                <h3 className="font-display text-lg font-bold text-charcoal mb-3">
                  Follow Us
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://instagram.com/brand_marina1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-charcoal-light hover:text-terracotta transition-colors text-sm"
                  >
                    <InstagramIcon size={16} />
                    @brand_marina1
                  </a>
                  <a
                    href="https://facebook.com/BrandMarina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-charcoal-light hover:text-terracotta transition-colors text-sm"
                  >
                    <FacebookIcon size={16} />
                    Brand Marina
                  </a>
                  <a
                    href="https://threads.net/@brand_marina1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-charcoal-light hover:text-terracotta transition-colors text-sm"
                  >
                    <span className="w-[16px] text-center text-xs font-bold">
                      @
                    </span>
                    @brand_marina1
                  </a>
                </div>
              </div>

              {/* Branch Quick List */}
              <div className="bg-cream rounded-lg p-6">
                <h3 className="font-display text-lg font-bold text-charcoal mb-3 flex items-center gap-2">
                  <MapPin size={16} className="text-terracotta" />
                  All Branch Numbers
                </h3>
                <div className="space-y-3">
                  {branches.map((branch) => (
                    <div
                      key={branch.name}
                      className="flex items-center justify-between gap-2"
                    >
                      <div>
                        <p className="text-sm font-medium text-charcoal">
                          {branch.name}
                        </p>
                        <p className="text-xs text-charcoal-light">
                          {branch.city}
                        </p>
                      </div>
                      <a
                        href={`tel:${branch.phone.replace(/\s/g, "")}`}
                        className="text-xs text-terracotta hover:text-terracotta-dark transition-colors flex items-center gap-1"
                      >
                        <Phone size={10} />
                        {branch.phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
