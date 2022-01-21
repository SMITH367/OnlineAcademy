import React from "react";
import useUser from "../hooks/useUser";
import { Navigate } from "react-router";
import userlogo from "./sources/userlogo.png";
import "./styles/profile.css";

const Profile = () => {
  const userData = useUser();
  return (
    <>
      <p>.</p>
      {userData.login === "true" ? (
        <article className="container">
          <section>
            <div className="user-data-cont center">
              <h1>Bienvenido</h1>
              <img className="user-data-img" src={userlogo} alt="" />
              <h2>{userData.name}</h2>
              <h3>{userData.email}</h3>
            </div>
          </section>
          <section>
            <div className="change-user center">
              <h4>Cambiar nombre</h4>
              <form>
                <label htmlFor="name">Ingresa tu nuevo nombre: </label>
                <input type="text" id="name" />
                <input type="submit" className="btn-typical" value="Cambiar" />
              </form>
            </div>

            <h4>Cambiar contraseña</h4>

            <form>
              <input type="text" placeholder="Contraseña actual" />
              <input type="text" placeholder="Contraseña nueva" />
              <input type="submit" className="btn-typical" value="Cambiar" />
            </form>
          </section>
        </article>
      ) : (
        <Navigate to="/"></Navigate>
      )}
    </>
  );
};

export { Profile };
