import Image from 'next/image'
import React from 'react'

const LargeCard = ({ img, title, description, buttonText }: any) => {
  return (
    <section className="relative py-16 cursor-pointer">
        <div className="relative h-96 min-w-[300px]">
            <Image 
                src={img}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
                alt='large-card'
            />
        </div>

        <div className="absolute top-32 left-12">
            <h3 className="text-4xl mb-3 w-64">{title}</h3>
            <p>{description}</p>
            <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 cursor-pointer hover:scale-105 transform transition duration-300 ease-out">{buttonText}</button>
        </div>
    </section>
  )
}

export default LargeCard