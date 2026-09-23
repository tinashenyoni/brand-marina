import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore the Brand Marina collection. Browse our fashion, home décor, furniture, and accessories in our curated gallery.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
