import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Button, Chip } from "@nextui-org/react";
import { IconGithub } from "@/app/icons/icon-park";

export default function SectionFour() {
  return (
    <section id="achivements" className="p-4 md:p-8 my-12 ">
      <div className="container mx-auto">
        <h1 className="text-xl md:text-[28px] font-bold">开源贡献</h1>
        <div className="flex items-center text-medium py-2 mb-2">
          <Link className="flex items-center" href="https://github.com/gloriasoft">
            <IconGithub size="18" /><span className="ml-[2px]">Gloriasoft</span>
          </Link>
          <span className="ml-1">对主流技术的开源建设</span>
         
        </div>
        <div className="inline-flex items-stretch gap-4 flex-wrap">
          <Card className="flex-1 min-w-[300px]" radius="sm" shadow="none">
            <CardBody>
              <Link href="https://github.com/gloriasoft/veaury" target="_blank">
                <Image className="mx-auto" src="/images/vuereact-combined.png" alt="" width="56" height="56" />
              </Link>
              <h1 className="text-medium md:text-xl font-bold ml-2 text-center">
                <Link href="https://github.com/gloriasoft/veaury" target="_blank">Veaury</Link>
                <Link href="https://github.com/gloriasoft/veaury" target="_blank">
                  <img className="ml-2 md:w-[100px] inline-block" src="https://img.shields.io/github/stars/gloriasoft/veaury" alt="veaury-stars"></img>
                </Link>
              </h1>
              <p className="text-sm md:text-medium leading-6 p-4">
                Veaury是一个帮助开发者在项目中同时使用Vue3和React的工具库，主要运用在项目迁移、技术栈融合的开发模式、跨技术栈使用第三方组件的场景。
              </p>
            </CardBody>
          </Card>

          <Card className="flex-1 min-w-[300px]" radius="sm" shadow="none">
            <CardBody>
              <Link href="https://github.com/gloriasoft/uniapp2wxpack" target="_blank">
                <Image className="mx-auto my-[9px]" src="/images/uniapp-plugin.png" alt="" width="48" height="48" />
              </Link>
              <h1 className="text-medium md:text-xl font-bold ml-2 text-center">
                <Link href="https://github.com/gloriasoft/uniapp2wxpack" target="_blank">
                  uniapp2wxpack
                </Link>
                <Link href="https://github.com/gloriasoft/uniapp2wxpack" target="_blank">
                  <img className="ml-2 md:w-[100px] inline-block" src="https://img.shields.io/github/stars/gloriasoft/uniapp2wxpack" alt="uniapp2wxpack-stars"></img>
                </Link>
              </h1>
              <p className="text-sm md:text-medium leading-6 p-4">uniapp2wxpack是唯一被UniApp官网收录的三方插件，解决UniApp和原生小程序混合开发问题。</p>
            </CardBody>
          </Card>

          <Card className="flex-1 min-w-[300px]" radius="sm" shadow="none">
            <CardBody>
              <Link href="https://github.com/gloriasoft/uni-crazy-router" target="_blank">
                <Image className="mx-auto my-[9px]" src="/images/uniapp-plugin.png" alt="" width="48" height="48" />
              </Link>
              <h1 className="text-medium md:text-xl font-bold ml-2 text-center">
                <Link href="https://github.com/gloriasoft/uni-crazy-router" target="_blank">
                  <span className="font-bold">uni-crazy-router</span>
                </Link>
                <Link href="https://github.com/gloriasoft/uni-crazy-router" target="_blank">
                  <img className="ml-2 md:w-[100px] inline-block" src="https://img.shields.io/github/stars/gloriasoft/uni-crazy-router" alt="uni-crazy-router-stars"></img>
                </Link>
              </h1>
              <p className="text-sm md:text-medium leading-6 p-4">一个更贴合UniApp的router插件，一切都使用UniApp原生钩子实现和方法实现，抛弃了vue-router的影子。</p>
            </CardBody>
          </Card>

          <Card className="flex-1 min-w-[300px]" radius="sm" shadow="none">
            <CardBody>
              <Link href="https://github.com/gloriasoft/uni-pages-hot-modules" target="_blank">
                <Image className="mx-auto my-[9px]" src="/images/uniapp-plugin.png" alt="" width="48" height="48" />
              </Link>
              <h1 className="text-medium md:text-xl font-bold ml-2 text-center">
                <Link href="https://github.com/gloriasoft/uni-pages-hot-modules" target="_blank">
                  <span className="font-bold">uni-pages-hot-modules</span>
                </Link>
                <Link href="https://github.com/gloriasoft/uni-pages-hot-modules" target="_blank">
                  <img className="ml-2 md:w-[100px] inline-block" src="https://img.shields.io/github/stars/gloriasoft/uni-pages-hot-modules" alt="uni-pages-hot-modules-stars"></img>
                </Link>
              </h1>
              <p className="text-sm md:text-medium leading-6 p-4">UniApp的pages.json模块化依赖及模块化热重载方案</p>
            </CardBody>
          </Card>
        </div>
      </div>
      {/* <section className="rounded-sm p-10 md:p-[40px] mt-[120px] bg-gradient-to-br from-green-500/10 to-yellow-500/10"> */}

    </section>
  )
}