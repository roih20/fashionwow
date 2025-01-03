import { getUserComments } from "@utils/queries";
import UserComment from "./comment";
import { UserComment as UserCommentType } from "@utils/types";

export default async function UserCommentsList({id}: { id: number}) {
  
  const comments = await getUserComments(id) as UserCommentType[]

  if (comments.length === 0) {
    return (
      <div className="flex items-center justify-center h-[15rem]">
        <div className="text-2xl font-medium text-slate-800">
          No comments yet.
        </div>
      </div>
    )
  }
  const commentList = comments?.map((comment: UserCommentType) => (
    <UserComment key={comment.comment_id} comment={comment}/>
  ))
  return (
    <>{commentList}</>
  )
}