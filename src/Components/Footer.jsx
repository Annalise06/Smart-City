import { Link, Outlet } from "react-router-dom";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="hidden lg:flex mt-56 items-center border-t-2 border-gray-300 bg-slate-200">
      <div className="ml-20 mr-80 text-3xl mt-3 text-center">
        <h2 className="font-nunito font-black">SmartCity</h2>
      </div>
      <div className="mr-64">
        <Link className="mr-10 font-semibold text-gray-600 hover:underline hover:text-blue-600 focus:text-red-500">
          Home
        </Link>
        <Link className="mr-10 font-semibold text-gray-600 hover:underline hover:text-blue-600 focus:text-red-500">
          About Us
        </Link>
        <Link className="mr-10 font-semibold text-gray-600 hover:underline hover:text-blue-600 focus:text-red-500">
          Contact Us
        </Link>
      </div>
      <div className="flex text-gray-600 gap-5">
        <AiFillInstagram size={20} />
        <AiOutlineTwitter size={20} />
        <BsFacebook size={20} />
      </div>
      <Outlet />
    </div>
  );
};

export default Footer;
