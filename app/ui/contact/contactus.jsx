"use client"

import { useEffect, useRef, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"


const ContactUs = () => {
    const formRef = useRef(null);

    const [msg, setMsg] = useState("");

    useEffect(() => {
        if (msg && msg.length < 30) {
            const timer = setTimeout(() => {
                setMsg('');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [msg])

    const handleForm = async (event) => {
        event.preventDefault()
        const formData = new FormData(event.target);

        const rawFormData = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            description: formData.get('description')
        }

        try {
            const res = await fetch(`${baseUrl}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(rawFormData),
            });

            if (res.ok) {
                const body = await res.json();
                setMsg(body.message)
                if (body.status) {
                    formRef.current.reset();
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="p-5 w-full md:p-6 lg:px-10 lg:py-14 flex flex-col bg-[url('/contact-us.jpg')] bg-no-repeat bg-center bg-cover items-center">

            <div className=" flex flex-col items-center w-full md:w-2/3 bg-white bg-opacity-30 py-4 text-black">
                <h1 className="text-2xl md:text-3xl	font-bold">Contact Us</h1>
                <span className="w-12 h-1 m-6 rounded-full bg-yellow-600" />
                <p className="text-sm text-center">Send us a message and we'll respond as soon as possible!</p>

                <div className="p-4 w-full">
                    {msg && msg.length > 0 && <p className="text-base item-center text-center m-3">{msg}</p>}
                    <form ref={formRef} className="md:mx-20" onSubmit={handleForm}>
                        <div className="grid gap-6 md:grid-cols-2 mb-5">

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black">Your email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    placeholder="name@iforex.com"
                                    required />
                            </div>

                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-black">Your name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    placeholder=""
                                    required />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-black">Your phone</label>
                                <input
                                    type="text"
                                    maxLength="10"
                                    name="phone"
                                    id="phone"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    placeholder=""
                                    required />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-black">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    placeholder=""
                                    required />
                            </div>

                        </div>

                        <div>
                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-black">Description</label>
                            <textarea
                                type="text"
                                id="description"
                                name="description"
                                className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                placeholder=""
                                required />
                        </div>

                        <div className="flex items-start my-5">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                                    required />
                            </div>

                            <label htmlFor="terms" className="ms-2 text-sm font-medium text-black ">I agree with the <a href="#" className="text-blue-600 hover:underline ">terms and conditions</a></label>
                        </div>

                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )

}
export default ContactUs