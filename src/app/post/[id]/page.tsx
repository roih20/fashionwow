import LikeButton from "@/app/components/buttons/likebtn";
import Comment from "@/app/components/comment";
import CommentForm from "@/app/components/commentForm";
import { UsernameLink } from "@/app/components/links";
import DarkIronTransmog from "@/app/images/DarkIronTransmog.png";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto my-3">
      <article className="h-auto">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-row items-center justify-between mb-3">
            <h2 className="text-2xl font-bold">Dark Iron Transmog</h2>
            <UsernameLink username="RodWoW03"/>
          </div>
          <a
            href={
              "https://www.wowhead.com/dressing-room#fv80z0zJ89c8Vy83p8Vn8dxP8Vx83E8Vt83Q8Vg83Z8Vv84m8o38348av8MmR8zYZ8dpU8Mtv877pOAx808PbB8MFU8OAG87VOAv808OAL808OAg808OAn808OAN808D5X87MOKR8ta87V"
            }
            target="_blank"
            className="hover:cursor-pointer hover:underline"
          >
            Full set here
          </a>
          <Image
            src={DarkIronTransmog}
            alt="some alt."
            width={800}
            className="rounded-2xl my-3"
          />
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center space-x-4">
              <LikeButton />
              <div className="flex items-center bg-gray-100 rounded-xl px-2 py-1 justify-center space-x-2 hover:cursor-pointer hover:bg-gray-200">
                <ChatBubbleBottomCenterIcon width={22} height={22} />
                <span className="text-sm font-medium">8</span>
              </div>
            </div>
            <p className="text-sm">Aug 19, 2022</p>
          </div>
        </div>
      </article>
      <CommentForm />
      <section className="flex flex-col gap-y-5">
        <Comment />
        <Comment />
        <Comment />
      </section>
    </div>
  );
}
