"use client"

import { Comment as TypeComment, User } from "@utils/types";
import Link from "next/link";
import { calculateTimeBetweenDates } from "@utils/lib";
import CommentOptions from '@componets/comment/commentOptions'
import EditCommentForm from "@componets/comment/editCommentForm";
import { useState } from "react";

export default function Comment({ comment, user }: { comment: TypeComment, user: User | null}) {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="px-16 mb-3">
      <div className="flex flex-row space-x-3 items-center mb-2">
        <Link href={`/user/${comment.username}`} className="text-sm font-medium text-slate-800 hover:text-blue-800 hover:cursor-pointer">{comment.username}</Link>
        <p className="text-gray-700 text-sm">{calculateTimeBetweenDates(comment.comment_date)}</p>
        { user && user.id === comment.user_id && (<CommentOptions showForm={setShowForm}  commentId={comment.comment_id}/>) }
      </div>

      <p className="text-sm text-left text-wrap mb-3" hidden={showForm}>
        {comment.comment_text}
      </p>
      
      {showForm && <EditCommentForm showForm={setShowForm} comment={comment.comment_text} commentId={comment.comment_id}/>}

    </div>
  );
}
