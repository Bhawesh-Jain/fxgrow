"use client"
import { useState } from "react";
import Navbar from "./ui/Navbar/navbar";
import Sidemenu from "./ui/Sidemenu/sidemenu";
import Link from "next/link";
import PrimaryButton from "./ui/PrimaryButton/primaryButton";
import Image from "next/image";
import Service from "./ui/Service/service";
import Footer from "./ui/footer/footer";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col select-none">
      <Navbar className="" showMenu={true} isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-grow">
        {isOpen && <Sidemenu isOpen={isOpen} />}
      </div>

      {/* Header */}
      <div className="py-6 px-4 md:px-14 lg:px-32 flex flex-col justify-between md:flex-row bg-gradient-to-r from-slate-200 to-gray-200">
        <div className="px-3 py-10 md:py-20 md:px-7 lg:px14 w-full md:w-3/6 lg:w-4/6">
          <h1 className="text-2xl md:text-3xl	font-bold	">Cross The Road <span className="text-yellow-600	">To Success</span></h1>
          <p className="my-5 md:my-10 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio amet maiores dicta accusamus totam iusto quaerat esse fugit ea praesentium ut! Obcaecati, ullam incidunt provident quo cum animi unde error doloremque illum rem pariatur sunt excepturi necessitatibus distinctio illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, pariatur esse assumenda repellendus eos, natus maiores iusto commodi velit facilis voluptate non nulla at nostrum odit molestias recusandae eveniet quo.</p>

          <div className="flex flex-col">
            <PrimaryButton btnText="Login" link={"/login"} />
            <PrimaryButton btnText="Create Account" link={"/register"} />
          </div>

        </div>

        <div className="relative w-full md:w-3/6 lg:w-2/6 p-10 my-5 h-60 md:h-auto md:my-5 lg:my-10">
          <Image
            className="md:p-14"
            src="/trade.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* About Us */}
      <div className="py-6 px-4 md:px-14 lg:px-32 flex flex-col justify-between md:flex-row">
        <div className="px-3 py-10 md:py-20 md:px-7 lg:px14 w-full md:w-3/6 lg:w-4/6">
          <h1 className="text-2xl md:text-3xl	font-bold	">About Our Company</h1>
          <p className="my-5 md:my-10 text-sm md:text-base lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio amet maiores dicta accusamus totam iusto quaerat esse fugit ea praesentium ut! Obcaecati, ullam incidunt provident quo cum animi unde error doloremque illum rem pariatur sunt excepturi necessitatibus distinctio illo! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p className="my-5 md:my-10 text-sm md:text-base lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio amet maiores dicta accusamus totam iusto quaerat esse fugit ea praesentium ut! Obcaecati.</p>
          <p className="my-5 md:my-10 text-sm md:text-base lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio amet maiores dicta accusamus totam iusto quaerat esse fugit ea praesentium ut! Obcaecati, ullam incidunt provident quo </p>
        </div>

        <div className="relative w-full md:w-3/6 lg:w-2/6 p-10 my-5 h-60 md:h-auto md:my-5 lg:my-10">
          <Image
            className="md:p-14"
            src="/about.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Service */}
      <div className="text-center p-5 md:p-14 lg:px-32 lg:py-24 flex flex-col items-center	text-white bg-black">
        <h1 className="text-2xl md:text-3xl	font-bold">Our Company Services</h1>
        <span className="w-32 h-1 m-6 rounded-full bg-yellow-600"></span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sit deleniti. Magnam autem eius et aut laboriosam, totam consequuntur aspernatur!</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 sm:gap-6">
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
      </div>

      {/* Contact Us */}
      <div className="p-5 md:p-6 lg:px-10 lg:py-14 flex flex-col items-center ">
        <h1 className="text-2xl md:text-3xl	font-bold">Contact Us</h1>
        <span className="w-12 h-1 m-6 rounded-full bg-yellow-600" />
        <p className="text-sm text-center">Send us a message and we'll respond as soon as possible!</p>

        <div className="p-4 w-full">
          <form className="md:mx-20">
            <div className="grid gap-6 md:grid-cols-2 mb-5">

              <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
              </div>

              <div>
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
              </div>

              <div>
                <label for="phone" className="block mb-2 text-sm font-medium text-gray-900">Your phone</label>
                <input type="text" maxLength="10" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
              </div>

              <div>
                <label for="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                <input type="text" id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
              </div>

            </div>

            <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900">Description</label>
              <textarea type="text" id="subject" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
            </div>

            <div className="flex items-start my-5">
              <div className="flex items-center h-5">
                <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
              </div>

              <label for="terms" className="ms-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-blue-600 hover:underline ">terms and conditions</a></label>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Submit</button>
          </form>
        </div>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}
