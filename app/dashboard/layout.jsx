import { redirect } from "next/navigation"
import Navmenu from "../ui/NavMenu/navmenu"
import { getSession } from "@/libs/actions"

const Layout = async ({ children }) => {
  const session = await getSession()

  if(!session.isLoggedIn) {
    redirect('/login')
  }

  return (
    <div className="">
      <Navmenu />
      <div className="md:ml-[33.333337%] lg:ml-[16.666667%] md:py-0 py-12">
        {children}
      </div>
    </div>
  )
}

export default Layout