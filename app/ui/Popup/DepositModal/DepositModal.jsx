"use client"

import { useState, useEffect } from "react"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const DepositModal = ({ session, setModalVis, item }) => {

  const [errorMsg, setErrorMsg] = useState("");


  const close = () => {
    setModalVis(false)
  }

  const submitTrade = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const rawFormData = {
      userId: session.userId,
      msg: `Deposit request by ${session.userName}` ,
      amount: formData.get('amount'),
      type: formData.get('Deposit'),
      transactionId: formData.get('number')
    }

    try {
      const res = await fetch(`${baseUrl}/api/dashboard/payment`, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(rawFormData),
      });

      console.log(res);
      if (res.ok) {
        const body = await res.json();

        setErrorMsg(body.message)
        if (body.status) {
          const timer = setTimeout(() => {
            setModalVis(false)
          }, 3000);
        }
      }
    } catch (error) {
      setErrorMsg(error)
    }
  }


  return (
    <div className="z-40 text-black fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
      <div className="bg-white py-10 px-5 md:px-20 rounded-xl flex flex-col gap-4 max-h-[90%] overflow-y-auto w-full m-10 md:w-2/3 justify-between">
        <h1 className="text-lg font-bold">Add Investment</h1>

        {errorMsg && <p className="text-blue-500 font-medium">{errorMsg}</p>}

        <div className="text-black flex flex-col gap-2 items-start text-start">
          <h1 className="font-bold">Qr Code </h1>

          {item.qr && (
            <div className="mb-4 items-center">
              <img src={`data:image/png;base64,${item.qr}`} alt="Payment QR Code" className="w-full md:w-2/4 h-auto" />
            </div>
          )}

        </div>

        <div className="text-black flex flex-row gap-2 items-start text-start">
          <h1 className="font-bold">Upi Id: </h1>
          <p
            className="" >
            {item.upiId}
          </p>
        </div>


        <form className="w-full" onSubmit={submitTrade}>
          <div className="grid gap-6 md:grid-cols-1 text-start mb-5">

            <div>
              <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">Transaction Amount</label>
              <input
                type="number"
                name="amount"
                id="amount"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

            <div>
              <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">Transaction Number</label>
              <input
                type="text"
                name="number"
                id="number"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-5">

            <button
              type="submit"
              className="bg-blue-500 p-3 text-white w-full rounded">
              Submit
            </button>
            <button
              onClick={close}
              className="bg-red-500 p-3 text-white w-full rounded">
              Cancel
            </button>

          </div>

        </form>
      </div>
    </div>
  )
}

export default DepositModal