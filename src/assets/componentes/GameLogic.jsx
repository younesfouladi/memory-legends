// GameLogic.jsx
export default function gameLogic(prev, clickedId, count) {
  if (prev.clickedCards.includes(clickedId)) {
    return {
      ...prev,
      clickedCards: [...prev.clickedCards, clickedId],
      gameOver: true,
      result: "lost",
    };
  }
  const newPoints = prev.points + 1;
  const isWon = newPoints === count;
  return {
    ...prev,
    clickedCards: [...prev.clickedCards, clickedId],
    points: newPoints,
    gameOver: isWon,
    result: isWon ? "won" : prev.result,
  };
}
