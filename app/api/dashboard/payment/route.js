import connectMongoDb from "@/libs/mongodb";
import Payment from "@/models/PaymentItem";
import Transaction from "@/models/Transactions";
import { NextResponse } from "next/server";


export async function GET() {
  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  var data = await Payment.findOne();

  if (data) {
      message = "Found!"
      status = true
  }

  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}

export async function POST(request) {

  const body = await request.json()

  await connectMongoDb();

  var message = "Request Failed"
  var status = false
  var data

  const req = await Transaction.create(body);

  if (req) {
      message = "Deposit Successful"
      status = true
      data = req
  }
  
  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}