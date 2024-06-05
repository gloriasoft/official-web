import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import { 
  Button, 
  Divider, 
  Chip,
  Card,
  CardBody,
} from "@nextui-org/react"
import Image from "next/image"
import MiniPlatforms from "./components/mini-platforms"

export default function Develop() {
  return (
    <div>
      <Header></Header>
      <div>
        <section className="min-h-screen bg-gradient-radial from-[#e5f0f9] from-30%  to-[#d6e2ed] to-70%" style={{
          backgroundSize: '100vw 100vh',
          backgroundPosition: 'center -50vh'
        }}>
          <div className="container mx-auto">
            <div id="miniprogaram" className="flex items-center pt-8">
              <div className="flex-1">
                <h1 className=" text-[48px] font-bold mt-8">
                  只需一次开发
                  <br/>获得全平台通用小程序
                </h1>
                <h3 className="mt-2">我们使用跨平台技术，只需进行一次开发，无需额外付费即可快速部署到多个平台。</h3>
                <h3 className=""></h3>
                <div className="my-8">
                  <Button radius="full" size="lg" className="w-full sm:w-[180px] bg-gradient-to-br from-red-500 to-yellow-500 text-white">立即咨询</Button>
                </div>

                <div>
                  这里放各个平台的图片
                </div>
              </div>
              <div className="flex-1 hidden md:block text-center">
                <MiniPlatforms></MiniPlatforms>
                
              </div>
             
            </div>

            <div className="border rounded-md bg-white p-4 flex items-center h-full space-x-4 shadow-sm shadow-black/15">
              <div className="flex-1 text-center p-4">
                <div className="flex items-center justify-center space-x-2">
                  <h2 className="text-medium md:text-lg font-semibold">最低成本部署</h2>
                  <Chip 
                    classNames={{
                      base: 'border-white/50 shadow-red-500/30 shadow-sm shadow-red-500',
                      content: 'drop-shadow font-semibold'
                    }}
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white">省钱</Chip>
                </div>
                <p className="text-tiny md:text-medium text-gray-500 mt-2">基于云开发模式，省去高昂的服务器成本</p>
                <p className="text-tiny md:text-medium text-gray-500">维护费用最低至每月¥39</p>
              </div>
              <Divider orientation="vertical" className="h-12"></Divider>
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <h2 className="text-medium md:text-lg font-semibold">开发到上线全托管</h2>

                  <Chip 
                    classNames={{
                      base: 'border-white/50 shadow-red-500/30 shadow-sm shadow-[#2c7c2c]',
                      content: 'drop-shadow font-semibold'
                    }}
                    className="bg-gradient-to-r from-[#2c7c2c] to-[#379484] text-white">省心</Chip>
                </div>
                <p className="text-tiny md:text-medium text-gray-500 mt-2">高质量交付，提供全链路测试，验收即上线。</p>
                <p className="text-tiny md:text-medium text-gray-500">小程序上线后一年内免费维护</p>
              </div>
              <Divider orientation="vertical" className="h-12"></Divider>
              <div className="flex-1 text-center">
                <div className="flex items-center justify-center space-x-2">
                  <h2 className="text-medium md:text-lg font-semibold">多种场景解决方案</h2>
                  <Chip 
                    classNames={{
                      base: 'border-white/50 shadow-red-500/30 shadow-sm shadow-[#e9a513]',
                      content: 'drop-shadow font-semibold'
                    }}
                    className="bg-gradient-to-r from-[#e9a513] to-[#f1c019] text-white">省力</Chip>
                </div>
                <p className="text-tiny md:text-medium text-gray-500 mt-2">丰富的插件集成，提供各种场景解决方案</p>
                <p className="text-tiny md:text-medium text-gray-500">如人脸识别、实名认证、文件上传等</p>
              </div>
            </div>
          </div>
          

          <div className="p-4 md:p-8 mt-8">
            <h1 className="text-4xl text-center">平台能力对接</h1>
            <h2 className="text-center text-gray-600 mt-2">我们提供平台对接服务，帮助企业小程序快速接入平台级能力</h2>
          </div>

          <div className="">
            <div className="container mx-auto py-8">
              <div className="flex flex-wrap h-[480px] items-stretch justify-center gap-4 md:gap-8">
                <div className="flex-1">
                  <Card 
                    shadow="none" 
                    radius="sm"
                    className="h-full min-w-[360px]  border">
                    <CardBody className="p-4 md:p-8">
                      <h1 className="text-2xl">微信、支付宝优惠券</h1>
                      <p>代金券、商家券</p>
                      <div className="h-[300px] border">放微信会员开卡配图</div>
                    </CardBody>
                  </Card>
                </div>
                <div className="flex-1 h-full flex flex-col gap-4 md:gap-8">
                  <div className="flex-1">
                    <Card 
                      shadow="none"
                      radius="sm"
                      className="h-full min-w-[360px]  border">
                      <CardBody className="p-4 md:p-8">
                        <h1 className="text-2xl">微信、支付宝会员卡</h1>
                      </CardBody>
                    </Card>
                  </div>
                  <div className="flex-1">
                    <Card 
                      shadow="none" 
                      radius="sm"
                      className="h-full min-w-[360px]  border">
                      <CardBody className="p-4 md:p-8">
                        <h1>会员卡</h1>
                      </CardBody>
                    </Card>
                  </div>
                
                </div>
              </div>
            </div>
          </div>

          <div className=" p-4 md:p-8">
            <div className="container mx-auto">
              <div className="flex gap-4 md:gap-8">
                <div className="flex-1">
                  <div>
                    <h1 className="text-3xl">商圈积分</h1>
                    <h3>智慧商圈行业解决方案，是微信支付基于商圈场景，通过“拉客进场”、“刺激消费”、“持续经营”，助力商圈全面数字化升级。</h3>
                   
                    <p>商圈接入后，用户可一键开通会员+快速积分服务，在商圈门店消费后可享自动积分及出行服务、门店服务等积分权益。增加用户会员价值感，拉动商圈会员活跃与消费。</p>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="h-[360px] border">商圈积分配图</div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        
        
      </div>
      <Footer></Footer>
    </div>
  )
}