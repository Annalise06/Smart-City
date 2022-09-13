const CardItem = ({ cards }) => {
  const { imageUrl, bod, para } = cards;
  return (
    <div className="h-52 w-56 mt-3 rounded-md">
      <img
        className="w-[220px] cursor-pointer hover:scale-105 ease-in-out duration-300"
        src={imageUrl}
        alt="firstImage"
      />
      <h2 className="font-semibold text-lg">{bod}</h2>
      <p className="break-all">{para}</p>
    </div>
  );
};

export default CardItem;
