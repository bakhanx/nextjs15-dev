import React from 'react';
import Auth from './components/Auth';
import { auth } from '@/auth';
import Link from 'next/link';

export default async function Page() {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-12">
          <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
            <h1 className="mb-6 text-center text-3xl font-bold text-gray-900">
              Welcome Back!
            </h1>
            <div className="mb-8 text-center">
              <p className="text-gray-600">
                You are signed in as{' '}
                <span className="font-semibold text-blue-600">
                  {session.user.email}
                </span>
              </p>
            </div>
            <Link
              href="/auth/user-info"
              className="block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-white transition-colors hover:bg-blue-700"
            >
              View User Info
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
          <h1 className="mb-6 text-center text-3xl font-bold text-gray-900">
            Welcome to NextAuth
          </h1>
          <p className="mb-8 text-center text-gray-600">
            Sign in to access your account and manage your profile
          </p>
          <Auth />
        </div>
      </div>
    </div>
  );
}
