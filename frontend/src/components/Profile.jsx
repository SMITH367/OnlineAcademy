import React, { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import { useChangeName } from "../hooks/useChangeDataUser";
import { Navigate } from "react-router";
import userlogo from "./sources/userlogo.png";
import { Footer } from "./Footer";
import "./styles/profile.css";

const Profile = () => {
  const userData = useUser();
  const changeName = useChangeName;
  const urlChangeName = "http://localhost:3000/username/";
  const token = localStorage.getItem("token");

  useEffect(() => {}, [userData]);

  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordConf, setPasswordConf] = useState(null);

  return (
    <>
      <p>.</p>
      {userData.login === "true" ? (
        <article className="profile">
          <section>
            <div className="user-data-cont center">
              <h1>Bienvenido</h1>
              <img className="user-data-img" src={userlogo} alt="" />
              <h2>Usuario: {userData.name}</h2>
              <h3>Email: {userData.email}</h3>
            </div>
          </section>
          <section>
            <div className="change-user p-2 center">
              <h4>Cambiar nombre</h4>
              <form>
                <label htmlFor="name">Ingresa tu nuevo nombre: </label>
                <b></b>
                <input
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="submit"
                  className="btn-typical"
                  value="Cambiar"
                  onClick={(e) =>
                    changeName(e, urlChangeName, name, userData.email, token)
                  }
                />
              </form>
            </div>

            <div className=" center p-3">
              <h4>Cambiar contraseña</h4>

              <form>
                <input type="text" placeholder="Contraseña actual" />
                <input type="text" placeholder="Contraseña nueva" />
                <input type="submit" className="btn-typical" value="Cambiar" />
              </form>
            </div>
          </section>
          <Footer />
        </article>
      ) : (
        <Navigate to="/"></Navigate>
      )}
    </>
  );
};

export { Profile };
