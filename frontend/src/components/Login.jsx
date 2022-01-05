import React, { useState } from "react";
import { useLoginSesion } from "../hooks/useLoginSesion";
import { Header } from "./Header";
import "./styles/login.css";

const Login = ({ setUserDataStatus }) => {
  const originalLocation = window.location.href.split("/");

  let newLocation = `${originalLocation[0]}//${originalLocation[1]}${originalLocation[2]}/?#/${originalLocation[4]}`;

  window.location.href = newLocation;

  const loginSesion = useLoginSesion;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const userToLogin = () => {
    loginSesion(setUserDataStatus, email, password);
  };

  return (
    <>
      <p>.</p>

      <div className="container">
        <h1 className="center">Iniciar sesion</h1>
        <form className="form-login center">
          <input
            type="email"
            className="form-login-el"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-login-el"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginBtn form-login-el " onClick={userToLogin}>
            Iniciar sesion
          </button>
        </form>
      </div>
    </>
  );
};

export { Login };
