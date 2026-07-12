import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diluv Khutugtu Foundation | Cultural Creative & Community Exchange Center",
  description:
    "The Diluv Khutugtu Foundation is restoring a historic theater in Uliastai, Zavkhan Province, Mongolia into a Cultural Creative and Community Exchange Center — preserving heritage, empowering youth, and strengthening community life.",
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
  ],
  openGraph: {
    title: "Diluv Khutugtu Foundation",
    description:
      "Restoring a historic theater in Uliastai into a living center for culture, education, and community.",
    siteName: "Diluv Khutugtu Foundation",
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
