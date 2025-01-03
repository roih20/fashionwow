import { userData } from "@utils/session";
import Link from "next/link";


export default async function Navbar() {
  const user = userData()
  return (
    <nav className="h-20 py-2 border border-gray-300 flex items-center">
      <div className="flex items-center justify-between max-w-[82rem] w-full mx-auto">
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
