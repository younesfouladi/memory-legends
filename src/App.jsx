import "./App.css";
import "./assets/styles/reset.css";
import "./assets/styles/utilities.css";
import LoginPage from "./assets/componentes/LoginPage.jsx";
import { useState } from "react";

function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const [playerInfo, setPlayerInfo] = useState({
    name: "",
    points: 0,
    record: 0,
  });
  const [isGameStarted, setIsGameStarted] = useState(false);
  console.log(isGameStarted);
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
      ) : null}
    </div>
  );
}

export default App;
