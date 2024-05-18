import connectMongoDb from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
    const res = await request.json();

    await connectMongoDb();

    var message = "Invalid User"
    var status = false
    var data

    const user = await User.findOne({ email: res["email"] })

    console.log(user);
    
    if (user) {
        if (user.toObject()["password"] === res["password"]) {
            if (user.toObject()["status"] === "Pending") {
                message = "Verification Pending!"
                status = false
            } else {
                message = "Login Successful"
                status = true
                data = user.toObject()

                delete data["password"];
            }
        } else {
            message = "Invalid Password!"
            status = false
        }
    } else {
        message = "User Not Found!"
        status = false
    }


    return NextResponse.json({ status: status, message: message, data: data }, { status: 200 })
}