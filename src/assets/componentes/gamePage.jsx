import "../styles/gamePage.css";
import GameHeader from "./gameHead.jsx";
import GameScorebar from "./GameScorebar.jsx";
import GameCards from "./gameCards.jsx";
import GameOver from "./GameOver.jsx";

export default function GamePage({
  playerInfo,
  setPlayerInfo,
  cardsData,
  difficulty,
}) {
  return (
    <>
      {playerInfo.gameOver && <GameOver playerInfo={playerInfo} />}
      {!playerInfo.gameOver && (
        <div className="game-container">
          <GameHeader playerInfo={playerInfo} />
          <GameCards
            cardsData={cardsData}
            difficulty={difficulty}
            playerInfo={playerInfo}
            setPlayerInfo={setPlayerInfo}
          />
          <GameScorebar playerInfo={playerInfo} />
        </div>
      )}
    </>
  );
}
