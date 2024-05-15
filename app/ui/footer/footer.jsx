import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"
import { MdEmail, MdLocationPin, MdWhatsapp } from "react-icons/md"

const Footer = () => {
    return (
        
        <div className="bg-[url('/bg.gif')] bg-no-repeat bg-center bg-cover text-white py-10 px-10 md:px-20 md:py-10 flex flex-col md:flex-row gap-14 justify-between">
            
            <div className="flex flex-col gap-5">
                <h2 className="font-bold text-lg">Contact US</h2>

                <div className="flex flex-row gap-2 justify-start content-center">
                    <MdEmail size={25} />
                    <p>test@gmail.com</p>
                </div>

                <div className="flex flex-row gap-2 justify-start content-center">
                    <MdLocationPin size={25} />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore autem numquam consectetur ad.</p>
                </div>

                <div className="flex flex-row gap-2 justify-start content-center">
                    <MdWhatsapp size={25} />
                    <p>9876543210</p>
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