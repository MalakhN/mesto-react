import React from "react";
import Card from "./Card.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  /* Подписываемся и получаем значение контекста */
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      {/* Информация профиля */}
      <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-container">
            <button
              type="button"
              className="profile__avatar-button"
              onClick={props.onEditAvatar}
            ></button>
            <img
              className="profile__image"
              src={currentUser.avatar}
              alt="Аватарка"
            />
          </div>
          <div className="profile__information">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      {/* Добавленные карточки */}
      <section className="cards">
        <div className="elements">
          {props.cards.map((element) => {
            return (
              <Card
                card={element}
                key={element._id}
                onCardClick={props.onCardClick}
                onCardLike={props.onCardLike}
                onDeleteCard={props.onDeleteCard}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
