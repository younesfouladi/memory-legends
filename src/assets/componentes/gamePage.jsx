import "../styles/gamePage.css";
import GameHeader from "./gameHead.jsx";
import GameScorebar from "./GameScorebar.jsx";

export default function GamePage({ playerInfo }) {
  return (
    <div className="game-container">
      <GameHeader playerInfo={playerInfo} />
      <main className="card-container"></main>
      <GameScorebar playerInfo={playerInfo} />
    </div>
  );
}
