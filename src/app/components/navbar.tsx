import { userData } from "@utils/session";
import Link from "next/link";

export default function Navbar() {
  const user = userData()
  return (
    <nav className="h-16 py-2 border border-gray-300">
      <div className="mx-auto max-w-screen-xl flex items-center justify-between">
        <Link href="/" className="font-medium text-3xl text-slate-800">
          Fashion WoW
        </Link>
        {user ? (
          <Link className="text-lg text-slate-700 hover:text-blue-900" href={`/user/${user.username}`}>{user.username}</Link>
        ) : (
          <Link
            href="/signIn"
            className="px-4 py-2 text-center border block w-24 border-white bg-orange-600 text-white rounded-2xl font-semibold hover:cursor-pointer hover:bg-orange-700"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
