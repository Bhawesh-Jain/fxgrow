import Image from "next/image";
import { motion } from "framer-motion"

const Service = ({ item }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}  >
            <div className="text-black p-3 border border-solid border-gray-300 rounded-lg bg-white flex flex-col items-center hover:scale-105 transition duration-300">
                <div className="mt-5">
                    <Image
                        src="/ic_trusted.png"
                        alt=""
                        width={50}
                        height={50}
                    />
                </div>

                <h1 className="text-center font-bold mt-8 mb-4 text-lg">Service Name</h1>

                <p className="text-center text-sm mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit quisquam, error voluptatum quas voluptate mollitia modi impedit pariatur, quidem vitae, dicta ab architecto quasi iste!</p>
            </div>
        </motion.div >
    );
};

export default Service;
