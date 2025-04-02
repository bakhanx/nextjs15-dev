import React from 'react';
import Link from 'next/link';

// Data for plant cards
const plantCards = [
  { id: 1, name: 'Cactus', isNew: true, image: '' },
  { id: 2, name: 'Cactus Red', isNew: false, image: '' }
];

// Data for bottom navigation
const navItems = [
  { icon: <p className="h-[34px] w-[34px]" />, active: true },
  { icon: <p className="h-[34px] w-[34px]" /> },
  { icon: null }, // Center button placeholder
  { icon: <p className="h-[34px] w-[34px]" /> },
  { icon: <p className="h-[34px] w-[34px]" /> }
];

// Data for category buttons
const categories = [
  {
    name: 'My Garden',
    icon: <p className="h-[22.31px] w-[18.45px]" />,
    active: true
  },
  {
    name: 'My Plants',
    icon: <p className="h-7 w-6" />,
    active: true
  }
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#24570b] to-[#152b0a]">
      <div className="container mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-6 py-12">
        {/* Logo Section */}
        <div className="mb-12 flex items-center gap-2">
          {/* <Leaf className="w-[38px] h-[47px] text-[#24570b]" /> */}
          <div className="text-4xl font-normal text-white">
            Plantio
          </div>
        </div>

        {/* Welcome Section */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-semibold text-white">
            Welcome to Plantio
          </h1>
          <p className="text-lg leading-relaxed text-white/90">
            Feel fresh with plant worlds.
            <br />
            Enhance your living space with nature!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex w-full flex-col gap-4">
          <Link
            href="/auth/register"
            className="flex h-14 items-center justify-center rounded-lg border-2 border-white bg-transparent text-white transition-colors hover:bg-white/10"
          >
            <span className="text-lg font-medium">
              REGISTER
            </span>
          </Link>

          <Link
            href="/auth/login"
            className="flex h-14 items-center justify-center rounded-lg bg-white text-[#24570b] transition-colors hover:bg-white/90"
          >
            <span className="text-lg font-medium">
              LOGIN
            </span>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center text-sm text-white/70">
          <p>By continuing, you agree to our Terms of Service</p>
          <p className="mt-2">and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}
