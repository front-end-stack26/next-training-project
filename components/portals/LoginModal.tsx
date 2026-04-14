"use client"

import { useState } from "react";
import Portal from "../Portal";
import { FaGithub  } from "react-icons/fa";
import { signInGithub } from "@/app/actions/auth";
import router from "next/router";
import { signin } from '@/app/actions/auth'


const LoginModal = ({isOpen, onClose}) => {  
  if (!isOpen) return null;

  return (
     <Portal>
    
        {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-60">
        <div className="bg-white w-96 p-6 rounded-xl shadow-xl relative">
          <h2 className="text-xl font-bold mb-4">Login</h2>

          <form action={signin}
            className="flex flex-col gap-4"
          >
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border rounded-md px-4 py-2"
              />
              {/* {state?.errors?.email && (
                <p className="text-red-500 text-sm">{state.errors.email[0]}</p>
              )} */}
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full border rounded-md px-4 py-2"
              />
              {/* {state?.errors?.password && (
                <p className="text-red-500 text-sm">{state.errors.password[0]}</p>
              )} */}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-900 transition"
            >
              Login
            </button>
          </form>

          
          <form action={signInGithub}>
            <button
              type="submit"
              className="w-full mt-4 py-2 border rounded-md flex items-center justify-center gap-2 hover:bg-gray-50"
            >
              <FaGithub size={20} />
              Login with GitHub
            </button>
          </form>


          {/* create an account */}
            <div className="mt-6 text-center text-sm">
            <span className="text-gray-500">Don't have an account?</span>
            <a
                href="/project-demo/signup"
                className="ml-1 text-black font-medium hover:underline"
            >
                Create an account
            </a>
            </div>


          {/* Close button */}
          <button
            onClick={onClose}
            className="mt-4 w-full text-center text-sm text-gray-500 underline"
          >
            Close
          </button>
        </div>
      </div>

</Portal>   
  )
}

export default LoginModal