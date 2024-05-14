import Transaction from "@/app/ui/Transaction/transaction"

const Transactions = () => {
   return (
      <div className="flex flex-col">
         <h2 className="w-full my-5 text-center text-lg font-medium">Transaction History</h2>
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