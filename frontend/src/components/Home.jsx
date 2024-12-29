import React, { useState, useEffect } from "react";
import { Footer } from "./Footer";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import { courses } from "./services/coursesHome";
import { useGetCourse } from "../hooks/useGetCourse";
import { CourseHome } from "./CourseInfo";
import "./styles/home.css";
import heroImg from "./sources/student.png";
import learn from "./sources/learn.svg";
import practice from "./sources/practice.svg";
import search from "./sources/search.svg";
import techpc from "./sources/techpc.svg";
import { getBACKENDurl } from "../components/services/getBACKENDurl";

const Home = () => {
  const dataUser = useUser();
  const [course1, setcourse1] = useState([]);
  const [course2, setcourse2] = useState([]);
  const [course3, setcourse3] = useState([]);
  const [course4, setcourse4] = useState([]);
  const [course5, setcourse5] = useState([]);
  const [course6, setcourse6] = useState([]);

  const url = `${getBACKENDurl}/course`;

  const getCourse = useGetCourse;

  useEffect(() => {
    getCourse(url, courses.js, setcourse1);
    getCourse(url, courses.node, setcourse2);
    getCourse(url, courses.git, setcourse3);
    getCourse(url, courses.react, setcourse4);
    getCourse(url, courses.mongo, setcourse5);
    getCourse(url, courses.angular, setcourse6);

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
                habilidades profesionales necesarias para triunfar en la
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

          {course1 !== null && (
            <div className="course-home-cont center">
              <CourseHome courseData={course1}></CourseHome>
              <CourseHome courseData={course2}></CourseHome>
              <CourseHome courseData={course3}></CourseHome>
              <CourseHome courseData={course4}></CourseHome>
              <CourseHome courseData={course5}></CourseHome>
              <CourseHome courseData={course6}></CourseHome>
            </div>
          )}
          <h2 className="center">¿Como aprovechar nuestra academia?</h2>
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
