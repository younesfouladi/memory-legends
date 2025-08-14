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
      <div>
        <h1>Legends of Memory</h1>
        <label htmlFor="getPlayerName">
          <input type="text" id="getPlayerName" placeholder="Player's Name" />
        </label>
        <div className="choose-difficulty">
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
        <button className="start-game">Start</button>
      </div>
    </div>
  );
}
