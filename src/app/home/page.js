
import { createPortal } from 'react-dom'
import Image from "next/image";
import Header from "../components/header";
import Footer from '../components/footer';
import SectionOne from "./components/section1";
import SectionTwo from "./components/section2";
import SectionThree from "./components/section3";
import ContactTrigger from '@/app/components/contact'

export default function Home() {
  
  return (
    <main>
      <ContactTrigger></ContactTrigger>
      <Header></Header>
      <div className="container mx-auto py-4">
        <section className="section-first-screen">
          <div className="flex flex-wrap px-4">
            <div className="flex-1 py-8 md:pr-[80px]">
              <h1 className="text-[40px] sm:text-[44px] lg:text-[72px] md:text-[52px]  font-bold text-center mt-[180px]">企业数字化<br/>一站式解决方案</h1>
              <p className="p-4 md:text-xl md:p-0 mt-4 text-gray-700 text-center leading-8">
                基于行业属性与业务需求，围绕用户体验的提升与数字化连接的建立，打造一站式解决方案<br /> 如电商、数字营销、效果优化、企业站点、微信生态的应用、数据可视化等方案和系统的落地
              </p>
              <div className="text-center flex items-center justify-center mt-[72px]">
                {/* <Button
                  radius="full"
                  size="lg"
                  className="mt-8 w-[240px] bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">立即咨询</Button> */}
                <div className="btn-contact text-2xl">
                  <div className="text-center relative">
                    <span className="">立即咨询</span>
                    <img className="hidden sm:block absolute right-[-40px] z-10" style={{ top: 'calc(50% - 8px)' }} src="/images/btn-contact-arrow.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:w-[40%] md:block relative mt-6" id="parallax1">
              <img src="/images/IntroSection.png" alt="" className="w-full h-full object-contain aspect-auto" />
            </div>
          </div>
        </section>
        <SectionOne></SectionOne>
        {/* <SectionTwo></SectionTwo> */}
        {/* <SectionThree></SectionThree> */}
      </div>
      <Footer></Footer>
    </main>
  )
}