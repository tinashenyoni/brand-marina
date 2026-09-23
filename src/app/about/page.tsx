import type { Metadata } from "next";
import Image from "next/image";
import {
  Award,
  Star,
  MapPin,
  Heart,
  ArrowRight,
  Quote,
} from "lucide-react";
import Link from "next/link";

const timeline = [
  {
    year: "Origins",
    title: "The Boot of a Car in Mutare",
    description:
      "Marina Timburwa started selling clothes from the boot of her car in Mutare — driven by an unshakeable belief that every woman deserves to feel beautiful.",
  },
  {
    year: "Early Days",
    title: "First Shop, First Dream",
    description:
      "The passion grew into a small shop, and Marina built a loyal following of women who came not just for clothes, but for the confidence she gave them.",
  },
  {
    year: "The Pause",
    title: "A Chapter of Rest",
    description:
      "Life had other plans. Marina stepped back, but the dream never left her. It simmered, waiting for the right moment to return.",
  },
  {
    year: "2017",
    title: "The Relaunch in Harare",
    description:
      "With renewed fire, Marina relaunched Brand Marina in Harare — bigger, bolder, and more determined than ever. The dream refused to die.",
  },
  {
    year: "9 Years Strong",
    title: "Five Branches, Two Countries",
    description:
      "From one shop in Harare to five branches across Zimbabwe and Zambia — including House & Home, menswear, and kids. The Brand Marina family keeps growing.",
  },
  {
    year: "Today",
    title: "Award-Winning Excellence",
    description:
      "Over 10 industry awards, including Outstanding Woman in Fashion & Beauty — Diamond Category. Marina's vision has become Zimbabwe's most loved fashion and homeware brand.",
  },
];

