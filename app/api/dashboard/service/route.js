import connectMongoDb from "@/libs/mongodb";
import Service from "@/models/service";
import { NextResponse } from "next/server";



export async function GET() {
  await connectMongoDb();

  var message = "Request Failed"
  var status = false
  var data

  const req = await Service.find();

  if (req) {
      message = "Service Found"
      status = true
      data = req
  }
  
  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}
