
export default function Footer() {
  return (
    <div className="">
      <div className="container mx-auto px-12 py-8 border-t border-gray-100">
        <div className="flex flex-wrap justify-evenly gap-8 text-gray-700">
          <div className="flex flex-col text-sm space-y-2">
            <div className="font-bold">软件开发</div>
            <div>小程序</div>
            <div>企业官网</div>
            <div>后台系统</div>
            <div>数据平台</div>
          </div>
          <div className="flex flex-col text-sm space-y-2">
            <div className="font-bold">引流推广</div>
            <div>SEO</div>
            <div>私域运营</div>
            <div>内容营销</div>
            <div>广告投放</div>
          </div>
          <div className="flex flex-col text-sm space-y-2">
            <div className="font-bold">SaaS定制</div>
            <div>商城</div>
            <div>CRM</div>
            <div>企业微信</div>
          </div>
          <div className=" flex flex-col text-sm space-y-2">
            <div className="font-bold">联系方式</div>
          
            <div>邮箱：contact@gloriasoft.cn</div>
            <div>电话：13041608631</div>
            <div className="hidden">公司地址：xxxxxxxxxxxxx</div>
          
          </div>
        </div>
        <div className="text-center text-sm py-4 mt-8 text-gray-700">
          <div className="flex flex-wrap justify-center gap-2">
            <span>上海嘉兰荣光网络科技有限公司版权所有</span>
            <span>www.gloriasoft.cn All Rights Reserved</span>
            <a href="https://beian.miit.gov.cn" target="_blank" className="hover:text-blue-500">沪ICP备2024072858号</a>
          </div> 
          <div className="hidden">
            沪公网安备 xxxxxxxxxxxxx号
          </div>
        </div>
      </div>
    </div>
  )
}