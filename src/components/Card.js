import React from "react";

function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="element">
      <button type="button" className="element__delete-icon"></button>
      <img
        className="element__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="element__text">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button type="button" className="element__icon" />
          <div className="element__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
