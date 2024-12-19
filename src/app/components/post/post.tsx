import Image from "next/image";
import Link from "next/link";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { Post as PostType } from "@utils/types";
import { getNumberOfCommentsByPost } from "@utils/queries";
import { calculateTimeBetweenDates } from "@utils/lib";
import { userData } from "@utils/session";
import PostOptions from "./postOptions";


export default async function Post({ post }: { post: PostType }) {
  const totalComments = await getNumberOfCommentsByPost(post.post_id);
  const user = userData()
  return (
    <>
      <div className="flex flex-row items-center space-x-4 mb-1">
        <Link
          href={`/user/${post.username}`}
          className="text-sm font-semibold text-slate-600 hover:underline"
        >
          {post.username}
        </Link>
        <p className="text-sm">
          {calculateTimeBetweenDates(post.posting_date)}
        </p>
      </div>
      <div className="flex flex-row items-center justify-between mb-3">
        <h2 className="text-2xl font-bold">{post.post_title}</h2>
        { user && user.id === post.user_id  && (<PostOptions postId={post.post_id}/>) }
      </div>
      <a
        href={post.wowhead_url}
        target="_blank"
        className="hover:cursor-pointer hover:underline"
      >
        Full set here
      </a>
      <Link href={`/post/${post.post_id}`}>
        <Image
          src={post.file_path}
          alt="some alt."
          width={800}
          height={800}
          className="rounded-2xl my-3"
        />
      </Link>
      <Link
        href={`/post/${post.post_id}`}
        className="flex items-center w-14 bg-gray-100 rounded-xl px-2 py-1 space-x-2 hover:cursor-pointer hover:bg-gray-200"
      >
        <ChatBubbleBottomCenterIcon width={22} height={22} />
        <span className="text-sm font-medium">{totalComments}</span>
      </Link>
    </>
  );
}
