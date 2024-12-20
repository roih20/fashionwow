import DeleteCommentBtn from "@componets/buttons/deleteCommentBtn";
import EditCommentBtn from "@componets/buttons/editCommentBtn";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

export default function CommentOptions({ commentId, showForm }: { commentId: number, showForm: Dispatch<SetStateAction<boolean>> }) {
  return (
    <div className="relative group">
      {/* button */}
      <button className="hover:bg-gray-300 hover:cursor-pointer rounded-full p-1 focus:ring-1 focus:ring-gray-300 focus:bg-gray-300 flex items-center">
        <EllipsisHorizontalIcon className="h-5 w-5" />
      </button>

      {/* dropdown menu */}
      <div className="hidden absolute top-10 right-0 z-10 shadow-xl bg-white rounded-lg w-[12rem] whitespace-nowrap overflow-y-auto group-focus-within:block">
        <ul className="">
          <li className="hover:cursor-pointer hover:bg-gray-100">
            <EditCommentBtn showForm={showForm}/>
          </li>
          <li className="hover:cursor-pointer hover:bg-gray-100">
            <DeleteCommentBtn commentId={commentId} />
          </li>
        </ul>
      </div>
    </div>
  );
}
