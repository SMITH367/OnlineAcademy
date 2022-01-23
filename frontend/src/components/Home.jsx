import React, { useState, useEffect } from "react";
import { Footer } from "./Footer";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import { cursos } from "./services/coursesHome";
import { useGetCourse } from "../hooks/useGetCourse";
import { CourseHome } from "./CourseInfo";
import "./styles/home.css";
import heroImg from "./sources/student.png";
import learn from "./sources/learn.svg";
import practice from "./sources/practice.svg";
import search from "./sources/search.svg";
import techpc from "./sources/techpc.svg";

const Home = () => {
  const dataUser = useUser();
  const [curso1, setCurso1] = useState([]);
  const [curso2, setCurso2] = useState([]);
  const [curso3, setCurso3] = useState([]);
  const [curso4, setCurso4] = useState([]);
  const [curso5, setCurso5] = useState([]);

  const url = "http://localhost:3000/course";

  const getCourse = useGetCourse;

  useEffect(() => {
    getCourse(url, cursos.html, setCurso1);
    getCourse(url, cursos.css, setCurso2);
    getCourse(url, cursos.js, setCurso3);
    getCourse(url, cursos.react, setCurso4);
    getCourse(url, cursos.mongo, setCurso5);

    // eslint-disable-next-line
  }, []);

  return (
    <>
      <p>.</p>
      <div className="container-home">
        <section className="home">
          <article className="hero">
            <div className="center">
              <h1 className="center">Bienvenido a TL Academy</h1>
              <p>
                Una academia de educacion digital totalmente gratuita y de
                calidad.
              </p>
              <p>
                Hola, {dataUser.name} estudia con nosotros y adquiere las
                habilidades profesionales que necesitas para triunfar en la
                industria tech.
              </p>
              <Link to="/courses" className="call-action">
                Cursos
              </Link>
              <Link to="/register" className="call-action">
                Registrate
              </Link>
            </div>

            <div>
              <img className="hero-img" src={heroImg} alt="" />
            </div>
          </article>
          <h2 className="center">Algunos de nuestros cursos</h2>
          <div className="course-home-cont center">
            <CourseHome courseData={curso1}></CourseHome>
            <CourseHome courseData={curso2}></CourseHome>
            <CourseHome courseData={curso3}></CourseHome>
            <CourseHome courseData={curso4}></CourseHome>
            <CourseHome courseData={curso5}></CourseHome>
          </div>

          <h4 className="center">¿Como aprender?</h4>
          <article className="metogology center">
            <aside className="metogology-tip">
              <img src={learn} alt="" />
              <p>Mira los cursos</p>
            </aside>
            <aside className="metogology-tip">
              <img src={search} alt="" />
              <p>Experimenta y practica</p>
            </aside>
            <aside className="metogology-tip">
              <img src={practice} alt="" />
              <p>Crea proyectos con lo aprendido</p>
            </aside>
          </article>

          <article>
            <aside className="aside-call-to-act center">
              <img src={techpc} alt="" />
              <p>
                Aprende e impulsa tus conocimientos y se un profesional 4.0 con
                una educacion online efectiva y gratuita.
              </p>
            </aside>
            <p className="h2 p-4 center">
              ¿Que esperas? ¡Ve a nuestros cursos ya!
            </p>
          </article>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};
export { Home };
