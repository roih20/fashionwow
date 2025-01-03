import { cookies } from "next/headers"
import { User } from "./types"

export function userData(): User | null {
  const session = cookies().get("user")
  return session ? JSON.parse(session.value) : null
}

export function userExists(): boolean {
  const cookieStore = cookies()
  return cookieStore.has('user')
}