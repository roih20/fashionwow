"use client"

import { useSearchParams, useRouter } from 'next/navigation';


export default function SearchBar() { 
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('user', term)
    } else {
      params.delete('user')
    }

    replace(`?${params.toString()}`)
  }

  return (
      <input type="text" onChange={(e) => handleSearch(e.target.value)} placeholder="Search..." className="absolute w-full -top-3 z-20 px-4 py-1.5 rounded-full bg-gray-200 focus:outline-none text-slate-600 placeholder:text-slate-500 focus:bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500"/>
    )
}