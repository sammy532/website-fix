'use client'

import Link from 'next/link'
import logo from "@/public/icon.png"
import Image from 'next/image'


import { useClientMediaQuery } from '@/hooks/useClientMediaQuery'


export default function ContactUsEmail() {
  const isMobile = useClientMediaQuery('(max-width: 600px)')
  return (
    <div className="max-w-3xl mx-auto text-center md:pb-7">
      <div className="w-full">
        <h3 className="text-2xl md:text-2xl lg:text-2xl text-gray-900">
            Send us an email to <a href="mailto:support@travenue.org" className="font-bold text-blue-200"> support@travenue.org </a>
        </h3>
      </div>
    </div>
  )
}
