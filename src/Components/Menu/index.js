import React from "react";
import "./styles.sass";

import { FiShoppingBag, FiHeart, FiSearch } from "react-icons/fi";

import { useHistory, Link } from "react-router-dom";

export default function Menu(props) {
  let history = useHistory();

  const handleBackHome = () => {
    history.push("/");
  }

  return (
    <div className="menu">
      <div className="menu__container">
        <Link to="/" className="menu__logo">
          BeYou
          <FiHeart size={22} className="logo__icon" />
        </Link>

        <div className="menu__buttons">
          <FiSearch size={24} className="button__icon" />
          <FiShoppingBag
            size={24}
            className="button__icon"
            onClick={props.callbackApp}
          />
        </div>
      </div>
    </div>
  );
}
