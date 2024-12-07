'use client'


import { useClientMediaQuery } from '@/hooks/useClientMediaQuery'

import localFont from 'next/font/local'

import "../global.css";

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


export default function LogoTitle() {
  const isMobile = useClientMediaQuery('(max-width: 600px)')
  if(isMobile){
    return (
      <h1 className="h11 mt-2 mb-4 text-blue-200 dyuthi" data-aos="fade-up">TRAVENUE</h1>
    )
  }
  else{
    return (
    <div className="h12 text-blue-200 dyuthi"
            data-aos="fade-up"
            data-aos-delay={200}
            >
          TRAVENUE
        </div>
    )
  }
}
