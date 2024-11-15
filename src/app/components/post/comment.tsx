import { Comment as TypeComment } from "@app/utils/types";
import Link from "next/link";
import { calculateTimeBetweenDates } from "@app/utils/lib";

export default function Comment({ comment }: { comment: TypeComment}) {
  return (
    <div className="px-16">
      <div className="flex flex-row space-x-3 items-center mb-2.5">
        <Link href={`/user/${comment.username}`} className="text-sm font-semibold hover:underline hover:cursor-pointer">{comment.username}</Link>
        <p className="text-gray-700 text-sm">{calculateTimeBetweenDates(comment.comment_date)}</p>
      </div>
      <p className="text-sm text-left text-wrap">
        {comment.comment_text}
      </p>
    </div>
  );
}
