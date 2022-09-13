import img1 from "../Utils/img1.png";

const Hotels = () => {
  return (
    <div className="mx-32 mt-32">
      <div>
        <p className="border-b border-gray-200 pb-1 font-black font-nunito">
          TOURISTS CENTERS
        </p>
        <div className="h-52 w-56 mt-3 rounded-md">
          <img src={img1} alt="firstImage" />
          <h2 className="font-semibold text-lg">Lorem Ipsum</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem,
            eaque?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hotels;
