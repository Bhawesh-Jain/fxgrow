import connectMongoDb from "@/libs/mongodb";
import Loan from "@/models/Loan";
import { NextResponse } from "next/server";




export async function GET(request) {
  const id = request.nextUrl.searchParams.get("id")

  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  var data = await Loan.find({status: { $ne: "Completed" } , userId: id});

  if (data) {
      message = "Found Loan"
      status = true
  }

  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}


export async function POST(request) {

  const req = await request.json()

  await connectMongoDb()

  var message = "Request Failed"
  var status = false

  var data = await Loan.create(req);

  if (data) {
      message = "Loan Requested"
      status = true
  }

  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })

}
