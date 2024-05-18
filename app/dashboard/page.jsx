import Link from "next/link";
import Header from "../ui/header/header"
import { IoIosArrowUp } from "react-icons/io";
import Slider from "../ui/Slider/slider";
import Image from "next/image";
import AboutUs from "../ui/About/aboutus";
import Service from "../ui/Service/service";
import InvestmentDashboard from "../ui/InvestmentDashboard/InvestmentDashboard";

const Dashboard = () => {
   return (
      <div className="flex flex-col justify-center items-center pb-10 select-none">

         <div className="mx-3 text-3xl my-5 flex flex-col gap-2 justify-center items-center">
            <h2 className="font-bold">Cross The Road</h2>
            <span className="text-red-600 font-bold">To Success</span>
         </div>

         <p className="text-base mt-4 my-5 text-red-500">*********</p>

         <h2 className="font-bold text-lg">Investment Dashboard</h2>

         <InvestmentDashboard />

         <p className="text-base mt-4 my-5 text-red-500">*********</p>

         <span className="text-red-600 font-bold text-2xl mb-5">Live Market</span>

         <Slider />

         <AboutUs />

         <Service />
      </div>
   )
}

export default Dashboard