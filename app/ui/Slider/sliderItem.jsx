"use client"

import { useEffect, useState } from "react";
import { RiDashboardFill } from "react-icons/ri";

const SliderItem = ({ item }) => {
    const [askAmount, setAskAmount] = useState(500);
    const [bidAmount, setBidAmount] = useState(400);
    const [amount, setAmount] = useState(6000);

    useEffect(() => {
        const interval = setInterval(() => {
            updateAmount();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const updateAmount = () => {
        setAskAmount(prevAmount => {
            const change = Math.floor(Math.random() * 11) - 1;
            return prevAmount + change;
        });
        setBidAmount(prevAmount => {
            const change = Math.floor(Math.random() * 11) - 2;
            return prevAmount + change;
        });
        setAmount(prevAmount => {
            const change = Math.floor(Math.random() * 11) - 4;
            return prevAmount + change;
        });
    }

    return (
        <div className="inline-block mx-2">
            <div className="flex flex-col p-3">

                <div className="flex flex-row items-center text-sm gap-2">
                    <RiDashboardFill className="" size={40} />
                    <div>
                        <div className="flex flex-row justify-between">
                            <h2 className="text-base font-medium">Euro/USD</h2>
                            <h2 className="text-base font-medium">{amount}</h2>
                        </div>
                        <p>Europe/American Currency</p>
                    </div>
                </div>

                <div className="flex flex-row justify-between px-2 mt-2">
                    <div className="flex flex-col">
                        <p>Ask</p>
                        <p className="text-pink-600">{
                            askAmount
                        }</p>
                    </div>

                    <div className="flex flex-col">
                        <p>Bid</p>
                        <p className="text-pink-600">{bidAmount}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SliderItem