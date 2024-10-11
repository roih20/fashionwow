import SubNavbar from "@/app/components/options";

export default function ProfileLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string };
}) {
  return (
    <div className="w-full h-full ">
      <div className="border-b border-gray-300 ">
        <h2 className="text-3xl font-bold my-5 mx-16">{params.username}</h2>
        <SubNavbar username={params.username} />
      </div>
      <section className="overflow-y-auto">{children}</section>
    </div>
  );
}
