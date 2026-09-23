import Link from "next/link";
import { InstagramIcon, FacebookIcon } from "./SocialIcons";

const branches = [
  { town: "Town Branch", city: "Harare" },
  { town: "Westgate Mall", city: "Harare" },
  { town: "Borrowdale", city: "Harare" },
  { town: "East Park Mall — Home", city: "Lusaka" },
  { town: "East Park Mall — Fashion", city: "Lusaka" },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/70">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1.5 mb-5">
              <span className="font-display text-2xl font-bold text-white tracking-tight">
                BRAND
              </span>
              <span className="font-display text-2xl font-light italic text-brass-light">
                MARINA
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/50 mb-6 max-w-xs">
              Elevated everyday elegance. From the boot of a car in Mutare to
              five branches across Zimbabwe and Zambia.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/brand_marina1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://facebook.com/BrandMarina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href="https://threads.net/@brand_marina1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-xs font-bold"
                aria-label="Threads"
              >
                @
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Shop
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/services?tab=fashion", label: "Fashion" },
                { href: "/services?tab=home", label: "House & Home" },
                { href: "/services", label: "All Collections" },
                { href: "/gallery", label: "Lookbook" },
                { href: "/about", label: "Our Story" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brass-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Our Branches
            </h4>
            <ul className="space-y-3">
              {branches.map((branch) => (
                <li key={branch.town} className="text-sm">
                  <span className="text-white/80">{branch.town}</span>
                  <span className="text-white/40"> — {branch.city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-5 uppercase tracking-wider">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:marinated.marina@gmail.com"
                className="block hover:text-brass-light transition-colors"
              >
                marinated.marina@gmail.com
              </a>
              <a
                href="https://wa.me/263772800883?text=Hi%20Brand%20Marina!"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-brass-light transition-colors"
              >
                WhatsApp: +263 772 800 883
              </a>
              <p className="text-white/40">
                Mon – Sat: 8:30 AM – 5:30 PM
              </p>
              <p className="text-white/40">
                Sun: 9:00 AM – 1:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Brand Marina. All rights reserved.
          </p>
          <p className="text-xs text-white/30 italic">
            The dream that refused to die.
          </p>
        </div>
      </div>
    </footer>
  );
}
