import React, { useRef } from "react";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import { useCloseSesion } from "../hooks/useCloseSesion";
import "./styles/header.css";
import icon from "./sources/icon.png";

const Header = ({ setUserDataStatus }) => {
  const toogle = useRef();
  const { login } = useUser();
  const closeSesion = useCloseSesion;

  const toogleHeader = () =>
    toogle.current.classList.toggle("nav-phone-visible");
  const handleMenu = () => toogle.current.classList.toggle("nav-phone-visible");

  return (
    <header className="header">
      <nav className="nav">
        <div>
          <Link className="logo" to="/">
            <img src={icon} alt="" />
          </Link>
        </div>

        <button onClick={toogleHeader} className="toogle-init">
          &#9776;
        </button>
        <ul ref={toogle} className="nav-menu" onClick={handleMenu}>
          {login === "true" && (
            <li className="nav-menu-item profile-text">
              <Link to="/profile">Perfil</Link>{" "}
            </li>
          )}

          <li className="nav-menu-item">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/routes">Rutas</Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/courses">Cursos</Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/forum">Foro</Link>
          </li>

          {login !== "true" && (
            <li className="nav-menu-item">
              <Link to="/register">Registrate</Link>
            </li>
          )}

          {login === "true" ? (
            <li className="nav-menu-item">
              <button
                className="btn-sesion red"
                onClick={(e) => closeSesion(setUserDataStatus)}
              >
                Cerrar sesion
              </button>
            </li>
          ) : (
            <li className="nav-menu-item">
              <Link to="/login" className="btn-sesion-login btn-sesion green">
                Iniciar sesion
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export { Header };
