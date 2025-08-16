import "../../assets/styles/LoginPage.css";
import { ChevronsRight, ChevronsLeft, User } from "lucide-react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

export default function LoginPage({
  difficulty,
  setDifficulty,
  playerInfo,
  setPlayerInfo,
  setIsGameStarted,
}) {
  const difRef = useRef(null);

  // Login Page Heading Animation
  useGSAP(() => {
    SplitText.create(".login-header", {
      type: "words, chars",
      mask: "lines",
      autoSplit: true,
      onSplit(self) {
        return gsap.from(self.words, {
          duration: 1,
          y: -100,
          autoAlpha: 0,
          stagger: 0.05,
        });
      },
    });
    setTimeout(() => {
      gsap.fromTo(
        ".login-header",
        { scale: 1 },
        { scale: 1.1, duration: 1, repeat: -1 }
      );
    }, 1000);
  }, []);

  // difficulty change Animation
  useGSAP(() => {
    gsap.fromTo(
      difRef.current,
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );
  }, [difficulty]);

  // Login Form Entry Animation
  useGSAP(() => {
    gsap.fromTo(
      ".login-form",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  }, []);

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

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Memory Legends</h1>
        <h2>A Memory Challenge</h2>
      </div>
      <div className="login-form">
        <label htmlFor="getPlayerName">
          <input
            type="text"
            id="getPlayerName"
            placeholder="Enter player's name"
            onChange={(e) => {
              setPlayerInfo({ ...playerInfo, name: e.target.value });
            }}
          />
        </label>
        <div className="choose-difficulty">
          <h3>Choose Difficulty</h3>
          <div className="change-dif-button btn green-button">
            <button
              className="prvious-difficulty btn"
              onClick={(e) => handleChangeDiff(e)}
            >
              <ChevronsLeft
                size={34}
                className="infinite-move-left-animation "
              />
            </button>
            <p ref={difRef}>{difficulty}</p>
            <button
              className="next-difficulty btn"
              onClick={(e) => handleChangeDiff(e)}
            >
              <ChevronsRight
                size={34}
                className="infinite-move-right-animation "
              />
            </button>
          </div>
        </div>
        <button
          className="start-game btn orange-button"
          onClick={() =>
            playerInfo.name.trim() !== ""
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
