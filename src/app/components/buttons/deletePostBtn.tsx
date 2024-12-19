import { deletePost } from "@app/actions"
import { TrashIcon } from "@heroicons/react/24/outline"

export default function DeletePostBtn({ postId }: {postId: number}) {
  const deletePostWithId = deletePost.bind(null, postId)
  return (
    <form action={deletePostWithId}>
      <button type="submit" className="py-4 flex items-center text-slate-700">
        <TrashIcon className="w-5 h-5 mr-3 ml-4"/>
        <span>Delete Post</span>
      </button>
    </form>
  )
}