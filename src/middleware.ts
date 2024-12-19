import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest, res: NextResponse) {
  const auth = req.cookies.get("user")
  if (!auth) {
    return NextResponse.redirect(new URL('/signIn', req.url))
  }
}


export const config = {
  matcher: ['/create']
}