import { getUsersByUsername } from "@utils/queries"
import Link from "next/link"


type User = {
  username: string
}

export default async function Finder() {
  const users = await getUsersByUsername('as') as User[]
  console.log(users)
  return (
    <div className='z-10 absolute w-full bg-white h-[20rem] hide-scrollbar -top-2 shadow-xl border border-gray-300 rounded-[32px] overflow-y-auto hidden group-focus-within:block'>    
      <div className="mt-8">
        {
          users && users.map((user: User) => (
            <Link key={user.username} href={`/user/${user.username}`} className="text-slate-700 block p-3 hover:cursor-pointer hover:bg-gray-100">
              {user.username}
            </Link>
          ))
        }
      </div>
    </div>
  )
}