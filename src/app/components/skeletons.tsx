export function PostSkeleton() {
  return (
    <div className="animate-pulse py-3 border-b border-gray-300 px-16">
      {/* Skeleton HTML/CSS */}
      <div className="flex flex-row items-center justify-between mb-3">
        <div className="w-52 bg-gray-200 rounded-full py-2"></div>
        <div className="w-24 bg-gray-200 rounded-full py-2" />
      </div>
      <div className="w-20 bg-gray-200 rounded-full py-2"></div>
      <div className="w-[768px] bg-gray-200 rounded-xl h-[500px] my-3"></div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-4">
          <div className="bg-gray-200 rounded-full w-16 py-3"></div>
          <div className="bg-gray-200 rounded-full w-16 py-3"></div>
        </div>
        <div className="bg-gray-200 w-20 rounded-full py-2"></div>
      </div>
    </div>
  );
}

export function PostsListSkeleton() {
  return (
    <>
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </>
  );
}

export function CommentSkeleton() {
  return (
    <div className="px-16 animate-pulse">
      <div className="flex flex-row space-x-3 items-center mb-2.5">
        <div className="bg-gray-200 py-2 w-32 rounded-full"></div>
        <div className="bg-gray-200 py-2 w-24 rounded-full"></div>
      </div>
      <div className="bg-gray-200 py-2 w-56 rounded-full"></div>
    </div>
  );
}

export function CommentListSkeleton() {
  return (
    <section className="my-16 space-y-8">
      <CommentSkeleton />
      <CommentSkeleton />
      <CommentSkeleton />
    </section>
  );
}

export function UsersCommentSkeleton() {
  return (
    <div className="border-b border-gray-300 px-16 py-5 animate-pulse">
      <div className="flex items-center space-x-2">
        <div className="rounded-full bg-gray-200 w-28 py-2"></div>
        <div className="rounded-full bg-gray-200 w-20 py-2"></div>
      </div>
      <div className="rounded-full bg-gray-200 w-40 py-2 mt-4"></div>
    </div>
  );
}

export function UserCommentListSkeleton() {
  return <>
    <UsersCommentSkeleton />
    <UsersCommentSkeleton />
    <UsersCommentSkeleton />
  </>;
}
