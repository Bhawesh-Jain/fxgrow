"use client"
import { login } from "@/libs/actions"
import Link from "next/link"
import { useState } from "react";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const Login = () => {
   const [errorMsg, setErrorMsg] = useState("");
   const [btn, setBtn] = useState(true);

   const handleOnChange = () => {
      setErrorMsg('')
   }

   const handleForm = async (formData) => {

      setErrorMsg("")

      const rawFormData = {
         email: formData.get('email'),
         password: formData.get('password')
      }

      try {
         setBtn(false)
         const res = await fetch(`${baseUrl}/api/auth/login`, {
            method: "POST",
            headers: {
               "Content-type": "application/json"
            },
            body: JSON.stringify(rawFormData),
         });

         if (res.ok) {
            const body = await res.json();

            if (body.status) {
               login(body.data)
            } else {
               setErrorMsg(body.message)
               setBtn(true)
            }
         } else {
            setBtn(true)
         }
      } catch (error) {
         setErrorMsg(error)

         setBtn(true)
      }
   }


   return (
      <>
         {/* <section className="bg-gray-50 "> */}
         <section className="bg-[url('/gif-2.gif')] bg-no-repeat bg-center bg-cover h-screen">
            <div className="flex flex-col gap-3 items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
               <Link href="/" className="flex gap-4 items-center mb-6 text-6xl font-semibold text-white">
                  <img className="rounded-full w-24 h-24 mr-2" src="/logo-icon.png" alt="logo" />
                  IForex
               </Link>
               <div className="w-full bg-slate-50 bg-opacity-15 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                     <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                        Login
                     </h1>
                     <form className="space-y-4 md:space-y-6" action={handleForm}>
                        <div>
                           <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                           <input
                              required
                              type="email"
                              name="email"
                              id="email"
                              onChange={handleOnChange}
                              className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                           />
                        </div>
                        <div>
                           <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Password</label>
                           <input
                              required
                              type="password"
                              name="password"
                              id="password"
                              placeholder="••••••••"
                              onChange={handleOnChange}
                              className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " />
                        </div>
                        <div className="flex items-center justify-between">
                           <div className="flex items-start">
                              <div className="flex items-center h-5">
                                 <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300 " />
                              </div>
                              <div className="ml-3 text-sm">
                                 <label htmlFor="remember" className="text-gray-200 ">Remember me</label>
                              </div>
                           </div>

                        </div>
                        {btn && <button type="submit" className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>}
                        <p className="text-sm font-light text-gray-200 ">
                           Don't have an account yet? <Link href="/register" className="font-medium text-red-600 hover:underline ">Sign up</Link>
                        </p>
                     </form>
                     {errorMsg && errorMsg.length > 0 && <p className="text-center text-red-600">{errorMsg}</p>}
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default Login