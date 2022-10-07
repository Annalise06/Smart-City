import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";
import MyModal from "../../Components/MyModal";
import { useState } from "react";

const CardItem = ({ cards }) => {
  const [rateButton, setRateButton] = useState(false);
  const { imageUrl, bod, para } = cards;
  const handleOnClose = () => setRateButton(false);

  return (
    <div className="h-52 w-56 mt-3 rounded-md">
      <img
        className="w-[220px] cursor-pointer hover:scale-105 ease-in-out duration-300"
        src={imageUrl}
        alt="firstImage"
      />
      <div className="flex justify-between">
        <h2 className="font-semibold text-lg">{bod}</h2>
        <div className="flex gap-2 items-center text-gray-600 font-medium">
          <button
            onClick={() => setRateButton(true)}
            type="button"
            className="focus:text-black"
          >
            <AiOutlineStar size={15} />
          </button>
          <p className="text-sm">0.0</p>
        </div>
      </div>
      <p className="break-all">{para}</p>
      <p className="text-gray-600 font-medium">$00.00</p>
      <div className="flex text-xs items-center gap-1 text-gray-600">
        <AiOutlineHeart className="mt-1" size={15} />
        <p className="mt-1">100</p>
      </div>
      <MyModal visible={rateButton} onClose={handleOnClose} />
    </div>
  );
};

export default CardItem;
