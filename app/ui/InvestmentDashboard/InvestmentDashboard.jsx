import Link from "next/link"
import AccountInfo from "./AccountInfo/AccountInfo"
import LiveOrder from "./LiveOrder/liveOrder"
import DashboardActions from "./Actions/DashboardActions"
import { getSession } from "@/libs/actions"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const getPaymentItems = async () => {
  const res = await fetch(`${baseUrl}/api/dashboard/payment`, {
    method: "GET",
    cache: "no-cache"
  });

  if (res.ok) {
    var body = await res.json()

    if (body.status) {
      return body.data
    }
  }
}


const InvestmentDashboard = async () => {
  const session = await getSession();

  const paymentItems = await getPaymentItems()

  const jsonOb = {
    userId: session.userId,
    userName: session.userName
  }
  return (
    <div className="flex flex-col w-full lg:w-2/3">

      <AccountInfo />

      <DashboardActions session={jsonOb} paymentItems={paymentItems} />

      <div className="flex flex-col items-center m-3 md:m-10">
        <h2 className="font-bold text-lg mt-4 md:mt-0">Live Order</h2>

        <LiveOrder />
      </div>

    </div>
  )
}

export default InvestmentDashboard