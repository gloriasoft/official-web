import React from "react";


export default function SectionThree() {
  return (
    <section>
      <div className="relative px-4 md:p-0">
        {/* <img className="absolute w-[60%] left-0 right-0 mx-auto top-[-40px] sm:top-[-80px] md:top-[-100px] lg:top-[-140px] xl:top-[-180px] z-10" src="/images/evolution.png" alt="" /> */}

        <div className="border-3 border-white rounded-sm relative">
          <div className="absolute left-8 px-4 mx-auto top-[-16px] md:top-[-24px] bg-[var(--background-main-color)]">
            <h1 className="leading-none text-[32px] md:text-[48px]  text-[#4e60b1] text-center">企业系统代运营</h1>
          </div>
          <div className="p-8 lg:p-12">
            <p className="text-[20px] md:text-[28px] ">
              <q></q>
            </p>
            <p className="text-[16px] md:text-[16px] text-gray-700 "></p>
            <hr className="my-8 border-white/75 border-dotted" />
            <p className="text-[20px] md:text-[28px]">
              <q>私域运营</q>
            </p>
            <p className="text-[16px] md:text-[16px] text-gray-700"></p>
            
          </div>
        </div>
    
      </div>
    </section>
  )
}