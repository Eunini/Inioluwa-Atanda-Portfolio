import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
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
      {
        url: "/logo.svg",
        width: 200,
        height: 200,
        alt: "Inioluwa Atanda Logo",
        type: "image/svg+xml",
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
      { url: "/logo.svg", sizes: "any", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    shortcut: "/logo.svg",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
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
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0ea5e9" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="image_src" href="/logo.svg" />
        <meta name="theme-color" content="#0ea5e9" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0f172a" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Inioluwa Atanda Tech Portfolio" />
        <meta name="application-name" content="Inioluwa Atanda Tech Portfolio" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
