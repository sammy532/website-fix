'use client'


import { useClientMediaQuery } from '@/hooks/useClientMediaQuery'

import localFont from 'next/font/local'
//
// const dyuthi = localFont({
//   src: [
//     {
//       path: '../public/fonts/Dyuthi-Regular.ttf',
//     },
//     {
//       path: '../public/fonts/Dyuthi-Regular.woff',
//     },
//     {
//       path: '../public/fonts/Dyuthi-Regular.woff2',
//     }
//   ],
//   variable: '--font-dyuthi'
// })


export default function LogoSubtitle() {
  const isMobile = useClientMediaQuery('(max-width: 600px)')
  if(isMobile){
    return (
      <div className="flex justify-center -mt-1" data-aos="fade-up" data-aos-delay="200">
        <p className="text-xl text-blue-200 mt-0 mb-8 dyuthi">THE</p>
        <p className="text-xl text-blue-200 mb-8 ml-2 space-x-3 font-bold"> Social Network for Travelers</p>
      </div>
    )
  }
  else{
    return (
      <div className="flex justify-center -mt-4" data-aos="fade-up" data-aos-delay="200">
        <p className="text-xl text-blue-200 mt-1 mb-8 dyuthi">THE</p>
        <p className="text-xl text-blue-200 mb-8 ml-2 space-x-3 font-bold"> Social Network for Travelers</p>
      </div>
    )
  }
}
