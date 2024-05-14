import Header from "../ui/header/header"

const Dashboard = () => {
   return (
      <div className="flex flex-col justify-center items-center">

         <div className="mx-3 text-3xl my-5 flex flex-col gap-2 justify-center items-center">
            <h2 className="font-bold">Cross The Road</h2>
            <span className="text-red-600 font-bold">To Success</span>
         </div>

         <p className="text-base mt-4 my-5 text-red-500">*********</p>

         <h2 className="font-bold text-lg">Investment Dashboard</h2>

         <div className="w-full">

            <div className="bg-slate-800 rounded-lg m-3 md:m-10 px-5 py-3 ">

               <div className="flex flex-row justify-around text-white text-sm">
                  <div className="flex flex-col items-center gap-2">
                     <h2 className="">Invested Amount</h2>
                     <h2 className="font-bold">₹50000</h2>
                  </div>

                  <div className="flex flex-col items-center gap-2">
                     <h2 className="">Market Value</h2>
                     <h2 className="font-bold">₹50000</h2>
                  </div>

               </div>

               <div className="bg-slate-600 rounded-lg m-4">

                  <div className="flex flex-row justify-around text-white px-5 py-5 text-sm">
                     <div className="flex flex-col items-center gap-2">
                        <h2 className="">Invested Amount</h2>
                        <h2 className="font-bold">₹50000</h2>
                     </div>

                     <span className="h-12 my-auto bg-white w-0.5" />

                     <div className="flex flex-col items-center gap-2">
                        <h2 className="">Market Value</h2>
                        <h2 className="font-bold">₹50000</h2>
                     </div>

                  </div>

               </div>

            </div>

         </div>


      </div>
   )
}

export default Dashboard