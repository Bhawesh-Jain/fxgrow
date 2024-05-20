"use client"

import { useState, useEffect } from "react"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const WithdrawModal = ({ session, setModalVis, item }) => {

  const [errorMsg, setErrorMsg] = useState("");
  const [btn, setBtn] = useState(true);


  const close = () => {
    setModalVis(false)
  }

  const submitTrade = async (event) => {
    event.preventDefault();
    setBtn(false)
    const formData = new FormData(event.target);

    var amount = parseInt(formData.get('amount'))
    var marketValue = parseInt(item.marketValue)

    if (amount > marketValue) {
      setErrorMsg("Not enought funds in the account!")
      return
    }

    const rawFormData = {
      userId: session.userId,
      msg: `Withdraw request by ${session.userName}`,
      name: formData.get('name'),
      amount: formData.get('amount'),
      bankName: formData.get('bankName'),
      accountNumber: formData.get('accountNumber'),
      accountHolder: formData.get('accountHolder'),
      ifscCode: formData.get('ifscCode'),
      type: 'Withdraw'
    }

    try {
      const res = await fetch(`${baseUrl}/api/dashboard/withdraw`, {
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
          }, 3000);
        } else {
          setBtn(true)
        }
      }
    } catch (error) {
      setErrorMsg(error)
      setBtn(true)
    }
  }


  return (
    <div className="z-40 text-black fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center ">
      <div className="bg-white py-10 px-5 md:px-20 rounded-xl flex flex-col gap-4 max-h-[90%] overflow-y-auto w-full m-10 md:w-2/3 justify-between">
        <h1 className="text-lg font-bold">Withdraw Request</h1>

        {errorMsg && <p className="text-blue-500 font-medium">{errorMsg}</p>}

        <form className="w-full" onSubmit={submitTrade}>
          <h1 className="text-base my-3">Bank Details</h1>
          <div className="grid gap-6 md:grid-cols-2 text-start mb-5">

            <div>
              <label htmlFor="bankName" className="block mb-2 text-sm font-medium text-gray-900">Bank Name</label>
              <input
                type="text"
                defaultValue={item.bankName}
                name="bankName"
                id="bankName"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

            <div>
              <label htmlFor="accountNumber" className="block mb-2 text-sm font-medium text-gray-900">Account Number</label>
              <input
                type="text"
                defaultValue={item.accountNumber}
                name="accountNumber"
                id="accountNumber"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

            <div>
              <label htmlFor="accountHolder" className="block mb-2 text-sm font-medium text-gray-900">Account Holder</label>
              <input
                type="text"
                name="accountHolder"
                defaultValue={item.accountHolder}
                id="accountHolder"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

            <div>
              <label htmlFor="ifscCode" className="block mb-2 text-sm font-medium text-gray-900">IFSC Code</label>
              <input
                type="text"
                defaultValue={item.ifscCode}
                name="ifscCode"
                id="ifscCode"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

          </div>

          <h1 className="text-base my-3">Your Details</h1>

          <div className="grid gap-6 md:grid-cols-2 text-start mb-5">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
              <input
                type="text"
                defaultValue={item.name}
                name="name"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

            <div>
              <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900">Withraw Amount</label>
              <input
                type="text"
                name="amount"
                id="amount"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
            </div>

          </div>


          <div className="grid md:grid-cols-2 gap-5 mt-5">

            {btn && <button
              type="submit"
              className="bg-blue-500 p-3 text-white w-full rounded">
              Submit
            </button>
            ||

            <p
              className="bg-blue-500 p-3 text-white w-full rounded">
              Processing
            </p>
            }
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

export default WithdrawModal