import Link from "next/link"
import AccountInfo from "./AccountInfo/AccountInfo"

const InvestmentDashboard = () => {
  return (
    <div className="flex flex-col w-full lg:w-2/3">

      <AccountInfo />

      <div className="flex flex-row justify-between mx-3 md:mx-10 text-white text-center gap-6">
        <Link className="w-1/2 bg-slate-800 p-5 rounded-lg hover:cursor-pointer" href="/dashboard/deposit">
          Deposit
        </Link>
        <Link className="w-1/2 bg-slate-800 p-5 rounded-lg hover:cursor-pointer" href="/dashboard/wallet">
          Withdraw
        </Link>

      </div>

      <div className="flex flex-col items-center m-3 md:m-10">
        <h2 className="font-bold text-lg mt-4 md:mt-0">Live Order</h2>

        <div className="flex flex-wrap w-full justify-around text-sm md:text-base text-white bg-slate-800 rounded-lg mt-4 md:mt-8 p-6 gap-5 xl:gap-0">

          <div className="flex flex-col gap-5 items-center w-1/3 xl:w-auto">
            <h3 className="font-medium">Amount</h3>
            <span>5000</span>
          </div>

          <span className="h-14 w-0.5 bg-gray-400 my-auto" />

          <div className="flex flex-col gap-5 items-center w-1/3 xl:w-auto">
            <h3 className="font-medium">Currency</h3>
            <span>INR</span>
          </div>

          <span className="h-14 w-0.5 bg-gray-400 my-auto hidden xl:block" />

          <div className="flex flex-col gap-5 items-center w-1/3 xl:w-auto">
            <h3 className="font-medium">Quantity</h3>
            <span>30</span>
          </div>

          <span className="h-14 w-0.5 bg-gray-400 my-auto" />

          <div className="flex flex-col gap-5 items-center w-1/3 xl:w-auto">
            <h3 className="font-medium">Buy Price</h3>
            <span>5000</span>
          </div>

        </div>
      </div>

    </div>
  )
}

export default InvestmentDashboard