import "./App.css";
import "./assets/styles/reset.css";
import "./assets/styles/utilities.css";
import LoginPage from "./assets/componentes/LoginPage.jsx";
import { useEffect, useState } from "react";
import GamePage from "./assets/componentes/gamePage.jsx";
import menuClick from "../public/sounds/click.mp3";
import useSound from "use-sound";

function App() {
  const [difficulty, setDifficulty] = useState("normal");
  const [playerInfo, setPlayerInfo] = useState({
    name: "",
    points: 0,
    record: 0,
    gameOver: false,
    result: "",
    clickedCards: [],
  });
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [cardsData, setCardsData] = useState([]);

  const [muteClick, setMuteClick] = useState(false);
  const [playClickSound] = useSound(menuClick, { volume: !muteClick ? 1 : 0 });

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("../public/cardData.json");
        const result = await response.json();
        setCardsData(result);
      } catch (error) {
        throw new Error(`Error : ${error}`);
      }
    })();
  }, []);

  return (
    <>
      <div id="container">
        {!isGameStarted ? (
          <LoginPage
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            setPlayerInfo={setPlayerInfo}
            playerInfo={playerInfo}
            setIsGameStarted={setIsGameStarted}
            playClickSound={playClickSound}
          />
        ) : (
          <GamePage
            playerInfo={playerInfo}
            setPlayerInfo={setPlayerInfo}
            cardsData={cardsData}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            playClickSound={playClickSound}
            muteClick={muteClick}
            setMuteClick={setMuteClick}
          />
        )}
      </div>
    </>
  );
}

export default App;
