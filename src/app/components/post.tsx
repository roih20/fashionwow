import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { Post as PostType } from "@app/utils/types";
import { getNumberOfCommentsByPost } from "@app/utils/queries";

export default async function Post({ post }: { post: PostType }) {
  const totalComments = await getNumberOfCommentsByPost(post.post_id);
  return (
    <>
      <div className="flex flex-row items-center justify-between mb-3">
        <h2 className="text-2xl font-bold">{post.post_title}</h2>
        {post?.username && (
          <Link
            href={`/user/${post.username}`}
            className="text-sm font-bold hover:underline"
          >
            {post.username}
          </Link>
        )}
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
      <div className="flex flex-row items-center justify-between">
        <Link
          href={`/post/${post.post_id}`}
          className="flex items-center bg-gray-100 rounded-xl px-2 py-1 justify-center space-x-2 hover:cursor-pointer hover:bg-gray-200"
        >
          <ChatBubbleBottomCenterIcon width={22} height={22} />
          <span className="text-sm font-medium">{totalComments}</span>
        </Link>
        <p className="text-sm">{post.posting_date.toDateString()}</p>
      </div>
    </>
  );
}
