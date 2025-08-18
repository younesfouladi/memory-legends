import "../../assets/styles/LoginPage.css";
import { ChevronsRight, ChevronsLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function LoginPage({
  difficulty,
  setDifficulty,
  playerInfo,
  setPlayerInfo,
  setIsGameStarted,
}) {
  const difRef = useRef(null);

  useEffect(() => {
    // Login Page Heading Animation
    setTimeout(() => {
      gsap.fromTo(
        ".login-header",
        { scale: 1 },
        { scale: 1.1, duration: 1, repeat: -1 }
      );
    }, 1000);

    gsap.fromTo(".login-header", { y: -100 }, { y: 0, duration: 1 });

    // Login Form Entry Animation
    gsap.fromTo(
      ".login-form",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  }, []);

  // difficulty change Animation
  useGSAP(() => {
    gsap.fromTo(
      difRef.current,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );
  }, [difficulty]);

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
  const [savedUser, setSavedUser] = useState(Object.keys(localStorage));

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Memory Legends</h1>
        <h2>A Memory Challenge</h2>
      </div>
      <div className="login-form">
        {localStorage.length > 0 ? (
          <div className="saved-users">
            <img
              src="../../images/test-profile.webp"
              alt="saved user picture"
            />
            <p>{savedUser}</p>
            <button
              onClick={() => setSavedUser(localStorage.clear())}
              className="cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <input
            type="text"
            id="getPlayerName"
            placeholder="Enter player's name"
            onChange={(e) => {
              setPlayerInfo({ ...playerInfo, name: e.target.value });
            }}
          />
        )}
        <div className="choose-difficulty">
          <h3>Choose Difficulty</h3>
          <div className="change-dif-button btn green-button">
            <button
              className="prvious-difficulty btn"
              onClick={(e) => handleChangeDiff(e)}
            >
              <ChevronsLeft
                size={34}
                className="infinite-move-left-animation pointer-events-none"
              />
            </button>
            <h3 ref={difRef} onClick={(e) => handleChangeDiff(e)}>
              {difficulty}
            </h3>
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
        </div>
        <button
          className="start-game btn orange-button"
          onClick={() =>
            playerInfo.name.trim() !== "" || savedUser !== undefined
              ? setIsGameStarted(true)
              : alert("Player's name can't be empty")
          }
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
