export default function CommentForm() {
  return (
    <form className="mb-6 mt-2 px-16">
      <textarea
        required
        rows={1}
        maxLength={255}
        name="comment"
        placeholder="Add a comment"
        className="block w-full px-3.5 py-2 mt-4  border rounded-[28px] overflow-auto h-auto border-slate-700 resize-y text-gray-800 placeholder:text-gray-800 focus:outline-none focus:ring-1 focus:ring-slate-800 mb-2"
      />
      <button
        type="submit"
        className="bg-orange-500 rounded-3xl px-4 py-2 text-white font-semibold border border-orange-600"
      >
        Comment
      </button>
    </form>
  );
}
