import MenuItem from "./menuItem/menuItem"

const Sidemenu = ({isLoggedIn}) => {

   let homeLink = "/"

   if (isLoggedIn) {
      homeLink = "/dashboard"
   }

   let data = [
      {
         title: "Home",
         link: homeLink,
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
         link: "/dashboard",
      },
   ]

   return (
      <div className="h-full overflow-y-auto bg-gray-500 w-60 md:w-72 lg:w-80 fixed top-14 left-0 flex flex-col">
         {
            data.map(item => (
               <MenuItem key={item.title} item={item} />
            ))
         }
      </div>
   )
}

export default Sidemenu