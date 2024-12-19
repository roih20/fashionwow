import DeletePostBtn from "@componets/buttons/deletePostBtn";
import { EllipsisHorizontalIcon, TrashIcon } from "@heroicons/react/24/outline";


export default function PostOptions({ postId }: {postId: number}) {
  return (
    <div className="relative group">
      { /* button */ }
      <button className="hover:bg-gray-300 hover:cursor-pointer rounded-full px-1 py-0.5 focus:ring-1 focus:ring-gray-300 focus:bg-gray-300" >
        <EllipsisHorizontalIcon className="w-7 h-7"/> 
      </button>

      {/* dropdown menu */}
      <div className="hidden absolute top-10 right-1 z-10 shadow-xl bg-white rounded-lg w-[12rem] whitespace-nowrap overflow-y-auto group-focus-within:block">
        <ul className="">
          <li className="hover:cursor-pointer hover:bg-gray-100">
            <DeletePostBtn postId={postId}/>
          </li>
        </ul>
      </div>
    </div>
  )
}