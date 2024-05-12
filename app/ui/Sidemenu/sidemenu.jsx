import Link from "next/link"
import MenuItem from "./menuItem/menuItem"

const Sidemenu = ({ isOpen }) => {

   let data = [
      {
         title: "Home",
         link: "/",
      },
      {
         title: "Login",
         link: "/login",
      },
      {
         title: "Register",
         link: "/register",
      },
      {
         title: "Loan",
         link: "/loan",
      },
      {
         title: "About Us",
         link: "/about",
      },
      {
         title: "Contact Us",
         link: "/contact",
      },
      {
         title: "Terms & Conditions",
         link: "/terms",
      },
   ]

   return (
      <div className="h-full overflow-y-auto bg-gray-500 w-60 md:w-72 lg:w-80 fixed top-14 left-0 flex flex-col">
         {
            data.map(item => (
               <MenuItem item={item} />
            ))
         }
      </div>
   )
}

export default Sidemenu