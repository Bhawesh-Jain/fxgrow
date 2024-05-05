"use client"
import { useState } from "react";
import Navbar from "./ui/Navbar/navbar";
import Sidemenu from "./ui/Sidemenu/sidemenu";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col">
      <Navbar className="" isOpen={isOpen} setIsOpen={setIsOpen}/>
      
      <div className="flex-grow">
        <Sidemenu isOpen={isOpen} />
        Hello
      </div>
      
    </div>
  );
}
