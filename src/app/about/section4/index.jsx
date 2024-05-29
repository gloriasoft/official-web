import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardBody, Button, Chip } from "@nextui-org/react";
import IconGitHub from "@/app/icons/github";
export default function SectionFour() {
  return (
    <section id="achivements" className="rounded-sm p-4 md:p-8 mt-[120px] bg-gradient-to-br from-green-500/10 to-yellow-500/10">
      {/* <section className="rounded-sm p-10 md:p-[40px] mt-[120px] bg-gradient-to-br from-green-500/10 to-yellow-500/10"> */}
      <h1 className="text-[48px] font-bold mb-2">开源贡献</h1>
      <div className="flex items-center text-xl py-2 mb-2">
        <Chip variant="flat" startContent={<IconGitHub />} className="bg-white">
          <Link className="font-bold leading-none bg-gradient-to-r from-red-600 to-yellow-600 bg-clip-text text-transparent" href="https://github.com/gloriasoft">Gloriasoft</Link>
        </Chip>
        <span className="ml-2">将长期致力于主流技术的开源建设</span>  
      </div>
      <div className="flex items-stretch space-x-4 flex-wrap">
        {/* <div className="hidden md:block relative m-w-[240px] mr-16">
          <img className="img-achivement object-contain" src="/images/achivements.png" alt="" />
        </div> */}
        <Card className="flex-1 m-w-[320px]" radius="sm">
          <CardBody>
            <Link href="https://github.com/gloriasoft/veaury" target="_blank">
              <Image className="mx-auto" src="/images/vuereact-combined.png" alt="" width="56" height="56" />
            </Link>
            <h1 className="text-2xl font-bold ml-2 text-center">
              <Link href="https://github.com/gloriasoft/veaury" target="_blank">Veaury</Link>
              <Link href="https://github.com/gloriasoft/veaury" target="_blank">
                <img className="ml-2 w-[100px] inline-block" src="https://img.shields.io/github/stars/gloriasoft/veaury" alt="veaury-stars"></img>
              </Link>
            </h1>
            <p className="leading-6 p-4">
              Veaury是一个帮助开发者在项目中同时使用Vue3和React的工具库，主要运用在项目迁移、技术栈融合的开发模式、跨技术栈使用第三方组件的场景。
            </p>
          </CardBody>
        </Card>

        <Card className="flex-1" radius="sm">
          <CardBody>
            <Link href="https://github.com/gloriasoft/uniapp2wxpack" target="_blank">
              <Image className="mx-auto my-[9px]" src="/images/uniapp-plugin.png" alt="" width="48" height="48" />
            </Link>
            <h1 className="text-2xl font-bold ml-2 text-center">
              <Link href="https://github.com/gloriasoft/uniapp2wxpack" target="_blank">
                uniapp2wxpack
              </Link>
              <Link href="https://github.com/gloriasoft/uniapp2wxpack" target="_blank">
                <img className="ml-2 w-[100px] inline-block" src="https://img.shields.io/github/stars/gloriasoft/uniapp2wxpack" alt="uniapp2wxpack-stars"></img>
              </Link>
            </h1>
            <p className="leading-6 p-4">uniapp2wxpack是唯一被UniApp官网收录的三方插件，解决UniApp和原生小程序混合开发问题。</p>
          </CardBody>
        </Card>

        <Card className="flex-1" radius="sm">
          <CardBody>
            <Link href="https://github.com/gloriasoft/uni-crazy-router" target="_blank">
              <Image className="mx-auto my-[9px]" src="/images/uniapp-plugin.png" alt="" width="48" height="48" />
            </Link>
            <h1 className="text-2xl font-bold ml-2 text-center">
              <Link href="https://github.com/gloriasoft/uni-crazy-router" target="_blank">
                <span className="font-bold">uni-crazy-router</span>
              </Link>
              <Link href="https://github.com/gloriasoft/uni-crazy-router" target="_blank">
                <img className="ml-2 w-[100px] inline-block" src="https://img.shields.io/github/stars/gloriasoft/uni-crazy-router" alt="uni-crazy-router-stars"></img>
              </Link>
            </h1>
            <p className="leading-6 p-4">一个更贴合UniApp的router插件，一切都使用UniApp原生钩子实现和方法实现，抛弃了vue-router的影子。</p>
          </CardBody>
        </Card>

        <Card className="flex-1" radius="sm">
          <CardBody>
            <Link href="https://github.com/gloriasoft/uni-pages-hot-modules" target="_blank">
              <Image className="mx-auto my-[9px]" src="/images/uniapp-plugin.png" alt="" width="48" height="48" />
            </Link>
            <h1 className="text-2xl font-bold ml-2 text-center">
              <Link href="https://github.com/gloriasoft/uni-pages-hot-modules" target="_blank">
                <span className="font-bold">uni-pages-hot-modules</span>
              </Link>
              <Link href="https://github.com/gloriasoft/uni-pages-hot-modules" target="_blank">
                <img className="ml-2 w-[100px] inline-block" src="https://img.shields.io/github/stars/gloriasoft/uni-pages-hot-modules" alt="uni-pages-hot-modules-stars"></img>
              </Link>
            </h1>
            <p className="leading-6 p-4">UniApp的pages.json模块化依赖及模块化热重载方案</p>
          </CardBody>
        </Card>
        {/* <div className="flex-1 space-y-4">
          <h1 className="text-[48px] font-bold">开源贡献</h1>
          <p></p>
          <Card
            radius="none"
            shadow="none">
            <CardBody>
              <div className="p-2">
                <div className="flex items-center mb-4">
                  <Link href="https://github.com/gloriasoft/veaury">
                    <Image className="" src="/images/vuereact-combined.png" alt="" width="56" height="56" />
                  </Link>
                  <Link href="https://github.com/gloriasoft/veaury">
                    <h1 className="text-2xl font-bold ml-2">Veaury</h1>
                  </Link>
                  <Link href="https://github.com/gloriasoft/veaury">
                    <img className="ml-2 w-[100px]" src="https://img.shields.io/github/stars/gloriasoft/veaury" alt="veaury-stars"></img>
                  </Link>
                </div>
                <div className="text-lg leading-8">
                  <p className="">
                    Veaury 是基于React和Vue3的工具库，主要用于React和Vue在一个项目中公共使用的场景，主要运用在项目迁移、技术栈融合的开发模式、跨技术栈使用第三方组件的场景。
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card
            radius="none"
            shadow="none">
            <CardBody>
              <div className="p-2">
                <div className="flex items-center mb-4">
                  <Image className="" src="/images/uniapp-plugin.png" alt="" width="48" height="48" />
                  <h1 className="text-2xl font-bold ml-2">UniApp的相关插件</h1>
                </div>
                <p>
                  我们对Uniapp生态提供了相关的插件贡献
                </p>
                <div className="text-lg leading-8 space-y-4">
                  <div>
                    <Link href="https://github.com/gloriasoft/uniapp2wxpack">
                      <span className="font-bold">uniapp2wxpack</span>
                    </Link>
                    <Link href="https://github.com/gloriasoft/uniapp2wxpack">
                      <img className="ml-2 w-[100px] inline-block" src="https://img.shields.io/github/stars/gloriasoft/uniapp2wxpack" alt="uniapp2wxpack-stars"></img>
                    </Link>
                    <p className="text-gray-800 text-medium">唯一被UniApp官网收录的三方插件，解决uni-app和原生小程序混合开发问题。</p>
                  </div>
                  <div>
                    <Link href="https://github.com/gloriasoft/uni-crazy-router">
                      <span className="font-bold">uni-crazy-router</span>
                    </Link>
                    <Link href="https://github.com/gloriasoft/uni-crazy-router">
                      <img className="ml-2 w-[100px] inline-block" src="https://img.shields.io/github/stars/gloriasoft/uni-crazy-router" alt="uni-crazy-router-stars"></img>
                    </Link>
                    <p className="text-gray-800 text-medium"> 一个更贴合UniApp的router插件，一切都使用UniApp原生钩子实现和方法实现，抛弃了vue-router的影子。</p>
                  </div>
                  <div>
                    <Link href="https://github.com/gloriasoft/uni-pages-hot-modules">
                      <span className="font-bold">uni-pages-hot-modules</span>
                    </Link>
                    <Link href="https://github.com/gloriasoft/uni-pages-hot-modules">
                      <img className="ml-2 w-[100px] inline-block" src="https://img.shields.io/github/stars/gloriasoft/uni-pages-hot-modules" alt="uni-pages-hot-modules-stars"></img>
                    </Link>
                    <p className="text-gray-800 text-medium">UniApp的pages.json模块化依赖及模块化热重载方案</p>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>

        </div> */}
      </div>
    </section>
  )
}