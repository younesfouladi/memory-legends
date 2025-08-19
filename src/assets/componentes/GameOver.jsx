import "../styles/gameOver.css";
import { ChevronsRight, ChevronsLeft } from "lucide-react";
import useSound from "use-sound";
import gameOverSound from "../../../public/sounds/GameOver.mp3";
import { useEffect } from "react";

export default function GameOver({
  playerInfo,
  setPlayerInfo,
  difficulty,
  setDifficulty,
  playClickSound,
}) {
  const [playOver] = useSound(gameOverSound);
  useEffect(() => {
    playOver();
  }, [playOver]);
  const handleRestartGame = () => {
    setPlayerInfo((prev) => ({
      ...prev,
      points: 0,
      gameOver: false,
      result: "",
      clickedCards: [],
    }));
  };
  if (localStorage.length > 0 && localStorage !== undefined) {
    localStorage.clear();
    localStorage.setItem(`${playerInfo.name}`, JSON.stringify(playerInfo));
  } else {
    localStorage.setItem(`${playerInfo.name}`, JSON.stringify(playerInfo));
  }
  const handleChangeDiff = (e) => {
    if (e.target.classList.contains("next-difficulty")) {
      switch (difficulty) {
        case "easy":
          setDifficulty("normal");
          break;
        case "normal":
          setDifficulty("hard");
          break;
        case "hard":
          setDifficulty("easy");
          break;
      }
    } else {
      switch (difficulty) {
        case "easy":
          setDifficulty("hard");
          break;
        case "normal":
          setDifficulty("easy");
          break;
        case "hard":
          setDifficulty("normal");
          break;
      }
    }
  };

  return (
    <div className="gameover-container">
      <div>
        {playerInfo.result === "won" ? <WinnerSign /> : <LoserSign />}
        <div className="gameover-actions">
          <div
            className="change-dif-button btn green-button"
            onClick={playClickSound}
          >
            <button
              className="prvious-difficulty btn"
              onClick={(e) => handleChangeDiff(e)}
            >
              <ChevronsLeft
                size={34}
                className="infinite-move-left-animation pointer-events-none"
              />
            </button>
            <h3 onClick={(e) => handleChangeDiff(e)}>{difficulty}</h3>
            <button
              className="next-difficulty btn"
              onClick={(e) => handleChangeDiff(e)}
            >
              <ChevronsRight
                size={34}
                className="infinite-move-right-animation pointer-events-none"
              />
            </button>
          </div>
          <button
            className="btn purple-btn restart-game"
            onMouseDown={playClickSound}
            onClick={() => handleRestartGame()}
          >
            Restart Game
          </button>
        </div>
      </div>
    </div>
  );
}

function WinnerSign() {
  return (
    <img src="../../images/elements/victory-sign.webp" alt="winner sign" />
  );
}

function LoserSign() {
  return <img src="../../images/elements/defeat-sign.webp" alt="winner sign" />;
}
