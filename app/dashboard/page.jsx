import Link from "next/link";
import Header from "../ui/header/header"
import { IoIosArrowUp } from "react-icons/io";

const Dashboard = () => {
   return (
      <div className="flex flex-col justify-center items-center">

         <div className="mx-3 text-3xl my-5 flex flex-col gap-2 justify-center items-center">
            <h2 className="font-bold">Cross The Road</h2>
            <span className="text-red-600 font-bold">To Success</span>
         </div>

         <p className="text-base mt-4 my-5 text-red-500">*********</p>

         <h2 className="font-bold text-lg">Investment Dashboard</h2>

         <div className="flex flex-col w-full lg:w-2/3">

            <div className="bg-slate-800 rounded-lg m-3 md:mx-10 md:my-6 px-4 pt-4 pb-2 md:px-6 md:pt-6 md:pb-3">

               <div className="flex flex-row justify-between text-white text-sm">
                  <div className="flex flex-col items-center gap-2">
                     <h2 className="">Invested Amount</h2>
                     <h2 className="font-bold">₹50000</h2>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                     <h2 className="">Market Value</h2>
                     <h2 className="font-bold">₹50000</h2>
                  </div>

               </div>

               <div className="bg-slate-600 rounded-lg mx-4 my-4">

                  <div className="flex flex-row justify-around text-white px-5 py-5 text-sm">
                     <div className="flex flex-col items-start md:items-center gap-2 w-1/2">
                        <h2 className="">Overall Gain</h2>
                        <h2 className="font-bold">₹50000</h2>
                     </div>

                     <span className="h-12 my-auto bg-white w-0.5" />

                     <div className="flex flex-col items-end md:items-center gap-2 w-1/2">
                        <h2 className="">Today Profit</h2>
                        <div className="flex flex-row gap-2 items-center">
                           <IoIosArrowUp size={20} className={` ${"filter fill-green-500"} `} />
                           <h2 className="font-bold">₹50000</h2>
                        </div>
                     </div>

                  </div>

               </div>

            </div>

            <div className="flex flex-row justify-between mx-3  md:mx-10 text-white text-center gap-6">
               <Link className="w-1/2 bg-slate-800 p-5 rounded-lg hover:cursor-pointer" href="/">
                  Deposit
               </Link>
               <Link className="w-1/2 bg-slate-800 p-5 rounded-lg hover:cursor-pointer" href="/">
                  Withdraw
               </Link>

            </div>

         </div>



      </div>
   )
}

export default Dashboard