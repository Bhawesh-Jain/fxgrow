import Marquee from "./Marquee";
import SliderItem from "./sliderItem";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001"

const SliderBody = async () => {

    const res = await fetch(`${baseUrl}/api/dashboard/slider/all`, {
        method: "GET",
        cache: "no-store",
        headers: {
            "Content-type": "application/json"
        }
    });

    let list = []

    if (res.ok) {
        let body = await res.json()

        list = body.data
    }


    return (
        <>
            <Marquee speed={60}>
                {

                    list.map(item => (
                        <SliderItem key={item._id} item={item} />
                    ))

                }
            </Marquee>
        </>
    )
}

export default SliderBody