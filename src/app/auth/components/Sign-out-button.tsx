"use client"

import React from 'react'
import { logout } from '../actions/auth'
import styles from '@/app/styles/button.module.css'

const SignOutButton = () => {
  return (
    <button
      className={styles.customButton}
      onClick={() => logout()}>
      Sign Out
    </button>
  )
}

export default SignOutButton
