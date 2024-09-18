import React from "react";
import { useFlip } from "./hooks";
import "./PokemonCard.css";

function PokemonCard({ front, back, name, stats }) {
  const [isFlipped, flipCard] = useFlip();

  return (
    <div onClick={flipCard} className="PokemonCard Card">
      {isFlipped ? (
        <div className="PokemonCard-back">
          <img src={back} alt={name} />
        </div>
      ) : (
        <div className="PokemonCard-front">
          <img src={front} alt={name} />
          <div className="PokemonCard-info">
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map(stat => (
                <li key={stat.name}>
                  {stat.name}: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonCard;