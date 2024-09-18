import React from "react";
import { useAxios } from "./hooks";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

const BASE_URL = "https:

function formatCardData(data) {
  return { id: data.code, image: data.image };
}

function PlayingCardList() {
  const [cards, addCard, clearCards] = useAxios(BASE_URL, formatCardData);

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => addCard()}>Add a playing card!</button>
        <button onClick={clearCards}>Clear playing cards!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(card => (
          <PlayingCard key={card.id} front={card.image} />
        ))}
      </div>
    </div>
  );
}

export default PlayingCardList;