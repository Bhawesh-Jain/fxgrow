import Link from "next/link"

const MenuItem = ({ item }) => {
    return (
        <Link className="w-full text-sm text-white py-4 px-2 border-b-2 border-gray-400" href={item.link}>
            
            {item.title}

        </Link>
    )
}

export default MenuItem