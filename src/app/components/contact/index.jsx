"use client";
import React, { useState } from 'react'
import IconContact from '@/app/icons/contact'
import { Tabs, Tab, Tooltip, Popover, PopoverTrigger, PopoverContent, Input, Button } from "@nextui-org/react";
import Image from 'next/image';
import { createPortal } from 'react-dom'

function ContactTrigger() {  
  const [isOpen, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')

  const [desc, setDesc] = useState('')


  function handleChange(state) {
    // console.log(state)
    document.body.style = state ? 'overflow: hidden;' : 'overflow: auto;'
  }

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
      
      const xhr = new XMLHttpRequest()
      const reqUrl = `${location.protocol}//${location.host}${location.pathname}?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}&company=${encodeURIComponent(company)}&desc=${encodeURIComponent(desc)}`
      xhr.open("GET", reqUrl)
      xhr.send()
    }
  }

  

  return (
    <Popover onOpenChange={handleChange} backdrop="opaque">
      <PopoverTrigger>
        <div
          className='hidden fixed right-8 bottom-8 bg-[#3f464d] w-[48px] h-[48px] rounded-full shadow-sm shadow-gray-700 md:flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-150'>
          <IconContact></IconContact>
        </div>
      </PopoverTrigger>
      <PopoverContent className='w-[360px]'>
        <Tabs
          fullWidth
          size="md"
          aria-label="Tabs form"
          classNames={{
            panel: ''
          }}
        >
          <Tab key="form" title="联系方式" className='w-full '>
            <div className=''>
              <form action='#' className="flex flex-col gap-4">
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
                  className='bg-gradient-to-br from-red-500 to-yellow-500 text-white' 
                  radius='sm'>确认</Button>
              </form>
            </div>

          </Tab>
          <Tab key="wechat" title="添加微信" className='w-full'>
            <div className='flex items-center justify-center h-full py-4'>
              <Image src="/images/wechat-qrcode.jpg" width="180" height="180" alt="wechat"></Image>
            </div>
            <p className='text-center text-gray-500'>扫码添加微信</p>
          </Tab>
        </Tabs>

      </PopoverContent>
    </Popover>
  )
}


export default function Contact() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  return mounted ? createPortal(<ContactTrigger />, typeof document === 'undefined' ? null : window.document.body) : null
} 



