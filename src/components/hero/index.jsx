import React from "react";
import { useState, useEffect } from "react";
import CarRepairIcon from '@mui/icons-material/CarRepair';


const Hero = ({ isOpen }) => {
  // Timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown logic
  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-02-05T23:59:59").getTime(); // Set target date
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

  const Blinktext = ({ children, interval = 2000 }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
      const timer = setInterval(() => {
        setVisible((prev) => !prev);
      }, interval);

      return () => clearInterval(timer);
    }, [interval]);

    return <span>{visible ? children : " "}</span>;
  };

  return (
    <section>
      <div className="container flex w-full pb-24 bg-gray-200">
        <div className="container">
          <div className="card-container1 m-12 flex flex-wrap gap-5 justify-center">
            <div className="card pl-6 pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold ">
              {/* <span class="material-symbols-outlined">car_repair</span> */}
              <CarRepairIcon style={{fontSize:'50px', color:'green'}}/><br/>
              <span className="text-lg">Car</span> <br />
              <span>Service</span>
            </div>
            <div className="card card pl-6 pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold">
              <span>Car</span>
              <br />
              <span>Renewal</span>
            </div>
            <div className="card card pl-6 pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold">
              <span>Roadside</span>
              <br />
              <span>Assistance</span>
            </div>
          </div>
          <div className="card-container2 m-12 flex flex-wrap gap-5 justify-center ">
            <div className="card card pl-6 pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold ">
              <span>Car</span> <br />
              <span>Service</span>
            </div>
            <div className="card card pl-6 pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold ">
              <span>Car</span> <br />
              <span>Service</span>
            </div>
            <div className="card card pl-6 pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold ">
              <span>Car</span> <br />
              <span>Service</span>
            </div>
          </div>
          <div className="card-container3 m-12 flex flex-wrap gap-5 justify-center">
            <div className="card card pl-6 pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold ">
              <span>Car</span> <br />
              <span>Service</span>
            </div>
            <div className="card card pl-6 pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold ">
              <span>Car</span> <br />
              <span>Service</span>
            </div>
            <div className="card card pl-6 pr-6 bg-white text-center hover:shadow-green-800 transform transition duration-300 hover:-translate-y-2 p-3 m-4 shadow-xl rounded-xl hover:cursor-pointer font-bold ">
              <span>Car</span> <br />
              <span>Service</span>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="container flex justify-center">
            <img
              style={{width:'30%', height:'30%'}}
              src="/assets/istockphoto-943480508-612x612-Photoroom-Photoroom.png"
              alt="refresh-img"
            />
          </div>
          <div className="container flex flex-col gap-5 font-extrabold text-5xl text-center">
            <span>BOOK NOW</span>

            <span className="text-green-800">GET YOUR CAR REFRESH</span>
          </div>
          <div className="container flex flex-col gap-3 text-center mt-10">
            <span className="text-xl text-gray-900">
              Free Car Delivery and PickUp
            </span>
            <div className="inline-block border-2 text-xl text-gray-900 border-dotted border-black">
              Use Code : HUB2025
            </div>
            <Blinktext>
              <h1 className=" text-red-800 text-2xl font-extrabold">
                Hurry Up
              </h1>
            </Blinktext>
          </div>
          <div className="container flex flex-wrap justify-center gap-3">
            <div className="block">
              <div className="text-center days bg-black text-white animate-blink-shadow text-5xl px-5 py-1 shadow-md rounded-xl">
                {timeLeft.days}
              </div>
              <small className="mt-2 flex justify-center text-base font-bold text-gray-800">
                DAYS
              </small>
            </div>
            <span className="text-5xl">:</span>
            <div className="block">
              <div className="hours text-center rounded-xl bg-green-800 animate-blink-shadow text-white text-5xl px-5 py-1 shadow-md">
                {timeLeft.hours}
              </div>
              <small className="flex mt-2 justify-center text-base font-bold text-gray-800">
                HOURS
              </small>
            </div>
            <span className="text-5xl">:</span>
            <div className="block">
              <div className="minutes text-center rounded-xl bg-green-800 animate-blink-shadow text-white text-5xl px-5 py-1 shadow-md">
                {timeLeft.minutes}
              </div>
              <small className="mt-2 flex justify-center text-base font-bold text-gray-800">
                MINUTES
              </small>
            </div>
            <span className="text-5xl">:</span>
            <div className="block">
              <div className="seconds text-center bg-green-800 animate-blink-shadow text-white text-5xl px-5 py-1 shadow-md rounded-xl">
                {timeLeft.seconds}
              </div>
              <small className="mt-2 flex justify-center animate-pulse text-base font-bold text-gray-800">
                SECONDS
              </small>
            </div>
          </div>
          <div className="container text-center mt-8">
            <button className="text-2xl font-bold shadow-xl hover:shadow-black bg-green-800 text-white p-4 rounded-2xl ">BOOK NOW</button>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Hero;