const awards = [
  "Outstanding Woman in Fashion & Beauty — Diamond Category",
  "Zimbabwe's Leading Fashion Retailer",
  "Best Homeware Brand — Zambia",
  "Excellence in Customer Service Award",
  "Women's Business Enterprise of the Year",
  "Top 50 Women in Business — Zimbabwe",
];

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "From the boot of a car in Mutare to five branches across Zimbabwe and Zambia. The story of Marina Timburwa and Brand Marina.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-24 bg-emerald-deep overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/brand marina owner .png"
            alt=""
            fill
            className="object-cover"
            loading="lazy"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brass-light font-medium text-xs tracking-[0.2em] uppercase mb-3">
            Our Story
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            From the Boot of a Car
            <br className="hidden sm:block" />
            <span className="italic text-brass-light"> to Five Branches</span>
          </h1>
          <p className="text-white/70 max-w-2xl text-base sm:text-lg">
            The story of Brand Marina is the story of a woman who refused to
            give up on a dream — and a community of women who believed in it
            with her.
          </p>
        </div>
      </section>

      {/* Founder Feature */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                <Image
                  src="/brand marina owner .png"
                  alt="Marina Timburwa, founder of Brand Marina"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-terracotta/10 rounded-lg -z-10" />
            </div>
            <div>
              <p className="text-terracotta font-medium text-xs tracking-[0.2em] uppercase mb-3">
                The Founder
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal leading-tight mb-6">
                Marina Timburwa
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Marina&apos;s journey began in Mutare, where she started selling
                  beautiful clothes from the boot of her car. It wasn&apos;t a
                  business plan — it was a calling. She saw women who deserved
                  to feel extraordinary, and she wanted to be the one to make
                  that happen.
                </p>
                <p>
                  She opened a small shop, and word spread fast. Women came
                  not just for the clothes, but for Marina herself — her eye
                  for style, her warmth, her ability to make you feel like you
                  could conquer the world in the right outfit.
                </p>
                <p>
                  Then life intervened. Marina stepped back, but the dream
                  never left her. It simmered, waiting. And when the time was
                  right, she relaunched — this time in Harare, in 2017, with
                  the same fire that started it all in that parking lot in
                  Mutare.
                </p>
                <p>
                  Nine years later, Brand Marina operates five branches across
                  Zimbabwe and Zambia, with two distinct product lines: Fashion
                  and House & Home. Marina has won over 10 industry awards,
                  including Outstanding Woman in Fashion & Beauty in the
                  Diamond Category.
                </p>
              </div>

              <div className="mt-8 p-6 bg-cream rounded-lg border border-sand/50">
                <Quote size={24} className="text-brass mb-3" />
                <blockquote className="font-display text-lg italic text-charcoal leading-relaxed">
                  &ldquo;It&apos;s not about money, it&apos;s something that
                  lives inside me. I want every woman who walks into Brand
                  Marina to walk out feeling like she can take on the
                  world.&rdquo;
                </blockquote>
                <p className="mt-3 text-sm text-charcoal-light font-medium">
                  — Marina Timburwa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-terracotta font-medium text-xs tracking-[0.2em] uppercase mb-3">
              Our Philosophy
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-3">
              Built on Faith, Consistency & Resilience
            </h2>
            <div className="section-divider mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Heart,
                title: "Warmth",
                description:
                  "Every interaction is personal. We don't just sell — we connect, we listen, we care.",
              },
              {
                icon: Star,
                title: "Excellence",
                description:
                  "Every product is curated with intention. Quality isn't a benchmark — it's a promise.",
              },
              {
                icon: Award,
                title: "Resilience",
                description:
                  "From the boot of a car to five branches — we prove that consistency and faith move mountains.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-warm-white rounded-lg p-8 shadow-sm text-center card-hover">
                <div className="w-14 h-14 rounded bg-emerald-deep/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-emerald-deep" />
                </div>
                <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                  {item.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-terracotta font-medium text-xs tracking-[0.2em] uppercase mb-3">
              The Journey
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal">
              Our Timeline
            </h2>
          </div>              <div className="relative">
            {/* Vertical line - hidden on mobile, visible on sm+ */}
            <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-sand-dark/40 -translate-x-1/2" />

            <div className="space-y-8 sm:space-y-12">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex items-start gap-4 sm:gap-6 ${
                    i % 2 === 0
                      ? "sm:flex-row"
                      : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="hidden sm:block absolute left-1/2 w-3 h-3 rounded-full bg-terracotta border-4 border-warm-white -translate-x-1/2 z-10 mt-2" />

                  {/* Content */}
                  <div
                    className={`sm:ml-0 sm:w-[calc(50%-2rem)] ${
                      i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"
                    }`}
                  >
                    <span className="inline-block text-[11px] font-semibold text-terracotta bg-terracotta/10 px-3 py-1 rounded mb-2">
                      {item.year}
                    </span>
                    <h3 className="font-display text-lg font-bold text-charcoal mb-2">
                      {item.title}
                    </h3>
                    <p className="text-charcoal-light text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 sm:py-28 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brass-light font-medium text-xs tracking-[0.2em] uppercase mb-3">
              Recognition
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
              Awards & Honours
            </h2>
            <div className="w-[60px] h-[2px] bg-brass mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {awards.map((award, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/5 rounded-lg p-5 border border-white/10 hover:border-brass/30 transition-colors"
              >
                <Award size={20} className="text-brass shrink-0" />
                <span className="text-white/80 text-sm">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Note */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin size={20} className="text-terracotta" />
            <span className="text-terracotta font-medium text-xs tracking-[0.2em] uppercase">
              Growing Together
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-6">
            Welcome to Our Zambian Family
          </h2>
          <p className="text-charcoal-light leading-relaxed max-w-2xl mx-auto mb-8">
            When we opened our doors in Lusaka, we were humbled by the warmth
            of the Zambian market. The same values that built Brand Marina in
            Zimbabwe — quality, warmth, and an obsession with making women
            feel beautiful — resonate just as deeply across the border.
            Lusaka, you&apos;re family now.
          </p>
          <Link
            href="/locations"
            className="btn-terracotta"
          >
            Find Our Zambian Branches
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
