"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownSection,
  Button,
} from "@nextui-org/react";

import { 
  IconDown,
  IconWeixinMiniApp,
  IconWebPage,
  IconSystem,
  IconDataScreen,
  IconSeo,
  IconCircularConnection,
  IconCreative,
  IconAd,
  IconSixPoints,
} from '@/app/icons/icon-park'


export default function Header({ activeKey }) {
  const router = useRouter()

  function handleDropdownClick(key) {
    router.push(key)
  }

  return (
    <div className="sticky top-0 z-40">
      <Navbar
        position="static"
        classNames={{
          base: '',
          wrapper: 'px-12',
          content: 'justify-end',
          item: 'cursor-pointer'
        }}
        style={{
          '-webkit-backdrop-filter': 'blur(16px) saturate(1.5)'
        }}
        maxWidth="full">
        <NavbarBrand>
          <Link className="leading-none text-black" href="/home">
            <Image
              src="/images/gloria-logo.svg"
              alt=""
              width="32"
              height="32"
              className="logo inline-block" />
            {/* <span className="pl-2 font-semibold bg-clip-text bg-gradient-to-r from-green-700 via-yellow-500 to-red-700 text-transparent">嘉兰荣光 Gloriasoft</span> */}
            <span className="pl-2">嘉兰荣光 Gloriasoft</span>
          </Link>
          
        </NavbarBrand>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarContent justify="end" className="hidden sm:flex lg:space-x-2">
          <Dropdown showArrow={true}>
            <NavbarItem isActive={ activeKey === 'solutions' }>
              <DropdownTrigger>
                <div className="flex items-center antialiased">
                  <span>公司业务</span>
                  <IconDown />
                </div>
              </DropdownTrigger>
              {/* <Link className="text-black" href="/solutions">解决方案</Link> */}
            </NavbarItem>
            <DropdownMenu
              aria-label="services list"
              className="w-[340px]"
              itemClasses={{
                base: "gap-4",
              }}
              onAction={handleDropdownClick}
            >
              <DropdownSection title="软件开发" classNames={{
                heading: 'text-sm'
              }} showDivider>
                <DropdownItem
                  key="/solutions/develop#miniprogram"
                  textValue="miniprogram"
                  description="微信、支付宝、抖音、快手、小红书小程序"
                  startContent={<IconWeixinMiniApp theme="multi-color" size="24" fill={['#58be6b' ,'#58be6b' ,'#FFF' ,'#ffffff']} strokeWidth={2} />}
                >
                  全平台小程序
                </DropdownItem>
                <DropdownItem
                  key="/solutions/develop#website"
                  textValue="website"
                  description="企业PC、H5官网，公众号主页"
                  startContent={<IconWebPage theme="filled" size="24" fill="#58be6b" strokeWidth={2}/>}
                >
                  企业官网
                </DropdownItem>
                <DropdownItem
                  key="/solutions/develop#admin"
                  textValue="admin"
                  description="企业中后台系统定制集成"
                  startContent={<IconSystem theme="filled" fill="#58be6b" size="24" strokeWidth={2} />}
                >
                  后台系统
                </DropdownItem>
                <DropdownItem
                  key="/solutions/develop#bi"
                  textValue="BI"
                  description="企业数据平台搭建，用户行为分析和数据看板"
                  startContent={<IconDataScreen theme="filled" fill="#58be6b" size="22" strokeWidth={2} />}
                >
                  <span className="">数据平台</span>
                </DropdownItem>
              </DropdownSection>
              <DropdownSection title="引流推广" showDivider classNames={{
                heading: 'text-sm'
              }}>
                <DropdownItem
                    key="SEO"
                    textValue="SEO"
                    description="搜索引擎优化（SEO）和搜索引擎营销（SEM）"
                    startContent={<IconSeo theme="filled" fill="#f05a82" size={24} strokeWidth={2} />}
                  >
                  SEO
                </DropdownItem>
                <DropdownItem
                    key="operation"
                    textValue="operation"
                    description="提升企业品牌私域流量增长"
                    startContent={<IconCircularConnection theme="filled" fill="#f05a82" size="24" strokeWidth={2} />}
                  >
                  私域运营
                </DropdownItem>
                <DropdownItem
                    key="market"
                    textValue="market"
                    description="推文制定、营销图文及视频"
                    startContent={<IconCreative theme="filled" fill="#f05a82" size="24" strokeWidth={2} />}
                  >
                  内容营销
                </DropdownItem>
                <DropdownItem
                    key="ad"
                    textValue="ad"
                    description="腾讯广告、巨量引擎、快手广告、小红书投放"
                    startContent={<IconAd theme="filled" fill="#f05a82" size="24" strokeWidth={2} />}
                  >
                  广告投放
                </DropdownItem>
              </DropdownSection>
              <DropdownItem
                  key="saas"
                  textValue="saas"
                  description="基于企业已有的SaaS平台进行定制扩展"
                  startContent={<IconSixPoints theme="filled" fill="#f28822" size="24" strokeWidth={2} />}
                >
                  
                  SaaS定制
                </DropdownItem>
              
              
            </DropdownMenu>
          </Dropdown>

          
          {/* <NavbarItem>
            <Link className="text-black" href="#achivements">技术成就</Link>
          </NavbarItem> */}
          <NavbarItem className="" isActive={ activeKey === 'about' }>
            <Link className="text-black" href="/about">公司简介</Link>
          </NavbarItem>
          <NavbarItem isActive={ activeKey === 'contacts' }>
            <Link className="text-black" href="/contacts">联系我们</Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu className="bg-white">
          <NavbarMenuItem key="about" className="border-b-1 border-gray-200 py-2">
            <Link
              className="w-full text-medium text-gray-700"
              href="/about"
            >
              公司简介
            </Link>
          </NavbarMenuItem>
          
          {/* <NavbarMenuItem key="">
            <Link
              className="w-full"
              href="#"
              size="lg"
            >
              技术成就
            </Link>
          </NavbarMenuItem> */}
          <NavbarMenuItem key="contacts" className="border-b-1 border-gray-200 py-2">
            <Link
              className="w-full text-medium text-gray-700"
              href="/contacts"
            >
              联系我们
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem key="solutions">
            <Link
              className="w-full text-medium text-gray-700"
              href="/solutions"
            >
              公司业务
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  )
}