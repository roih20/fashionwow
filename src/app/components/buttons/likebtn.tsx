'use client';

import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(45)
  return (
    <button onClick={() => setLikes(likes + 1)} className="flex items-center bg-gray-100 rounded-xl justify-center space-x-2 px-2 py-1 hover:cursor-pointer hover:bg-gray-200">
      <HeartIcon width={22} height={22} />
      <span className="text-sm font-medium">{likes}</span>
    </button>
  );
}
