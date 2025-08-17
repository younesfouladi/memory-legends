import { useEffect, useState } from "react";
import Card from "./card.jsx";

export default function GameCards({ cardsData, difficulty }) {
  const [showBackofCard, setShowBackofCard] = useState(false);

  return (
    <main>
      <GenerateCards
        cardsData={cardsData}
        difficulty={difficulty}
        showBackofCard={showBackofCard}
        setShowBackofCard={setShowBackofCard}
      />
    </main>
  );
}

function GenerateCards({
  cardsData,
  difficulty,
  showBackofCard,
  setShowBackofCard,
}) {
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
            showBackofCard={showBackofCard}
            setShowBackofCard={setShowBackofCard}
          />
        );
      })}
    </div>
  );
}
