import Directory from "./Directory";
import img1 from "../Utils/images/img1-1.png";
import img2 from "../Utils/images/img1-2.png";
import img3 from "../Utils/images/img1-3.png";
import img4 from "../Utils/images/img1-4.png";

const Tourist = () => {
  const Card = [
    {
      id: 1,
      imageUrl: img1,
      bod: "Lorem Ipsum",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    },
    {
      id: 2,
      imageUrl: img2,
      bod: "Lorem Ipsum",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    },
    {
      id: 3,
      imageUrl: img3,
      bod: "Lorem Ipsum",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    },
    {
      id: 4,
      imageUrl: img4,
      bod: "Lorem Ipsum",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    },
    // {
    //   id: 5,
    //   imageUrl: img4,
    //   bod: "Lorem Ipsum",
    //   para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    // },
    // {
    //   id: 6,
    //   imageUrl: img4,
    //   bod: "Lorem Ipsum",
    //   para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    // },
  ];

  return (
    <div>
      <div className="mx-32 mt-32">
        <p className="border-b border-gray-200 pb-1 font-black font-nunito">
          TOURISTS CENTERS
        </p>
      </div>
      <Directory Card={Card} />
    </div>
  );
};

export default Tourist;
