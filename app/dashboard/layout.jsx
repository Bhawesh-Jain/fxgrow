import Navmenu from "../ui/NavMenu/navmenu"

const Layout = ({ children }) => {
   return (
      <div>
        <Navmenu />
        {children}
      </div>
   )
}

export default Layout