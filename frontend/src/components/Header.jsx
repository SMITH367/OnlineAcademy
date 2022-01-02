import React, { useRef } from "react";
import {Link} from "react-router-dom"
import "./Styles/header.css";

const Header = () => {
  const toogle = useRef();

  const toogleHeader = () => {
    toogle.current.classList.toggle("nav-phone-visible");
  };

  return (
    <header className="header">
      <nav className="nav">
        <div className="logo"></div>

        <button onClick={toogleHeader} className="toogle-init">
          &#9776;
        </button>

        <ul ref={toogle} className="nav-menu">
          <li className="nav-menu-item"></li>

          <li className="nav-menu-item"></li>

          <li className="nav-menu-item"></li>

          <li className="nav-menu-item"></li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
