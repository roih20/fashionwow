'use client'

import { getSearchResult } from "@app/actions";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type User = {
  username: string;
};



export default  function SearchResult({ username}: {username: string}) {
  const [users, setUsers] = useState<User[]>([])
  const searchParam = useSearchParams()

  useEffect(() => {
      const param = searchParam.get('user')?.toString() ?? ''
      
      async function fetchUsers() {
        const result = await getSearchResult(param) as User[]
        setUsers(result)
      }

      fetchUsers()
  }, [searchParam])


  const usernamesList = users.map((user: User) => (
    <Link href={`/user/${user.username}`} key={user.username} className="block px-4 py-2.5 hover:bg-gray-100">
      {user.username}
    </Link>
  ));

  
  return (
    <div className="z-10 absolute w-full bg-white h-[20rem] hide-scrollbar -top-2 shadow-xl border border-gray-300 rounded-xl overflow-y-auto hidden group-focus-within:block">
      <div className="mt-8">
        {usernamesList}
      </div>
    </div>
  );
}
