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
      setDataRoute(routes);
    };
    fetch();
  }, []);

  console.log(dataRoute);
  return (
    <>
      <p>.</p>

      <div className="container">
        <h1 className="center">Conoce nuestras rutas de aprendizaje</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          eaque velit, at nisi facere delectus voluptatem, fugiat commodi iusto,
          assumenda ullam quasi! Animi vero et laboriosam cumque ab, veniam
          tenetur!
        </p>
        <section className="routes">
          {dataRoute.map((el, id) => (
            <Link key={id} to={el.url} className="to-route">
              <div
                className={`route-cont`}
                Style={`background-color: ${el.color};  background-image:${el.background}`}
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
