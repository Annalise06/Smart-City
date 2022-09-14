import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai";

const CardItem4 = ({ cards }) => {
  const { imageUrl, bod, para } = cards;
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
          <AiOutlineStar size={15} />
          <p className="text-sm">0.0</p>
        </div>
      </div>
      <p className="break-all">{para}</p>
      <p className="text-gray-600 font-medium">$00.00</p>
      <div className="flex text-xs items-center gap-1 text-gray-600">
        <AiOutlineHeart className="mt-1" size={15} />
        <p className="mt-1">100</p>
      </div>
    </div>
  );
};

export default CardItem4;
