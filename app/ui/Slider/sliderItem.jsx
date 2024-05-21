"use client"

import { useEffect, useState } from "react";
import { RiDashboardFill } from "react-icons/ri";

const SliderItem = ({ item }) => {
    const [askAmount, setAskAmount] = useState(500);
    const [bidAmount, setBidAmount] = useState(400);
    const [amount, setAmount] = useState(6000);
    const [askColor, setAskColor] = useState("text-gray-600");
    const [bidColor, setBidColor] = useState("text-gray-600");
    const [amountColor, setAmountColor] = useState("text-gray-600");

    useEffect(() => {
        const interval = setInterval(() => {
            updateAmount();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const updateAmount = () => {
        const newAskAmount = askAmount + Math.floor(Math.random() * 11) - 1;
        const newBidAmount = bidAmount + Math.floor(Math.random() * 11) - 2;
        const newAmount = amount + Math.floor(Math.random() * 11) - 4;

        setAskAmount(newAskAmount);
        setBidAmount(newBidAmount);
        setAmount(newAmount);

        // Determine color based on change in amount
        if (newAmount > amount) {
            setAmountColor("text-green-600");
        } else if (newAmount < amount) {
            setAmountColor("text-red-600");
        } else {
            setAmountColor("text-gray-600");
        }

        // Determine color based on change in askAmount
        if (newAskAmount > askAmount) {
            setAskColor("text-green-600");
        } else if (newAskAmount < askAmount) {
            setAskColor("text-red-600");
        } else {
            setAskColor("text-gray-600");
        }

        // Determine color based on change in bidAmount
        if (newBidAmount > bidAmount) {
            setBidColor("text-green-600");
        } else if (newBidAmount < bidAmount) {
            setBidColor("text-red-600");
        } else {
            setBidColor("text-gray-600");
        }

        // Flash the color briefly and then revert to dark gray
        setTimeout(() => {
            setAmountColor("text-gray-600");
            setAskColor("text-gray-600");
            setBidColor("text-gray-600");
        }, 500); // Adjust the timeout value (in milliseconds) for the duration of the flash
    }

    return (
        <div className="inline-block mx-2">
            <div className="flex flex-col p-3">
                <div className="flex flex-row items-center text-sm gap-2">
                    <RiDashboardFill className="" size={40} />
                    <div>
                        <div className="flex flex-row justify-between">
                            <h2 className="text-base font-medium">Euro/USD</h2>
                            <h2 className={`text-base font-medium ${amountColor}`}>{amount}</h2>
                        </div>
                        <p>Europe/American Currency</p>
                    </div>
                </div>
                <div className="flex flex-row justify-between px-2 mt-2">
                    <div className="flex flex-col">
                        <p>Ask</p>
                        <p className={`font-medium ${askColor}`}>{askAmount}</p>
                    </div>
                    <div className="flex flex-col">
                        <p>Bid</p>
                        <p className={`font-medium ${bidColor}`}>{bidAmount}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SliderItem;
