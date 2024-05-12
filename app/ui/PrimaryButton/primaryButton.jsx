import Link from "next/link"

const PrimaryButton = ({ btnText, link }) => {
    return (
        <div>
            <Link className="" href={link}>
                <button className="w-4/5 md:w-3/5 lg:w-3/6 my-3 px-5 py-4 bg-white border border-solid border-gray-300 rounded-tl-3xl rounded-br-3xl shadow-lg ">
                    <span className="selection:no-underline">{btnText}</span>
                </button>
            </Link>
        </div>
    )
}

export default PrimaryButton