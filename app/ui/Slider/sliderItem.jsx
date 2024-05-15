import { RiDashboardFill } from "react-icons/ri";
    
const SliderItem = ({item}) => {
    return (
        <div className="inline-block mx-2">
            <div className="flex flex-col p-3">

                <div className="flex flex-row items-center text-sm gap-2">
                    <RiDashboardFill className="" size={40} />
                    <div>
                        <div className="flex flex-row justify-between">
                            <h2 className="text-base font-medium">Euro/USD</h2>
                            <h2 className="text-base font-medium">7675</h2>
                        </div>
                        <p>Europe/American Currency</p>
                    </div>
                </div>

                <div className="flex flex-row justify-between px-2 mt-2">
                    <div className="flex flex-col">
                        <p>Ask</p>
                        <p className="text-pink-600">500</p>
                    </div>

                    <div className="flex flex-col">
                        <p>Bid</p>
                        <p className="text-pink-600">500</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SliderItem