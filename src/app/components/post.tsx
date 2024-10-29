import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import LikeButton from "@componets/buttons/likebtn";
import { UsernameLink } from "@componets/links";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";

interface Props {
  id: string;
  title: string;
  username: string;
  url: string;
  date: string;
  image: StaticImageData;
  comments: number;
  likes: number;
}

export default function Post({
  title,
  username,
  url,
  date,
  image,
  comments,
  id,
}: Props) {
  return (
    <article className="h-auto py-3 border-b border-gray-300 hover:bg-gray-50">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-row items-center justify-between mb-3">
          <h2 className="text-2xl font-bold">{title}</h2>
          <UsernameLink username={username} />
        </div>
        <a
          href={url}
          target="_blank"
          className="hover:cursor-pointer hover:underline"
        >
          Full set here
        </a>
        <Link href={`/post/${id}`}>
          <Image
            src={image}
            alt="some alt."
            width={800}
            className="rounded-2xl my-3"
          />
        </Link>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <LikeButton />
            <Link
              href={`/post/${id}`}
              className="flex items-center bg-gray-100 rounded-xl px-2 py-1 justify-center space-x-2 hover:cursor-pointer hover:bg-gray-200"
            >
              <ChatBubbleBottomCenterIcon width={22} height={22} />
              <span className="text-sm font-medium">{comments}</span>
            </Link>
          </div>
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </article>
  );
}
