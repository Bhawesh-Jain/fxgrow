"use client"

import { useState } from "react"
import DepositModal from "../../Popup/DepositModal/DepositModal";
import WithdrawModal from "../../Popup/WithdrawModal/WithdrawModal";

const DashboardActions = ({session, paymentItems, user}) => {


  const [depositModal, setDepositModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  
  const openDeposit = () => {
    setDepositModal(true)
  }

  const openWithdraw = () => {
    setWithdrawModal(true)
  }

  return (
    <div className="flex flex-row justify-between mx-3 md:mx-10 text-white text-center gap-6">
      <button onClick={openDeposit} className="w-1/2 bg-slate-800 p-5 rounded-lg hover:cursor-pointer" href="/dashboard/deposit">
        Deposit
      </button>
      <button onClick={openWithdraw} className="w-1/2 bg-slate-800 p-5 rounded-lg hover:cursor-pointer" href="/dashboard/wallet">
        Withdraw
      </button>

      {depositModal && <DepositModal setModalVis={setDepositModal} item={paymentItems} session={session} />}
      {withdrawModal && <WithdrawModal setModalVis={setWithdrawModal} item={user} session={session} />}
    </div>
  )
}

export default DashboardActions