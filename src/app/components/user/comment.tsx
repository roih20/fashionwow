import { HeartIcon } from "@heroicons/react/24/outline";
import { PostLink } from "@/app/components/links";


export default function UserComment() {
  return (
    <div className="border-b border-gray-300 hover:bg-gray-100">
      <PostLink title="Dark Iron Spakies transmog" postId="dakr_2"/>
      <p className="text-sm mb-1.5">Comment by the user</p>
      <button className="flex items-center space-x-1.5 pb-3">
        <HeartIcon width={18} height={18} className="" />
        <span className="text-sm">3</span>
      </button>
    </div>
  );
}
