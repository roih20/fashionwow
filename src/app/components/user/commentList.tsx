import { getUserComments } from "@app/queries";
import UserComment from "./comment";
import { UserComment as UserCommentType } from "@app/types";

export default async function UserCommentsList({id}: { id: number}) {
  const comments = await getUserComments(id) as UserCommentType[]
  return (
    <>
      {
        comments?.map((comment: UserCommentType) => (
          <UserComment key={comment.comment_id} comment={comment}/>
        ))
      }
    </>
  )
}