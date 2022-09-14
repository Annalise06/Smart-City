import React from "react";
import { BiSearch } from "react-icons/bi";

const Navigation = () => {
  return (
    <div className="flex h-14 lg:justify-between px-4 mx-30 sticky top-0 bg-white">
      <div className="ml-28 text-3xl mt-3 text-center">
        <h2 className="font-nunito font-black">SmartCity</h2>
      </div>
      <div className="hidden lg:flex lg:relative lg:text-center lg:mt-4 lg:mb-3 shadow-sm">
        <BiSearch
          className="absolute pt-1 pl-2 text-gray-400 font-medium"
          size={25}
        />
        <input
          type="text"
          placeholder="Search for facilities"
          className="w-80 py-1 pl-8 pr-2 text-black font-light text-sm border border-gray-300 rounded-lg outline-none bg-white focus:bg-gray-50 focus:border-gray-200"
        />
      </div>
      <div className="flex gap-2 my-3 mr-28">
        <button>Sign Up</button>
        <button className="bg-purple-700 rounded-md text-sm text-white text-center px-3 hover:bg-purple-600 focus:bg-purple-500">
          Visit a Facility
        </button>
      </div>
    </div>
  );
};

export default Navigation;
