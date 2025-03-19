import { auth } from '@/auth'
import { NextRequest, NextResponse } from 'next/server'

const protectedRoutes = ['/user-info']

export default async function middleware(request: NextRequest) {
  const session = await auth()

  const { pathname } = request.nextUrl

  const isProtected = protectedRoutes.some(route => pathname.includes(route))

  if (isProtected && !session) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.url))
  }

  return NextResponse.next()
}
