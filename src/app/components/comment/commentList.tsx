import { getPostComments } from "@utils/queries"
import Comment from "@componets/comment/comment"
import { Comment as TypeComment } from "@utils/types"
import { userData } from "@app/utils/session"

export default async function CommentList({ postId }: {postId: number}) {
  const comments = await getPostComments(postId) as TypeComment[]
  const user = userData()
  const commentList = comments?.map((comment: TypeComment) => (
    <Comment key={comment.comment_id} comment={comment} user={user}/>
  ))

  if (comments.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center h-36">
        <div className="text-xl font-medium text-slate-800">
          No comments yet.
        </div>
      </section>
    )
  }

  return (
    <section className="mt-8 mb-20">{commentList}</section>
  )
}