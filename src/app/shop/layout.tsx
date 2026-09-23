import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse 36+ curated products across fashion, home décor, and accessories at Brand Marina. Shop ladies fashion, menswear, kids wear, furniture, and more.",
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
