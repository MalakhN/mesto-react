import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип Mesto Россия" src={logo} />
    </header>
  );
}

export default Header;
