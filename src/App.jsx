import "./App.css";
import "./assets/styles/reset.css";
import "./assets/styles/utilities.css";
import LoginPage from "./assets/componentes/LoginPage.jsx";
import { useEffect, useState } from "react";
import GamePage from "./assets/componentes/gamePage.jsx";

function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [playerInfo, setPlayerInfo] = useState({
    name: "",
    points: 0,
    record: 0,
  });
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("../cardData.json");
        const result = await response.json();
        setCardsData(result);
      } catch (error) {
        throw new Error(`Error : ${error}`);
      }
    })();
  }, []);

  return (
    <div id="container">
      {!isGameStarted ? (
        <LoginPage
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          setPlayerInfo={setPlayerInfo}
          playerInfo={playerInfo}
          setIsGameStarted={setIsGameStarted}
        />
      ) : (
        <GamePage
          playerInfo={playerInfo}
          cardsData={cardsData}
          difficulty={difficulty}
        />
      )}
    </div>
  );
}

export default App;
