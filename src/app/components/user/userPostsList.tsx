import { getUserPosts } from "@app/queries";
import { Post } from "@app/types";
import LikeButton from "@componets/buttons/likebtn";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function UserPost({ post }: { post: Post }) {
  return (
    <article className="py-3.5 border-b border-gray-300 hover:bg-gray-50 px-16">
      <div className="flex flex-row items-center justify-between mb-3">
        <h2 className="text-2xl font-bold">{post.post_title}</h2>
      </div>
      <a
        href={post.wowhead_url}
        target="_blank"
        className="hover:cursor-pointer hover:underline"
      >
        Full set here
      </a>
      <Link href={`/post/${post.post_id}`}>
        {/*<Image
            src={post.image}
            alt="some alt."
            width={800}
            className="rounded-2xl my-3"
          />*/}
        <div className="w-[768px] bg-gray-300 rounded-xl h-[500px] my-3"></div>
      </Link>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-4">
          <LikeButton />
          <Link
            href={`/post/${post.post_id}`}
            className="flex items-center bg-gray-100 rounded-xl px-2 py-1 justify-center space-x-2 hover:cursor-pointer hover:bg-gray-200"
          >
            <ChatBubbleBottomCenterIcon width={22} height={22} />
            <span className="text-sm font-medium">{4 /*post.comments*/}</span>
          </Link>
        </div>
        <p className="text-sm">{post.posting_date.toLocaleDateString()}</p>
      </div>
    </article>
  );
}

export default async function UserPostsList({id }: { id: number}) {
  const posts = await getUserPosts(id) as Post[]
  const postList = posts?.map((post: Post) => (
    <UserPost post={post} key={post.post_id} />
  ))
  return (
    <>{postList}</>
  );
}
