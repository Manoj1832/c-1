import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "H Dentistry Erode | Best Dental Clinic | Dr. Harini Sri K",
  description:
    "H Dentistry in Kumalankutti, Erode — Advanced dental care by Dr. Harini Sri K (MDS, FICOI USA, BPS SWISS). Root Canal, Braces, Laser Dentistry, Implants. Open 24/7. Call 9363629361.",
  keywords: [
    "dental clinic erode",
    "dentist erode",
    "root canal erode",
    "laser dentistry erode",
    "braces erode",
    "dr harini sri k",
    "h dentistry kumalankutti",
    "best dentist erode",
  ],
  openGraph: {
    title: "H Dentistry Erode | Best Dental Clinic | Dr. Harini Sri K",
    description:
      "Advanced dental care by Dr. Harini Sri K (MDS, FICOI USA, BPS SWISS). Root Canal, Braces, Laser Dentistry, Implants. Open 24/7.",
    url: "https://hdentistry.in",
    siteName: "H Dentistry",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://hdentistry.in/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "H Dentistry Erode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "H Dentistry Erode | Best Dental Clinic | Dr. Harini Sri K",
    description:
      "Advanced dental care by Dr. Harini Sri K (MDS, FICOI USA, BPS SWISS). Root Canal, Braces, Laser Dentistry, Implants. Open 24/7.",
    images: ["https://hdentistry.in/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "H Dentistry",
  doctor: "Dr. Harini Sri K",
  telephone: "9363629361",
  openingHours: "Mo-Su 00:00-23:59",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Above Domino's Pizza, Paari Nagar",
    addressLocality: "Kumalankutti, Erode",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  priceRange: "₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "22",
  },
  url: "https://hdentistry.in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="canonical" href="https://hdentistry.in" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-poppins antialiased">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
