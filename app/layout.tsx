import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FPROTOCOL | Optimize Your Existence",
  description:
    "Data-driven curation of tools for health, wealth, and aesthetics. No fluff. Just effective protocols.",
  openGraph: {
    title: "FPROTOCOL | Optimize Your Existence",
    description:
      "Data-driven curation of tools for health, wealth, and aesthetics.",
    url: "https://protocolf.vercel.app",
    siteName: "FPROTOCOL",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FPROTOCOL | Optimize Your Existence",
    description:
      "Data-driven curation of tools for health, wealth, and aesthetics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FPROTOCOL",
    url: "https://protocolf.vercel.app",
    description:
      "Data-driven curation of tools for health, wealth, and aesthetics.",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
