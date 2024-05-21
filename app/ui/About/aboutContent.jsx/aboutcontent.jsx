import Image from "next/image"

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"


const Aboutcontent = async () => {
  const res = await fetch(`${baseUrl}/api/dashboard/about/all`, {
    method: "GET",
    cache: "no-cache"
  });

  const body = await res.json();



  return (
    <div className="py-6 px-4 md:px-14 lg:px-32 flex flex-col justify-between md:flex-row">
      <div className="px-3 py-10 md:py-20 md:px-7 lg:px14 w-full md:w-3/6 lg:w-4/6">
        <h1 className="text-2xl md:text-3xl	font-bold	">About Our Company</h1>
        <p className="my-5 md:my-10 text-sm md:text-base lg:text-base">{body.data.description}</p>
      </div>

      <div className="relative w-full md:w-3/6 lg:w-2/6 p-10 my-5 h-60 md:h-auto md:my-5 lg:my-10">
        <Image
          className="md:p-14"
          src="/about.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default Aboutcontent