import "../styles/gamePage.css";
import GameHeader from "./gameHead.jsx";
import GameScorebar from "./GameScorebar.jsx";
import GameCards from "./gameCards.jsx";
import GameOver from "./GameOver.jsx";
import useSound from "use-sound";
import soundTrack from "../../../public/sounds/music.mp3";
import { useEffect, useState } from "react";

export default function GamePage({
  playerInfo,
  setPlayerInfo,
  cardsData,
  difficulty,
  setDifficulty,
  playClickSound,
  muteClick,
  setMuteClick,
}) {
  const [isMusicMuted, setIsMusicMuted] = useState(true);
  const [soundPlay] = useSound(soundTrack, { volume: isMusicMuted ? 0.5 : 0 });
  useEffect(() => {
    soundPlay();
  }, [soundPlay]);

  return (
    <>
      {playerInfo.gameOver && (
        <GameOver
          playerInfo={playerInfo}
          setPlayerInfo={setPlayerInfo}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          playClickSound={playClickSound}
        />
      )}
      {!playerInfo.gameOver && (
        <div className="game-container">
          <GameHeader
            playerInfo={playerInfo}
            isMusicMuted={isMusicMuted}
            setIsMusicMuted={setIsMusicMuted}
            playClickSound={playClickSound}
            muteClick={muteClick}
            setMuteClick={setMuteClick}
          />
          <GameCards
            cardsData={cardsData}
            difficulty={difficulty}
            playerInfo={playerInfo}
            setPlayerInfo={setPlayerInfo}
          />
          <GameScorebar playerInfo={playerInfo} />
        </div>
      )}
    </>
  );
}
