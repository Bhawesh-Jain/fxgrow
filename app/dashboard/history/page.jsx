import { MdHistory } from "react-icons/md";

const History = () => {
   let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
   return (
      <div className="flex flex-col">
         <div className="mx-3 my-5 text-xl flex flex-row gap-2 items-center"><MdHistory /><h2 className="font-bold">Order History</h2></div>
         <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-nowrap whitespace-nowrap rtl:text-right text-black px-2 border border-gray-50">
               <thead className="text-xs uppercase">
                  <tr className="">
                     <th scope="col" className="px-6 py-3 border-r">
                        Date
                     </th>
                     <th scope="col" className="px-6 py-3 border-r">
                        Trade Amount
                     </th>
                     <th scope="col" className="px-6 py-3 border-r">
                        Quantity
                     </th>
                     <th scope="col" className="px-6 py-3 border-r">
                        Buy Price
                     </th>
                     <th scope="col" className="px-6 py-3 border-r">
                        Sell Price
                     </th>
                     <th scope="col" className="px-6 py-3 border-r">
                        Profit / Loss
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {
                     list.map(item => (
                        <tr className="border-b">
                           <td className="px-6 py-3 border-r">
                              24-{item}-2024
                           </td>
                           <td className="px-6 py-3 border-r">
                              5000
                           </td>
                           <td className="px-6 py-3 border-r">
                              20
                           </td>
                           <td className="px-6 py-3 border-r">
                              3000
                           </td>
                           <td className="px-6 py-3 border-r">
                              5000
                           </td>
                           <td className="px-6 py-3 border-r">
                              2000
                           </td>
                        </tr>
                     ))
                  }


               </tbody>
            </table>
         </div>
      </div>
   )
}

export default History;
