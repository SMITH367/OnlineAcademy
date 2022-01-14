import React, { useState, useEffect } from "react";
import { getRoute } from "./services/getRoute";
import { useGetCourse } from "../hooks/useGetCourse";
import { Link } from "react-router-dom";
import "./styles/courseinfo.css";

const CourseInformation = () => {
  const [dataCourses, setDataCourses] = useState({});
  const getCourse = useGetCourse;
  const url = "http://localhost:3000/course";
  const course = getRoute(window.location.href);
  console.log(course);

  useEffect(() => {
    getCourse(url, course, setDataCourses);
  }, []);

  console.log(dataCourses);
  return (
    <>
      <p>.</p>
      <div className="container">
        {dataCourses !== undefined && Object.keys(dataCourses).length > 0 ? (
          <>
            <div className="course-info center">
              <div>
                <img
                  src={dataCourses.logo}
                  className="course-about-logo"
                  alt=""
                />
                <h1>Bienvenido al curso de {dataCourses.name}</h1>
              </div>
              <p>Nivel: {dataCourses.level}</p>

              <p>Instructor: {dataCourses.instructor}</p>
              <p className="description-course">{dataCourses.description}.</p>
              <br />
              <Link className="to-the-course" to={dataCourses.linkC}>
                Ir al curso
              </Link>
            </div>
          </>
        ) : (
          <article></article>
        )}
      </div>
    </>
  );
};

export { CourseInformation };
