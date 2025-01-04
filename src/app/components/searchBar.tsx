'use client'
import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
export default function SearchBar() {

  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const handleSearch = useDebouncedCallback((term: string) => {
    const param = new URLSearchParams(searchParams)
    if (term) {
      param.set('user', term)
    } else {
      param.delete('user')
    }

    replace(`${pathname}?${param.toString()}`)
  }, 400)

  return (
    <input
      placeholder="Search..."
      onChange={(e) => handleSearch(e.target.value)}
      defaultValue={searchParams.get('user')?.toString()} 
      className="w-full absolute -top-4 z-20 max-w-xl border rounded-full px-3 py-1 text-slate-700 border-gray-300  bg-gray-100 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:bg-white"/>
  )
}