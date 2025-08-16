import "./App.css";
import "./assets/styles/reset.css";
import "./assets/styles/utilities.css";
import LoginPage from "./assets/componentes/LoginPage.jsx";
import { useState } from "react";
import GamePage from "./assets/componentes/gamePage.jsx";

function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [playerInfo, setPlayerInfo] = useState({
    name: "",
    points: 0,
    record: 0,
  });
  const [isGameStarted, setIsGameStarted] = useState(false);
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
        <GamePage playerInfo={playerInfo} />
      )}
    </div>
  );
}

export default App;
