import Link from "next/link"

const Sidemenu = ({isOpen}) => {
   return (
      <div className="">
        {isOpen && <div className="fixed top-0 right-0 h-full w-64 bg-gray-200 flex flex-col ">

        <Link href="">Home</Link>
        <Link href="">Login Your Account</Link>
        <Link href="">Create New Account</Link>
        <Link href="">About Us</Link>
        <Link href="">Loan</Link>
        <Link href="">Contact Us</Link>

        </div>}
      </div>
   )
}

export default Sidemenu