import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "CryptoCap",
    template: "%s - CryptoCap",
  },
  description:
    "A sleek and modern landing page for my crypto tracker app, a personal watchlist platform for cryptocurrencies",

  twitter: {
    card: "summary_large_image",
    creator: "@NugarRahman",
  },
  openGraph: {
    type: "website",
    url: "https://cryptocap.vercel.app",
  },
  keywords: [
    "CryptoCap",
    "cryptocurrencies",
    "Crypto Watchlist",
    "Crypto Trading Dashbaord",
    "Crypto Tracker",
    "Crypto Portfolio",
    "Cryptracker",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-hidden`}>{children}</body>
    </html>
  );
}
