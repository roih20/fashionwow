import Link from "next/link";
import { UserComment as UserCommentType } from "@app/utils/types";
import { calculateTimeBetweenDates } from "@app/utils/lib";


export default function UserComment({comment} : { comment: UserCommentType}) {

  return (
    <div className="border-b border-gray-300 hover:bg-gray-100 px-16 py-5">
      <div className="flex items-center space-x-2">
        <Link href={`/post/${comment.post_id}`} className="text-xs hover:underline hover:cursor-pointer text-gray-800">
          {comment.post_title}
        </Link>
        <p className="text-xs text-gray-800">{calculateTimeBetweenDates(comment.comment_date)}</p>
      </div>
      <p className="text-sm mt-3">{comment.comment_text}</p>
    </div>
  );
}
