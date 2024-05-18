import { getSession } from "@/libs/actions";


const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"


const getOrderById = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/dashboard/trade/${id}`, {
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
    
  }
}

const LiveOrder = async () => {

  try {
    const session = await getSession()

    const id = session.userId;

    var data = await getOrderById(id)

    return (
      <div className="flex flex-wrap w-full justify-around text-sm md:text-base text-white bg-slate-800 rounded-lg mt-4 md:mt-8 p-6 gap-5 xl:gap-0">

        <div className="flex flex-col gap-5 items-center w-1/3 xl:w-auto">
          <h3 className="font-medium">Amount</h3>
          <span>{data.amount}</span>
        </div>

        <span className="h-14 w-0.5 bg-gray-400 my-auto" />

        <div className="flex flex-col gap-5 items-center w-1/3 xl:w-auto">
          <h3 className="font-medium">Currency</h3>
          <span>{data.currency}</span>
        </div>

        <span className="h-14 w-0.5 bg-gray-400 my-auto hidden xl:block" />

        <div className="flex flex-col gap-5 items-center w-1/3 xl:w-auto">
          <h3 className="font-medium">Quantity</h3>
          <span>{data.quantity}</span>
        </div>

        <span className="h-14 w-0.5 bg-gray-400 my-auto" />

        <div className="flex flex-col gap-5 items-center w-1/3 xl:w-auto">
          <h3 className="font-medium">Buy Price</h3>
          <span>{data.buy}</span>
        </div>

      </div>

    )

  } catch (error) {
    return (
      <>
        <p className="text-center p-10">No Ongoing Trade Currently</p>
      </>
    )
  }
}

export default LiveOrder