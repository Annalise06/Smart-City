import React from "react";
import Avatar from "../Utils/vr-glasses.png";

const Hero = () => {
  return (
    <section className="flex bg-purple-500 justify-between h-96 mt-3 rounded-xl mx-32 w-cover">
      {/* <div className="flex bg-purple-500 justify-between h-96 mt-3 rounded-xl mx-32 w-cover"> */}
      <div className="ml-14 pt-24 w-1/2">
        <h2 className="text-7xl font-nunito font-extrabold text-gray-200">
          Explore New Places
        </h2>
        <p className="text-sm pt-1 text-gray-300 font-light">
          Easily find places to Stay, Eat, Visit, Shop, and more.
        </p>
      </div>
      <div className="flex mr-28 my-3">
        <img src={Avatar} />
      </div>
      {/* </div> */}
    </section>
  );
};

export default Hero;
