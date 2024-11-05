export function PostSkeleton() {
  return (
    <div className="py-3 border-b border-gray-300 hover:bg-gray-50 px-16">
      {/* Skeleton HTML/CSS */}
      <div className="flex flex-row items-center justify-between mb-3">
        <div className="w-52 bg-gray-300 rounded-full py-2"></div>
        <div className="w-24 bg-gray-300 rounded-full py-2" />
      </div>
      <div className="w-20 bg-gray-300 rounded-full py-2"></div>
      <div className="w-[768px] bg-gray-300 rounded-xl h-[500px] my-3"></div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-4">
          <div className="bg-gray-300 rounded-full w-16 py-3"></div>
          <div className="bg-gray-300 rounded-full w-16 py-3"></div>
        </div>
        <div className="bg-gray-300 w-20 rounded-full py-2"></div>
      </div>
    </div>
  );
}

export function PostsListSkeleton() {
  return (
    <>
      {/* Skeleton HTML / CSS */}
      <PostSkeleton />
      <PostSkeleton />
      <PostSkeleton />
    </>
  );
}

export function CommentSkeleton() {
  return (
    <div className="px-16">
      <div className="flex flex-row space-x-3 items-center mb-2.5">
        <div className="bg-gray-300 py-2 w-24 rounded-full"></div>
        <div className="bg-gray-300 py-2 w-16 rounded-full"></div>
      </div>
      <div className="bg-gray-300 py-2 w-44 rounded-full"></div>
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
  )
}

export function UsersCommentSkeleton() {
  return <div>{/* Skeleton HTML/CSS */}</div>;
}

export function UserCommentListSkeleton() {
  return <div>{/* Skeleton HTML / CSS */}</div>;
}
