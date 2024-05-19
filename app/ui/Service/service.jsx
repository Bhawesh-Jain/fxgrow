import ServiceList from "./ServiceList"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const Service = () => {
    
    return (
        <div className="text-center p-5 md:p-14 lg:px-32 lg:py-24 flex flex-col items-center text-white bg-black">
            <h1 className="text-2xl md:text-3xl	font-bold">Our Company Services</h1>
            <span className="w-32 h-1 m-6 rounded-full bg-yellow-600"></span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sit deleniti. Magnam autem eius et aut laboriosam, totam consequuntur aspernatur!</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-5 sm:gap-6">
                <ServiceList />
            </div>
        </div>
    )
}

export default Service