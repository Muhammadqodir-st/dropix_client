import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const isAuth = req.cookies.get('auth')?.value
  const pathname = req.nextUrl.pathname

  const isAuthRoute = pathname.startsWith('/auth')


  if (!isAuth && !isAuthRoute) {
    return NextResponse.redirect(new URL('/auth/login', req.url))
  }

  if (isAuth && isAuthRoute) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js)).*)',
  ],
}