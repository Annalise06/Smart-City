import Navigation from "./Navigation";
import Hero from "./Hero";
import Categories from "./Categories";
import Hotels from "../CardComponents/Hotels";

export const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Categories />
      <Hotels />
    </div>
  );
};

export default Home;
