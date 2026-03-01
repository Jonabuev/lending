import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://serendale.ai"),
  title: "Serendale — AI-Powered Blockchain Platform",
  description:
    "Serendale is a next-generation AI-based blockchain platform delivering 120K TPS, guaranteed data security, and scalable decentralized solutions.",
  keywords: ["blockchain", "AI", "smart contracts", "DeFi", "Web3", "Serendale"],
  authors: [{ name: "Serendale Team" }],
  creator: "Serendale",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://serendale.ai",
    title: "Serendale — AI-Powered Blockchain Platform",
    description:
      "Next-generation AI-based blockchain platform with 120K TPS and guaranteed data security.",
    siteName: "Serendale",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Serendale" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serendale — AI-Powered Blockchain Platform",
    description:
      "Next-generation AI-based blockchain platform with 120K TPS and guaranteed data security.",
    images: ["/og-image.png"],
    creator: "@serendale_ai",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-dark text-white antialiased">{children}</body>
    </html>
  );
}
