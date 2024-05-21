"use client"

import { useEffect, useState } from "react";
import { RiDashboardFill } from "react-icons/ri";
import SavedIcon from "../savedIcon/SavedIcon";

const SliderItem = ({ item }) => {
    const [askAmount, setAskAmount] = useState(item.ask);
    const [bidAmount, setBidAmount] = useState(item.bid);
    const [amount, setAmount] = useState(item.amount);
    const [askColor, setAskColor] = useState("text-gray-600");
    const [bidColor, setBidColor] = useState("text-gray-600");
    const [amountColor, setAmountColor] = useState("text-gray-600");

    const iconName = item.icon
    const library = iconName.slice(0, 2).toLowerCase();


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

        if (newAmount > amount) {
            setAmountColor("text-green-600");
        } else if (newAmount < amount) {
            setAmountColor("text-red-600");
        } else {
            setAmountColor("text-gray-600");
        }

        if (newAskAmount > askAmount) {
            setAskColor("text-green-600");
        } else if (newAskAmount < askAmount) {
            setAskColor("text-red-600");
        } else {
            setAskColor("text-gray-600");
        }

        if (newBidAmount > bidAmount) {
            setBidColor("text-green-600");
        } else if (newBidAmount < bidAmount) {
            setBidColor("text-red-600");
        } else {
            setBidColor("text-gray-600");
        }

        setTimeout(() => {
            setAmountColor("text-gray-600");
            setAskColor("text-gray-600");
            setBidColor("text-gray-600");
        }, 500); 
    }

    return (
        <div className="inline-block mx-2">
            <div className="flex flex-col p-3">
                <div className="flex flex-row items-center text-sm gap-2">
                    <SavedIcon library={library} icon={iconName} size={30} />
                    
                    <div>
                        <div className="flex flex-row justify-between">
                            <h2 className="text-base font-medium">{item.name}</h2>
                            <h2 className={`text-base font-medium ${amountColor}`}>{amount}</h2>
                        </div>
                        <p>{item.description}</p>
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
