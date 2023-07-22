import React, { useEffect, useState } from "react";
import { FetchData } from "./services/fetchData";
import "./styles/routes.css";
import { Link } from "react-router-dom";

const RoutesOfLearn = () => {
  const [dataRoute, setDataRoute] = useState([]);
  const url = "http://localhost:3000/routes";

  useEffect(() => {
    const fetch = async () => {
      const getData = new FetchData(url);
      const routes = await getData.FetchDataApiGet();
      if (routes !== null && routes !== undefined) setDataRoute(routes);
    };
    fetch();
  }, []);

  return (
    <>
      <p>.</p>

      <div className="container">
        <h1 className="center">Conoce nuestras rutas de aprendizaje</h1>
        <p className="center">
          Escoge uno de los caminos que tenemos para ti y aprende todo lo que
          necesitas para insertarte en el mundo laboral.
        </p>
        <section className="routes">
          {dataRoute.map((el, id) => (
            <Link key={id} to={el.url} className="to-route">
              <div
                className="route-cont"
                style={{
                  backgroundColor: el.color,
                }}
              >
                <img className="logo-route" src={el.logo} alt=""></img>
                <p className="name-route">{el.name}</p>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export { RoutesOfLearn };
