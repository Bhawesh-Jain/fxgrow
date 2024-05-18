
import { getSession, logout } from "@/libs/actions";
import { IoIosArrowUp } from "react-icons/io"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const getUserById = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/dashboard/user/${id}`, {
      method: "GET",
      cache: "no-store"
    });

    if (res.ok) {
      var body = await res.json()

      if (body.status) {
        return body.data;
      } 
    }
  } catch (error) {
    console.log(error);
  }
}

const getProfit = (profit) => {

  if (profit > 0) {
    return (
      <>
        <h2 className="">Today Profit</h2>
        <div className="flex flex-row gap-2 items-center">
          <IoIosArrowUp size={20} className={` ${"filter fill-green-500"} `} />
          <h2 className="font-bold">₹{profit}</h2>
        </div>
      </>
    )
  } else
    return (
      <>
        <h2 className="">Today Loss</h2>
        <div className="flex flex-row gap-2 items-center">
          <IoIosArrowUp size={20} className={` ${"filter fill-red-500 rotate-180"} `} />
          <h2 className="font-bold">₹{Math.abs(profit)}</h2>
        </div>
      </>
    )
}

const AccountInfo = async () => {
  const session = await getSession()

  console.log(session);

  const id = session.userId;
  console.log(id);

  const user = await getUserById(id)

  try {


    return (
      <div className="bg-slate-800 rounded-lg m-3 md:mx-10 md:my-6 px-4 pt-4 pb-2 md:px-6 md:pt-6 md:pb-3">

        <div className="flex flex-row justify-between text-white text-sm">
          <div className="flex flex-col items-center gap-2">
            <h2 className="">Invested Amount</h2>
            <h2 className="font-bold">₹{user.investmentAmount}</h2>
          </div>

          <div className="flex flex-col items-center gap-2">
            <h2 className="">Market Value</h2>
            <h2 className="font-bold">₹{user.marketValue}</h2>
          </div>

        </div>

        <div className="bg-slate-600 rounded-lg mx-4 my-4">

          <div className="flex flex-row justify-around text-white px-5 py-5 text-sm">
            <div className="flex flex-col items-start md:items-center gap-2 w-1/2">
              <h2 className="">Overall Gain</h2>
              <h2 className="font-bold">₹{user.overallGain}</h2>
            </div>

            <span className="h-12 my-auto bg-white w-0.5" />

            <div className="flex flex-col items-end md:items-center gap-2 w-1/2">
              {getProfit(parseInt(user.profit))}

            </div>

          </div>

        </div>

      </div>
    )
  } catch (error) {
    return (<p className="text-center p-10">Unknown Error...</p>)
  }
}

export default AccountInfo