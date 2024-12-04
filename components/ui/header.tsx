
'use client'

import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Navbar from './navbar'
import LegalMenu from "./legal-menu"
import logo from "@/public/icon.png"
import Image from 'next/image'
import LogoHeader from "./logo-header"
import { useClientMediaQuery } from '@/hooks/useClientMediaQuery'


export default function Header() {
  const isMobile = useClientMediaQuery('(max-width: 600px)')
  return (
    <header className="absolute w-full z-30">
      <link rel="icon" href="/icon.ico" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <LogoHeader />

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <LegalMenu />
              </li>
              <li>
                <Link href="/contactus" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
