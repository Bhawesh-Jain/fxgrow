"use client"

import { useState } from "react"
import DepositModal from "../../Popup/DepositModal/DepositModal";

const DashboardActions = ({session, paymentItems}) => {


  const [depositModal, setDepositModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  
  const openDeposit = () => {
    setDepositModal(true)
  }

  return (
    <div className="flex flex-row justify-between mx-3 md:mx-10 text-white text-center gap-6">
      <button onClick={openDeposit} className="w-1/2 bg-slate-800 p-5 rounded-lg hover:cursor-pointer" href="/dashboard/deposit">
        Deposit
      </button>
      <button className="w-1/2 bg-slate-800 p-5 rounded-lg hover:cursor-pointer" href="/dashboard/wallet">
        Withdraw
      </button>

      {depositModal && <DepositModal setModalVis={setDepositModal} item={paymentItems} session={session} />}
    </div>
  )
}

export default DashboardActions