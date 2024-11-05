import { getUserByUsername, getUserComments } from "@app/queries";
import { UserCommentListSkeleton } from "@componets/skeletons";
import UserCommentsList from "@componets/user/commentList";
import { Suspense } from "react";

export default async function Page({ params }: { params: { username: string }}) {
  const id: number = await getUserByUsername(params.username)
  return (
    <Suspense fallback={<UserCommentListSkeleton />}>
       <UserCommentsList id={id} />
    </Suspense>
  );
}
