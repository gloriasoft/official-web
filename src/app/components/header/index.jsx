import React from "react";
import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";


export default function Header({ activeKey }) {
  

  return (
    <div className="sticky top-0 z-40">
      <Navbar
        position="static"
        classNames={{
          base: '',
          wrapper: 'px-12',
          content: 'justify-end',
          item: 'cursor-pointer border-b border-transparent '
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
            <span className="pl-2">嘉兰荣光 Gloriasoft</span>
          </Link>
          
        </NavbarBrand>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarContent justify="end" className="hidden sm:flex lg:space-x-2">
          <NavbarItem isActive={ activeKey === 'solutions' }>
            <Link className="text-black" href="/solutions">解决方案</Link>
          </NavbarItem>
          {/* <NavbarItem>
            <Link className="text-black" href="#achivements">技术成就</Link>
          </NavbarItem> */}
          <NavbarItem className="" isActive={ activeKey === 'about' }>
            <Link className="text-black" href="/about">公司简介</Link>
          </NavbarItem>
          <NavbarItem isActive={ activeKey === 'contacts' }>
            <Link className="text-black" href="contacts">联系我们</Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem key="">
            <Link
              className="w-full"
              href="/solutions"
              size="lg"
            >
              解决方案
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem key="">
            <Link
              className="w-full"
              href="/about"
              size="lg"
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
          <NavbarMenuItem key="">
            <Link
              className="w-full"
              href="/contacts"
              size="lg"
            >
              联系我们
            </Link>
          </NavbarMenuItem>

        </NavbarMenu>
      </Navbar>
    </div>
  )
}