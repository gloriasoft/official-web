import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Header activeKey="solutions"></Header>
      
      <div className="">
        <div className="bg-white/75" id="siyu">
          <div className="container mx-auto ">
            <div className="flex flex-wrap">
              <div className="">
                <div className="grid-cols-2 grid-rows-2">
                  <div>

                  </div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div className="flex-1">
                <Image className="w-full" src="/images/siyu.png" alt="siyu" width="300" height="300"></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}