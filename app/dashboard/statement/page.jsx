import { getSession } from "@/libs/actions";
import { MdHistory } from "react-icons/md";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const Page = async () => {

   const session = await getSession()

   const res = await fetch(`${baseUrl}/api/dashboard/statement?userId=${session.userId}`, {
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
      <div className="flex flex-col pb-5">
         <div className="mx-3 my-8 text-xl flex flex-row justify-center gap-2 items-center">
            <MdHistory />
            <h2 className="font-bold">Statement</h2>
         </div>
         <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-center text-nowrap whitespace-nowrap rtl:text-right text-black p-2 border border-gray-50">
               <thead className="text-xs uppercase">
                  <tr className="">
                     <th scope="col" className="px-6 py-3 border-r">
                        Date
                     </th>
                     <th scope="col" className="px-6 py-3 border-r">
                        Effect
                     </th>
                     <th scope="col" className="px-6 py-3 border-r">
                        Amount
                     </th>
                     <th scope="col" className="px-6 py-3 border-r">
                        Type
                     </th>
                  </tr>
               </thead>
               <tbody>
                  {
                     list.map(item => (
                        <tr key={item} className="border-b">
                           <td className="px-6 py-3 border-r">
                              {item.date}
                           </td>
                           <td className="px-6 py-3 border-r">
                              {item.effect}
                           </td>
                           <td className="px-6 py-3 border-r">
                              {item.amount}
                           </td>
                           <td className="px-6 py-3 border-r">
                              {item.type}
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

export default Page;
