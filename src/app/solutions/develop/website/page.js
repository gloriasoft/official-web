'use client';
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import Flip from 'gsap/Flip'

export default function About() {
  const container = useRef()
  const sec1Con = useRef()
  const sec2Con = useRef()
  const sec3Con = useRef()


  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(useGSAP)
  gsap.registerPlugin(Flip)

  useEffect(() => {

  }, [])
 
  useGSAP(() => {
    const sections = gsap.utils.toArray('.section')
    const panels = gsap.utils.toArray('.panel')

    function changeContainer(nextIndex) {
      const $con = [sec1Con, sec2Con, sec3Con][nextIndex].current
      const $box = document.getElementById('box')
      const state = Flip.getState($box)
      $con.appendChild($box)

      Flip.from(state, {
        duration: 0.5,
        scale: true,
        ease: 'power3.inOut',
        // spin: true,
        // absolute: true,
      })
    }

    sections.forEach((elm, index) => {
      ScrollTrigger.create({
        trigger: elm,
        markers: true,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        onEnter() {
          console.log('on enter', index)

          if (index === 0) return
          changeContainer(index)
        },
        onLeaveBack() {
          console.log('on leave back', index)
          changeContainer(index - 1)
        }
      })
    })

    ScrollTrigger.create({
      target: document.body,
      // pin: true,
      markers: true,
      start: 0,
      bottom: "max"
    })
    // panels.forEach((elm, index) => {
    //   ScrollTrigger.create({
    //     trigger: elm,
    //     markers: true,
    //     pin: true,
    //     scrub: 1,
    //     start: "top top",
    //     end: "+=100%"
    //   })
    // })

  }, [])  


  return (
    <div className="">
      <Header activeKey="solutions"></Header>
      <div className="main-container bg-white" ref={container}>
        <section className="mb-4 section">
          <div className="container mx-auto">
            <div className="flex h-[600px] items-stretch gap-4">
              <div className="flex-1 border-1 border-gray-500">
                <div ref={sec1Con} className="relative h-full">
                  <div id="box" className="absolute left-[50%] translate-x-[-50%] bottom-0 w-[320px] h-[450px] border-1 border-red-500 bg-gradient-to-r from-red-500 to-orange-500"></div>
                </div>
              </div>
              <div className="flex-1 border-1 border-gray-500"></div>
            </div>
          </div>
        </section>
        <section className="my-4 section">
          <div className="container mx-auto">
            <div className="flex h-[600px] items-stretch gap-4">
              <div className="flex-1 border-1 border-gray-500">
                
              </div>
              <div className="flex-1 border-1 border-gray-500">
                <div ref={sec2Con} className="relative h-full">
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-4 section">
          <div className="container mx-auto">
            <div className="flex h-[600px] items-stretch gap-4">
              <div className="flex-1 border-1 border-gray-500">
                <div ref={sec3Con} className="relative h-full">
                  
                </div>
              </div>
              <div className="flex-1 border-1 border-gray-500"></div>
            </div>
          </div>
        </section>

        <section className="my-4 h-screen panel">
          <div className="h-full flex items-center bg-pink-400">
            <div className="text-center flex-1">panel1</div>
          </div>
        </section>
        <section className="my-4 h-screen panel">
        <div className="h-full flex items-center bg-purple-400">
            <div className="text-center flex-1">panel2</div>
          </div>
        </section>
        <section className="my-4 h-screen panel">
        <div className="h-full flex items-center bg-blue-400">
            <div className="text-center flex-1">panel3</div>
          </div>
        </section>
      </div>

      <Footer></Footer>
    </div>
  )
}