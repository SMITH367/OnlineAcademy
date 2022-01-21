import React, { useState, useEffect } from "react";
import { FetchData } from "./services/fetchData";
import { Link } from "react-router-dom";
import "./styles/courses.css";

const Courses = () => {
  const [dataCourses, setDataCourses] = useState([]);
  const [refesh, setRefesh] = useState(false);
  const [courseSearch, setCourseSearch] = useState("");
  const url = "http://localhost:3000/courses";

  useEffect(() => {
    const fetch = async () => {
      const getData = new FetchData(url);
      const courses = await getData.FetchDataApiGet();
      if (courses !== null && courses !== undefined) setDataCourses(courses);
    };
    fetch();
  }, [refesh]);

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
            onChange={(e) => setCourseSearch(e.target.value)}
          />
          <button
            type="button"
            className="btn-typical"
            onClick={(e) => SearchCourse(e, courseSearch.toUpperCase())}
          >
            Buscar
          </button>
          <button className="btn-typical" onClick={defRefresh}>
            Ver todos
          </button>
        </form>

        {dataCourses.length > 0 && (
          <article className="courses-view-cont center">
            {dataCourses.map((el, id) => (
              <Link key={id} to={el.url_course} className="courses-course">
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
