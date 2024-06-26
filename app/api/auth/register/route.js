import connectMongoDb from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
    const res = await request.json();

    await connectMongoDb();

    var message = "Invalid User"
    var status = false
    var data

    const exists = await User.exists({ email: res["email"]})
    if (exists) {
        message = "Email Already Exits!"
        status = false
    } else {
        const user = await User.create(res)

        if (user) {
            message = "Thank you for applying for the membership to our site. We will review your details and send you an email letting you know whether your application has been successful or not."
            status = true
            data = user.toObject()

            delete data["password"];
        }
    }

    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}