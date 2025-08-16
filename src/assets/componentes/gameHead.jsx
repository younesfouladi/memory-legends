import { useRef } from "react";
import { gsap } from "gsap";
import { Settings, Volume2, VolumeOff } from "lucide-react";

export default function GameHeader({ playerInfo }) {
  const soundDrawerRef = useRef(null);

  function handleOpenSoundDrawer(e) {
    if (soundDrawerRef.current.style.display === "none") {
      e.target.style.transform = "rotate(-45deg)";
      soundDrawerRef.current.style.display = "flex";
      gsap.fromTo(
        soundDrawerRef.current,
        { scaleY: 0, opacity: 0, transformOrigin: "top" },
        { scaleY: 1, opacity: 1, duration: 0.4 }
      );
    } else {
      e.target.style.transform = "rotate(0deg)";
      gsap.to(soundDrawerRef.current, {
        scaleY: 0,
        opacity: 0,
        duration: 0.35,
        transformOrigin: "top",
        onComplete: () => {
          soundDrawerRef.current.style.display = "none";
        },
      });
    }
  }

  return (
    <header>
      <div className="player-container">
        <span>
          <img src="../images/test-profile.webp" alt="Profile Picture" />
        </span>
        <p className="player-name">{playerInfo.name}</p>
      </div>
      <div className="sound-setting">
        <button
          className="sound-drawer-button btn"
          onClick={(e) => handleOpenSoundDrawer(e)}
        >
          <Settings size={36} color="#e2e3dd" className="pointer-events-none" />
        </button>
        <ul className="soundlist-container" ref={soundDrawerRef}>
          <li role="button">
            Music <Volume2 />
          </li>
          <li role="button">
            Click <VolumeOff color="red" />
          </li>
        </ul>
      </div>
    </header>
  );
}
