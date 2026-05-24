import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import LoadingScreen from "@/components/layout/LoadingScreen";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Best Gym in Sheikhpura, Bihar | Premium Fitness Center`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Best Gym in Sheikhpura",
    "Fitness Center in Sheikhpura",
    "Gym near Chandani Chowk Sheikhpura",
    "Best Fitness Gym Bihar",
    "Gym Fitness Sheikhpura",
    "Personal Trainer Sheikhpura",
    "Weight Loss Sheikhpura",
    "Bodybuilding Bihar",
    "Yoga Sheikhpura",
    "Gym near me",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} – Best Premium Gym in Sheikhpura, Bihar`,
    description: site.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: `${site.name} – Premium Gym in Sheikhpura`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} – Best Premium Gym in Sheikhpura, Bihar`,
    description: site.description,
    images: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: site.url },
  category: "fitness",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthClub",
  name: site.name,
  image: [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80",
  ],
  "@id": site.url,
  url: site.url,
  telephone: site.phone,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Chandani Chowk, VIP Rd, near Lazeez Junglee Rasoi",
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.1433989,
    longitude: 85.8375975,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "05:00",
      closes: "22:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating,
    reviewCount: site.reviews,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
      </head>
      <body className="bg-dark-900 text-white antialiased">
        <LoadingScreen />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
