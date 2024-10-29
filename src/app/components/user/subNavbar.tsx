'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";


export default function SubNavbar({username}: {username: string}) {
  const pathname = usePathname()

  return (
    <div className="flex flex-row space-x-2 mb-6 mx-16">
      <Link
        href={`/user/${username}`}
        className={`px-3.5 py-2.5 rounded-[24px] text-sm font-medium hover:cursor-pointer hover:underline ${pathname === `/user/${username}` && 'bg-slate-300' }`}
      >
        Posts
      </Link>
      <Link
        href={`/user/${username}/comments`}
        className={`px-3.5 py-2.5 rounded-[24px] text-sm font-medium hover:cursor-pointer hover:underline ${pathname === `/user/${username}/comments` && 'bg-slate-300' }`}
      >
        Comments
      </Link>
    </div>
  );
}
