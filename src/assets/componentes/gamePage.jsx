import "../styles/gamePage.css";
import GameHeader from "./gameHead.jsx";
import GameScorebar from "./GameScorebar.jsx";
import GameCards from "./gameCards.jsx";

export default function GamePage({ playerInfo, cardsData, difficulty }) {
  return (
    <div className="game-container">
      <GameHeader playerInfo={playerInfo} />
      <GameCards cardsData={cardsData} difficulty={difficulty} />
      <GameScorebar playerInfo={playerInfo} />
    </div>
  );
}
