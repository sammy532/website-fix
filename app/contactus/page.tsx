"use client"
import React, { useState, FormEvent } from 'react'
import { sendEmail } from '@/utils/send-email';
import Link from 'next/link'

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import ContactUsTitle from "@/components/contactus-title";
import ContactUsEmail from "@/components/contactus-email";
import ContactUsForm from "@/components/contactus-form"


export type FormData = {
  name: string;
  email: string;
  message: string;
};


export default function ContactUs() {

   const { register, handleSubmit } = useForm<FormData>();

  const [emailSent, setEmailSent] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)


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
    <div>
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <ContactUsTitle />

              <ContactUsEmail />
              <ContactUsForm />
              {/* Form */}
              </div>
          </div>
        </section>
      </div>
  )
}
