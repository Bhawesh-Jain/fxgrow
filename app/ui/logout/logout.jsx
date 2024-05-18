
import { logout } from "@/libs/actions"

const Logout = () => {

  const handleLogout = async () => {
    "use server"
    logout()
  }

  return (
    <form action={handleLogout}>
      <button type="submit" className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" >Logout</button>
    </form>
  )
}

export default Logout