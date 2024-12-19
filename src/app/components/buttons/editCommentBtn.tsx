"use client";

import { PencilIcon } from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

export default function EditCommentBtn({
  showForm,
}: {
  showForm: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <button
      className="flex items-center text-slate-700 py-4"
      onClick={() => showForm((prev) => !prev)}
    >
      <PencilIcon className="w-5 h-5 mr-3 ml-4" />
      Edit comment
    </button>
  );
}
