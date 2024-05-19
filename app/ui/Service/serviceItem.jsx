"use client"
import { motion } from "framer-motion"
import SavedIcon from "../savedIcon/SavedIcon";

const ServiceItem = ({ item }) => {
    const iconName = item.icon
    const library = iconName.slice(0, 2).toLowerCase();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}  >
            <div className="text-black p-3 border border-solid border-gray-300 rounded-lg bg-white flex h-full flex-col items-center hover:scale-105 transition duration-300">
                <div className="mt-5">
                    <SavedIcon library={library} icon={iconName} />
                </div>


                <h1 className="text-center font-bold mt-8 mb-4 text-lg">
                    {item.name}
                </h1>

                <p className="text-center text-sm mb-4 text-wrap">
                    {item.description}
                </p>
            </div>
        </motion.div >
    );
};

export default ServiceItem;
