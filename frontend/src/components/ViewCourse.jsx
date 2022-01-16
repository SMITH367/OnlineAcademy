import React, { useState, useEffect } from "react";
import { getRoute } from "./services/getRoute";
import { useGetCourse } from "../hooks/useGetCourse";
import useUser from "../hooks/useUser";
import ReactPlayer from "react-player";
import "./styles/viewcourse.css";

const ViewCourse = () => {
  const getCourse = useGetCourse;
  const [dataCourses, setDataCourses] = useState({});
  const url = "http://localhost:3000/view";
  const course = getRoute(window.location.href);
  const userData = useUser();

  useEffect(() => {
    getCourse(url, course, setDataCourses);
  }, [course, getCourse]);

  const coment = [
    {
      name: "alex",
      comentaries: "asdasdas",
    },
    {
      name: "alex",
      comentaries: "asdasdas",
    },
    {
      name: "alex",
      comentaries: "asdasdas",
    },
  ];

  return (
    <>
      <p>.</p>
      <div className="container">
        {dataCourses !== undefined && Object.keys(dataCourses).length > 0 ? (
          <>
            <h1 className="center">Bienvenido {userData.name}</h1>
            <article className="course-view-container">
              <section className="course-player">
                <ReactPlayer
                  url={dataCourses.video}
                  width="100%"
                  height="100%"
                  controls
                />
                <div className="course-presentation">
                  {" "}
                  <img
                    src={dataCourses.logo}
                    alt=""
                    className="logo-view-course"
                  />
                  <h4>Curso de {dataCourses.name}</h4>
                </div>
                <p>Instructor: {dataCourses.instructor}</p>
                <aside>
                  {" "}
                  <h5>Proyecto: </h5>
                  {dataCourses.proyectDescription}
                </aside>
              </section>

              <section className="comentaries">
                <h5 className="center">Comentarios</h5>
                <form>
                  <input type="text" />
                  <input type="submit" />
                </form>
                {coment.map((el, id) => (
                  <div key={id}>
                    <p>
                      {el.name} : {el.comentaries}
                    </p>
                  </div>
                ))}
              </section>
            </article>
          </>
        ) : (
          <section></section>
        )}
      </div>
    </>
  );
};

export { ViewCourse };
