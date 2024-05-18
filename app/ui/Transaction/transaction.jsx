import { MdCallReceived } from "react-icons/md";

const Transaction = ({ item }) => {
   return (
      <div className="py-2 text-xs border-b-2 border-gray-100">

         <div className="flex flex-row justify-between">

            <div className="flex flex-col justify-around w-full md:w-auto px-2">
               <div>
                  <span className="font-medium text-base">{item.type}</span>
                  <p className="my-1">{item.msg}</p>
                  <p className="my-1">Transaction Id: {item.transactionId}</p>
                  <p className="my-1">Status: {item.status}</p>
                  <div className="my-2">
                  {new Date(item.createdAt).toLocaleString()}
                  </div>
               </div>
            </div>

            <div className="flex flex-col justify-end items-end">
            <span className="text-center md:text-start">Transaction Amount:<p className="font-medium text-center m-1">{item.amount}</p></span>
               <span className={`m-auto mx-auto bg-blue-500 rounded-lg ${item.type === "Deposit" && "rotate-180"}`}>
                  <MdCallReceived size={60} className="filter p-4 fill-white" />
               </span>
            </div>

         </div>

      </div>
   )
}

export default Transaction;
