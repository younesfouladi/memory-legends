import "../styles/gameOver.css";

export default function GameOver({ playerInfo }) {
  return (
    <div className="gameover-container">
      <h1>You "{playerInfo.result.toUpperCase()}" This Round</h1>
    </div>
  );
}
