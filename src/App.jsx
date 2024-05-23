import React, { useEffect, Suspense } from "react";
import Header from "./components/header";
import { Button, Divider } from '@nextui-org/react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {

  const sliderSetting = {
    dots: true,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <></>,
    prevArrow: <></>,
  }

  useEffect(() => {

  }, [])

  return (
    <main  id="main">
      <Header></Header>
      <div className="container mx-auto py-4">
        <section className="section-main">
          <div className="flex">
            <div className="flex-1 py-8 pr-[80px]">
              <h1 className="text-[72px] font-bold text-center mt-[180px]">企业数字化<br/>一站式解决方案</h1>
              <p className="text-xl mt-4 text-gray-700 text-center leading-8">
                基于行业属性与业务需求，围绕用户体验的提升与数字化连接的建立，打造一站式解决方案<br /> 如电商、数字营销、效果优化、企业站点、微信生态的应用、数据可视化等方案和系统的落地
              </p>
              <div className="text-center flex items-center justify-center mt-[72px]">
                {/* <Button 
                  radius="full" 
                  size="lg"
                  className="mt-8 w-[240px] bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">立即咨询</Button> */}
                <div className="btn-contact">
                  <div className="text-center relative">
                    <span className="">立即咨询</span>
                    <img className="absolute right-[-40px] top-[30px] z-10" src="/images/btn-contact-arrow.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[40%] relative mt-6" id="parallax1">
              <img src="/images/IntroSection.png" alt="" className="w-full h-full object-contain aspect-auto" />
            </div>
            
          </div>
        </section>

        <section className="mt-4">

          {/* <h1 className="text-[48px] font-bold text-center">章节2-描述公司优势</h1> */}
          <div id="trigger1" className="min-h-0 h-[1px]"></div>
          <div className=" mx-auto mt-2" id="reveal1">

            <div className="flex items-stretch">
              <div className="gradient-border flex-1 min-h-[480px] bg-white/75 p-8 rounded-md">
                <div className="flex">
                  <h2 className="text-[40px] font-bold flex-1">全渠道商城</h2>
                  <div className="flex items-center">
                    <span className="mr-2">生态合作伙伴</span>
                    <img className="h-[18px]" src="https://cdn2.weimob.com/saas/@assets/saas-fe-group-web-stc/img/weimobLogo.png?v=100" alt="" />
                  </div>
                </div>
                <p className="mt-2 text-gray-700">快速构建全渠道商城，实现多平台开店</p>
                
                <Slider 
                  className=""
                  {...sliderSetting}>
                  <div className="pb-2 text-center">
                    <img className="h-[420px] aspect-video object-cover inline-block" src="https://cdn2.weimob.com/saas/@assets/saas-fe-website-web-stc/_next/static/media/gandup-61.03aeec6d.png" alt="" />
                    <p className="text-gray-700">
                      打通微信、视频号、百度、支付宝、快手、小红书、QQ等多个平台一键开店、统一管理、多渠道引流
                    </p>
                  </div>
                  <div className="pb-2 text-center">
                    <img className="h-[420px] aspect-video object-cover inline-block" src="https://cdn2.weimob.com/saas/@assets/saas-fe-website-web-stc/_next/static/media/gandup-102.2cf12d15.png" alt="" />
                    <p className="text-gray-700">
                    支持实物、海淘、虚拟等多种商品类型。针对多应用、多模式商户提供不同应用能力
                    </p>
                  </div>
                  <div className="pb-2 text-center">
                    <img className="h-[420px] aspect-video object-cover inline-block" src="https://cdn2.weimob.com/saas/@assets/saas-fe-website-web-stc/_next/static/media/gandup-103.9cacb956.png" alt="" />
                    <p>数十种装修组件，上百套行业模板，满足不同行业搭建需求，帮助商家快速搭建属于自己的个性化独立商城</p>
                  </div>
                  <div className="pb-2 text-center">
                    <img className="h-[420px] aspect-video object-cover inline-block" src="https://cdn2.weimob.com/saas/@assets/saas-fe-website-web-stc/_next/static/media/gandup-104.8db38d5d.png" alt="" />
                    <p>将微信生态、腾讯生态及其他生态中的公域流量导流至微商城中，打造品牌自有私域流量池</p>
                  </div>
                  <div className="pb-2 text-center">
                    <img className="h-[420px] aspect-video object-cover inline-block" src="https://cdn2.weimob.com/saas/@assets/saas-fe-website-web-stc/_next/static/media/gandup-105.394bf0f5.png" alt="" />
                    <p>大转盘、拼团、种草笔记的等多种营销活动刺激客户购买。带动商家业绩增长提效</p>
                  </div>
                </Slider>

                
              </div>
              <div className="gradient-border flex-1 min-h-[480px] bg-white/75 ml-4 p-8 rounded-md">
                <h2 className="text-[40px] font-bold">全场景软件服务</h2>
                <p className="mt-2 text-gray-700"></p>
                <p className="mt-2">
                  
                </p>
              </div>
            </div>


          </div>

        </section>

        <section className="mt-[240px]">
          <div className="relative">
            
            <img className="absolute w-[60%] left-0 right-0 mx-auto top-[-180px] z-10" src="/images/evolution.png" alt="" />
            
            <div className="convey border-3 border-white rounded-sm px-16 py-12 pt-[220px]">
              <div className="flex">
                <div className="flex-1">
                  <h1 className="text-[48px]  text-[#4e60b1] text-right">选择适合您的交付模式</h1>
                </div>
                <div className="flex-1 ml-12">
                  <p className="text-[28px] "><q >轻交付</q></p>
                  <p className="text-[16px] text-gray-700 ml-8">基于实际业务为您挑选性价比最高的SaaS组合产品，快速搭建企业数字化体系</p>

                  <hr className="my-8 border-white/75 border-dotted" />

                  <p className="text-[28px]"><q >个性定制</q></p>
                  <p className="text-[16px] text-gray-700 ml-8">打造独一无二的专属应用</p>
                </div>
              </div>
            </div>
          </div>
          
        </section>

        <div id="trigger2" className="min-h-0  h-[1px]"></div>
        <section>
          <h1 className="text-[48px] font-bold ml-8 text-center mt-[120px]"></h1>


          <div className="flex" id="reveal2">
            <div className="flex-1">
              <h1 className="text-[42px] font-bold text-right">巫君平</h1>
              <h1 className="text-[36px] font-bold text-right">联合创始人 & CEO</h1>
              <p className="text-right">
               
              </p>
            </div>
            <div className="flex-1 ml-8">
              <p>这里放照片</p>
            </div>
          </div>
        </section>
        
        <div id="trigger3" className="min-h-0  h-[1px]"></div>
        <section className="rounded-sm p-[40px] mt-[120px] bg-gradient-to-br from-green-500/10 to-yellow-500/10">
          <div className="flex">
            <div className="relative w-[300px]">
              <img className="img-achivement object-contain" src="/images/achivements.png" alt="" />
            </div>
            <div className="flex-1">
              <h1 className="text-[48px] text-center">技术成就</h1>
            </div>
          </div>
        </section>
      
        <section>
          <div id="trigger4" className="min-h-0  h-[1px]"></div>

          <div className="" id="reveal4">

          </div>
        </section>

        <section>
          <div id="trigger5" className="min-h-0"></div>

          <div className="" id="reveal5">

          </div>
        </section>
       
      </div>

      <footer className="h-[200px] bg-black"> 
        <div className="container mx-auto text-gray-50 py-8">
          <div className="flex items-center  space-x-2 text-sm h-[24px]">
            <p>邮箱：</p>
            <Divider orientation="vertical" />
            <p>公司地址：</p>
          </div>
        </div>
      </footer>
    </main>
  )
}