'use client'
import React from 'react'
import SignInButton from './Sign-in-button'

const Auth = () => {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
        <p className="mb-4 text-gray-600">
          You are not signed in. Please sign in to continue.
        </p>
        <SignInButton />
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>Don&apos;t have an account?</p>
        <p className="mt-1">
          Contact the administrator to create one for you.
        </p>
      </div>
    </div>
  )
}

export default Auth
