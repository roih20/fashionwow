import { cookies } from "next/headers";
import Link from "next/link";

export default function Navbar() {
  const session = cookies().get("user");
  const user = session ? JSON.parse(session.value) : undefined
  return (
    <nav className="h-16 py-2 border border-gray-300">
      <div className="mx-auto max-w-screen-xl flex items-center justify-between">
        <Link href="/" className="font-semibold text-3xl text-gray-800">
          Fashion WoW
        </Link>

        {user ? (
          <Link className="text-lg hover:underline" href={`/user/${user.username}`}>{user.username}</Link>
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
