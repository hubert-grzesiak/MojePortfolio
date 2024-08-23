import { posts } from "#site/content";

export default async function sitemap() {
  const blogs = posts.map((post) => ({
    url: `https://hubertgrzesiak.com/${post.slug}`,
    lastModified: post.date,
  }));

  const routes = [
    "",
    "/contact",
    "/case-studies",
    "/case-studies/restly",
    "/blog",
  ].map((route) => ({
    url: `https://hubertgrzesiak.com${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const tags = posts.reduce((acc, post) => {
    if (!post.tags) return acc;
    post.tags.forEach((tag) => {
      if (!acc.includes(tag)) {
        acc.push(tag);
      }
    });
    return acc;
  }, []);

  return [
    ...routes,
    ...blogs,
    ...tags.map((tag) => ({
      url: `https://hubertgrzesiak.com/tags/${tag}`,
      lastModified: new Date().toISOString().split("T")[0],
    })),
  ];
}
