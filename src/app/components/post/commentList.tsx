import { getPostComments } from "@app/utils/queries"
import Comment from "./comment"
import { Comment as TypeComment } from "@app/utils/types"

export default async function CommentList({ postId }: {postId: number}) {
  const comments = await getPostComments(postId) as TypeComment[]
  const commentList = comments?.map((comment: TypeComment) => (
    <Comment key={comment.comment_id} comment={comment}/>
  ))
  return (
    <section className="my-16 space-y-8">{commentList}</section>
  )
}