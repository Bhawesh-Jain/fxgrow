import Image from "next/image";

const Service = ({ item }) => {
    return (
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
    );
};

export default Service;
