import { createPost } from "@app/actions";
import Input from "@componets/input";
import { useFormState } from "react-dom";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
export default function Page() {
  return (
    <div className="max-w-xl mx-auto w-full">
      <h2 className="text-2xl font-bold text-slate-800 mt-4">Create Post</h2>
      <form className="mt-4 flex flex-col" action={createPost}>
        <Input type="text" name="title" labelName="Title" />
        <Input type="text" name="transmogUrl" labelName="Url" style="mt-2" />

        <div className="flex items-center justify-center w-full mt-3">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-slate-400 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <CloudArrowUpIcon  className="h-9 w-9 mb-2 text-slate-500" aria-hidden="true" />
              <p className="mb-2 text-sm text-slate-500 ">
                <span className="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p className="text-xs text-slate-500 ">
                SVG, PNG, JPG or GIF
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" name="image"/>
          </label>
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-base text-white px-4 py-2 font-semibold rounded-full mt-4 self-end hover:bg-orange-600"
        >
          Post
        </button>
      </form>
    </div>
  );
}
