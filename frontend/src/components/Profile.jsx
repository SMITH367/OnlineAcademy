import React, { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import { useChangeName, useChangePassword } from "../hooks/useChangeDataUser";
import { Navigate } from "react-router";
import userlogo from "./sources/userlogo.png";
import { Footer } from "./Footer";
import { getBACKENDurl } from "../components/services/getBACKENDurl";
import "./styles/profile.css";

const Profile = () => {
  const userData = useUser();
  const changeName = useChangeName;
  const changePassword = useChangePassword;
  const urlChangeName = `${getBACKENDurl}/username/`;
  const urlChangePassword =
    `${getBACKENDurl}/userpassword/`;
  const token = localStorage.getItem("token");

  useEffect(() => {}, [userData]);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

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
          <section className="modify-userdata">
          <div className="change-user p-2 center">
              <h4>Cambiar nombre</h4>
              <form>
                <input
                  className="profile-input-text"
                  type="text"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nuevo nombre"
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

            <div className="center p-3">
              <h4>Cambiar contraseña</h4>

              <form>
                <input
                  type="password"
                  className="profile-input-text"
                  placeholder="Contraseña actual"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="profile-input-text"
                  type="password"
                  placeholder="Contraseña nueva"
                  onChange={(e) => setPasswordNew(e.target.value)}
                />
                <input
                  type="submit"
                  className="btn-typical"
                  value="Cambiar"
                  onClick={(e) => {
                    changePassword(
                      e,
                      urlChangePassword,
                      password,
                      passwordNew,
                      userData.email,
                      token
                    );
                  }}
                />
              </form>
            </div>
            
          </section>
            
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
