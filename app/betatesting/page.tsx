"use client"
export const dynamic = 'force-static'
import React, { useState, FormEvent } from 'react'
import { sendEmail } from '@/utils/send-email';
import { someStupidFunction } from '@/utils/testing-post';
import Link from 'next/link'

import { FC } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Page() {
  const [emailSent, setEmailSent] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [emailInput, setEmailInput] = useState<string>("");

  const { register, handleSubmit } = useForm<FormData>();


  async function onSubmit(data: FormData, event) {
    if(isLoading){
      return;
    }
    setIsLoading(true);
    event.preventDefault();
    try {
      await sendEmail(data, setEmailSent, setError);
    } catch (error) {
      setError(true);
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-5">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
            <h1 className="h1">Beta Testing</h1>
          </div>
        </div>
      </div>
      <div className="max-w-sm mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap -mx-3 mb-10">
          <div className="w-full px-3">
            <label className="block text-gray-300 text-sm font-medium mb-2" htmlFor="email">Your Email <span className="text-red-600">*</span></label>
            <input
                    id="email"
                    type="email"
                    className='w-full resize-none rounded-md border border-gray-300 bg-gray-900 py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-500 focus:shadow-md'
                    placeholder="your@email.com"
                    {...register('email', { required: true })}
                    />
          </div>
        </div>
        <div className="text-sm text-gray-500 text-center">
          By submitting your email you agree with BetaApps
            <Link href="/privacy"
                  className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">
                   Privacy Policy
             </Link>.
        </div>
        {emailSent ? <div className="justify-center px-3 pt-3 text-green-500">
            Thanks!
          </div> : null}
          {error ? <div className="justify-center px-3 pt-3 text-red-500">
            We could not save your details. Please try again.
          </div> : null}
        <div className="flex flex-wrap -mx-3 mt-6 mb-10">
          <div className="flex w-screen justify-center ">
            <div className=" justify-center px-3 md:pt-10">
              <button
                    type="submit"
                    className="btn text-white bg-purple-600 hover:bg-purple-700 w-full disabled:bg-gray-300">
                  Register
              </button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </section>
  )
}
