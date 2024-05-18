import Transaction from "@/app/ui/Transaction/transaction"
import { getSession } from "@/libs/actions";
import { MdMoney } from "react-icons/md"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const Transactions = async () => {

   const session = await getSession()

   const res = await fetch(`${baseUrl}/api/dashboard/transaction?id=${session.userId}`, {
      method: "GET",
      cache: "no-store",
      headers: {
         "Content-type": "application/json"
      }
   });

   let list = []

   if (res.ok) {
      let body = await res.json()

      list = body.data
   }

   return (
      <div className="flex flex-col">
         <div className="mx-3 my-8 text-xl flex flex-row gap-2 justify-center items-center"><MdMoney /><h2 className="font-bold">Transaction History</h2></div>
         <div className="flex flex-col px-2">
            {
               list.map(item => (
                  <Transaction key={item._id} item={item} />
               ))
            }
         </div>
      </div>
   )
}

export default Transactions