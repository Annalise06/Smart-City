import Navigation from "./Navigation";
import Hero from "./Hero";
import Categories from "./Categories";
import Tourists from "../CardComponents/Tourists";

export const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Categories />
      <Tourists />
    </div>
  );
};

export default Home;
