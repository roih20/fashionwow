import { HeartIcon  } from "@heroicons/react/24/outline";
import { Comment as TypeComment } from "@app/types";
import Link from "next/link";

export default function Comment({ comment }: { comment: TypeComment}) {
  return (
    <div className="px-16">
      <div className="flex flex-row space-x-3 items-center mb-2.5">
        <Link href={`/user/${comment.username}`} className="text-sm font-semibold hover:underline hover:cursor-pointer">{comment.username}</Link>
        <p className="text-gray-700 text-sm">{comment.comment_date.toLocaleDateString()}</p>
      </div>
      <p className="text-sm text-left text-wrap">
        {comment.comment_text}
      </p>
    </div>
  );
}
