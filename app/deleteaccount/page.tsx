"use client"
import React, { useState, FormEvent } from 'react'
import DeleteAccountTitle from "@/components/delete-account-title";
import DeleteAccountEmail from "@/components/delete-account-email";




export default function DeleteAccount() {




  return (
    <div>
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <DeleteAccountTitle />

              <DeleteAccountEmail />

              {/* Form */}
              </div>
          </div>
        </section>
      </div>
  )
}
