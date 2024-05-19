"use client"

import { useState, useEffect } from "react"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const AcceptLoanModal = ({ session, setModalVis, item, setRequested }) => {

  const [errorMsg, setErrorMsg] = useState("");

  const close = () => {
    setModalVis(false)
  }

  const submitTrade = async (event) => {
    event.preventDefault();

    const rawFormData = {
      userId: session.userId,
      loanId: item[0]._id,
      amount: item[0].amount,
    }

    try {
      const res = await fetch(`${baseUrl}/api/dashboard/user/loan/accept`, {
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
          setTimeout(() => {
            setModalVis(false)
            setRequested(true)
          }, 3000);
        }
      }
    } catch (error) {
      setErrorMsg(error)
    }
  }


  return (
    <div className="z-40 text-black fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center text-start">
      <div className="bg-white py-10 px-5 md:px-20 rounded-xl flex flex-col gap-4 max-h-[90%] overflow-y-auto w-full m-10 md:w-2/3 justify-between">
        <h1 className="text-lg font-bold  text-center">Add Loan</h1>

        {errorMsg && <p className="text-blue-500 font-medium">{errorMsg}</p>}


        <div className="grid gap-5 mt-5">

          <p>{item[0].msg}</p>
          <div>
            <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">Loan Amount</label>
            <span className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " >
              ₹{item[0].amount}
            </span>
          </div>
          <button
            onClick={submitTrade}
            className="bg-blue-500 p-3 text-white w-full rounded">

            Accept

          </button>
          <button
            onClick={close}
            className="bg-red-500 p-3 text-white w-full rounded">
            Cancel
          </button>

        </div>
      </div>
    </div>
  )
}

export default AcceptLoanModal