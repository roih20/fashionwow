import { deleteComment } from "@app/actions";
import { TrashIcon } from "@heroicons/react/24/outline";

export default function DeleteCommentBtn({commentId}: {commentId: number}) {
  const deleteCommentWithId = deleteComment.bind(null, commentId)
  return (
    <form action={deleteCommentWithId}>
    <button type="submit" className="flex items-center text-slate-700 py-4">
      <TrashIcon className="w-5 h-5 mr-3 ml-4"/>
      <span>Delete comment</span>
    </button>
  </form>
  )
}