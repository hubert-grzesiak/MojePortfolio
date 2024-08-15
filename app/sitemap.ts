import { getSortedPostsData } from "@lib/posts";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = getSortedPostsData();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/${post.id}`,
  }));

  return [
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/resume` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog` },
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact` },
    ...postEntries,
  ];
}
