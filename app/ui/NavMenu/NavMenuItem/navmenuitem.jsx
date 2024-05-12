"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navmenuitem = ({ item }) => {
  const pathname = usePathname()

  return (
    <Link href={item.link}>
      <div className={`${"flex flex-col justify-center items-center py-2 bg-gray-50 md:flex-row md:justify-normal md:gap-2.5 md:p-5"} 
        ${pathname === item.link && "bg-gray-200 duration-200 text-blue-500 filter"}`}>

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