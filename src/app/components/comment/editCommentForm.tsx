import { updateComment } from "@app/actions";
import { Dispatch, SetStateAction } from "react";

export default function EditCommentForm({
  comment,
  commentId,
  showForm,
}: {
  comment: string;
  commentId: number;
  showForm: Dispatch<SetStateAction<boolean>>;
}) {
  const updateCommentWithId = updateComment.bind(null, commentId);
  return (
    <form className="w-full " action={updateCommentWithId}>
      <textarea
        name="comment"
        defaultValue={comment}
        className="text-slate-800 border w-full border-slate-500 rounded-xl mb-1.5 px-3 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      />
      <button
        className="px-4 py-2 bg-gray-200 text-slate-800 rounded-full text-sm font-medium mr-2 hover:bg-gray-300 hover:cursor-pointer"
        type="button"
        onClick={() => showForm((prev) => !prev)}
      >
        Cancel
      </button>
      <button
        className="text-sm bg-orange-500 px-4 py-2 font-medium text-white rounded-full hover:bg-orange-600 hover:cursor-pointer"
        type="submit"
      >
        Save Edit
      </button>
    </form>
  );
}
