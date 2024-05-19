import connectMongoDb from "@/libs/mongodb";
import Transaction from "@/models/Transactions";
import { NextResponse } from "next/server";



export async function GET(request) {
  const id = request.nextUrl.searchParams.get("id")

  await connectMongoDb();

  var message = "Request Failed"
  var status = false
  var data

  const req =  await Transaction.find({userId: id}).sort({ createdAt: -1 });

  if (req) {
      message = "Found Transactions!"
      status = true
      data = req
  }
  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}