import Link from "next/link"
import AccountInfo from "./AccountInfo/AccountInfo"
import LiveOrder from "./LiveOrder/liveOrder"

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

        <LiveOrder />
      </div>

    </div>
  )
}

export default InvestmentDashboard