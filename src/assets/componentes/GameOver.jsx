import "../styles/gameOver.css";

export default function GameOver({ playerInfo }) {
  return (
    <div className="gameover-container">
      <div>
        {playerInfo.result === "won" ? <WinnerSign /> : <LoserSign />}
        <div className="gameover-actions">
          <button className="btn purple-btn restart-game">Restart Game</button>
          <button className="btn purple-btn change-difficulty">
            Change Difficulty
          </button>
          <button className="btn purple-btn save-game">Save Game</button>
        </div>
      </div>
    </div>
  );
}

function WinnerSign() {
  return (
    <img src="../../images/elements/victory-sign.webp" alt="winner sign" />
  );
}

function LoserSign() {
  return <img src="../../images/elements/defeat-sign.webp" alt="winner sign" />;
}
