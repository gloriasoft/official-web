
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import SectionFour from './achievements'

export default function About() {
  return (
    <div>
      <Header activeKey="about"></Header>
      <div className="text-center p-8">
        <div className="inline-block p-6 rounded-full overflow-hidden bg-white">
          <Image className="inline-block object-contain w-[120px] h-[120px]" src="/images/gloria-logo.svg" width="120" height="120" alt="logo-gloriasoft"></Image>
        </div>
        <h1 className="mt-2"><b>嘉兰荣光</b></h1>
        <h2><b>Gloriasoft</b></h2>
      </div>
      <div className="text-center text-gray-700">
        <p>嘉兰荣光©️ 致力于为企业提供一站式数字化解决方案</p>
        <p></p>
      </div>

      <section className="container mx-auto my-[60px]">
       
        <div className="relative">
          <div className="border-3 border-white rounded-sm relative">
            <div className="p-8 lg:p-12">
              <div className="py-2">
                <h1 className="leading-none text-[20px] md:text-[28px] text-[#4e60b1]">联合创始人 & CEO</h1>
              </div>
              <p className="text-[20px] md:text-[28px] ">
                <q>巫君平</q>
              </p>
              <p className="text-[16px] md:text-[16px] text-gray-700 ">

              </p>
            </div>
          </div>
      
        </div>
      </section>

      <SectionFour></SectionFour>

      <Footer></Footer>
    </div>
  )
}