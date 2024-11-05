import Post from "@componets/post";
import DarkIronTransmog from "@/app/images/DarkIronTransmog.png";
import DarkIronTransmog3 from "@/app/images/DarkIronTransmog3.png";
import Link from "next/link";
import { Suspense } from "react";
import PostsList from "@componets/postsList";
import { PostsListSkeleton } from "@componets/skeletons";


export default async function Home() {
  return (
    <section className="mb-16">
      <div className="border-b border-gray-300 py-3">
        <Link href={"/create"} className="inline-block ml-16 rounded-3xl bg-orange-500 py-2 px-4 text-white font-semibold text-base">Create Post</Link>
      </div>
      <Suspense fallback={<PostsListSkeleton />}>
        <PostsList />
      </Suspense>
    </section>
  );
}
