import "../styles/gamePage.css";
import { Settings } from "lucide-react";

export default function GamePage({ playerInfo }) {
  return (
    <div className="game-container">
      <header>
        <div className="player-container">
          <span>
            <img src="../images/test-profile.webp" alt="Profile Picture" />
          </span>
          <p className="player-name">{playerInfo.name}</p>
        </div>
        <button className="settings-button btn">
          <Settings size={36} color="#e2e3dd" />
        </button>
      </header>
      <main className="card-container"></main>
      <div className="score-container"></div>
    </div>
  );
}
