import React from "react";
import "./styles/login.css";

const Login = ({ setUserDataStatus }) => {
  const logininit = () => {
    setUserDataStatus({
      login: true,
      name: "papaya",
      email: "jajaja",
    });
  };

  return (
    <>
      <p>.</p>

      <div className="container">
        <h1 className="center">Iniciar sesion</h1>
        <form className="form-login center">
          <input type="text" className="form-login-el" placeholder="email" />
          <input
            type="password"
            className="form-login-el"
            placeholder="password"
          />
          <button className="loginBtn form-login-el " onClick={logininit}>
            Iniciar sesion
          </button>
        </form>
      </div>
    </>
  );
};

export { Login };
