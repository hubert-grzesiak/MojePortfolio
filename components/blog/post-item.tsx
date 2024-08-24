import { Calendar, TimerIcon } from "lucide-react";
import Link from "next/link";
import { cn, formatDate } from "@/lib/utils";
import { Tag } from "./Tag";
import ViewCounter from "@app/blog/view-counter";
import { getViewsCount } from "@db/queries";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
  readingTime?: number;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
  readingTime,
}: PostItemProps) {
  return (
    <article className="flex flex-col gap-2 border-b border-border py-3">
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">
          <Link href={"/" + slug}>{title}</Link>
        </h2>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          {tags?.map((tag) => <Tag tag={tag} key={tag} />)}
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <TimerIcon className="h-[16px] w-[16px] shrink-0" />
          <p>{readingTime} min read</p>
        </div>
      </div>

      <Views slug={slug} />
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex items-center justify-between">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="flex items-center gap-1 text-sm font-medium sm:text-base">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link href={"/" + slug} className={cn("py-0")}>
          Read more →
        </Link>
      </div>
    </article>
  );
}

async function Views({ slug }: { slug: string }) {
  const views = await getViewsCount();
  return <ViewCounter allViews={views} slug={slug} />;
}
