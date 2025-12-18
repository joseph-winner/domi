import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/layout/Navbar";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_NAME = "Doctor’s on Mission International (DOMI)";
const SITE_URL = "https://doctorsonmissionint.org";
const OG_IMAGE = "/logos/doctors-mission-logo.svg";

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} | Christian Medical Missions & Free Care`,
    template: `%s | ${SITE_NAME}`,
  },

  description:
    "Doctor’s on Mission International (DOMI) is a volunteer-based Christian non-profit uniting medical teams to deliver free, accessible and reliable medical and surgical care in underserved communities—bringing healing while serving God.",

  applicationName: SITE_NAME,
  category: "Nonprofit",
  keywords: [
    "Doctors on Mission International",
    "Doctor’s on Mission",
    "DOMI",
    "Christian medical missions",
    "medical outreach Uganda",
    "free medical care",
    "surgical missions",
    "volunteer doctors",
    "volunteer nurses",
    "community health",
    "Mbarara",
    "South Western Uganda",
    "humanitarian relief",
    "mobile medical clinics",
    "healthcare access",
    "faith-based nonprofit",
  ],

  alternates: {
    canonical: "/",
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

  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Christian Medical Missions & Free Care`,
    description:
      "Volunteer-based Christian medical teams providing free, accessible and reliable medical and surgical care in underserved communities.",
    locale: "en_US",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Free Medical & Surgical Outreach`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Christian Medical Missions & Free Care`,
    description:
      "Volunteer-based Christian medical teams providing free, accessible and reliable medical and surgical care in underserved communities.",
    images: [OG_IMAGE],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1220" },
  ],

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Extra meta tags (optional but useful)
  other: {
    "apple-mobile-web-app-title": SITE_NAME,
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({ children }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: SITE_NAME,
    url: SITE_URL,
    description: metadata.description,
    foundingDate: "2023",
    email: "info@doctorsonmissionint.org",
    telephone: ["+256 782 524 317", "+256 784 808 738"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mbarara City",
      addressRegion: "South-western region",
      addressCountry: "UG",
      streetAddress: "Mbarara-Isingiro road",
    },
    sameAs: [
      // Add your real links (or remove):
      // "https://www.facebook.com/yourpage",
      // "https://www.instagram.com/yourpage",
      // "https://www.youtube.com/@yourchannel",
      // "https://x.com/yourhandle",
      // "https://www.linkedin.com/company/yourpage"
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
