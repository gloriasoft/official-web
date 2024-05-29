
import Header from "../components/header";

import SectionFour from './section4'

export default function About() {
  return (
    <div>
      <Header activeKey="about"></Header>
      公司介绍

      <div>
        公司愿景、理念、优势、宣传文案
      </div>

      <div>
        放公司的宣传照片
      </div>

      <div>
        放创始人介绍
      </div>

      <SectionFour></SectionFour>
    </div>
  )
}