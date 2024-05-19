import InvestmentDashboard from "../ui/InvestmentDashboard/InvestmentDashboard";
import DashboardItem from "../ui/dashboardItems/dashboardItem";
import Link from "next/link";
import Image from "next/image";

const Dashboard = () => {
   return (
      <div className="flex flex-col justify-center  items-center pb-5 md:pb-0 select-none">

         <Link className="py-5" href="/">
            <div className="flex flex-row gap-3 cursor-pointer select-none">
               <div className="color=#f53131">
                  <Image
                     src="/logo-icon.png"
                     width={55}
                     height={55}
                     alt=""
                     className="rounded-full"
                  />
               </div>
               <div className="flex flex-col text-xl ml-2">
                  <span className="text-black text-2xl font-bold">IForex</span>
                  <span className="text-gray-900 font-semibold">Your Trading Partner</span>
               </div>
            </div>
         </Link>
         <div className="mx-3 text-3xl my-5 flex flex-col gap-2 justify-center text-center items-center">
            <h2 className="font-bold">The Most</h2>
            <span className="text-red-600 font-bold">Secure Currency Exchanger</span>
         </div>

         <p className="text-base mt-4 my-5 text-red-500">*********</p>

         <h2 className="font-bold text-lg">Investment Dashboard</h2>

         <InvestmentDashboard />

         <p className="text-base mt-4 my-5 text-red-500">*********</p>

         <span className="text-red-600 font-bold text-2xl mb-5">Live Market</span>

         <DashboardItem slider={true} />
      </div>
   )
}

export default Dashboard