import React, { useState, useEffect } from "react";
import { FetchData } from "./services/fetchData";
import { Link } from "react-router-dom";
import "./styles/courses.css";

const Courses = () => {
  const [dataCourses, setDataCourses] = useState([]);
  const url = "http://localhost:3000/courses";

  useEffect(() => {
    const fetch = async () => {
      const getData = new FetchData(url);
      const courses = await getData.FetchDataApiGet();
      setDataCourses(courses);
    };
    fetch();
  }, []);

  console.log(dataCourses);
  return (
    <>
      <p>.</p>
      <div className="container">
        <h1 className="center">
          Aprende con todos los cursos que tenemos para ti
        </h1>

        <form>
          <input type="text" placeholder="Busca tu curso aqui" />
          <input type="button" value="Buscar" />
        </form>

        <article className="courses-view-cont center">
          {dataCourses.map((el, id) => (
            <Link key={id} to={el.linkC} className="courses-course">
              <img className="courses-img" src={el.logo} alt="" />
              <p>{el.name}</p>
            </Link>
          ))}
        </article>
      </div>
    </>
  );
};

export { Courses };
