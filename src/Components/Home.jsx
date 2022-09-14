import Navigation from "./Navigation";
import Hero from "./Hero";
import Categories from "./Categories";
import Tourists from "../CardComponents/Tourists-Section/Tourists";
import Restaurant from "../CardComponents/Restaurants-Section/Restaurants";
import Bar from "../CardComponents/Bars-Section/Bars";
import Hotel from "../CardComponents/Hotels-Section/Hotels";
import Footer from "./Footer";

export const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Categories />
      <Tourists />
      <Restaurant />
      <Bar />
      <Hotel />
      <Footer />
    </div>
  );
};

export default Home;
