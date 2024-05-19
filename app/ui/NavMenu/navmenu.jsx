"use client"
import * as icons from "react-icons/md"
import Navmenuitem from "./NavMenuItem/navmenuitem"
import Image from "next/image"
import Link from "next/link"
import { logout } from "@/libs/actions"

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
            title: "Order History",
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
        }
    ]

    const logoutClick = () => {
        logout()
    }

    return (
        <div className=" w-full md:w-2/6 lg:w-1/6 z-40 bg-white">
            <div className="fixed top-0 px-4 py-3 h-14 w-full md:w-2/6 lg:w-1/6 z-40 bg-white">
                <Link href="/">
                    <div className="flex flex-row cursor-pointer select-none">
                        <div className="color=#f53131">
                            <Image
                                src="/logo-icon.png"
                                width={35}
                                height={35}
                                alt=""
                                className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col text-xs ml-2">
                            <span className="text-red-500 text-sm">IForex</span>
                            <span className="text-gray-500">Your Trading Partner</span>
                        </div>
                    </div>
                </Link>
            </div>

            <div className=" 
            grid grid-cols-4 grid-rows-1 fixed w-full bottom-0 text-xs  select-none
            md:bottom-0 md:top-14 md:left-0 md:w-2/6 md:h-screen md:flex md:flex-col md:text-sm
            lg:w-1/6 bg-white z-40
            ">
                {
                    list.map(item => (
                        <Navmenuitem key={item.title} item={item} />
                    ))
                }

                <button className="hidden md:block" onClick={logoutClick}>
                    <div className={`${"flex flex-col justify-center items-center py-2 md:flex-row md:justify-normal md:gap-2.5 md:p-4 md:m-2 md:rounded-lg"} `}>

                        <div>
                            <icons.MdLogout className="" size={16} />
                        </div>

                        <span className="mt-2 md:m-0">
                            Logout
                        </span>

                    </div>
                </button>
            </div>

        </div>
    )
}

export default Navmenu