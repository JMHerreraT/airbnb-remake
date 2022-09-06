import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { SparklesIcon } from "@heroicons/react/outline";

export interface IInfoCardProps {
    key: string;
    image: string;
    location: string;
    title: string;
    description: string;
    star: number;
    price: string;
    total: string;

}

const InfoCard = ({ key, image, location, title, description, star, price, total }: IInfoCardProps) => {
    return (
        <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
            <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image src={image} layout="fill" objectFit="cover" alt="info" className="rounded-2xl" />
            </div>

            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-between">
                    <p>{location}</p>
                    <SparklesIcon className="h-7 cursor-pointer text-orange-400" />
                </div>

                <h4 className="text-xl">{title}</h4>

                <div className="border-b w-10 pt-2" />

                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-400" />
                        {star}
                    </p>

                    <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                        <p className="text-right font-extralight text-gray-600">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard