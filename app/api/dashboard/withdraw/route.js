import connectMongoDb from "@/libs/mongodb";
import Withdraw from "@/models/Withdraw";
import { NextResponse } from "next/server";

export async function POST(request) {

  const body = await request.json()

  await connectMongoDb();

  var message = "Request Failed"
  var status = false
  var data

  const req = await Withdraw.create(body);

  if (req) {
      message = "Withdraw Request Successful!"
      status = true
      data = req
  }
  
  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}