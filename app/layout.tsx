import './css/style.css'

import type { Metadata } from 'next'

import { Inter, Architects_Daughter } from 'next/font/google'

import { useIsClient } from './is-client-ctx';

import Header from '@/components/ui/header'
import Banner from '@/components/banner'
import Footer from '@/components/ui/footer'

import localFont from '@next/font/local'

const dyuthi = localFont({
  src: [
    {
      path: '../public/fonts/Dyuthi-Regular.ttf',
      weight: '800',
      color: "text-blue-200"
    }
  ],
  variable: '--font-dyuthi'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Travenue',
  description: 'The Social Network for Travelers',
  openGraph: {
    images: 'https://www.travenue.org/opengraph-image.png',
  },
  icons: {
    icon: '/icon.png',
    favicon: '*/icon.ico',
    shortcut: '/icon.png',
    apple: '/icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/icon.png',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dyuthi.variable} ${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-lightgrey-100 text-gray-100 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
