import connectMongoDb from "@/libs/mongodb";
import Footer from "@/models/Footer";
import { NextResponse } from "next/server";


export async function GET() {
  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  var data = await Footer.findOne();

  if (data) {
    message = "Found!"
    status = true
  }

  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}
