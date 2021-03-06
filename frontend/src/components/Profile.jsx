import React, { useEffect, useState } from "react";
import useUser from "../hooks/useUser";
import { useChangeName, useChangePassword } from "../hooks/useChangeDataUser";
import { Navigate } from "react-router";
import userlogo from "./sources/userlogo.png";
import { Footer } from "./Footer";
import "./styles/profile.css";

const Profile = () => {
  const userData = useUser();
  const changeName = useChangeName;
  const changePassword = useChangePassword;
  const urlChangeName = "https://onlineacademyp.herokuapp.com/username/";
  const urlChangePassword =
    "https://onlineacademyp.herokuapp.com/userpassword/";
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

            <div className=" center p-3">
              <h4>Cambiar contrase??a</h4>

              <form>
                <input
                  type="password"
                  className="profile-input-text"
                  placeholder="Contrase??a actual"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <input
                  className="profile-input-text"
                  type="password"
                  placeholder="Contrase??a nueva"
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
          <Footer />
        </article>
      ) : (
        <Navigate to="/"></Navigate>
      )}
    </>
  );
};

export { Profile };
