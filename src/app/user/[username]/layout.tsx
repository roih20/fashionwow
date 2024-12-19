import { logOut } from "@app/actions";
import { userData } from "@utils/session";
import SubNavbar from "@componets/user/subNavbar";
import { cookies } from "next/headers";

export default function ProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  const user = userData()
  return (
    <>
      <div className="border-b border-gray-300 ">
        <div className="flex items-center justify-between my-5 mx-16">
          <h2 className="text-3xl font-bold text-slate-800">{params.username}</h2>
          {user && user?.username === params.username  && (
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
      <section className="overflow-y-auto h-full mb-16">{children}</section>
    </>
  );
}
