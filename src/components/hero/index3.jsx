import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useState, useEffect } from 'react';

const Hero3 = () => {

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Countdown logic
    useEffect(() => {
        const calculateTimeLeft = () => {
            const targetDate = new Date("2025-02-09T23:59:59").getTime(); // Set target date
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        const timerId = setInterval(calculateTimeLeft, 1000); // Update every second
        return () => clearInterval(timerId); // Cleanup on unmount
    }, []);


    return (
        <section>
            <div className="container pt-8 pb-8 bg-gray-200">
                <div className="service flex justify-center">
                    <div className="major-service text-center text-black font-bold text-4xl">
                        MAJOR SERVICE
                    </div>
                </div>
                <div className='flex relative'>
                    <div className='inline-block shadow-all-directions mx-auto gap-2 p-8 mt-8 pr-48 bg-white rounded-3xl'>
                        <div className='flex gap-32'>
                            <div className="included">
                                <span className='font-bold text-2xl ml-7 '>INCLUDED</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Free Collection & Delivery</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Free Car Wash</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Free Labour - Oil & Oil Filter Replacement</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Free Labour - AC & Air Filter Replacement</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Oil 5W30 (Fully Synthetic)</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Oil Filter (Genuine OEM)</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>360 - Degree Health Check</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>DTC / OBD Report (Digital)</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>All Fluids Top-Up</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Reset Service Light / Indication</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Brake Check</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>AC Checkup</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>Tyre Check & Air Pressure</span>
                                <br />
                                <CheckIcon style={{ color: 'green' }} />
                                <span className='ml-1'>RTA Passing Checks</span>

                            </div>
                            <div className="not-included-price gap-4">
                                <div className="not-included">
                                    <span className='font-bold text-2xl ml-7'>NOT INCLUDED</span>
                                    <br />
                                    <ClearIcon style={{ color: 'red' }} />
                                    <span className='ml-1'>Air Filter</span>
                                    <br />
                                    <ClearIcon style={{ color: 'red' }} />
                                    <span className='ml-1'>AC Filter</span>
                                    <br />
                                    <ClearIcon style={{ color: 'red' }} />
                                    <span className='ml-1'>Spark Plugs</span>
                                    <br />
                                    <ClearIcon style={{ color: 'red' }} />
                                    <span className='ml-1'>Spark Plugs Replacement (Labour)</span>
                                </div>
                                <div className="strikethrough-red price-not-app mt-16 text-5xl font-bold">
                                    Rs.12000
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="overlap-price text-center bg-green-800 p-8 rounded-3xl absolute right-20 top-20 shadow-md animate-blinkRed-shadow ">
                        <span className='text-white text-xl '>GET FREE OIL AND AED 150 OFF</span>
                        <br />
                        <span className='text-white text-xl'>WHEN YOU BOOK TODAY</span>
                        <br />
                        <span className='text-white text-xl block mt-4'>Now at <span className='text-yellow-300 text-5xl'>Rs.9999</span></span>

                        <div className="container flex flex-wrap justify-center gap-2 mt-5">
                            <div className="block">
                                <div className="text-center days bg-black text-white text-2xl px-5 py-1 shadow-md rounded-xl">
                                    {timeLeft.days}
                                </div>
                                <small className="mt-2 flex justify-center text-sm text-white">
                                    DAYS
                                </small>
                            </div>
                            <span className="text-2xl text-white">:</span>
                            <div className="block">
                                <div className="hours text-center rounded-xl bg-white text-black text-2xl px-5 py-1 shadow-md">
                                    {timeLeft.hours}
                                </div>
                                <small className="flex mt-2 justify-center text-sm text-white">
                                    HOURS
                                </small>
                            </div>
                            <span className="text-2xl text-white">:</span>
                            <div className="block">
                                <div className="minutes text-center rounded-xl bg-white text-black text-2xl px-5 py-1 shadow-md">
                                    {timeLeft.minutes}
                                </div>
                                <small className="mt-2 flex justify-center text-sm text-white">
                                    MINUTES
                                </small>
                            </div>
                            <span className="text-2xl text-white">:</span>
                            <div className="block">
                                <div className="seconds text-center bg-white text-black text-2xl px-5 py-1 shadow-md rounded-xl">
                                    {timeLeft.seconds}
                                </div>
                                <small className="mt-2 flex justify-center text-sm text-white">
                                    SECONDS
                                </small>
                            </div>
                        </div>
                        <div className="container text-center mt-5">
                            <button className="text-2xl font-bold shadow-lg shadow-white bg-red-700 text-white p-4 rounded-2xl ">BOOK NOW</button>
                        </div>

                    </div>



                </div>
                <div className="container">

                </div>
            </div>
        </section>
    );
};

export default Hero3;