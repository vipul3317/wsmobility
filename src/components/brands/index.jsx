import React, { useState } from 'react'

const Brand = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const buttons = ["American", "British", "German", "Japanese", "French", "Others"];

    const brandContent = {
        0: <div className='branddiv-part2'>
            <div className="brandcard-container m-2 flex flex-wrap gap-5 justify-center">
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-4' src='/assets/brand logos/ford-logo-2017-download.png' alt='brandA-1' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28 p-4' src='/assets/brand logos/jeep-logo-1993-download.png'alt='brandA-2' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' alt='brandA-3' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' alt='brandA-4' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' alt='brandA-5' /></span>
                </div>
            </div>
        </div> ,
        1: <div className='branddiv-part2'>
            <div className="brandcard-container m-2 flex flex-wrap gap-5 justify-center">
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                
            </div>
        </div> ,
        2: <div className='branddiv-part2'>
            <div className="brandcard-container m-2 flex flex-wrap gap-5 justify-center">
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                
            </div>
        </div> ,
        3: <div className='branddiv-part2'>
            <div className="brandcard-container m-2 flex flex-wrap gap-5 justify-center">
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                
            </div>
        </div> ,
        4: <div className='branddiv-part2'>
            <div className="brandcard-container m-2 flex flex-wrap gap-5 justify-center">
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
            </div>
        </div> ,
        5: <div className='branddiv-part2'>
            <div className="brandcard-container m-2 flex flex-wrap gap-5 justify-center">
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
                <div className="p-2 bg-white transform transition duration-300 hover:-translate-y-4 border border-gray-500 rounded-xl hover:cursor-pointer">
                    <span><img className='w-36 h-28' src='/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png' /></span>
                </div>
            </div>
        </div>

    }
    return (
        <section id='brands-id'>
            <div className="parent-brand pt-8 pb-8 bg-gray-300">
                <div className="branddiv-part1 p-4 ">
                    <div className="heading-brand text-center text-black font-semibold text-4xl">
                        BRANDS WE SERVICE & REPAIR
                    </div>
                    <div className="flex gap-2 flex-wrap justify-center mt-12 mb-8">
                        {buttons.map((label, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`text-xl transition-all duration-0 ${selectedIndex === index ? "bg-green-600 text-white" : "bg-white text-black"} hover:bg-green-600 hover:text-white rounded-lg pt-4 pb-4 pl-16 pr-16 border border-black`}>
                                {label}
                            </button>
                        ))}

                    </div>
                </div>

                <div className="brand-content flex justify-center">
                        {brandContent[selectedIndex]}
                </div>

            </div>
        </section>
    )
}

export default Brand