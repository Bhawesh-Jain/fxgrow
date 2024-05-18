import connectMongoDb from "@/libs/mongodb";
import Order from "@/models/Order";
import { NextResponse } from "next/server";




export async function GET(request, { params }) {
  const { id } = params
  const tstatus  =  request.nextUrl.searchParams.get("status")

  await connectMongoDb()

  var message = "Request Failed"
  var status = false
  var data 

  if (tstatus === "LIVE") {
    data = await Order.findOne({userId: id, status: tstatus});
  } else {
    data = await Order.find({userId: id, status: tstatus});
  }

  if (data) {
      message = "Found Trade"
      status = true
  }

  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}
