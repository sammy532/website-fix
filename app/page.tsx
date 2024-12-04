import type { Metadata } from 'next'

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

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import { IsClientCtxProvider } from './is-client-ctx';

import {Suspense} from "react";

export default function Home() {
  return (
    <IsClientCtxProvider>
        <Hero />
        <Features />
        <Zigzag />
    </IsClientCtxProvider>
  )
}
