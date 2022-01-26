import React, { useEffect, useState } from "react";
import { FetchData } from "./services/fetchData";
import useUser from "../hooks/useUser";
import { getRoute } from "./services/getRoute";
import { Link } from "react-router-dom";
import "./styles/routeInformation.css";

const RouteInformation = () => {
  const toget = getRoute(window.location.href);

  const [dataRoute, setDataRoute] = useState([]);
  const url = `https://onlineacademyp.herokuapp.com/route/${toget}`;

  const user = useUser();

  useEffect(() => {
    const fetch = async () => {
      const getData = new FetchData(url);
      const routes = await getData.FetchDataApiGet();
      setDataRoute(routes);
    };
    fetch();
  }, [url]);

  console.log(dataRoute);
  return (
    <>
      <p>.</p>
      <div className="container">
        {dataRoute !== undefined && Object.keys(dataRoute).length > 0 ? (
          <div>
            <h1 className="center">Ruta : {dataRoute.name}</h1>
            <h6 className="center">
              Bienvenido {user.name !== null && <>{user.name}</>}
            </h6>

            <div className="route-information">
              <article className="route-information-courses">
                <h4 className="center">Cursos</h4>
                {dataRoute.courses.map((el, id) => (
                  <Link key={id} to={el.url_course} className="r-course-cont">
                    <section className="r-course-info">
                      <img
                        className="r-course-img r-course-info-el"
                        src={el.logo}
                        alt=""
                      />
                      <p className="r-course-info-el">{el.name_course}</p>
                    </section>
                  </Link>
                ))}
              </article>
              <section className="route-information-info center">
                <img className="route-logo-img" src={dataRoute.logo} alt="" />
                <h3>{dataRoute.description}</h3>
              </section>
            </div>
          </div>
        ) : (
          <section></section>
        )}
      </div>
    </>
  );
};

export { RouteInformation };
