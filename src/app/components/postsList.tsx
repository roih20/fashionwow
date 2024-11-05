import { getAllPosts } from "@app/queries"
import Post from "./post"
import { Post as TypePost} from "@app/types"

export default async function PostsList() {
  const posts = await getAllPosts() as TypePost[]
  const postList = posts?.map((post: TypePost) => (
    <article className="py-3.5 border-b border-gray-300 hover:bg-gray-50 px-16" key={post.post_id}>
      <Post post={post} />
    </article>
  ))
  return (
    <>{postList}</>
  )
}