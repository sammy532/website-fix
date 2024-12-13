'use client'

import Link from 'next/link'
import logo from "@/public/icon.png"
import Image from 'next/image'


import { useClientMediaQuery } from '@/hooks/useClientMediaQuery'


export default function LogoHeader() {
  const isMobile = useClientMediaQuery('(max-width: 600px)')
  return (

          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/"  aria-label="Cruip">
              <Image className={"w-14 xs:mt-10 sm:mt-10 md:mt-40 lg:mt-40  xs:w-16 sm:w-18 md:w-32 lg:w-52"}
                    src={logo}
                    alt="logo"
                    />
            </Link>
          </div>
  )
}
