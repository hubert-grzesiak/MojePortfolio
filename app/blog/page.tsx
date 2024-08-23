import { posts } from "#site/content";
import { PostItem } from "@components/blog/post-item";
import { Tag } from "@components/blog/Tag";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@components/blog/card";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";
import { calculateReadingTime } from "@/lib/utils";
import { AuroraBackgroundDemo } from "@components/blog/sections/AuroraHero";
export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <>
      <AuroraBackgroundDemo />
      <div className="container max-w-4xl py-6 lg:pb-10">
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-12 col-start-1 sm:col-span-8">
            <hr />
            {sortedPosts?.length > 0 ? (
              <ul className="flex flex-col">
                {sortedPosts.map((post) => {
                  const { slug, date, title, description, tags } = post;
                  const readingTime = calculateReadingTime(post.body);
                  return (
                    <li key={slug}>
                      <PostItem
                        slug={slug}
                        date={date}
                        title={title}
                        description={description}
                        tags={tags}
                        readingTime={readingTime}
                      />
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p>Nothing to see here yet</p>
            )}
          </div>
          <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {sortedTags?.map((tag) => (
                <Tag tag={tag} key={tag} count={tags[tag]} />
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
