import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://inioluwa-atanda.vercel.app";
const siteTitle = "Inioluwa Atanda | AI Software Engineer & Cloud DevOps Engineer";
const siteDescription =
  "Inioluwa Atanda is an AI Software Engineer and Cloud & DevOps Engineer building voice AI, automation, and scalable platforms. Explore Kami AI, RealAlma, projects, skills, and certifications.";
// Give browsers and link preview caches fresh URLs for the new personal branding.
const brandVersion = "ia-monochrome-20260911";
const socialImage = `/images/og-image.png?v=${brandVersion}`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Inioluwa Atanda",
  },
  description: siteDescription,
  keywords: [
    "Inioluwa Atanda",
    "AI Software Engineer",
    "Cloud DevOps Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Python",
    "Go",
    "Cloud Infrastructure",
    "Platform Engineering",
    "Automation",
    "Systems Architecture",
  ],
  authors: [{ name: "Inioluwa Atanda" }],
  creator: "Inioluwa Atanda",
  publisher: "Inioluwa Atanda",
  applicationName: "Inioluwa Atanda Tech Portfolio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Inioluwa Atanda - Tech Career Portfolio",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Inioluwa Atanda - Tech Career Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@Dev_Qing",
    creator: "@Dev_Qing",
    title: siteTitle,
    description: siteDescription,
    images: [{ url: socialImage, alt: siteTitle }],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: `/favicon.ico?v=${brandVersion}`, sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: `/favicon-48x48.png?v=${brandVersion}`, sizes: "48x48", type: "image/png" },
      { url: `/logo.svg?v=${brandVersion}`, sizes: "any", type: "image/svg+xml" },
    ],
    shortcut: `/favicon.ico?v=${brandVersion}`,
    apple: [{ url: `/apple-touch-icon.png?v=${brandVersion}`, sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Inioluwa Atanda",
    statusBarStyle: "black-translucent",
  },
  category: "technology",
  classification: "Tech Career Portfolio",
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark",
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
