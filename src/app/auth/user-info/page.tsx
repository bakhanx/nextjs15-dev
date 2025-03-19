import Image from 'next/image'
import React from 'react'
import SignOutButton from '../components/Sign-out-button'
import { auth } from '@/auth'

const UserInfo = async () => {
  const session = await auth()

  return (
    <div>
      <p>User signed in with name : {session?.user?.name}</p>
      <p>User signed in with email : {session?.user?.email}</p>
      <div className="flex gap-x-2">
        {session?.user?.image && (
          <Image
            src={session?.user?.image}
            width={80}
            height={80}
            alt={session?.user?.name ?? 'Avatar'}
            style={{ borderRadius: '50%' }}
            priority
          />
        )}
        <SignOutButton />
      </div>
    </div>
  )
}

export default UserInfo
