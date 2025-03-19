'use server'

import { signIn, signOut } from '@/auth'

export const login = async () => {
  await signIn('github', { redirectTo: '/auth/user-info' })
}

export const logout = async () => {
  await signOut({ redirectTo: '/auth' })
}
