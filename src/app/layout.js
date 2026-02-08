import './globals.css';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata = {
  metadataBase: new URL('https://inioluwa-atanda.vercel.app'),
  title: {
    default: 'Inioluwa Atanda | Youth Leader & SDG Advocate',
    template: '%s | Inioluwa Atanda'
  },
  description: 'Inioluwa Atanda - Youth Leader, SDG Advocate, and AI & Innovation Professional. Leading initiatives in governance, gender equity, and sustainable development with expertise in technology and systems building.',
  keywords: [
    'Inioluwa Atanda',
    'Youth Leader',
    'SDG Advocate',
    'Gender Equity',
    'Sustainable Development',
    'Leadership',
    'Governance',
    'AI Innovation',
    'Policy',
    'United Nations',
    'Youth Representation',
    'Systems Building',
    'Education',
    'Technology',
    'Development'
  ],
  authors: [{ name: 'Inioluwa Atanda' }],
  creator: 'Inioluwa Atanda',
  publisher: 'Inioluwa Atanda',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://inioluwa-atanda.vercel.app',
    title: 'Inioluwa Atanda | Youth Leader & SDG Advocate',
    description: 'Youth Leader and SDG Advocate focused on governance, gender equity, and sustainable development. Leading initiatives in education, technology, and systems building for global impact.',
    siteName: 'Inioluwa Atanda - Leadership & Impact',
    images: [
      {
        url: 'https://inioluwa-atanda.vercel.app/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Inioluwa Atanda - Youth Leader & SDG Advocate',
        type: 'image/png',
      },
      {
        url: 'https://inioluwa-atanda.vercel.app/logo.svg',
        width: 200,
        height: 200,
        alt: 'Inioluwa Atanda - Q Infinity Logo',
        type: 'image/svg+xml',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Dev_Qing',
    creator: '@Dev_Qing',
    title: 'Inioluwa Atanda | Youth Leader & SDG Advocate',
    description: 'Youth Leader and SDG Advocate focused on governance, gender equity, and sustainable development with expertise in technology and systems building.',
    images: [
      {
        url: 'https://inioluwa-atanda.vercel.app/images/og-image.png',
        alt: 'Inioluwa Atanda - Youth Leader & SDG Advocate',
      }
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/logo.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
    ],
    shortcut: '/logo.svg',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
    other: {
      me: ['mailto:your-email@example.com', 'https://inioluwa-atanda.vercel.app'],
    },
  },
  category: 'technology',
  classification: 'Personal Portfolio',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'dark light',
  alternates: {
    canonical: 'https://inioluwa-atanda.vercel.app',
    languages: {
      'en-US': 'https://inioluwa-atanda.vercel.app',
    },
  },
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
        <meta name="theme-color" content="#3B82F6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1E40AF" media="(prefers-color-scheme: dark)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Inioluwa Atanda" />
        <meta name="application-name" content="Inioluwa Atanda Portfolio" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased`} suppressHydrationWarning>
            {children}
      </body>
    </html>
  );
}
