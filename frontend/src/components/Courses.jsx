import React, { useState, useEffect } from "react";
import { FetchData } from "./services/fetchData";
import { Link } from "react-router-dom";
import "./styles/courses.css";
import { getBACKENDurl } from "../components/services/getBACKENDurl";
const Courses = () => {
  const [dataCourses, setDataCourses] = useState([]);
  const [refesh, setRefesh] = useState(false);
  const url = `${getBACKENDurl}/courses`;

  useEffect(() => {
    const fetch = async () => {
      const getData = new FetchData(url);
      const courses = await getData.FetchDataApiGet();
      if (courses !== null && courses !== undefined) {
        courses.sort(() => Math.random() - 0.5);
        setDataCourses(courses);
      }
    };
    fetch();
  }, [refesh, url]);

  const SearchCourse = async (e, course) => {
    e.preventDefault();
    const getData = new FetchData(url + "/" + course);
    const courses = await getData.FetchDataApiGet();
    if (courses !== null && courses !== undefined) setDataCourses(courses);
  };
  const defRefresh = () => {
    refesh === true ? setRefesh(false) : setRefesh(true);
  };

  return (
    <>
      <p>.</p>
      <div className="container">
        <h1 className="center">Aprende con todos nuestros cursos</h1>

        <form className="form-search-course center">
          <input
            type="text"
            className="input-search-course "
            placeholder="Busca tu curso aqui"
            onChange={(e) =>SearchCourse(e, e.target.value.toUpperCase())}
          />
          <button className="btn-typical" onClick={defRefresh}>
            Ver todos
          </button>
        </form>

        {dataCourses.length > 0 && (
          <article className="courses-view-cont center">
            {dataCourses.map((el, id) => (
              
              <Link key={id} to={`/course/${el.ident}`} className="courses-course">
                <img className="courses-img" src={el.logo} alt="" />
                <p>{el.name}</p>
              </Link>
            ))}
          </article>
        )}
      </div>
    </>
  );
};

export { Courses };
