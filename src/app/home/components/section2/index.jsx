
import React from "react";
import { Tabs, Tab, Divider, Button, Card, CardBody } from '@nextui-org/react'
import Image from "next/image";
import Slider from './slider'
import {
  IconCheck
} from '@/app/icons/icon-park'

export default function SectionTwo() {
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
    nextArrow: (<></>),
    prevArrow: (<></>),
  }


  return (
    <section className="my-8">
      <div className="container mx-auto" id="reveal1">
        <div className="flex flex-wrap gap-8">
          <Card className="flex-1 min-w-[350px] bg-white/75" radius="sm" shadow="none">
            <CardBody className="pb-[45px] px-8">
              <div className="flex">
                <h2 className="flex-1 text-[20px] sm:text-[24px]  lg:text-[36px] xl:text-[40px] font-bold">全渠道商城</h2>
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
            </CardBody>

          </Card>
          <div className="flex-1 min-w-[350px] sm:min-w-[680px]">

            <div className="h-full grid grid-cols-2 grid-rows-2 gap-2 md:gap-4 lg:gap-8">
              <div className="bg-white/75 p-4 md:p-8 rounded-md gradient-border">
                <h2 className="text-lg md:text-2xl font-bold">SEO</h2>
                <h4 className="text-sm text-gray-700">搜索引擎优化</h4>
                <ul className="text-sm py-4 space-y-2">
                  <li className="flex items-center gap-2"><IconCheck fill="#2e9b56" /> 标题、内容、结构优化</li>
                  <li className="flex items-center gap-2"><IconCheck fill="#2e9b56" /> 品牌词、关键词匹配</li>
                  <li className="flex items-center gap-2"><IconCheck fill="#2e9b56" /> 内链、外链调整</li>
                </ul>
              </div>
              <div className="bg-white/75 p-4 md:p-8 rounded-md gradient-border">
                <h2 className="text-lg md:text-2xl font-bold">私域运营</h2>
                <h4 className="text-sm text-gray-700">提升企业品牌私域流量增长</h4>
                <ul className="text-sm py-4 space-y-2">
                  <li className="flex items-center gap-2"><IconCheck fill="#2e9b56" /> 线上、线下流量导入</li>
                  <li className="flex items-center gap-2"><IconCheck fill="#2e9b56" /> 用户分群，定向营销</li>
                  <li className="flex items-center gap-2"><IconCheck fill="#2e9b56" /> 互动、转化、复购、推荐</li>
                </ul>
              </div>
              <div className="bg-white/75 p-4 md:p-8 rounded-md gradient-border">
                <h2 className="text-lg md:text-2xl font-bold">内容营销</h2>
                <h4 className="text-sm text-gray-700">公众号与视频图文</h4>
                <ul className="text-sm py-4 space-y-2">
                  <li className="flex items-center gap-2"><IconCheck fill="#2e9b56" /> 公众号功能配置</li>
                  <li className="flex items-center gap-2"><IconCheck fill="#2e9b56" /> 推文制定</li>
                  <li className="flex items-center gap-2"><IconCheck fill="#2e9b56" /> 营销图文及视频</li>
                </ul>
              </div>
              <div className="bg-white/75 p-4 md:p-8 rounded-md gradient-border">
                <h2 className="text-lg md:text-2xl font-bold">广告投放</h2>
                <h4 className="text-sm text-gray-700">主流互联网媒介投放</h4>
                <ul className="text-sm py-4 space-y-2">
                  <li className="flex items-center gap-2"><IconCheck fill="#2e9b56" /> 腾讯广告</li>
                  <li className="flex items-center gap-2"><IconCheck fill="#2e9b56" /> 巨量引擎</li>
                  <li className="flex items-center gap-2"><IconCheck fill="#2e9b56" /> 小红书投放</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
}