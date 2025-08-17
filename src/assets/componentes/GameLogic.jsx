export default function gameLogic(playerInfo, setPlayerInfo, card) {
  const id = card.closest(".card").getAttribute("data-id");
  setPlayerInfo((prev) => ({
    ...prev,
    clickedCards: [...prev.clickedCards, id],
  }));

  setPlayerInfo((prev) => ({
    ...prev,
    points: prev.points + 1,
  }));
  console.log(playerInfo);
}
