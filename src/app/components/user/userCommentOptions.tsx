import DeleteCommentBtn from "@componets/buttons/deleteCommentBtn";
import { PencilIcon } from "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function UserCommentOptions({
  commentId,
  postId,
}: {
  commentId: number;
  postId: number;
}) {
  return (
    <div className="relative group">
      {/* button */}
      <button className="hover:bg-gray-300 hover:cursor-pointer rounded-full px-1 py-0.5 focus:ring-1 focus:ring-gray-300 focus:bg-gray-300">
        <EllipsisHorizontalIcon className="h-5 w-5" />
      </button>

      {/* dropdown menu */}
      <div className="hidden absolute top-10 right-0 z-10 shadow-xl bg-white rounded-lg w-[12rem] whitespace-nowrap overflow-y-auto group-focus-within:block">
        <ul className="">
          <li className="hover:cursor-pointer hover:bg-gray-100">
            <Link href={`/post/${postId}`} className="py-4 flex items-center text-slate-700">
              <PencilIcon className="w-5 h-5 mr-3 ml-4" />
              Edit comment
            </Link>
          </li>
          <li className="hover:cursor-pointer hover:bg-gray-100">
            <DeleteCommentBtn commentId={commentId} />
          </li>
        </ul>
      </div>
    </div>
  );
}
