import React from "react";
import "./styles/routes.css";
import { Link } from "react-router-dom";
const routes = [
  {
    name: "frontend",
    background:
      "https://static.platzi.com/media/learningpath/ghosts/12f35955-dd05-4c7a-8c85-d925a1e6042b.jpg",
    url: "/frontend",
    logo: "https://static.platzi.com/media/learningpath/badges/6475ba11-ef6a-401f-9144-d40f615e0cfc.jpg",
    color: "red",
    courses: [
      {
        name_course: "html",
        logo: "logohtml",
      },
      {
        name_course: "css",
        logo: "logocss",
      },
    ],
  },
  {
    name: "back",
    background: "",
    url: "",
    color: "",
    courses: [
      {
        name_course: "",
        logo: "",
      },
    ],
  },
  {
    name: "ayudas",
    background: "",
    color: "",
    url: "",
    courses: [
      {
        name_course: "",
        logo: "",
      },
    ],
  },
  {
    name: "juegos",
    background: "",
    color: "",
    url: "",
    courses: [
      {
        name_course: "",
        logo: "",
      },
    ],
  },
  {
    name: "ingles",
    background: "",
    color: "",
    url: "",
    courses: [
      {
        name_course: "",
        logo: "",
      },
    ],
  },
];

const RoutesOfl = () => {
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
          <Link to="/" className="to-route">
            {routes.map((el, id) => (
              <div className={`route-cont red`}>
                <img
                  className="logo-route"
                  src="https://static.platzi.com/media/learningpath/badges/6475ba11-ef6a-401f-9144-d40f615e0cfc.jpg"
                  alt=""
                ></img>
                <p className="name-route">{el.name}</p>
              </div>
            ))}
          </Link>
        </section>
      </div>
    </>
  );
};

export { RoutesOfl };
