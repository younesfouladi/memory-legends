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

  return (
    <div id="container">
      <LoginPage
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        setPlayerInfo={setPlayerInfo}
      />
    </div>
  );
}

export default App;
