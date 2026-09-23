import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our curated fashion and home collections. Personal styling by Marina, ladies fashion, menswear, kids wear, furniture, home décor, and more.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
