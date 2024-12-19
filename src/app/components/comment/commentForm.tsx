import { createComment } from "@app/actions";
import { userData } from "@utils/session";



export default function CommentForm({ postId }: { postId: number }) {
  const insertComment = createComment.bind(null, postId)
  const user = userData()
  const isUserLoggedIn = user ? true : false
  return (
    <form className="mb-6 mt-2 px-16" action={insertComment}>
      <textarea
        required
        rows={1}
        maxLength={255}
        name="comment"
        placeholder="Add a comment"
        className="block w-full px-3.5 py-2 mt-4  border rounded-[28px] overflow-auto h-auto border-slate-500 resize-y text-slate-600 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 mb-2"
      />
      <button
        type="submit"
        disabled={!isUserLoggedIn}
        className="bg-orange-500 rounded-3xl px-4 py-2 text-white font-bold border border-orange-600 disabled:bg-orange-300 hover:bg-orange-600 disabled:border-orange-400 disabled:hover:cursor-not-allowed"
      >
        Comment
      </button>
    </form>
  );
}
