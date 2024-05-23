import React, { useEffect, Suspense } from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'
import './index.css'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)


export default function Header() {
  
  useGSAP(() => {
    const tween = gsap.to('.firm-title', {
      y: 100,
      duration: 0.3,
      transformOrigin: '0 0',
      scale: 2
    })

    ScrollTrigger.create({
      start: 'top -72',
      end: 99999,
      scrub: 1,
      toggleClass: {
        className: 'header-scrolled', 
        targets: '#nav-header'
      },
      onToggle: (self) => {
        self.isActive ? tween.reverse() : tween.play()
      },
    });
  })

  useEffect(() => {
    
  }, [])

  return (
    <header className={`header px-4  top-0 z-50`} id="nav-header">
      <div className="container mx-auto flex h-full items-center relative">
        <div className="flex-1">
          <p className="firm-title">
            <img src="/gloria/images/gloria-logo.svg" alt="" className="logo inline-block" />
            <span className="pl-2 firm-name">嘉兰荣光 Gloriasoft</span>
          </p>
        </div>
        <div className="px-4">
          <nav className="flex items-center nav-items">
            <a className="mx-4 text-center" href="">公司简介</a>
            <a className="mx-4 text-center" href="">公司理念</a>
            <a className="mx-4 text-center" href="">团队介绍</a>
            <a className="mx-4 text-center border-b-2 border-black" href="">联系我们</a>
          </nav>
        </div>
      </div>
      
    </header>
  )
}