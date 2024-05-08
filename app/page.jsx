"use client"
import { useState } from "react";
import Navbar from "./ui/Navbar/navbar";
import Sidemenu from "./ui/Sidemenu/sidemenu";
import Link from "next/link";
import PrimaryButton from "./ui/PrimaryButton/primaryButton";
import Image from "next/image";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col">
      <Navbar className="" showMenu={false} isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-grow">
        <Sidemenu isOpen={isOpen} />
      </div>

      {/* Header */}
      <div className="py-6 px-4 md:px-14 lg:px-32 flex flex-col justify-between md:flex-row bg-gradient-to-r from-slate-200 to-gray-200">
        <div className="px-3 py-10 md:py-20 md:px-7 lg:px14 w-full md:w-3/6 lg:w-4/6">
          <h1 className="text-2xl md:text-3xl	font-bold	">Cross The Road <span className="text-yellow-600	">To Success</span></h1>
          <p className="my-5 md:my-10 text-sm md:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio amet maiores dicta accusamus totam iusto quaerat esse fugit ea praesentium ut! Obcaecati, ullam incidunt provident quo cum animi unde error doloremque illum rem pariatur sunt excepturi necessitatibus distinctio illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, pariatur esse assumenda repellendus eos, natus maiores iusto commodi velit facilis voluptate non nulla at nostrum odit molestias recusandae eveniet quo.</p>

          <div className="flex flex-col">
            <PrimaryButton btnText="Login" link={"/"}/>
            <PrimaryButton btnText="Create Account" link={"/"}/>
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
      <div>
        <h1>Our Company Services</h1>

      </div>

    </div>
  );
}
