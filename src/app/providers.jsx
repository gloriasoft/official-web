'use client'

import {NextUIProvider} from '@nextui-org/react'
import React from 'react'

export function Providers({children}) {

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'production' && window.location.protocol === 'http:') {
      window.location.replace('https://gloriasoft.cn' + window.location.pathname)
    }
  }, [])

  return (
    <NextUIProvider className='min-h-screen'>
      {children}
    </NextUIProvider>
  )
}