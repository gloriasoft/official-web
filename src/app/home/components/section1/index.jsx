import { Tabs, Tab, Divider, Button, Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
import Link from 'next/link'

export default function SectionOne() {
  return (
    <section className=" bg-white/30">
      <div className="container mx-auto">

        <div className="min-h-[480px] py-4 md:py-12">
          {/* <h2 className="text-4xl text-center">面向企业的定制业务</h2> */}
          {/* <h4 className='text-sm text-gray-700 py-4'></h4> */}
          <div className="flex flex-wrap justify-center md:justify-between gap-4">
           
            <Card isFooterBlurred shadow='none' radius='sm' className="w-[320px] min-h-[450px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                {/* <p className="text-tiny text-white/60 uppercase font-bold">New</p> */}
                <h4 className="text-white font-medium text-2xl">全平台小程序</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="pop apps"
                className="rounded-none z-0 w-full h-full object-cover hover:scale-125"
                src="/images/apps.jpg"
              />
              <CardFooter
                style={{
                  '-webkit-backdrop-filter': 'blur(8px) saturate(1.5)'
                }}
                className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-gray-100 text-sm">1000+电商小程序研发经验</p>
                  {/* <p className='text-gray-100 text-sm'>电商 零售 餐饮 社交 游戏 活动</p> */}
                </div>
                
                <Link href="/solutions/develop#miniprogram" className="leading-none text-white">
                  <Button
                    className="text-tiny" 
                    color="primary" 
                    radius="full" 
                    size="sm">
                    了解更多
                  </Button>
                  </Link>
              </CardFooter>
            </Card>

            <Card isFooterBlurred shadow='none' radius='sm' className="w-[320px] min-h-[450px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                {/* <p className="text-tiny text-white/60 uppercase font-bold">New</p> */}
                <h4 className="text-white font-medium text-2xl">企业官网</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="web design"
                className="rounded-none z-0 w-full h-full object-cover hover:scale-125 "
                src="/images/webdesign.png"
              />
              <CardFooter
                style={{
                  '-webkit-backdrop-filter': 'blur(8px) saturate(1.5)'
                }}
                className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-gray-700 text-sm">专业UI和交互设计，提升用户体验</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  了解更多
                </Button>
              </CardFooter>
            </Card>

            <Card isFooterBlurred shadow='none' radius='sm' className="w-[320px] min-h-[450px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                {/* <p className="text-tiny text-white/60 uppercase font-bold">New</p> */}
                <h4 className="text-white font-medium text-2xl">后台系统</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="admin system"
                className="rounded-none z-0 w-full h-full object-cover hover:scale-125 "
                src="/images/admin-sys.jpeg"
              />
              <CardFooter
                style={{
                  '-webkit-backdrop-filter': 'blur(8px) saturate(1.5)'
                }}
                className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-gray-700 text-sm">深度结合业务，定制数字化流程</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  了解更多
                </Button>
              </CardFooter>
            </Card>

            <Card isFooterBlurred shadow='none' radius='sm' className="w-[320px] min-h-[450px]">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                {/* <p className="text-tiny text-white/60 uppercase font-bold">New</p> */}
                <h4 className="text-white font-medium text-2xl">数据平台</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="data charts"
                className="rounded-none z-0 w-full h-full object-cover hover:scale-125 "
                src="/images/data-analysis.jpg"
              />
              <CardFooter
                style={{
                  '-webkit-backdrop-filter': 'blur(8px) saturate(1.5)'
                }}
                className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                  <p className="text-gray-100 text-sm">全链路数据可视化，助力决策</p>
                </div>
                <Button className="text-tiny" color="primary" radius="full" size="sm">
                  了解更多
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}