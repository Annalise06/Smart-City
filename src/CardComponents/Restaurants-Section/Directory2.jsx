import CardItem2 from "./Card-Item2";

const Directory2 = ({ Card }) => {
  return (
    <div className="flex mx-32 gap-16">
      {Card.map((cards) => (
        <CardItem2 key={cards.id} cards={cards} />
      ))}
    </div>
  );
};

export default Directory2;
