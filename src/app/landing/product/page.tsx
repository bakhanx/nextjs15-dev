import React from 'react';

const navItems = [
  {
    icon: <span className="h-5 w-5 text-white" />,
    label: 'My Garden'
  },
  {
    icon: <span className="h-5 w-5 text-white" />,
    label: 'My Plants'
  }
];

// Plant cards data
const plantCards = [
  {
    id: 1,
    name: 'Cactus',
    image: '',
    isNew: true
  },
  {
    id: 2,
    name: 'Cactus Red',
    image: '',
    isNew: true
  },
  {
    id: 3,
    name: 'Leaf',
    image: '',
    isNew: false
  },
  {
    id: 4,
    name: 'Ficus',
    image: '',
    isNew: true
  }
];

const Product = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-[37px] max-w-[430px]  bg-[#f9f9f9] pt-[43.63px]">
        {/* Header and Navigation Section */}
        <div className="flex w-full flex-col items-start gap-[30.75px] px-[31.26px]">
          {/* Header with Title and Avatar */}
          <div className="flex h-[76.62px] w-full items-center justify-between">
            <h1 className="font-head text-[length:var(--head-font-size)] leading-[var(--head-line-height)] font-[number:var(--head-font-weight)] tracking-[var(--head-letter-spacing)] [font-style:var(--head-font-style)]">
              <span className="text-[#12121d] font-bold text-3xl">New on </span>
              <span className="text-[#5b8e55] font-bold text-3xl">Plantio</span>
            </h1>

            <span className="h-[44.46px] w-[44.46px]">
              <span />
            </span>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center gap-[27px]">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-1">
                <div className="flex h-[63px] w-[63px] items-center justify-center rounded-full bg-[#5b8e55] shadow-[5px_21px_48px_-9px_#00000029]">
                  {item.icon}
                </div>
                <span className="text-center [font-family:'SF_UI_Display-Medium',Helvetica] text-base leading-[26px] font-medium tracking-[0.32px] text-[#5b8e55]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full px-[31px]">
          {/* Featured Banner */}
          <span className="mb-6 w-full overflow-hidden border-none">
            <span className="p-0">
              <div
                className="relative h-[213px] w-full bg-cover bg-center"
                style={{ backgroundColor:"gray" ,  borderRadius: "0.375rem" }}>
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="[font-family:'SF_UI_Display-Regular',Helvetica] text-sm leading-[16.1px] tracking-[0.14px] text-white">
                    New in
                  </span>
                  <h2 className="[font-family:'SF_UI_Display-Medium',Helvetica] text-[27.8px] leading-[31.7px] font-medium tracking-[0] text-white">
                    Create plans
                    <br />
                    with Gardening App
                  </h2>
                </div>
              </div>
            </span>
          </span>

          {/* Plant Cards Grid */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            {plantCards.map(plant => (
              <div
                key={plant.id}
                className="relative">
                <span className="overflow-hidden border-none">
                  <span className="p-0">
                    <div
                      className="h-[155px] bg-cover bg-center"
                      style={{ backgroundColor:"gray" , borderRadius: "0.375rem"}}></div>
                  </span>
                </span>

                {plant.name && (
                  <h3 className="mt-2 [font-family:'SF_UI_Display-Medium',Helvetica] text-lg leading-[26px] font-medium tracking-[0] text-black">
                    {plant.name}
                  </h3>
                )}

                {plant.isNew && (
                  <span className="absolute top-2 right-2 rounded-[17px] bg-[#60b357] px-3 py-0.5 text-[14.2px] font-normal text-white">
                    New
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
