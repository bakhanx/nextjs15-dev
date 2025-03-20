import React from 'react';

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
    <div>
      <div className="shadow-ds relative flex h-[932px] w-full max-w-[430px] flex-col items-start gap-16 bg-white px-10 py-20 [background:linear-gradient(180deg,rgba(48,75,13,0)_0%,rgba(21,43,10,1)_100%)]">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          {/* <Leaf className="w-[38px] h-[47px] text-[#24570b]" /> */}
          <div className="text-[39.5px] font-normal text-[#24570b]">
            Plantio
          </div>
        </div>

        {/* Welcome Text */}
        <h1 className="font-['Poppins-Medium',Helvetica] text-[32px] font-medium text-white">
          Welcome to Plantio
        </h1>

        {/* Tagline */}
        <p className="font-['SF_UI_Display-Regular',Helvetica] text-base tracking-[0.32px] text-white">
          Feel Fresh a with plant Worlds.
          <br />
          it will enhance your living space!
        </p>

        {/* Register Button */}
        <button className="h-[60px] w-full rounded-[9px] border-2 border-white text-white hover:bg-transparent hover:text-white">
          <span className="font-['Poppins-Medium',Helvetica] text-xl font-medium">
            REGISTER
          </span>
        </button>

        {/* Login button */}
        <button className="h-[60px] w-full rounded-[9px] bg-white text-[#323c06] hover:bg-white/90">
          <span className="font-['Poppins-Medium',Helvetica] text-xl font-medium">
            LOGIN
          </span>
        </button>
      </div>
    </div>  
  );
}
