import CardItem3 from "./Card-Item3";

const Directory3 = ({ Card }) => {
  return (
    <div className="hidden lg:flex mx-32 gap-16">
      {Card.map((cards) => (
        <CardItem3 key={cards.id} cards={cards} />
      ))}
    </div>
  );
};

export default Directory3;
