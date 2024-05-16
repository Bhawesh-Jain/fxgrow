import connectMongoDb from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
    const res = await request.json();

    console.log("api");
    console.log(res);

    await connectMongoDb();

    var message = "Invalid User"
    var status = false
    var data

    const exists = await User.exists({ email: res["email"]})
    console.log(exists);
    if (exists) {
        message = "Email Already Exits!"
        status = false
    } else {
        const user = await User.create(res)

        if (user) {
            message = "Registration Successful"
            status = true
            data = user.toObject()

            delete data["password"];
        }
    }

    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}