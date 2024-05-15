"use client"
import { useState } from "react";
import Navbar from "./ui/Navbar/navbar";
import Sidemenu from "./ui/Sidemenu/sidemenu";
import Footer from "./ui/footer/footer";
import Header from "./ui/header/header";
import Service from "./ui/Service/service";
import AboutUs from "./ui/About/aboutus";

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
