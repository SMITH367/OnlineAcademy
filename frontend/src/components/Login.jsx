import React, { useState } from "react";
import { useLoginSesion } from "../hooks/useLoginSesion";
import useUser from "../hooks/useUser";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import "./styles/forms.css";

const Login = ({ setUserDataStatus }) => {
  const loginSesion = useLoginSesion;

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const userData = useUser();

  return (
    <>
      {userData.login === "true" && <Navigate to="/"></Navigate>}
      <p>.</p>

      <div className="container">
        <h1 className="center">Iniciar sesion</h1>
        <form className="form center">
          <input
            type="email"
            className="form-el"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-el"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="sesionBtn"
            onClick={(e) => loginSesion(e, setUserDataStatus, email, password)}
          >
            Iniciar sesion
          </button>
        </form>

        <p className="center">
          ¿Aun no tienes cuenta? registrate <Link to="/register">aqui</Link>
        </p>
      </div>
    </>
  );
};

export { Login };
