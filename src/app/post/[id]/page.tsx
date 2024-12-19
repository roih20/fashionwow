import CommentForm from "@componets/comment/commentForm";
import { Suspense } from "react";
import CommentList from "@componets/comment/commentList";
import { getPostById } from "@utils/queries";
import Post from "@componets/post/post";
import { Post as TypePost} from "@utils/types"
import { CommentListSkeleton, PostSkeleton } from "@componets/skeletons";

export default async function Page({ params } : {params: {id: number}}) {
  const post = await getPostById(params.id) as TypePost
  return (
    <>
      <Suspense fallback={<PostSkeleton />}>
        <article className="py-3.5 px-16">
          <Post post={post} />
        </article>
      </Suspense>
      <CommentForm postId={params.id}/>
      <Suspense fallback={<CommentListSkeleton />}>
        <CommentList postId={params.id}/>
      </Suspense>
    </>
  );
}
