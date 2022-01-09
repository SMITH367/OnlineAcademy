import React from "react";

import { getRoute } from "./services/getRoute";
const RouteInformation = () => {
  const toget = getRoute(window.location.href);

  return (
    <>
      <p>.</p>
      <div className="container">
        <h1>{toget}</h1>
      </div>
    </>
  );
};

export { RouteInformation };
