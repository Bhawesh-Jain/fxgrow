import Image from "next/image"
import Link from "next/link"
import TermsBody from "../ui/terms/termsBody"

const Terms = () => {
    return (
        <div className="flex flex-col justify-center  items-center pb-5 md:pb-0 select-none">

            <Link className="py-5" href="/">
                <div className="flex flex-row gap-3 cursor-pointer select-none">
                    <div className="color=#f53131">
                        <Image
                            src="/logo-icon.png"
                            width={55}
                            height={55}
                            alt=""
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex flex-col text-xl ml-2">
                        <span className="text-black text-2xl font-bold">IForex</span>
                        <span className="text-gray-900 font-semibold">Your Trading Partner</span>
                    </div>
                </div>
            </Link>

            <h2 className="font-bold text-2xl mt-10">Terms & Conditions</h2>

            <span className="w-32 h-1 m-6 rounded-full bg-yellow-600"></span>

            <div className="w-2/3">
                <TermsBody />
            </div>
        </div>
    )
}

export default Terms