"use client"

import { useState, useEffect } from "react"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const AcceptLoanModal = ({ setUpdateLoanBtn, session, setModalVis, item, setRequested }) => {

  let loanItem = item[0]
  const [errorMsg, setErrorMsg] = useState("");
  const [btn, setBtn] = useState(true);

  const close = () => {
    setModalVis(false)
  }

  const submitTrade = async (event) => {
    setBtn(false)
    event.preventDefault();

    const rawFormData = {
      userId: session.userId,
      loanId: loanItem._id,
      amount: loanItem.amount,
      msg: loanItem.msg
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
            setUpdateLoanBtn(true)
          }, 3000);
        }
      }
    } catch (error) {
      setErrorMsg(error)
    }
  }

  try {
    return (
      <div className="z-40 text-black fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center text-start">
        <div className="bg-white py-10 px-5 md:px-20 rounded-xl flex flex-col gap-4 max-h-[90%] overflow-y-auto w-full m-10 md:w-2/3 justify-between">
          <h1 className="text-lg font-bold  text-center">Add Loan</h1>

          {errorMsg && <p className="text-blue-500 font-medium">{errorMsg}</p>}


          <div className="grid gap-5 mt-5">

            <p>{loanItem.msg}</p>
            <div>
              <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">Loan Amount</label>
              <span className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " >
                ₹{loanItem.amount}
              </span>
            </div>
            {btn && <button
              onClick={submitTrade}
              className="bg-blue-500 p-3 text-white w-full rounded">

              Accept

            </button>}
            <button
              onClick={close}
              className="bg-red-500 p-3 text-white w-full rounded">
              Cancel
            </button>

          </div>
        </div>
      </div>
    )
  } catch (error) {
    return (<p>Unknown Error....</p>)
  }

}

export default AcceptLoanModal