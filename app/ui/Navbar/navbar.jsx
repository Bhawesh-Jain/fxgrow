"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdArrowBack, MdFlipToBack, MdMenu, MdPerson } from 'react-icons/md';
import Sidemenu from "../Sidemenu/sidemenu";

const Navbar = ({ showMenu, link="/"}) => {

   const [isOpen, setSidemenu] = useState(false);

   const handleMenuClick = () => {
      setSidemenu(!isOpen)
   }

   return (
      <div className="fixed w-full h-14 bg-white z-40">
         <div className="flex flex-row items-center justify-between px-4 py-3 h-14">
            <Link href={link}>
               <div className="flex flex-row cursor-pointer select-none">
                  <div className="color=#f53131">
                     <Image
                        src="/logo-icon.png"
                        width={35}
                        height={35}
                        alt=""
                        className="rounded-full"
                     />
                  </div>
                  <div className="flex flex-col text-xs ml-2 font-bold">
                     <span className="text-blue-500 text-sm">IForex</span>
                     <span className="text-gray-500">Your Trading Partner</span>
                  </div>
               </div>
            </Link>
            {showMenu && <div className="cursor-pointer" onClick={handleMenuClick}>
               {isOpen && <MdArrowBack size={25} /> || <MdPerson size={25} />}
            </div>
            }
            
         
            {isOpen && <Sidemenu />}
         </div>
      </div>
   )
}

export default Navbar