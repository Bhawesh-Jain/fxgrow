import connectMongoDb from "@/libs/mongodb";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";



export async function POST(request) {
  const res = await request.json();

  console.log(res);

  await connectMongoDb();

  var message = "Request Failed"
  var status = false
  var data

  const req = await Contact.create(res);

  if (req) {
      message = "Created Contact Us Request!"
      status = true
      data = req
  }
  
  return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}