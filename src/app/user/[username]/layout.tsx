import { logOut } from "@app/actions";
import SubNavbar from "@componets/user/subNavbar";
import { cookies } from "next/headers";

export default function ProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  const session = cookies().get("user");
  const user = session ? JSON.parse(session.value) : undefined;
  return (
    <>
      <div className="border-b border-gray-300 ">
        <div className="flex items-center justify-between my-5 mx-16">
          <h2 className="text-3xl font-bold">{params.username}</h2>
          {user && user?.username === params.username  && (
            <form action={logOut}>
              <button
                type="submit"
                className="bg-orange-500 px-4 py-2 text-sm text-white rounded-full font-medium"
              >
                Log out
              </button>
            </form>
          )}
        </div>
        <SubNavbar username={params.username} />
      </div>
      <section className="overflow-y-auto h-full mb-12">{children}</section>
    </>
  );
}
