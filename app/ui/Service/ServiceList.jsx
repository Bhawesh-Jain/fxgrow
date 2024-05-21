import ServiceItem from "./serviceItem";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const getServiceList = async () => {
  const res = await fetch(`${baseUrl}/api/dashboard/service/all`, {
    method: "GET",
    cache: "no-store",
    headers: {
      "Content-type": "application/json"
    }
  });

  if (res.ok) {
    let body = await res.json()

    return body.data
  }
} 

const ServiceList = async () => {
  
  const list = await getServiceList()

  return (
    <>
      {
        list.map(item => (
          <ServiceItem key={item._id} item={item} />
        ))
      }
    </>
  )

}

export default ServiceList