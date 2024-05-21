import connectMongoDb from "@/libs/mongodb";
import Slider from "@/models/Slider";
import { NextResponse } from "next/server";

export async function GET(request) {
    await connectMongoDb();

    var message = "Request Failed"
    var status = false
    var data

    const req = await Slider.find();

    if (req) {
        message = "Slider Found"
        status = true
        data = req
    }
    
    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}
