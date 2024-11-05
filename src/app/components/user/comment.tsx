import { HeartIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { UserComment as UserCommentType } from "@app/types";


export default function UserComment({comment} : { comment: UserCommentType}) {
  return (
    <div className="border-b border-gray-300 hover:bg-gray-100 px-16 py-4">
      <Link href={`/post/${comment.post_id}`} className="inline-block pt-2.5 pb-2 text-xs hover:underline hover:cursor-pointer text-gray-800">
        {comment.post_title}
      </Link>
      <p className="text-sm mb-1.5">{comment.comment_text}</p>
    </div>
  );
}
