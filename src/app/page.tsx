import Post from "@componets/post";
import DarkIronTransmog from "@/app/images/DarkIronTransmog.png";
import DarkIronTransmog3 from "@/app/images/DarkIronTransmog3.png";
import Link from "next/link";


export default async function Home() {
  return (
    <section className="mb-16">
      <div className="border-b border-gray-300 py-3">
        <Link href={"/create"} className="inline-block ml-16 rounded-3xl bg-orange-500 py-2 px-4 text-white font-semibold text-base">Create Post</Link>
      </div>
      <Post
        id="strong_dark1"
        title="Dark Iron Warrior Legion"
        username="DarkRod03"
        url="https://www.wowhead.com/dressing-room#fv80z0zJ89c8Vy83p8Vn8dxP8Vx83E8Vt83Q8Vg83Z8Vv84m8o38348av8MmR8zYZ8dpU8Mtv877pPbH8MFU8PbB8MFU8Pbl8MFU87mPbf8MFU8PbC8MFU8Pqc8MFU8PbF8MFU8PaW8MFU8D5X87MOKR8ta87V"
        comments={45}
        likes={200}
        date="Posted on 09/20/2024"
        image={DarkIronTransmog3}
      />
      <Post
        id="dakr_2"
        title="Dark Iron Spike Warrior"
        username="DarkRod03"
        url="https://www.wowhead.com/dressing-room#fv80z0zJ89c8Vy83p8Vn8dxP8Vx83E8Vt83Q8Vg83Z8Vv84m8o38348av8MmR8zYZ8dpU8Mtv877pOAx808PbB8MFU8OAG87VOAv808OAL808OAg808OAn808OAN808D5X87MOKR8ta87V"
        comments={45}
        likes={200}
        date="Posted on 09/20/2024"
        image={DarkIronTransmog}
      />
    </section>
  );
}
