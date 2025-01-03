import { getUserIdByUsername, getUserComments } from "@app/utils/queries";
import { UserCommentListSkeleton } from "@componets/skeletons";
import UserCommentsList from "@componets/user/commentList";
import { Suspense } from "react";

export const revalidate = 5000

export default async function Page({ params }: { params: { username: string }}) {
  const id: number = await getUserIdByUsername(params.username)
  return (
    <Suspense fallback={<UserCommentListSkeleton />}>
       <UserCommentsList id={id} />
    </Suspense>
  );
}
