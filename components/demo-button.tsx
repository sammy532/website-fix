'use client'


import { useClientMediaQuery } from '@/hooks/useClientMediaQuery'

import localFont from 'next/font/local'

const dyuthi = localFont({
  src: [
    {
      path: '../public/fonts/Dyuthi-Regular.ttf',
    },
    {
      path: '../public/fonts/Dyuthi-Regular.woff',
    },
    {
      path: '../public/fonts/Dyuthi-Regular.woff2',
    }
  ],
  variable: '--font-dyuthi'
})


export default function DemoButton() {
  const isMobile = useClientMediaQuery('(max-width: 600px)')
  if(isMobile){
    return (
      <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
        <div data-aos="fade-up" data-aos-delay="600">
          <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto sm:ml-4"
            href="/demo">
            Demo
          </a>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
        <div data-aos="fade-up" data-aos-delay="600">
          <a className="btn text-white bg-purple-600 hover:bg-purple-700 w-full sm:w-auto sm:ml-4"
            href="/demo">
            Demo
          </a>
        </div>
      </div>
    )
  }
}
