import React, { useState } from "react";
import { useChangelocationServer } from "../hooks/useChangelocationServer";
import { useCreateUser } from "../hooks/useCreateUser";
import { Link } from "react-router-dom";
import { Navigate } from "react-router";
import useUser from "../hooks/useUser";
import "./styles/forms.css";

const Register = ({ setUserDataStatus }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordConf, setPasswordConf] = useState();
  const [userName, setUserName] = useState();

  const userData = useUser();
  useChangelocationServer();

  const createUser = useCreateUser;

  return (
    <>
      {userData.login === "true" && <Navigate to="/"></Navigate>}
      <p>.</p>

      <div className="container">
        <h1 className="center">Registrate</h1>
        <form className="form center">
          <input
            type="text"
            className="form-el"
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
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
          <input
            type="password"
            className="form-el"
            placeholder="confirm-password"
            onChange={(e) => setPasswordConf(e.target.value)}
          />

          <button
            className="sesionBtn"
            onClick={() => createUser(userName, email, password, passwordConf)}
          >
            Registrarse
          </button>
        </form>

        <p className="center">
          ¿Ya tienes cuenta? Inicia sesion <Link to="/login">aqui</Link>
        </p>
      </div>
    </>
  );
};

export { Register };
