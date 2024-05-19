import { getSession } from "@/libs/actions"
import PrimaryButton from "../PrimaryButton/primaryButton"

const DashboardActionMain = async () => {
  const session = await getSession()

  return (
    <div className="text-black">
      {session.isLoggedIn &&
        <div className="flex flex-col">
          <PrimaryButton btnText="Dashboard" link={"/dashboard"} />
        </div>
        ||
        <div className="flex flex-col">
          <PrimaryButton btnText="Login" link={"/login"} />
          <PrimaryButton btnText="Create Account" link={"/register"} />
        </div>}
    </div>
  )
}

export default DashboardActionMain