import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  if (!posts.find((post) => post.id === postId)) notFound();

  const { title, date, contentHtml } = await getPostData(postId);

  const pubDate = getFormattedDate(date);

  return (
    <main className="prose prose-xl mx-auto mb-10 w-full max-w-[1400px] rounded-lg bg-white/70 shadow-lg backdrop-blur-[32px] md:mb-20 md:mt-20 md:p-10">
      <h1 className="mb-0 mt-4 text-3xl">{title}</h1>
      <p className="mt-0">{pubDate}</p>
      <article>
        <section
          className="text-left"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        <p>
          <Link href="/">← Back to home</Link>
        </p>
      </article>
    </main>
  );
}
