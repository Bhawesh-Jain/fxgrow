"use client"
import { useState } from "react";
import Navbar from "./ui/Navbar/navbar";
import Sidemenu from "./ui/Sidemenu/sidemenu";
import Footer from "./ui/footer/footer";
import Header from "./ui/header/header";
import Service from "./ui/Service/service";
import AboutUs from "./ui/About/aboutus";
import ContactUs from "./ui/contact/contactus";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col select-none">
      <Navbar className="" showMenu={true} isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-grow">
        {isOpen && <Sidemenu isOpen={isOpen} />}
      </div>

      <Header />

      <AboutUs />

      <Service />

      <ContactUs />

      <Footer />

    </div>
  );
}
