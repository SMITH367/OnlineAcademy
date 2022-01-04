import React, { useRef } from "react";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import "./styles/header.css";
import icon from "./sources/icon.png";

const Header = ({ setUserDataStatus }) => {
  const toogle = useRef();

  let { login } = useUser();

  let active = login;

  const toogleHeader = () => {
    toogle.current.classList.toggle("nav-phone-visible");
    setUserDataStatus({
      login: true,
      name: "papaya",
      email: "jajaja",
    });
    console.log(login);
  };

  const closeSesion = () => {
    setUserDataStatus({
      login: false,
      name: null,
      email: null,
    });
  };
  const data = "/";

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
        <ul ref={toogle} className="nav-menu">
          {active === true && (
            <div className="nav-menu-item">
              <Link to={data} className="profile-text">
                Perfil
              </Link>{" "}
            </div>
          )}

          <li className="nav-menu-item">
            <Link to="/">Home</Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/">Rutas</Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/">Cursos</Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/">Nosotros</Link>
          </li>

          <li className="nav-menu-item">
            <Link to="/">Contacto</Link>
          </li>
          {active === true ? (
            <li className="nav-menu-item">
              <button className="btn-sesion red" onClick={closeSesion}>
                Cerrar sesion
              </button>
            </li>
          ) : (
            <li className="nav-menu-item">
              <Link to="/" className="btn-sesion green">
                Inicia sesion
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export { Header };
