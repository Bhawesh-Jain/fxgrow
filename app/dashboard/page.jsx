import Slider from "../ui/Slider/slider";
import AboutUs from "../ui/About/aboutus";
import Service from "../ui/Service/service";
import InvestmentDashboard from "../ui/InvestmentDashboard/InvestmentDashboard";
import DashboardItem from "../ui/dashboardItems/dashboardItem";

const Dashboard = () => {
   return (
      <div className="flex flex-col justify-center items-center pb-10 md:pb-0 select-none">

         <div className="mx-3 text-3xl my-5 flex flex-col gap-2 justify-center items-center">
            <h2 className="font-bold">Cross The Road</h2>
            <span className="text-red-600 font-bold">To Success</span>
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