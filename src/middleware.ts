import { NextRequest, NextResponse } from "next/server";


export function middleware(req: NextRequest) {
  // Global middleware logic
 
  // Specific middleware for the '/create' path
  if (req.url.includes('/create')) {
    const auth = req.cookies.has('user')
    if (!auth) {
      return NextResponse.redirect(new URL('/signIn', req.url))
    }
  }

  // Continue processing the request
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/create'], // Apply middleware to both '/' and '/create'
};