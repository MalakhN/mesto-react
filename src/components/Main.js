import React from "react";
import { api } from "../utils/api.js";
import Card from "./Card.js";

function Main(props) {
  /* Хуки */
  const [userAvatar, setUserAvatar] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCard()])
      .then(([userArr, initialCards]) => {
        setUserName(userArr.name);
        setUserDescription(userArr.about);
        setUserAvatar(userArr.avatar);
        setCards(initialCards);
      })
      .catch((err) => {
        console.error(`Ошибка: ${err}`);
      });
  }, []);

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
            <img className="profile__image" src={userAvatar} alt="Аватарка" />
          </div>
          <div className="profile__information">
            <h1 className="profile__name">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button"
              onClick={props.onEditProfile}
            ></button>
            <p className="profile__description">{userDescription}</p>
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
          {cards.map((element) => {
            return (
              <Card
                card={element}
                key={element._id}
                onCardClick={props.onCardClick}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Main;
