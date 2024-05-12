import Image from "next/image";
import { MdArrowBack, MdFlipToBack, MdMenu, MdPerson } from 'react-icons/md';

const Navbar = ({ showMenu, isOpen, setIsOpen }) => {

   const handleMenuClick = () => {
      setIsOpen(!isOpen)
   }

   return (
      <div className="fixed w-full h-14 bg-white">
         <div className="flex flex-row items-center justify-between px-4 py-3 h-14">
            <div className="flex flex-row cursor-pointer select-none">
               <div className="color=#f53131">
                  <Image
                     src="/logo-icon.jpg"
                     width={35}
                     height={35}
                     alt=""
                     className="rounded-full"
                  />
               </div>
               <div className="flex flex-col text-xs ml-2">
                  <span className="text-red-500 text-sm">FxGrow</span>
                  <span className="text-gray-500">Growell your trading</span>
               </div>
            </div>
            {showMenu && <div className="cursor-pointer"  onClick={handleMenuClick}>
               {isOpen && <MdArrowBack size={25} /> || <MdPerson size={25}/>}
            </div>}
         </div>
      </div>
   )
}

export default Navbar