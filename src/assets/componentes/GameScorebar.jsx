export default function GameScorebar({ playerInfo }) {
  return (
    <div className="scorebar-container">
      <div className="scorebar">
        <div className="score">
          <h3>Score: {playerInfo.points}</h3>
        </div>
        <div className="highscore">
          <h3>Score: {playerInfo.record}</h3>
        </div>
      </div>
    </div>
  );
}
