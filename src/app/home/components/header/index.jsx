import React, { } from "react";
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


export default function Header() {
  return (
    <div className="sticky top-0 z-40 bg-white">
      <Navbar
        position="static"
        classNames={{
          base: 'container mx-auto',
          content: 'justify-end',
          item: 'cursor-pointer border-b border-transparent hover:border-gray-700 sm:p-2 md:px-4 md:py-2'
        }}
        maxWidth="full">
        <NavbarBrand>
          <Image
            src="/images/gloria-logo.svg"
            alt=""
            width="32"
            height="32"
            className="logo inline-block" />
          <span className="pl-2">嘉兰荣光 Gloriasoft</span>
        </NavbarBrand>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarContent justify="end" className="hidden sm:flex lg:space-x-2">
          <NavbarItem className="">
            <Link className="text-black">公司简介</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-black">产品介绍</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-black" href="#achivements">技术成就</Link>
          </NavbarItem>
          <NavbarItem>
            <Link className="text-black">联系我们</Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarMenu>
          <NavbarMenuItem key="">
            <Link
              className="w-full"
              href="#"
              size="lg"
            >
              公司简介
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem key="">
            <Link
              className="w-full"
              href="#"
              size="lg"
            >
              产品介绍
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem key="">
            <Link
              className="w-full"
              href="#"
              size="lg"
            >
              技术成就
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem key="">
            <Link
              className="w-full"
              href="#"
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