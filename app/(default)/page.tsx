import type { Metadata } from 'next'
import Head from 'next/head';
import "../global.css";

config.autoAddCss = false

export const metadata: Metadata = {
  title: 'Travenue',
  description: 'The Social Network for Travelers',
  openGraph: {
    images: 'https://www.travenue.org/og.png',
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

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:image" href="https://www.travenue.org/opengraph-image.png" />
        <link rel="preload" as="font" href="fonts/Dyuthi-Regular.ttf" as="font" type="font/ttf" crossOrigin="">
        <link rel="preload" as="font" href="fonts/Dyuthi-Regular.woff" as="font" type="font/woff" crossOrigin="">
        <link rel="preload" as="font" href="fonts/Dyuthi-Regular.woff2" as="font" type="font/woff2" crossOrigin="">
      </Head>
      <Hero />
      <Features />
      <Zigzag />
    </>
  )
}
