import "./App.css";
import "./assets/styles/reset.css";
import "./assets/styles/utilities.css";
import LightRays from "./assets/componentes/LightRays.jsx";
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
      <LightRays
        raysOrigin="top-center"
        raysColor="#4ea4c3"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={3}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.1}
        className="custom-rays"
        fadeDistance={2}
        saturation={3}
      />
    </div>
  );
}

export default App;
