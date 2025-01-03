import { cookies } from "next/headers"
import { User } from "./types"

export function userData(): User | null {
  const cookieStore = cookies()
  if (cookieStore.has('user')) {
    const session = cookieStore.get('user')!
    return JSON.parse(session?.value)
  } else {
    return null
  }
}

