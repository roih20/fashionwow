import { getPostComments } from "@app/queries"
import Comment from "./comment"
import { Comment as TypeComment } from "@app/types"

export default async function CommentList({ postId }: {postId: number}) {
  const comments = await getPostComments(postId) as TypeComment[]
  return (
    <section className="my-16 space-y-8">
      {
        comments.map((comment: TypeComment) => (
          <Comment comment={comment} key={comment.coment_id}/>
        ))
      }
    </section>
  )
}