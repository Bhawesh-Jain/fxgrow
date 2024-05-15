"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const AboutUs = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
        >
            <div className="py-6 px-4 md:px-14 lg:px-32 flex flex-col justify-between md:flex-row">
                <div className="px-3 py-10 md:py-20 md:px-7 lg:px14 w-full md:w-3/6 lg:w-4/6">
                    <h1 className="text-2xl md:text-3xl	font-bold	">About Our Company</h1>
                    <p className="my-5 md:my-10 text-sm md:text-base lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio amet maiores dicta accusamus totam iusto quaerat esse fugit ea praesentium ut! Obcaecati, ullam incidunt provident quo cum animi unde error doloremque illum rem pariatur sunt excepturi necessitatibus distinctio illo! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <p className="my-5 md:my-10 text-sm md:text-base lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio amet maiores dicta accusamus totam iusto quaerat esse fugit ea praesentium ut! Obcaecati.</p>
                    <p className="my-5 md:my-10 text-sm md:text-base lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odio amet maiores dicta accusamus totam iusto quaerat esse fugit ea praesentium ut! Obcaecati, ullam incidunt provident quo </p>
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
        </motion.div>
    )
}

export default AboutUs