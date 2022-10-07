import img31 from "../../Utils/images/img3-1.png";
import img32 from "../../Utils/images/img3-2.png";
import img33 from "../../Utils/images/img3-3.png";
import img34 from "../../Utils/images/img3-4.png";
import Directory3 from "./Directory3";

const Bar = () => {
  const Card3 = [
    {
      id: 1,
      imageUrl: img31,
      bod: "Lorem Ipsum",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    },
    {
      id: 2,
      imageUrl: img32,
      bod: "Lorem Ipsum",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    },
    {
      id: 3,
      imageUrl: img33,
      bod: "Lorem Ipsum",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    },
    {
      id: 4,
      imageUrl: img34,
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
      <div className="hidden lg:flex lg:mx-32">
        <p className="border-b border-gray-200 pb-1 font-black font-nunito mt-48">
          BARS
        </p>
      </div>
      <Directory3 Card={Card3} />
    </div>
  );
};

export default Bar;
