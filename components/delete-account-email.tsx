'use client'
import React from "react";

import Link from 'next/link'
import logo from "@/public/icon.png"
import Image from 'next/image'
import { useForm } from "react-hook-form";

import { FC, SetStateAction, useState } from "react";

import { useClientMediaQuery } from '@/hooks/useClientMediaQuery'

import { faHeart, faEyeSlash, faEye} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import signIn from "@/firebase/auth/signin";
import reset from "@/firebase/auth/passwordReset";
import deleteFB from "@/firebase/auth/deleteUser";



export default function DeleteAccountEmail() {

  const formMethods = useForm();
    const { register, control, handleSubmit, formState: { errors } } = formMethods;

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState(null);
    const [error, setError] = useState(null);
    const [visible, setVisible] = useState(false)


  const handleForm = async (event) => {
    event.preventDefault()
    setError(null);
    setInfo(null);
    if(!email || !password){
      return;
    }
    setLoading(true);
    const formData = new FormData(event.currentTarget)
    const { result, error } = await signIn(email, password);
    if (error) {
        setLoading(false);
        setError("We could not delete your account. Please try again.")
        return console.log("error while logging in: ", error)
    }else{
        if(result.user){
          const { resultDelete, errorDelete } = await deleteFB(result.user);
          if(errorDelete){
            setError("We could not delete your account. Please try again.")
          }else{
            setLoading(false);
            setInfo("Your account is now deleted.");
            setEmail("");
            setPassword("")
            console.log("it was ok? ", result)
          }
        }
    }
  }

  const resetPass = async (event) => {
    setError(null);
    setInfo(null);
    if(!email){
      return
    }
    const { result, error } = await reset(email);
    if(error){
      setError("We could not send an email to reset your password.")
    }else{
      setInfo("We sent you an email to change your password")
    }
  }

  return (
    <div className="max-w-sm mx-auto">
      <div className="flex items-center">
        <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
        <div className="text-gray-400">Please, fill your details</div>
        <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
      </div>
      <form onSubmit={handleForm}>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <label className="block text-purple-600 text-sm font-medium mb-1" htmlFor="email">Your Email <span className="text-red-600">*</span></label>
            <input
                    id="email"
                    type="email"
                    className='w-full resize-none rounded-md border border-gray-300 bg-gray-900 py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-500 focus:shadow-md'
                    placeholder="your@email.com"
                    onChange={(e) => setEmail(e.target.value)}
                    />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full px-3">
            <div className="flex flex-row justify-between">
              <label className="text-purple-600 text-sm font-medium mb-1" htmlFor="email">Your Password <span className="text-red-600">*</span></label>
              <a onClick={resetPass} className="cursor-pointer text-purple-600 text-sm font-medium mb-1" htmlFor="email">Reset Password</a>
            </div>
            <input
                    id="password"
                    type={visible ? "text" : "password"}
                    className='w-full resize-none rounded-md border border-gray-300 bg-gray-900 py-3 px-6 text-base font-medium text-white outline-none focus:border-purple-500 focus:shadow-md'
                    placeholder="Your Password"
                    onChange={(e) => setPassword(e.target.value)}
            />
            <div className="w-full flex justify-end flex-row">
              {visible ?
                    <FontAwesomeIcon className='mr-3 -mt-8' icon={faEye} onClick={() => setVisible(!visible)}/> :
                    <FontAwesomeIcon className='mr-3 -mt-8' icon={faEyeSlash} onClick={() => setVisible(!visible)}/>
              }
            </div>
          </div>
        </div>
         {info ? <div className="justify-center px-3 pt-3 text-green-500">
            {info}
          </div> : null}
        {error ? <div className="justify-center px-3 pt-3 text-red-500">
          {error}
        </div> : null}
        <div className="flex flex-wrap -mx-3 mt-6">
          <div className="flex w-screen justify-center ">
            <div className=" justify-center px-3 ">
              <button
                    type="submit"
                    disabled={loading}
                    className="btn text-white bg-purple-600 hover:bg-purple-700 w-full disabled:bg-gray-300">
                  DELETE
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
