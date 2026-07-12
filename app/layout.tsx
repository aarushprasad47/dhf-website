import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uliastai Cultural Center Campaign | A Diluv Khutugtu Foundation Initiative",
  description:
    "A $2.6M campaign to restore a historic theater in Uliastai, Zavkhan Province, Mongolia into a Cultural Creative and Community Exchange Center — led by the Diluv Khutugtu Foundation (DHF).",
  keywords: [
    "Diluv Khutugtu Foundation",
    "DHF",
    "Mongolia",
    "Zavkhan Province",
    "Uliastai",
    "Cultural Center",
    "Telo Tulku Rinpoche",
    "Mongolian heritage",
    "Buddhist",
    "community development",
    "donor prospectus",
    "fundraising campaign",
  ],
  openGraph: {
    title: "Uliastai Cultural Center Campaign",
    description:
      "A Diluv Khutugtu Foundation campaign to restore a historic theater in Uliastai into a living center for culture, education, and community.",
    siteName: "Uliastai Cultural Center Campaign",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
