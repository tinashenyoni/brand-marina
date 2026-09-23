import type { Metadata } from "next";
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  ExternalLink,
} from "lucide-react";

const zimbabweBranches = [
  {
    id: "town",
    name: "Town Branch",
    address: "Cnr 7th Street & Kwame Nkrumah Ave, opp. Chicken Slice, Harare",
    phone: "+263 772 800 883",
    whatsapp: "263772800883",
    hours: "Mon–Sat: 8:30 AM – 5:30 PM · Sun: 9:00 AM – 1:00 PM",
    products: "Fashion & House & Home",
    mapUrl:
      "https://www.google.com/maps/search/7th+Street+Kwame+Nkrumah+Avenue+Harare",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.5!2d31.0522!3d-17.8252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzMwLjciUyAzMcKwMDMnMDguMCJF!5e0!3m2!1sen!2szw!4v1700000000000",
  },
  {
    id: "westgate",
    name: "Westgate Shopping Mall",
    address: "Westgate Shopping Mall, Harare",
    phone: "+263 772 800 883",
    whatsapp: "263772800883",
    hours: "Mon–Sat: 8:30 AM – 5:30 PM · Sun: 9:00 AM – 1:00 PM",
    products: "Fashion & House & Home (Separate Lines)",
    mapUrl: "https://www.google.com/maps/search/Westgate+Shopping+Mall+Harare",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.5!2d31.02!3d-17.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWestgate+Mall!5e0!3m2!1sen!2szw!4v1700000000000",
  },
  {
    id: "borrowdale",
    name: "Borrowdale",
    address: "Meridian New Mall, Borrowdale, Harare",
    phone: "+263 772 800 883",
    whatsapp: "263772800883",
    hours: "Mon–Sat: 8:30 AM – 5:30 PM · Sun: 9:00 AM – 1:00 PM",
    products: "Fashion & House & Home",
    mapUrl:
      "https://www.google.com/maps/search/Meridian+New+Mall+Borrowdale+Harare",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.0!2d31.05!3d-17.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMeridian+Mall!5e0!3m2!1sen!2szw!4v1700000000000",
  },
];

const zambiaBranches = [
  {
    id: "lusaka-home",
    name: "East Park Mall — House & Home",
    address: "East Park Mall, Lusaka",
    phone: "+260 977 800 883",
    whatsapp: "260977800883",
    hours: "Mon–Sat: 9:00 AM – 5:30 PM · Sun: 9:00 AM – 1:00 PM",
    products: "House & Home Only",
    mapUrl: "https://www.google.com/maps/search/East+Park+Mall+Lusaka",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.0!2d28.32!3d-15.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEast+Park+Mall!5e0!3m2!1sen!2szm!4v1700000000000",
  },
  {
    id: "lusaka-fashion",
    name: "East Park Mall — Fashion",
    address: "East Park Mall, Lusaka",
    phone: "+260 977 800 883",
    whatsapp: "260977800883",
    hours: "Mon–Sat: 9:00 AM – 5:30 PM · Sun: 9:00 AM – 1:00 PM",
    products: "Fashion Only",
    mapUrl: "https://www.google.com/maps/search/East+Park+Mall+Lusaka",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.0!2d28.32!3d-15.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sEast+Park+Mall!5e0!3m2!1sen!2szm!4v1700000000000",
  },
];

function BranchCard({ branch }: { branch: (typeof zimbabweBranches)[0] }) {
  return (
    <div className="bg-warm-white rounded-lg shadow-sm overflow-hidden card-hover">
      {/* Map embed */}
      <div className="relative aspect-[16/9] bg-sand/30">
        <iframe
          src={branch.embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map of ${branch.name}`}
          className="absolute inset-0"
        />
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-charcoal mb-3">
          {branch.name}
        </h3>
        <div className="space-y-2 mb-6">
          <div className="flex items-start gap-3 text-sm text-charcoal-light">
            <MapPin size={14} className="shrink-0 mt-0.5 text-terracotta" />
            <span>{branch.address}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-charcoal-light">
            <Clock size={14} className="shrink-0 text-terracotta" />
            <span>{branch.hours}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <span className="inline-block text-[11px] font-medium text-emerald-deep bg-emerald-deep/5 px-2 py-0.5 rounded">
              {branch.products}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3">
          <a
            href={`https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(`Hi Brand Marina! I'd like to enquire about products at the ${branch.name} branch.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-whatsapp text-white text-sm font-medium rounded hover:scale-105 transition-transform"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
          <a
            href={`tel:${branch.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-deep text-white text-sm font-medium rounded hover:bg-emerald transition-colors"
          >
            <Phone size={14} />
            Call
          </a>
          <a
            href={branch.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 border border-sand-dark/50 text-charcoal text-sm font-medium rounded hover:border-terracotta hover:text-terracotta transition-colors"
          >
            <ExternalLink size={14} />
            Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Our Locations",
  description:
    "Find your nearest Brand Marina. 3 branches in Harare, Zimbabwe and 2 branches at East Park Mall, Lusaka, Zambia.",
};

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-24 bg-emerald-deep overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-deep to-terracotta/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brass-light font-medium text-xs tracking-[0.2em] uppercase mb-3">
            Visit Us
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Five Branches,
            <br className="hidden sm:block" />
            <span className="italic text-brass-light"> Two Countries</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-base sm:text-lg">
            Find your nearest Brand Marina. Each location is curated to
            deliver the full experience.
          </p>
        </div>
      </section>

      {/* Zimbabwe Branches */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded bg-emerald-deep/10 flex items-center justify-center">
              <MapPin size={18} className="text-emerald-deep" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal">
                Zimbabwe
              </h2>
              <p className="text-charcoal-light text-sm">
                3 branches across Harare
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {zimbabweBranches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      {/* Zambia Branches */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded bg-terracotta/10 flex items-center justify-center">
              <MapPin size={18} className="text-terracotta" />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-charcoal">
                Zambia
              </h2>
              <p className="text-charcoal-light text-sm">
                2 branches at East Park Mall, Lusaka
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {zambiaBranches.map((branch) => (
              <BranchCard key={branch.id} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      {/* General CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-4">
            Can&apos;t find what you&apos;re looking for?
          </h2>
          <p className="text-charcoal-light mb-8 max-w-xl mx-auto">
            WhatsApp us with your query and we&apos;ll point you to the right
            branch.
          </p>
          <a
            href="https://wa.me/263772800883?text=Hi%20Brand%20Marina!%20I%20need%20help%20finding%20the%20right%20branch."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-whatsapp hover:bg-whatsapp/90"
          >
            <MessageCircle size={18} />
            Chat with Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
