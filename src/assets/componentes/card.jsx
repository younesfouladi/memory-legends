import { gsap } from "gsap";
import "atropos/css";
import Atropos from "atropos/react";
import gameLogic from "./GameLogic.jsx";

export default function Card({
  id,
  name,
  description,
  imgSrc,
  showBackofCard,
  setShowBackofCard,
  round,
  setRound,
}) {
  function handleCardClick(e) {
    // Login
    gameLogic(round, setRound);
    // Animations
    gsap.fromTo(
      ".card",
      { rotateY: 0 },
      {
        rotateY: -90,
        duration: 1,
        onComplete: rotateCard,
      }
    );
    function rotateCard() {
      setShowBackofCard(true);
      gsap.fromTo(
        ".card",
        { rotateY: -180 },
        {
          rotateY: 365,
          duration: 1,
          onComplete: endRotate,
        }
      );
    }
    function endRotate() {
      gsap.fromTo(
        ".card",
        { rotateY: 365 },
        {
          rotateY: 0,
          duration: 1,
          onStart: () => {
            setTimeout(() => {
              setShowBackofCard(false);
            }, 500);
          },
        }
      );
    }
  }

  return (
    <Atropos className="card" data-id={id} onClick={(e) => handleCardClick(e)}>
      <div className="front">
        <img src={imgSrc} alt="front of card" />
        <div className="card-details">
          <h3 className="card-name">{name}</h3>
          <p className="card-description ">{description}</p>
        </div>
      </div>
      <div className={!showBackofCard ? "back" : "back active"}>
        <img src="../../images/cards/back.webp" alt="Back of Card" />
      </div>
    </Atropos>
  );
}
