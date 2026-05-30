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
    "H Dentistry in Kumalankutti, Erode — Advanced dental care by Dr. Harini Sri K (MDS, FICOI USA, BPS SWISS). Root Canal, Braces, Laser Dentistry, Implants. Open 24/7. Call 08460562924.",
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
    url: "https://hdentistryerode.com",
    siteName: "H Dentistry",
    locale: "en_IN",
    type: "website",
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
  telephone: "08460562924",
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
  url: "https://hdentistryerode.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="canonical" href="https://hdentistryerode.com" />
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
