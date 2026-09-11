import "./globals.css";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import React from "react";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://inioluwa-atanda.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Inioluwa Atanda | AI Software Engineer & Cloud DevOps Engineer",
    template: "%s | Inioluwa Atanda",
  },
  description:
    "Tech career portfolio of Inioluwa Atanda, an AI software engineer and cloud DevOps engineer building scalable products, automation systems, and cloud-native platforms.",
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
    title: "Inioluwa Atanda | AI Software Engineer & Cloud DevOps Engineer",
    description:
      "Tech career portfolio showcasing AI systems, cloud infrastructure, software engineering projects, and certifications.",
    siteName: "Inioluwa Atanda - Tech Career Portfolio",
    images: [
      {
        url: "/images/og-image.png",
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
    title: "Inioluwa Atanda | AI Software Engineer & Cloud DevOps Engineer",
    description:
      "AI software engineer and cloud DevOps engineer building scalable systems, automation workflows, and cloud-native products.",
    images: ["/images/og-image.png"],
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
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { url: "/logo.svg", sizes: "any", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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
  themeColor: "#080d18",
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
      <body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
