"use client";

import { insertPost } from "@app/actions";
import Input from "@componets/input";
import { useFormState } from "react-dom";

const initialState = {
  message: '',
};
export default function Page() {
  const [state, formAction] = useFormState(insertPost, initialState);
  return (
    <div className="max-w-xl mx-auto w-full">
      <h2 className="text-2xl font-bold text-gray-800 mt-4">Create Post</h2>
      <form className="mt-4 space-y-4 flex flex-col" action={formAction}>
        <Input type="text" name="title" labelName="Title" />
        <Input type="text" name="url" labelName="Url" />
        <input type="file" name="fileImage" accept="image/*" />
        <button
          type="submit"
          className="bg-orange-500 text-base text-white px-4 py-2 font-semibold rounded-3xl self-end"
        >
          Post
        </button>
      </form>
    </div>
  );
}
