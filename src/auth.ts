import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

if (!process.env.AUTH_GITHUB_ID || !process.env.AUTH_GITHUB_SECRET) {
    throw new Error('Missing GITHUB_CLIENT_ID or GITHUB_CLIENT_SECRET environment variables.')
  }

export const {auth, handlers, signIn, signOut} = NextAuth({
  providers: [GitHub],
})
