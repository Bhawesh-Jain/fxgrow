import { MdEmail, MdLocationPin, MdWhatsapp } from "react-icons/md"

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <div>
                <div className="flex flex-row content-center"><MdEmail size={30}/> <p>test@gmail.com</p></div>
                <div className="flex flex-row content-center">< size={30}/> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore autem numquam consectetur ad.</p></div>
                <div className="flex flex-row content-center"><MdWhatsapp size={30}/> <p>9876543210</p></div>
            </div>
        </div>
    )
}

export default Footer   