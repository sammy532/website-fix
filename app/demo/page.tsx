'use client';
import { InlineWidget } from "react-calendly";


// import React from 'react'

export default function ContactUs() {

  const KEY = "";

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-2">

        <div className="max-w-3xl mx-auto text-center pb-6 md:pb-1">
          <h1 className="h1 text-blue-200">Book a Demo</h1>
        </div>
        </div>
      </div>
      <InlineWidget url="https://calendly.com/blaga-davidova/travenue-demo" styles={{
  				height: '700px'
				}}/>
    </section>
  )
}
