import React from "react";
import Header from "./Header";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  /* Хуки */
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    name: "",
    link: "",
  });

  /* Обработчики пропса isOpen, открывающие соответствующие попапы */
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setIsCardPopupOpen(true);
    setSelectedCard(card);
  };

  /* Обработчик пропса onClose, закрывающий все попапы */
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsCardPopupOpen(false);
    setSelectedCard({ name: "", link: "" });
  };

  return (
    <div className="App">
      <div className="page">
        {/* Хедер */}
        <Header />
        {/* Попап смены аватара */}
        <PopupWithForm
          name="edit-avatar"
          title="Обновить аватар"
          buttonText="Сохранить"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="avatar-input"
            type="url"
            name="avatar"
            placeholder="Ссылка на картинку"
            className="form__item"
            required
          />
          <span className="avatar-input-error form__input-error"></span>
        </PopupWithForm>
        {/* Попап редактирования профиля */}
        <PopupWithForm
          title="Редактировать профиль"
          name="edit-profile"
          buttonText="Сохранить"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="name-input"
            type="text"
            name="name"
            placeholder="Имя"
            className="form__item"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="name-input-error form__input-error"></span>
          <input
            id="description-input"
            type="text"
            name="description"
            placeholder="О себе"
            className="form__item"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="description-input-error form__input-error"></span>
        </PopupWithForm>
        {/* Попап добавления карточки */}
        <PopupWithForm
          name="add-card"
          title="Новое место"
          buttonText="Сохранить"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            id="title-input"
            type="text"
            name="cardname"
            placeholder="Название"
            className="form__item form__item_info_title"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="title-input-error form__input-error"></span>
          <input
            id="link-input"
            type="url"
            name="cardlink"
            placeholder="Ссылка на картинку"
            className="form__item form__item_info_link"
            required
          />
          <span className="link-input-error form__input-error"></span>
        </PopupWithForm>
        {/* Попап предпросмотра изображения карточки */}
        <ImagePopup
          isOpen={isCardPopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
        />
        {/* Попап подтверждения удаления карточки */}
        <PopupWithForm name="delete-card" title="Вы уверены?" buttonText="Да" />
        {/* Основной контент */}
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        {/* Футер */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
