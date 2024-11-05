import LikeButton from "@componets/buttons/likebtn";
import Comment from "@componets/post/comment";
import CommentForm from "@componets/post/commentForm";
import DarkIronTransmog from "@/app/images/DarkIronTransmog.png";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { Suspense } from "react";
import CommentList from "@componets/post/commentList";
import { getPostById } from "@app/queries";
import Post from "@componets/post";
import { Post as TypePost} from "@app/types"
import { CommentListSkeleton, PostSkeleton } from "@componets/skeletons";

export default async function Page({params} : {params: {id: number}}) {
  const post = await getPostById(params.id) as TypePost
  return (
    <>
      <Suspense fallback={<PostSkeleton />}>
        <article className="py-3.5 px-16">
          <Post post={post} />
        </article>
      </Suspense>
      <CommentForm />
      <Suspense fallback={<CommentListSkeleton />}>
        <CommentList postId={params.id}/>
      </Suspense>
    </>
  );
}
