import React from "react";
import { BiSearch } from "react-icons/bi";

const Navigation = () => {
  return (
    <div className="flex justify-center lg:h-14 lg:justify-between lg:px-4 lg:mx-30 lg:sticky lg:top-0 bg-white">
      <div className="hidden lg:flex lg:ml-28 lg:text-3xl lg:mt-3 text-center">
        <h2 className="font-nunito font-black">SmartCity</h2>
      </div>
      <div className="pt-2 lg:pt-0  lg:ml-0 lg:flex lg:relative lg:text-center lg:mt-4 lg:mb-3 shadow-sm">
        <BiSearch
          className="absolute pt-2 mt-1 lg:pb-2 pl-2 lg:pt-2 lg:mt-0  text-gray-400 font-medium"
          size={35}
        />
        <input
          type="text"
          placeholder="Search for facilities"
          className="w-64 lg:w-80 h-12 lg:h-8 py-1 pl-10 pr-2 text-black font-light text-lg lg:text-sm border border-gray-300 rounded-lg outline-none bg-white focus:bg-gray-50 focus:border-gray-200"
        />
      </div>
      <div className="hidden lg:flex lg:gap-2 lg:my-3 lg:mr-28">
        <button>Sign Up</button>
        <button className="bg-purple-700 rounded-md text-sm text-white text-center px-3 hover:bg-purple-600 focus:bg-purple-500">
          Visit a Facility
        </button>
      </div>
    </div>
  );
};

export default Navigation;
