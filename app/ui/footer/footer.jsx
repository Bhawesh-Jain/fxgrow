import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import { MdEmail, MdLocationPin, MdWhatsapp } from "react-icons/md"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"


const getPaymentItems = async () => {
    const res = await fetch(`${baseUrl}/api/footer/all`, {
      method: "GET",
      cache: "no-cache"
    });
  
    if (res.ok) {
      var body = await res.json()
  
      if (body.status) {
        return body.data
      }
    }
  }

const Footer = async () => {

    const item = await getPaymentItems()


    return (

        <div className="bg-[url('/bg.gif')] bg-no-repeat bg-center bg-cover text-white py-10 px-10 md:px-20 md:py-20 flex flex-col md:flex-row gap-14 justify-between w-full">

            <div className="grid gap-5">
                <h2 className="font-bold text-lg">Contact US</h2>

                <div className="flex flex-row gap-2 justify-start content-center">
                    <MdEmail size={25} />
                    <p>{item.email}</p>
                </div>

                <div className="flex flex-row gap-2 justify-start content-center">
                    <MdLocationPin size={25} />
                    <div>
                        <p className="whitespace-pre-wrap font-inter">{item.address}</p>
                    </div>
                </div>

                <div className="flex flex-row gap-2 justify-start content-center">
                    <MdWhatsapp size={25} />
                    <p>{item.contact}</p>
                </div>
            </div>

            <div className=" flex flex-col gap-5">
                <h2 className="font-bold text-lg">Ouick Links</h2>

                <Link href="/" className="flex flex-row gap-2 content-center">
                    <IoIosArrowDown size={20} />
                    <p>Home</p>
                </Link>

                <Link href="/" className="flex flex-row gap-2 content-center">
                    <IoIosArrowDown size={20} />
                    <p>About Us</p>
                </Link>

                <Link href="/" className="flex flex-row gap-2 content-center">
                    <IoIosArrowDown size={20} />
                    <p>Terms & Conditions</p>
                </Link>

            </div>
        </div>
    )
}

export default Footer   