import Link from "next/link";

export function UsernameLink({ username }: { username: string }) {
  return (
    <Link
      href={`/user/${username}`}
      className="text-sm font-bold hover:underline"
    >
      {username}
    </Link>
  );
}

export function PostLink({ postId, title }: { postId: string; title: string }) {
  return (
    <Link
      href={`/post/${postId}`}
      className="inline-block pt-2.5 pb-2 text-xs hover:underline hover:cursor-pointer text-gray-800"
    >
      {title}
    </Link>
  );
}
