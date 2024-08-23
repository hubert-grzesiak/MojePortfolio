import { posts } from "#site/content";
import { MDXContent } from "@components/blog/MdxComponent";
import { notFound } from "next/navigation";

import "@/styles/mdx.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { Tag } from "@components/blog/Tag";
import { calculateReadingTime } from "@/lib/utils";
import { ClientSideTableOfContents } from "./ClientSideTableOfContents";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);
  console.log("post", post);
  if (!post || !post.published) {
    notFound();
  }
  const readingTime = calculateReadingTime(post.body);

  return (
    <main className="container relative mx-auto mt-[100px] w-full flex-1 justify-center gap-[50px] py-6 md:mt-[150px] md:flex lg:gap-10 lg:pb-10">
      <article className="prose max-w-3xl pb-6 dark:prose-invert">
        <h1 className="mb-2">{post.title}</h1>
        <div className="mb-2 flex gap-2">
          {post.tags?.map((tag) => <Tag tag={tag} key={tag} />)}
        </div>
        {post.description ? (
          <p className="mt-0 text-xl text-muted-foreground">
            {post.description}
          </p>
        ) : null}
        <p className="text-sm text-muted-foreground">
          Estimated reading time: {readingTime} minute(s)
        </p>

        <hr className="my-4" />
        <MDXContent code={post.body} />
      </article>
      <aside className="sticky">
        <div className="sticky top-16 hidden pb-6 text-sm xl:block">
          <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
            <ClientSideTableOfContents />
          </div>
        </div>
      </aside>
    </main>
  );
}
