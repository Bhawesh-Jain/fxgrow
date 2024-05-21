import connectMongoDb from "@/libs/mongodb";
import About from "@/models/About";
import Terms from "@/models/Terms";
import { NextResponse } from "next/server";


export async function GET() {
  await connectMongoDb();

  var message = "Request Failed"
  var status = false
  var data

  const req = await Terms.findOne();

  if (req) {
      message = "About Found"
      status = true
      data = req
  }
  
  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}
