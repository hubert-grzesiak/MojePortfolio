import { Link } from "next-view-transitions";
import getFormattedDate from "@lib/getFormattedDate";

type Props = {
  post: BlogPost;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className="mt-4 text-2xl">
      <Link className="underline" href={`/blog/${id}`}>
        {title}
      </Link>
      <br />
      <p className="mt-1 text-sm">{formattedDate}</p>
    </li>
  );
}
