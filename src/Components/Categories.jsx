import { useState } from "react";
import Button from "../Utils/Category.png";
import hotel from "../Utils/Hotels.png";
import bar from "../Utils/Bars.png";
import TC from "../Utils/Tourist centres.png";
import mall from "../Utils/Malls.png";
import restaurant from "../Utils/Restaurants.png";

const Categories = () => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div className="">
      <>
        {!showCategory ? (
          <div className="lg:flex lg:ml-36 lg:mr-44 lg:border-b-2 lg:border-gray-200 lg:w-cover">
            <button
              onClick={() => setShowCategory(!showCategory)}
              className="lg:bg-white lg:focus:border lg:rounded-xl lg:mt-3 lg:ml-5 lg:mb-3 lg:mr-2 lg:border-gray-200 lg:focus:shadow-md"
            >
              <img src={Button} alt="categoriesButton" />
            </button>
            <p className="lg:text-2xl font-nunito lg:font-bold lg:mt-14">
              CATEGORIES
            </p>
          </div>
        ) : (
          <div>
            <div className="lg:flex lg:ml-36 lg:mr-44 lg:border-b-2 lg:border-gray-200 lg:w-cover">
              <button
                onClick={() => setShowCategory(!showCategory)}
                className="lg:bg-white lg:focus:border lg:rounded-xl lg:mt-3 lg:ml-5 lg:mb-3 lg:mr-2 lg:border-gray-200 lg:focus:shadow-md"
              >
                <img src={Button} alt="categoriesButton" />
              </button>
              <p className="lg:text-2xl font-nunito lg:font-bold lg:mt-14">
                CATEGORIES
              </p>
            </div>
            <ul className="lg:flex lg:justify-center lg:mt-5 lg:gap-10">
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
        )}
      </>
    </div>
  );
};

export default Categories;
