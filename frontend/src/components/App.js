import React, { useState } from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Login } from "./Login";
import { Usercontext } from "../context/UserContext";

const App = () => {
  let [userDataStatus, setUserDataStatus] = useState({
    login: localStorage.getItem("login"),
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
  });

  return (
    <Usercontext.Provider value={userDataStatus}>
      <HashRouter>
        <Header setUserDataStatus={setUserDataStatus}> </Header>
        <Routes>
          <Route path="/" element={<h1>Hola</h1>} />
          <Route
            path="/login"
            element={<Login setUserDataStatus={setUserDataStatus}> </Login>}
          />
        </Routes>{" "}
      </HashRouter>{" "}
    </Usercontext.Provider>
  );
};

export { App };
