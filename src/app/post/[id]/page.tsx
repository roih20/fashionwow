import CommentForm from "@componets/post/commentForm";
import { Suspense } from "react";
import CommentList from "@componets/post/commentList";
import { getPostById } from "@app/utils/queries";
import Post from "@componets/post";
import { Post as TypePost} from "@app/utils/types"
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
