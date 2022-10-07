import React from "react";
import Avatar from "../Utils/vr-glasses.png";
import hotel from "../Utils/Icons/Hotels.png";
import bar from "../Utils/Icons/Bars.png";
import TC from "../Utils/Icons/Tourist centres.png";
import mall from "../Utils/Icons/Malls.png";
import restaurant from "../Utils/Icons/Restaurants.png";

const Hero = () => {
  return (
    <>
      <div className="flex lg:hidden">
        <ul className="flex justify-center mt-5 gap-1">
          <li>
            <img src={hotel} alt="hotels" />
          </li>
          <li>
            <img src={bar} alt="bars" />
          </li>
          <li>
            <img src={TC} alt="TCs" />
          </li>
          <li>
            <img src={mall} alt="malls" />
          </li>
          <li>
            <img src={restaurant} alt="restaurants" />
          </li>
        </ul>
      </div>
      <section className="hidden lg:flex bg-purple-500 justify-between h-96 mt-3 rounded-xl mx-32 w-cover">
        <div className="ml-14 pt-24 w-1/2">
          <h2 className="text-7xl font-nunito font-extrabold text-gray-200">
            Explore New Places
          </h2>
          <p className="text-sm pt-1 text-gray-300 font-light">
            Easily find places to Stay, Eat, Visit, Shop, and more.
          </p>
        </div>
        <div className="flex mr-28 my-3">
          <img src={Avatar} alt="Avatar" />
        </div>
      </section>
    </>
  );
};

export default Hero;
