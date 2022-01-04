import React, { useState } from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Login } from "./Login";
import { Usercontext } from "../context/UserContext";

const App = () => {
  let [userDataStatus, setUserDataStatus] = useState({
    login: false,
    name: null,
    email: null,
  });

  return (
    <Usercontext.Provider value={userDataStatus}>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<Header setUserDataStatus={setUserDataStatus}> </Header>}
          />
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
