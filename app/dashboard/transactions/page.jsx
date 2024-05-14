import Transaction from "@/app/ui/Transaction/transaction"
import { MdMoney } from "react-icons/md"

const Transactions = () => {
   return (
      <div className="flex flex-col">
         <div className="mx-3 my-5 text-xl flex flex-row gap-2 items-center"><MdMoney/><h2 className="font-bold">Transaction History</h2></div>
         <div className="flex flex-col px-2">
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
            <Transaction />
         </div>
      </div>
   )
}

export default Transactions