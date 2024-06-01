"use client";
import { useState } from 'react';
import Header from "../components/header";
import Footer from '../components/footer';
import { Input, Button, Divider } from "@nextui-org/react"
import Image from 'next/image';

export default function Contacts() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')

  const [desc, setDesc] = useState('')

  function handleSubmit() {
    if (name.trim() === '' || phone.trim() === '') {
      return
    }
    if (window._hmt) {
      window._hmt.push([
        '_trackEvent',
        'contact',
        'submit',
        '-',
        [name, phone, company, desc].join('_')
      ])
      console.log('send success', [name, phone, company, desc].join('_'))
    }
  }


  return (
    <div className=''>
      <Header activeKey="contacts"></Header>
      <div className="md:min-h-[768px] flex items-center">
        <div className="container mx-auto">
          <div className='flex flex-wrap items-stretch justify-center gap-4'>
            <div className='min-w-[360px] max-w-[600px] px-4'>
              <p className='text-gray-500 py-4 text-sm'>留下您的联系方式，我们会主动与您联系</p>
              <form action='#' className="flex flex-col gap-8">
                <Input
                  isRequired
                  label="您的称呼"
                  placeholder="我们如何称呼您"
                  radius='sm'
                  value={name}
                  onValueChange={setName}></Input>
                <Input
                  isRequired
                  label="联系方式"
                  placeholder="留下您的联系方式，手机号或微信"
                  radius='sm'
                  value={phone}
                  onValueChange={setPhone}></Input>
                <Input
                  label="公司名称"
                  placeholder="您的公司或组织名称"
                  radius='sm'
                  value={company}
                  onValueChange={setCompany}></Input>
                <Input
                  label="咨询意向"
                  placeholder="您想了解哪方面的产品或服务"
                  radius='sm'
                  value={desc}
                  onValueChange={setDesc}></Input>
                <Button
                  type='submit'
                  onClick={handleSubmit}
                  className='w-full md:w-[200px] mx-auto bg-gradient-to-br from-red-500 to-yellow-500 text-white'
                  radius='sm'>确认</Button>
              </form>
            </div>
            <div className='hidden md:block w-[1px] bg-gray-300'></div>
            <div className='hidden md:block p-4 space-y-4 text-sm'>
              {/* <p>
                <b>公司邮箱：</b> <span className='ml-4'>contact@gloriasoft.cn</span>
              </p>
              <p>
                <b>联系电话</b> <span className='ml-4'>13041608631</span>
              </p> */}
              <div className=''>
                <p>
                  <b>扫码添加微信：</b>
                </p>
                <div>
                  <Image className="mt-4" src="/images/wechat-qrcode.jpg" width="180" height="180" alt="wechat"></Image>
                  
                </div>
              </div>
            </div>
            <div>
            
            </div>
          </div>
          
         
        </div>
      </div>
      <Footer></Footer>
     
    </div>
  )
}