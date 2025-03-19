import React from 'react'
import styles from '@/app/styles/button.module.css'
import { login } from '../actions/auth'

const SignInButton = () => {
  return (
    <button
          className={styles.customButton}
          onClick={()=>login()}>
          Sign In With Github
        </button>
  )
}

export default SignInButton
