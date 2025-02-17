import React, { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';

const Warranty = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const buttons = ["Service", "A/C", "Repair", "Batteries", "Tyres", "Electrical"];

    const warrantyContent = {
        0: <div className="warranty-part2 flex">
            <div className="policy1 flex flex-col text-center pr-24 border-r-4 border-green-700">
                <span className='text-6xl text-green-600 font-semibold p-1'>12 MONTHS</span>
                <span className='text-3xl text-black font-semibold p-1'>OR</span>
                <span className='text-6xl text-green-600 font-semibold p-1'>10,000 KM</span>
            </div>
            <div className="policy2 pl-24">
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Warranty on parts and labour</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>12 months or 10,000 KM - whichever comes first</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Hassle-free claims process</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Terms & conditions apply</span>
                <br />
                <div className='mt-8 ml-8'>We provide a 12 month/10,000 KM warranty with every car service. <br />Whether you choose to buy genuine or aftermarket parts from us, <br />both come with a hassle-free warranty policy. <br />The labour is also covered under the warranty.</div>
            </div>
        </div>,
        1: <div className="warranty-part2 flex">
            <div className="policy1 flex flex-col text-center pr-24 border-r-4 border-green-700">
                <span className='text-6xl text-green-600 font-semibold p-1'>6 MONTHS</span>
                <span className='text-3xl text-black font-semibold p-1'>OR</span>
                <span className='text-6xl text-green-600 font-semibold p-1'>5,000 KM</span>
            </div>
            <div className="policy2 pl-24">
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Warranty on parts and labour</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>6 months or 5,000 KM - whichever comes first</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Hassle-free claims process</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Terms & conditions apply</span>
                <br />
                <div className='mt-8 ml-8'>We provide a 6 month/5,000 KM warranty with every car service. <br />Whether you choose to buy genuine or aftermarket parts from us, <br />both come with a hassle-free warranty policy. <br />The labour is also covered under the warranty.</div>
            </div>
        </div>,
        2: <div className="warranty-part2 flex">
            <div className="policy1 flex flex-col text-center pr-24 border-r-4 border-green-700">
                <span className='text-6xl text-green-600 font-semibold p-1'>12 MONTHS</span>
                <span className='text-3xl text-black font-semibold p-1'>OR</span>
                <span className='text-6xl text-green-600 font-semibold p-1'>10,000 KM</span>
            </div>
            <div className="policy2 pl-24">
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Warranty on parts and labour</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>12 months or 10,000 KM - whichever comes first</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Hassle-free claims process</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Terms & conditions apply</span>
                <br />
                <div className='mt-8 ml-8'>We provide a 12 month/10,000 KM warranty with mechanical repairs<br/> excluding AC, electrical, seals and consumables. Whether you choose<br/> to buy genuine or aftermarket parts from us, both come with a hassle-free<br/> warranty policy. The labour is also covered under the warranty.</div>
            </div>
        </div>,
        3: <div className="warranty-part2 flex">
            <div className="policy1 flex flex-col text-center pr-24 border-r-4 border-green-700">
                <span className='text-6xl text-green-600 font-semibold p-1'>12 MONTHS</span>
                <span className='text-3xl text-black font-semibold p-1'>OR</span>
                <span className='text-6xl text-green-600 font-semibold p-1'>10,000 KM</span>
            </div>
            <div className="policy2 pl-24">
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Warranty on parts and labour</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>12 months or 10,000 KM - whichever comes first</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Hassle-free claims process</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Terms & conditions apply</span>
                <br />
                <div className='mt-8 ml-8'>We provide a 12 month/10,000 KM warranty with every car service. <br />Whether you choose to buy genuine or aftermarket parts from us, <br />both come with a hassle-free warranty policy. <br />The labour is also covered under the warranty.</div>
            </div>
        </div>,
        4: <div className="warranty-part2 flex">
            <div className="policy1 flex flex-col text-center pr-24 border-r-4 border-green-700">
                <span className='text-6xl text-green-600 font-semibold p-1'>12 MONTHS</span>
                <span className='text-3xl text-black font-semibold p-1'>OR</span>
                <span className='text-6xl text-green-600 font-semibold p-1'>10,000 KM</span>
            </div>
            <div className="policy2 pl-24">
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Warranty on parts and labour</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>12 months or 10,000 KM - whichever comes first</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Hassle-free claims process</span>
                <br />
                <CheckIcon style={{ color: 'green' }} />
                <span className='ml-1'>Terms & conditions apply</span>
                <br />
                <div className='mt-8 ml-8'>We provide a 12 month/10,000 KM warranty with every car service. <br />Whether you choose to buy genuine or aftermarket parts from us, <br />both come with a hassle-free warranty policy. <br />The labour is also covered under the warranty.</div>
            </div>
        </div>
    }
    return (
        <section id='warranty-id'>
            <div className="parent-warranty pt-8 pb-8 bg-gray-200">
                <div className="warrantydiv-part1 p-4 ">
                    <div className="heading-warranty text-center text-black font-semibold text-4xl">
                        OUR WARRANTY POLICY
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
                    {warrantyContent[selectedIndex]}
                </div>

            </div>
        </section>
    )
}

export default Warranty