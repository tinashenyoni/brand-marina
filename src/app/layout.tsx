import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import PageLoader from "@/components/PageLoader";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Brand Marina — Fashion & Homeware | Harare & Lusaka",
    template: "%s | Brand Marina",
  },
  description:
    "Multi-award-winning Zimbabwean fashion and homeware retail brand. Ladies fashion, menswear, kids wear, home décor, furniture, and personal styling across Zimbabwe and Zambia.",
  keywords: [
    "fashion Harare",
    "homeware Zimbabwe",
    "clothing store Lusaka",
    "Brand Marina",
    "personal styling Zimbabwe",
    "home décor Harare",
    "women's fashion Zimbabwe",
    "furniture Lusaka",
    "Marina Timburwa",
  ],
  openGraph: {
    title: "Brand Marina — Fashion & Homeware",
    description:
      "Elevated everyday elegance. Multi-award-winning fashion and homeware across Zimbabwe and Zambia.",
    type: "website",
    locale: "en_ZW",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <PageLoader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
