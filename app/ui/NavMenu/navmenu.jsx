"use client"
import * as icons from "react-icons/md"
import Navmenuitem from "./NavMenuItem/navmenuitem"

const Navmenu = () => {

    let bottomIconSize = 16

    let list = [
        {
            title: "Dashboard",
            icon: icons.MdDashboard,
            mobile: true,
            size: bottomIconSize,
            link: "/dashboard"
        },
        {
            title: "Transactions",
            icon: icons.MdMoney,
            mobile: true,
            size: bottomIconSize,
            link: "/dashboard/transactions"
        },
        {
            title: "History",
            icon: icons.MdHistory,
            mobile: true,
            size: bottomIconSize,
            link: "/dashboard/history"
        },
        {
            title: "Profile",
            icon: icons.MdSupervisedUserCircle,
            mobile: true,
            size: bottomIconSize,
            link: "/dashboard/profile"
        },
        {
            title: "Logout",
            icon: icons.MdLogout,
            size: bottomIconSize,
            mobile: false,
            link: "/dashboard/logout"
        }

    ]

    return (
        <div className="
            grid grid-cols-4 grid-rows-1 fixed w-full bottom-0 text-xs bg-gray-50 select-none
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