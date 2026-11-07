import type { Metadata, Viewport } from "next";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";

const title = "Kost Putra Pendekar | Kost Putra Eksklusif di Yogyakarta";
const description =
  "Kost putra eksklusif di Yogyakarta: AC, kamar mandi dalam, water heater, wifi 150+ Mbps, tanpa jam malam. Rp1,4 juta per bulan.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "kost putra jogja",
    "kost putra yogyakarta",
    "kost eksklusif jogja",
    "kost AC kamar mandi dalam",
    "kost tanpa jam malam",
  ],
  openGraph: {
    title: "Kost Putra Pendekar, Yogyakarta",
    description,
    locale: "id_ID",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#121f36",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
