'use client'

import Link from 'next/link'
import logo from "@/public/icon.png"
import Image from 'next/image'


import { useClientMediaQuery } from '@/hooks/useClientMediaQuery'


export default function DeleteAccountTitle() {
  const isMobile = useClientMediaQuery('(max-width: 600px)')
  return (
    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
      <h1 className="h1 text-blue-200">Delete Account</h1>
    </div>
  )
}
