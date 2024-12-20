import Link from "next/link";
import { Suspense } from "react";
import PostsList from "@componets/post/postsList";
import { PostsListSkeleton } from "@componets/skeletons";
import { userData } from "@utils/session";


export default async function Home() {
  return (
    <>
      <div className="border-b border-gray-300 py-3">
        <Link href={"/create"} className="inline-block ml-16 rounded-3xl bg-orange-500 py-2 px-4 text-white font-semibold hover:bg-orange-600">Create Post</Link>
      </div>
      <section className="mb-20">
        <Suspense fallback={<PostsListSkeleton />}>
          <PostsList />
        </Suspense>
      </section>
    </>
  );
}
