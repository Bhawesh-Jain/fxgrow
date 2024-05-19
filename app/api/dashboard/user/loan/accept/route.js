import connectMongoDb from "@/libs/mongodb";
import Loan from "@/models/Loan";
import User from "@/models/user";
import { NextResponse } from "next/server";



export async function POST(request) {

  const { userId, loanId, amount } = await request.json()



  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  const user = await User.findOne({ _id: userId })

  if (user) {
    var marketValue = parseInt(user["marketValue"]) + parseInt(amount)
    var loanAmount = 0
    var loan = user["loanAmount"]

    if (loan) {
      loanAmount = parseInt(loan)
    }

    loanAmount = loanAmount + amount

    const updateUser = await User.findByIdAndUpdate(userId, { marketValue, loanAmount })

    if (updateUser) {
      var data = await Loan.findByIdAndUpdate(loanId, { status: "Accepted" });

      if (data) {
        message = "Loan Requested"
        status = true
      }
    }
  }



  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}
