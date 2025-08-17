import { useEffect, useState } from "react";
import Card from "./card.jsx";

export default function GameCards({
  cardsData,
  difficulty,
  playerInfo,
  setPlayerInfo,
}) {
  const [showBackofCard, setShowBackofCard] = useState(false);

  return (
    <main>
      <GenerateCards
        cardsData={cardsData}
        difficulty={difficulty}
        showBackofCard={showBackofCard}
        setShowBackofCard={setShowBackofCard}
        playerInfo={playerInfo}
        setPlayerInfo={setPlayerInfo}
      />
    </main>
  );
}

function GenerateCards({
  cardsData,
  difficulty,
  showBackofCard,
  setShowBackofCard,
  playerInfo,
  setPlayerInfo,
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

  useEffect(() => {
    const cards = [...cardsData];
    const picked = [];
    for (let i = 0; i < count; i++) {
      const idx = Math.floor(Math.random() * cards.length);
      picked.push(cards.splice(idx, 1)[0]);
    }
    setSelectedCard(picked);
  }, [playerInfo.points, count, cardsData]);

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
            playerInfo={playerInfo}
            setPlayerInfo={setPlayerInfo}
            cardsData={cardsData}
            selectedCard={selectedCard}
            setSelectedCard={setSelectedCard}
            count={count}
          />
        );
      })}
    </div>
  );
}
