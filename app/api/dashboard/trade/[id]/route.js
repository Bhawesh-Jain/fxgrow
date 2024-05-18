import connectMongoDb from "@/libs/mongodb";
import Order from "@/models/Order";
import User from "@/models/user";
import { NextResponse } from "next/server";




export async function GET(request, { params }) {
  const { id } = params

  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  var data = await Order.findOne({userId: id, status: "LIVE"});

  if (data) {
      message = "Found Trade"
      status = true
  }

  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}
