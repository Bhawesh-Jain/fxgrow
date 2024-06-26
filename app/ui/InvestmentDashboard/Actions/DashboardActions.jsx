"use client"

import { useEffect, useState } from "react"
import DepositModal from "../../Popup/DepositModal/DepositModal";
import WithdrawModal from "../../Popup/WithdrawModal/WithdrawModal";
import AddLoanModal from "../../Popup/AddLoanModal/AddLoanModal";
import AcceptLoanModal from "../../Popup/AcceptLoanModal/AcceptLoanModal";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DashboardActions = ({ session, paymentItems, user, loan }) => {
  const router = useRouter()

  var loanBtn = "Request Loan"
  if (loan && loan.length > 0) {
    var status = loan[0].status

    if (status === "Requested") {
      loanBtn = "Loan Requested"
    } else if (status === "Offered") {
      loanBtn = "Loan Offered"
    }
  }

  const [depositModal, setDepositModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [loanModal, setLoanModal] = useState(false);
  const [loanAcceptModal, setLoanAcceptModal] = useState(false);
  const [requested, setRequested] = useState(false);
  const [updateLoanBtn, setUpdateLoanBtn] = useState(false);

  const openDeposit = () => {
    setDepositModal(true)
  }

  useEffect(() => {
    if (updateLoanBtn) {
      loanBtn = "Loan Granted!"
    }
  }, [updateLoanBtn]);

  useEffect(() => {
    if (requested) {
      loanBtn = "Loan Requested"
    }
  }, [requested]);

  useEffect(() => {
    if (!loanAcceptModal) {
      router.refresh()
      if (loan && loan.length > 0) {
        var status = loan[0].status
    
        if (status === "Requested") {
          loanBtn = "Loan Requested"
        } else if (status === "Offered") {
          loanBtn = "Loan Offered"
        }
      }
    }
  }, [loanAcceptModal]);

  const loanHandle = () => {
    if (loanBtn === "Request Loan") {
      setLoanModal(true)
    } else if (loanBtn === "Loan Requested" || requested) {
      alert("Already Requested!")
    } else if (loanBtn === "Loan Offered") {
      setLoanAcceptModal(true)
    }
  }

  const openWithdraw = () => {
    setWithdrawModal(true)
  }

  return (
    <div className="grid grid-cols-2 justify-between mx-3 md:mx-10 text-white text-center gap-6">
      <button onClick={openDeposit} className="w-full bg-slate-800 p-5 rounded-lg hover:cursor-pointer" >
        Deposit
      </button>
      <button onClick={openWithdraw} className="w-full bg-slate-800 p-5 rounded-lg hover:cursor-pointer">
        Withdraw
      </button>

      <Link href="./dashboard/statement" className="w-full bg-slate-800 p-5 rounded-lg hover:cursor-pointer">
        Statement
      </Link>
      <button onClick={loanHandle} className="w-full bg-slate-800 p-5 rounded-lg hover:cursor-pointer">
        {!requested && loanBtn || "Loan Requested"}
      </button>

      {depositModal && <DepositModal setModalVis={setDepositModal} item={paymentItems} session={session} />}
      {withdrawModal && <WithdrawModal setModalVis={setWithdrawModal} item={user} session={session} />}
      {loanModal && <AddLoanModal setRequested={setRequested} setModalVis={setLoanModal} item={loan} session={session} />}
      {loanAcceptModal && <AcceptLoanModal setUpdateLoanBtn={setUpdateLoanBtn} setRequested={setRequested} setModalVis={setLoanAcceptModal} item={loan} session={session} />}
    </div>
  )
}

export default DashboardActions