'use client'
import { useState } from "react";


import Link from 'next/link'
import logo from "@/public/icon.png"
import Image from 'next/image'

import { useClientMediaQuery } from '@/hooks/useClientMediaQuery'


import localFont from 'next/font/local'

const dyuthi = localFont({
  src: [
    {
      path: '../public/fonts/Dyuthi-Regular.ttf',
    }
  ],
  variable: '--font-dyuthi'
})


export default function ContactUsForm() {

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [emailSent, setEmailSent] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const onSubmitEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true); // Loading state starts

    try {
      // Your Api call or server action here, simulating a server request below
      const response = await fetch('https://first-worker.blaga-davidova.workers.dev/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });
      console.log("response: ", response);
      if(response.status === 200){
          setEmailSent(true)
      }else{
        setError(true);
      }
    } catch (error: any) {
      setError(true)
    } finally {
      setIsLoading(false); // Loading state ends
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      <div className="flex items-center">
        <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
        <div className="text-gray-600">Or, fill the form</div>
        <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
      </div>
      <form onSubmit={onSubmitEmail}>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block text-blue-200 text-2xl md:text-2xl lg:text-2xl font-bold" htmlFor="full-name">Full Name <span className="text-red-600">*</span></label>
            <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  disabled={isLoading}
                  required={true}
                  className='w-full resize-none rounded-md border border-gray-300 bg-blue-300 py-3 px-6 text-base font-bold text-black outline-none focus:border-purple-500 focus:shadow-md'
                  placeholder="First and last name" />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block text-blue-200 text-2xl md:text-2xl lg:text-2xl font-bold" htmlFor="email">Your Email <span className="text-red-600">*</span></label>
            <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={isLoading}
                    required={true}
                    className='w-full resize-none rounded-md border border-gray-300 bg-blue-300 py-3 px-6 text-base font-bold text-black outline-none focus:border-purple-500 focus:shadow-md'
                    placeholder="your@email.com"
                    />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block text-blue-200 text-2xl md:text-2xl lg:text-2xl font-bold" htmlFor="password">Message <span className="text-red-600">*</span></label>
            <textarea
              rows={4}
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              disabled={isLoading}
              required={true}
              placeholder='Type your message'
              className='w-full rounded-md border border-gray-300 bg-blue-300 py-3 px-6 text-base font-bold text-black outline-none focus:border-purple-500 focus:shadow-md'
              ></textarea>
          </div>
        </div>
        {emailSent ? <div className="justify-center px-3 pt-3 text-green-500 font-bold">
          Your email was sent. Thanks!
        </div> : null}
        {error ? <div className="justify-center px-3 pt-3 text-red-500 font-bold">
          We could not send your email. Please try again.
        </div> : null}
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="flex w-screen justify-center ">
            <div className=" justify-center px-3 ">
              <button
                    type="submit"
                    disabled={isLoading}
                    className="btn text-white bg-purple-600 hover:bg-purple-700 w-full disabled:bg-gray-300">
                  { isLoading ? "SENDING" : "SEND" }
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
