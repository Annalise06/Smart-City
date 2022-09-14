import CardItem4 from "./Card-Item4";

const Directory4 = ({ Card }) => {
  return (
    <div className="flex mx-32 gap-16">
      {Card.map((cards) => (
        <CardItem4 key={cards.id} cards={cards} />
      ))}
    </div>
  );
};

export default Directory4;
