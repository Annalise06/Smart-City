import img41 from "../../Utils/images/img4-1.png";
import img42 from "../../Utils/images/img4-2.png";
import img43 from "../../Utils/images/img4-3.png";
import img44 from "../../Utils/images/img4-4.png";
import Directory4 from "./Directory4";

const Hotel = () => {
  const Card4 = [
    {
      id: 1,
      imageUrl: img41,
      bod: "Lorem Ipsum",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    },
    {
      id: 2,
      imageUrl: img42,
      bod: "Lorem Ipsum",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    },
    {
      id: 3,
      imageUrl: img43,
      bod: "Lorem Ipsum",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    },
    {
      id: 4,
      imageUrl: img44,
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
    <div className="mt-8">
      <div className="mx-32 mt-32">
        <p className="border-b border-gray-200 pb-1 font-black font-nunito mt-48">
          HOTELS
        </p>
      </div>
      <Directory4 Card={Card4} />
    </div>
  );
};

export default Hotel;
