import React, { useState } from "react";
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import BookOnlineIcon from '@mui/icons-material/BookOnline';

const Hero2 = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttons=["You Book", "You Confirm", "We Service", "You Pay"];
  return (
    <section id="work-flow-id">
      <div className="container pt-8 pb-8 bg-gray-300">
        <div className="working-heading p-4 ">
          <div className="heading-work text-center text-black font-bold text-4xl">
            HOW IT WORKS
          </div>
          <div className="work-flow flex flex-wrap justify-center mt-8 mb-8">
            {buttons.map((label, index) => (
              <button
              key={index}
                onClick={() => setSelectedIndex(index)}
                className={`text-xl transition-all duration-100 ${selectedIndex === index ? "bg-green-600 text-white" : "bg-white text-black"} hover:text-white hover:bg-green-600 pt-4 pb-4 pl-24 pr-24 border border-black`}>
                {label}
              </button>
            ))}
            
          </div>
        </div>
        <div className="flex justify-center working-explain">
          <div className="details flex flex-col ml-8">
            <span className="text-green-600 text-2xl font-bold"><PhoneInTalkIcon className="mr-2" /> Contact</span>
            <span className="text-lg ml-10">Car Hub call centre operates from 8AM - 9PM, Monday to Saturday.</span>
            <span className="text-lg ml-10">Call us at <a href="/contact" className="text-blue-800 font-bold underlined ml-1"> 6201195807</a> </span>

            <span className="text-green-600 text-2xl font-bold mt-6"><BookOnlineIcon className="mr-2" /> Book Online</span>
            <span className="text-lg ml-10">Make a booking online at a single tap.</span>
            <span className="text-lg ml-10">Call us at <a href="/contact" className="text-blue-800 font-bold underlined ml-1"> 6201195807</a> </span>
          </div>
          <div className="working-media ml-8">
            <img style={{ width: '95%', height: '95%'}} className="rounded-3xl" src="/assets/car-img.jpg" alt="car-image" />
          </div>
        </div>
        <div className="get-a-quote justify-center mt-8 flex flex-wrap">
          <span className="text-xl bg-black text-white p-6 rounded-2xl"> Incredible Car Service Deals. <button className="underline underline-offset-auto">GET A PERSONALIZED QUOTE</button></span>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
