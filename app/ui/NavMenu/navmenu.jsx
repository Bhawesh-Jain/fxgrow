"use client"
import * as icons from "react-icons/md"
import Navmenuitem from "./NavMenuItem/navmenuitem"

const Navmenu = () => {

    let bottomIconSize = 16

    let list = [
        {
            title: "Dashboard",
            icon: icons.MdDashboard,
            size: bottomIconSize,
            link: "/dashboard"
        },
        {
            title: "Transactions",
            icon: icons.MdMoney,
            size: bottomIconSize,
            link: "/dashboard/transactions"
        },
        {
            title: "History",
            icon: icons.MdHistory,
            size: bottomIconSize,
            link: "/dashboard/history"
        },
        {
            title: "Profile",
            icon: icons.MdSupervisedUserCircle,
            size: bottomIconSize,
            link: "/dashboard/profile"
        }

    ]

    return (
        <div className="
            grid grid-cols-4 fixed w-full bottom-0 text-xs bg-gray-50
            md:bottom-0 md:top-14 md:left-0 md:w-2/6 md:h-screen md:flex md:flex-col md:text-sm
            lg:w-1/6
        ">
            {
                list.map(item => (
                    <Navmenuitem item={item} />
                ))
            }
        </div>
    )
}

export default Navmenu