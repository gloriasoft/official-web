"use client";
import { useGSAP } from "@gsap/react";
import { delay } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect } from 'react'

gsap.registerPlugin(useGSAP);

export default function MiniPlatforms() {

  useGSAP((context) => {

   

    const tasksFirst = ['wechat', 'alipay', 'baidu', 'redbook'].map((id, index) => {
      return () => gsap.to('#app-'+id, {
        opacity: 1,
        y: 10,
        scale: 1,
        delay: index * 0.1,
        duration: .5
      })
    })

    const tasksSecond = ['kuaishou', 'tiktok', 'dingtalk', 'qq'].map((id, index) => {
      return () => gsap.to('#app-'+id, {
        opacity: 1,
        y: 10,
        scale: 1,
        delay: index * 0.1,
        duration: .5
      })
    })

    const action = gsap.utils.pipe(...[...tasksFirst, ...tasksSecond])

    const tween = gsap.fromTo('#frame', {
      y: 50,
      opacity: 0,
      scale: 1.5
    }, {
      y: 0,
      opacity: 1,
      duration: .5,
      scale: 1,
      ease: "power1",
      onComplete: () =>  action()
    })
    
   
  })


  return (
    <div className="w-[320px] lg:w-[400px] h-[420px] lg:h-[480px] mx-auto relative">
      <Image
        id="frame"
        className="w-[320px] lg:w-[400px] h-[420px] lg:h-[480px] object-cover object-left-top absolute top-0 left-0 z-0 opacity-0"
        alt="platforms"
        src="/images/iphone-frame.png" 
        width="413"
        height="832"></Image>

      <div className="px-[48px] pt-[72px] relative">
        <div className="flex justify-between">
          <Image id="app-wechat" className="opacity-0 scale-50 w-[48px] lg:w-[56px]" src="/images/app-logos/wechat.png" width="56" height="56" alt="wechat"></Image>
          <Image id="app-alipay" className="opacity-0 scale-50 w-[48px] lg:w-[56px]" src="/images/app-logos/alipay.png" width="56" height="56" alt="alipay"></Image>
          <Image id="app-baidu" className="opacity-0 scale-50 w-[48px] lg:w-[56px]" src="/images/app-logos/baidu.png" width="56" height="56" alt="baidu"></Image>
          <Image id="app-redbook" className="opacity-0 scale-50 w-[48px] lg:w-[56px]" src="/images/app-logos/redbook.png" width="56" height="56" alt="redbook"></Image>
        </div>
        <div className="flex justify-between mt-8">
          <Image id="app-kuaishou" className="opacity-0 scale-50 w-[48px] lg:w-[56px]" src="/images/app-logos/kuaishou.png" width="56" height="56" alt="kuaishou"></Image>
          <Image id="app-tiktok" className="opacity-0 scale-50 w-[48px] lg:w-[56px]" src="/images/app-logos/tiktok.png" width="56" height="56" alt="tiktok"></Image>
          <Image id="app-dingtalk" className="opacity-0 scale-50 w-[48px] lg:w-[56px]" src="/images/app-logos/dingtalk.png" width="56" height="56" alt="dingtalk"></Image>
          <Image id="app-qq" className="opacity-0 scale-50 w-[48px] lg:w-[56px]" src="/images/app-logos/qq.png" width="56" height="56" alt="qq"></Image>
        </div>
        <div className="text-center">
          <h1></h1>
        </div>
      </div>
    </div>
  )
}