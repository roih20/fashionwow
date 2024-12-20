import { logOut } from "@app/actions";
import { userData } from "@utils/session";
import SubNavbar from "@componets/user/subNavbar";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import { findUserByUsername } from "@app/utils/queries";
import Link from "next/link";

export default async function ProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  const user = userData()

  const userExist = await findUserByUsername(params.username)

  if (!userExist) {
    return (
      <div className="flex-col flex justify-center items-center h-[55vh] ">
        <FaceFrownIcon className="w-32 h-32 mb-2 text-yellow-400"/>
        <div className="text-3xl font-medium mb-4">
          Sorry, nobody goes by that username.
        </div>
        <Link href={'/'} className="block bg-orange-500 px-4 py-2 rounded-full text-white font-medium hover:bg-orange-600">
            Go back to home
        </Link>
      </div>
    )
  }
  return (
    <>
      <div className="border-b border-gray-300 ">
        <div className="flex items-center justify-between my-5 mx-16">
          <h2 className="text-3xl font-bold text-slate-800">{params?.username}</h2>
          {user && user?.username === params?.username  && (
            <form action={logOut}>
              <button
                type="submit"
                className="bg-orange-500 px-4 py-2 text-sm text-white rounded-full font-bold hover:bg-orange-600"
              >
                Log out
              </button>
            </form>
          )}
        </div>
        <SubNavbar username={params.username} />
      </div>
      <section className="min-h-screen mb-16">{children}</section>
    </>
  );
}
