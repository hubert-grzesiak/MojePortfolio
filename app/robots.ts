import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "https://hubertgrzesiak.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin"],
      },
    ],
    host: process.env.NEXT_PUBLIC_BASE_URL,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
