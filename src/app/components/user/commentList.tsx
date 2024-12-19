import { getUserComments } from "@utils/queries";
import UserComment from "./comment";
import { UserComment as UserCommentType } from "@utils/types";

export default async function UserCommentsList({id}: { id: number}) {
  const comments = await getUserComments(id) as UserCommentType[]
  const commentList = comments?.map((comment: UserCommentType) => (
    <UserComment key={comment.comment_id} comment={comment}/>
  ))
  return (
    <>{commentList}</>
  )
}