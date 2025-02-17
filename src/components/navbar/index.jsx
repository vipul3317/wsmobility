import React from "react";
import { useState,useEffect, useRef } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenServicesDropdown, setIsOpenServicesDropdown] = useState(false);
  const [isOpenBrandsDropdown, setIsOpenBrandsDropdown] = useState(false);
  const dropdownRef=useRef(null);

  const toggleDropdown = (dropdown) => {
    if (dropdown === "services") {
      setIsOpenServicesDropdown(!isOpenServicesDropdown);
      setIsOpenBrandsDropdown(false); 
    } else if (dropdown === "brands") {
      setIsOpenBrandsDropdown(!isOpenBrandsDropdown);
      setIsOpenServicesDropdown(false); 
    }
  };

  useEffect(()=>{
    const handleClickOutside=(event)=>{
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpenServicesDropdown(false);
        setIsOpenBrandsDropdown(false);
      }
    }

  document.addEventListener("click",handleClickOutside);
  return ()=>{
    document.removeEventListener("click", handleClickOutside);
  };
},[]);

const handleClick=(sectionId) => {
  document.getElementById('work-flow-id').scrollIntoView({
    behavior:"smooth",
    block:"start"
  })
}


  

  return (
    <nav className="p-4 border-b-2 border-green-900">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-black text-3xl font-bold">
          <img className="w-38 h-16" src="/assets/carhub_logo-removebg-preview.png"/>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black focus:outline-gray-500 md:hidden"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        <div
          className={`w-full md:flex md:items-center md:w-auto 
                    md:space-x-2 absolute md:relative top-16 left-0 md:top-0 
                    md:left-0 p-2 md:p-0 md:bg-transparent 
                    transition-all duration-500 ease-in-out transform ${
                      isOpen ? "translate-x-0" : "translate-x-full"
                    } md:translate-x-0`}
        >
          <a
            href="/"
            className="block py-2 px-2 text-base text-black hover:text-white hover:focus:outline-gray-500  hover:bg-green-700 hover:rounded-xl"
          >
            Home
          </a>
          <a
            href="/"
            onClick={(e)=>{
              e.preventDefault();
              handleClick()}}
            className="block py-2 px-2 text-base text-black hover:text-white hover:focus:outline-gray-500  hover:bg-green-700 hover:rounded-xl"
          >
            Working
          </a>
          <div className="relative" ref={dropdownRef}>
          <button
            onClick={()=>toggleDropdown("services")}
            href="/services"
            className="flex w-full py-2 px-2 text-base text-black hover:text-white hover:focus:outline-gray-500  hover:bg-green-700 hover:rounded-xl"
            
          >
            Services
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>

            {isOpenServicesDropdown && (
                <div
                    className="absolute left-1/4 transform -translate-x-1/4 top-full z-50 w-56 
                    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                    focus:outline-none"
                    role="menu" 
                    
                >
                    <div className="py-1" role="none" >
                        <a 
                            href="/services/1"
                            className="block border-b-2 px-4 py-2 text-base text-black 
                           hover:bg-gray-300 hover:text-green-900"
                            role="menuitem"
                        >
                            Car Washing 
                        </a>
                        <a 
                            href="/services/2"
                            className="block border-b-2 px-4 py-2 text-base text-black 
                            hover:bg-gray-300 hover:text-green-900"
                            role="menuitem"
                        >
                            BMW
                        </a>
                        <a 
                            href="/brands/3"
                            className="block border-b-2 px-4 py-2 text-base text-black 
                            hover:bg-gray-300 hover:text-green-900"
                            role="menuitem"
                        >
                            Mercedes
                        </a>
                        <a 
                            href="/brands/4"
                            className="block border-b-2 px-4 py-2 text-base text-black 
                            hover:bg-gray-300 hover:text-green-900"
                            role="menuitem"
                        >
                            Ford
                        </a>
                        <a 
                            href="/brands/5"
                            className="block border-b-2 px-4 py-2 text-base text-black 
                            hover:bg-gray-300 hover:text-green-900"
                            role="menuitem"
                        >
                            Hyundai
                        </a>
                        <a 
                            href="/brands/6"
                            className="block px-4 py-2 text-base text-black 
                            hover:bg-gray-300 hover:text-green-900"
                            role="menuitem"
                        >
                            Honda
                        </a>
                    </div>
                </div>
            )}

          </button>
          </div>

          <div className="relative">
          <button
            onClick={()=>toggleDropdown("brands")}
            href="/brands"
            className="flex w-full py-2 px-2 text-base text-black hover:text-white hover:focus:outline-gray-500  hover:bg-green-700 hover:rounded-xl"
          >
            Brands
            <svg
              className="ml-2 -mr-1 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            {isOpenBrandsDropdown && (
                <div
                  className="absolute left-1/4 top-full w-56 transform -translate-x-1/4
                  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5
                  focus:outline-none"
                  role="menu"
                >
                    <div className="py-1" role="none">
                        <a 
                            href="/brands/1"
                            className="block border-b-2 px-4 py-2 text-base text-black 
                            hover:bg-gray-300 hover:text-green-900"
                            role="menuitem"
                        >
                            Audi
                        </a>
                        <a 
                            href="/brands/2"
                            className="block border-b-2 px-4 py-2 text-base text-black 
                            hover:bg-gray-300 hover:text-green-900"
                            role="menuitem"
                        >
                            BMW
                        </a>
                        <a 
                            href="/brands/3"
                            className="block border-b-2 px-4 py-2 text-base text-black 
                            hover:bg-gray-300 hover:text-green-900"
                            role="menuitem"
                        >
                            Mercedes
                        </a>
                        <a 
                            href="/brands/4"
                            className="block border-b-2 px-4 py-2 text-base text-black 
                            hover:bg-gray-300 hover:text-green-900"
                            role="menuitem"
                        >
                            Ford
                        </a>
                        <a 
                            href="/brands/5"
                            className="block border-b-2 px-4 py-2 text-base text-black 
                            hover:bg-gray-300 hover:text-green-900"
                            role="menuitem"
                        >
                            Hyundai
                        </a>
                        <a 
                            href="/brands/6"
                            className="block border-b-2 px-4 py-2 text-base text-black 
                            hover:bg-gray-300 hover:text-green-900"
                            role="menuitem"
                        >
                            Honda
                        </a>
                    </div>
                </div>
            )}
          </button> 
          </div>

          <a
            href="/contact"
            className="block py-2 px-2 text-base text-black hover:text-white hover:focus:outline-gray-500  hover:bg-green-700 hover:rounded-xl"
          >
            Contact
          </a>
          <a
            href="/login"
            className="flex w-full py-2 px-2 text-base text-black hover:text-white hover:focus:outline-gray-500  hover:bg-green-700 hover:rounded-xl"
          >
            <svg class="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
</svg>

            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
