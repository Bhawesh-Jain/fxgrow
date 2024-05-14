"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navmenuitem = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link className={`${item.mobile === false && "hidden md:inline"}`} href={item.link}>
      <div className={`${"flex flex-col justify-center items-center py-2 md:flex-row md:justify-normal md:gap-2.5 md:p-4 md:m-2 md:rounded-lg"} 
        ${pathname === item.link && "bg-gray-100 duration-200 text-blue-500 filter "}`}>

        <div>
          <item.icon className="" size={item.size} />
        </div>

        <span className="mt-2 md:m-0">
          {item.title}
        </span>

      </div>
    </Link>
  )
}

export default Navmenuitem