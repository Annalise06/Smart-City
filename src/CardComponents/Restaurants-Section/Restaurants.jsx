import img21 from "../../Utils/images/img2-1.png";
import img22 from "../../Utils/images/img2-2.png";
import img23 from "../../Utils/images/img2-3.png";
import img24 from "../../Utils/images/img2-4.png";
import Directory2 from "./Directory2";

const Restaurant = () => {
  const Card2 = [
    {
      id: 1,
      imageUrl: img21,
      bod: "Lorem Ipsum",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    },
    {
      id: 2,
      imageUrl: img22,
      bod: "Lorem Ipsum",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    },
    {
      id: 3,
      imageUrl: img23,
      bod: "Lorem Ipsum",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, deleniti!",
    },
    {
      id: 4,
      imageUrl: img24,
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
          RESTAURANTS
        </p>
      </div>
      <Directory2 Card={Card2} />
    </div>
  );
};

export default Restaurant;
