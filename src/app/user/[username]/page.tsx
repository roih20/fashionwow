import { getUserByUsername, getUserPosts } from "@app/queries";
import { PostsListSkeleton } from "@componets/skeletons";
import UserPostsList from "@componets/user/userPostsList";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const id: number = await getUserByUsername(params.username);
  return (
    <Suspense fallback={<PostsListSkeleton />}>
      <UserPostsList id={id} />
    </Suspense>
  );
}
