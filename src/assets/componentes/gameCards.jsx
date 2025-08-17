import { useEffect, useRef, useState } from "react";

export default function GameCards({ cardsData, difficulty }) {
  return (
    <main>
      <GenerateCards cardsData={cardsData} difficulty={difficulty} />
    </main>
  );
}

function Card({ id, name, description, imgSrc }) {
  return (
    <div className="card" data-id={id}>
      <div className="front">
        <img src={imgSrc} alt="front of card" />
        <div className="card-details">
          <h3 className="card-name">{name}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
      <div className="back">
        <img src="../../images/cards/back.webp" alt="Back of Card" />
      </div>
    </div>
  );
}

function GenerateCards({ cardsData, difficulty }) {
  const count = (() => {
    return difficulty === "easy"
      ? 3
      : difficulty === "normal"
      ? 5
      : difficulty === "hard"
      ? 7
      : null;
  })();

  const [selectedCard, setSelectedCard] = useState([]);
  const [cards, setCards] = useState(cardsData);
  const [round, setRound] = useState(0);

  useEffect(() => {
    const picked = [];
    setCards((prev) => {
      const av = [...prev];
      for (let i = 0; i < count; i++) {
        const idx = Math.floor(Math.random() * av.length);
        picked.push(av.splice(idx, 1)[0]);
      }
      return av;
    });
    setSelectedCard((prev) => [...prev, ...picked]);
  }, [round, count]);

  return (
    <div className="card-container">
      {selectedCard.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            description={card.description}
            imgSrc={card.imgSrc}
          />
        );
      })}
    </div>
  );
}
