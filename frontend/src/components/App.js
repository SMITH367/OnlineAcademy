import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Header } from "./Header";
import { Login } from "./Login";
import { Register } from "./Register";
import { RoutesOfLearn } from "./RoutesOfLearn";
import { RouteInformation } from "./RouteInformation";
import { Courses } from "./Courses";
import { CourseInformation } from "./CourseInformation";
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
        <Header setUserDataStatus={setUserDataStatus}> </Header>{" "}
        <Routes>
          <Route path="/" element={<Home> </Home>} />
          <Route
            path="/login"
            element={<Login setUserDataStatus={setUserDataStatus}> </Login>}
          />{" "}
          <Route
            path="/register"
            element={<Register userDataStatus={userDataStatus}> </Register>}
          />
          <Route path="/routes" element={<RoutesOfLearn> </RoutesOfLearn>} />{" "}
          <Route
            path="/route/:route"
            element={<RouteInformation> </RouteInformation>}
          />{" "}
          <Route
            path="/course/:course"
            element={<CourseInformation></CourseInformation>}
          />{" "}
          <Route path="/courses" element={<Courses></Courses>} />{" "}
        </Routes>{" "}
      </HashRouter>{" "}
    </Usercontext.Provider>
  );
};

export { App };
