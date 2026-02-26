export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://inioluwa-atanda.vercel.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/_next/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
