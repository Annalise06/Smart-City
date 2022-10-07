import React from "react";
import Rating from "./Rating";
import { useState } from "react";

const MyModal = ({ visible, onClose }) => {
  const [rating, setRating] = useState(0);
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="gap-1 p-4 bg-slate-100 rounded">
        <h2 className="text-2xl font-nunito font-bold">
          Rate Your Experience At this Place
        </h2>
        <Rating rating={rating} onRating={(rate) => setRating(rate)} />
        <p className="text-center">Rating - {rating}</p>
        <button className="ml-44 pl-2" onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default MyModal;

//  {
//    stars.map((_, index) => {
//      return <AiOutlineStar key={index} size={30} />;
//    });
//  }
