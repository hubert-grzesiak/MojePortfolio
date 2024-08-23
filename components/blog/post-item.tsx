import { Calendar } from "lucide-react";
import { Link } from "next-view-transitions";
import { cn, formatDate } from "@/lib/utils";
import { Tag } from "./Tag";
import ViewCounter from "@app/blog/view-counter";
import { cache } from "react";
import { increment } from "@db/actions";
import { getViewsCount } from "@db/queries";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
}: PostItemProps) {
  return (
    <article className="flex flex-col gap-2 border-b border-border py-3">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={"/" + slug}>{title}</Link>
        </h2>
      </div>
      <div className="flex gap-2">
        {tags?.map((tag) => <Tag tag={tag} key={tag} />)}
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

const incrementViews = cache(increment);

async function Views({ slug }: { slug: string }) {
  const views = await getViewsCount();
  incrementViews(slug);
  return <ViewCounter allViews={views} slug={slug} />;
}
