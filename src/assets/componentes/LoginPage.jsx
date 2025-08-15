import "../../assets/styles/LoginPage.css";
import { ChevronsRight, ChevronsLeft } from "lucide-react";

export default function LoginPage({ difficulty, setDifficulty }) {
  const handleChangeDiff = (e) => {
    console.log(e.target);
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
    <div className="login-container">
      <div className="login-header">
        <h1>Memory Legends</h1>
        <h2>A Memory Challenge</h2>
      </div>
      <div className="login-form">
        <label htmlFor="getPlayerName">
          <input type="text" id="getPlayerName" placeholder="Player's Name" />
        </label>
        <div className="choose-difficulty">
          <h3>Choose Difficulty</h3>
          <div className="change-dif-button btn orange-button">
            <button
              className="prvious-difficulty"
              onClick={(e) => handleChangeDiff(e)}
            >
              <ChevronsLeft />
            </button>
            <p>{difficulty}</p>
            <button
              className="next-difficulty"
              onClick={(e) => handleChangeDiff(e)}
            >
              <ChevronsRight />
            </button>
          </div>
        </div>
        <button className="start-game btn orange-button">Start</button>
      </div>
    </div>
  );
}
