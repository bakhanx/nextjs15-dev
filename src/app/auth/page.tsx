import React from 'react'
import Auth from './components/Auth'
import { auth } from '@/auth'
import styles from '@/app/styles/button.module.css'
import Link from 'next/link'

export default async function Page() {
  const session = await auth()

  if (session?.user) {
    return (
      <div>
        <h1>Next Auth V5 </h1>
        <Link
          href="/auth/user-info"
          className={styles.customButton}>
          User-Info Page
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Auth />
    </div>
  )
}
