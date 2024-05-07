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
      <Navbar className="" isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-grow">
        <Sidemenu isOpen={isOpen} />
      </div>

      <div className="flex flex-col justify-between md:flex-row">
        <div className="p-10">
          <h1 className="text-3xl	font-bold	">Cross The Road <span className="text-yellow-600	">To Success</span></h1>
          <p className="my-10 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio amet maiores dicta accusamus totam iusto quaerat esse fugit ea praesentium ut! Obcaecati, ullam incidunt provident quo cum animi unde error doloremque illum rem pariatur sunt excepturi necessitatibus distinctio illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, pariatur esse assumenda repellendus eos, natus maiores iusto commodi velit facilis voluptate non nulla at nostrum odit molestias recusandae eveniet quo.</p>

          <div className="flex flex-col">
            <Link href="/login"><PrimaryButton btnText="Login" /></Link>
            <Link href="/register"><PrimaryButton btnText="Create Account" /></Link>
          </div>

        </div>

        <div className="relative w-full h-50 p-10 my-10">
          <Image
            className="p-4"
            src="/stock-market.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

    </div>
  );
}
