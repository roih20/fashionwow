import { getUserPosts } from "@app/utils/queries";
import { Post as TypePost } from "@app/utils/types";
import Post from "@componets/post";

export default async function UserPostsList({id }: { id: number}) {
  const posts = await getUserPosts(id) as TypePost[]
  const postList = posts?.map((post: TypePost) => (
    <article className="py-3.5 border-b border-gray-300 hover:bg-gray-50 px-16" key={post.post_id}>
      <Post post={post} />
    </article>
  ))
  return (
    <>{postList}</>
  );
}
