import Navmenu from "../ui/NavMenu/navmenu"
import Navbar from "../ui/Navbar/navbar"

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <Navmenu />
      <div className="absolute top-14 md:left-1/3 lg:left-[16.666667%] ">
        {children}
      </div>
    </div>
  )
}

export default Layout