import CardItem from "./Card-Item";

const Directory = ({ Card }) => {
  return (
    <div className="hidden lg:flex mx-32 gap-16">
      {Card.map((cards) => (
        <CardItem key={cards.id} cards={cards} />
      ))}
    </div>
  );
};

export default Directory;
