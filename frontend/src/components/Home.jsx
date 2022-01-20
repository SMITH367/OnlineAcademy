import React, { useState, useEffect } from "react";
import { Footer } from "./Footer";
import useUser from "../hooks/useUser";
import { Link } from "react-router-dom";
import { cursos } from "./services/coursesHome";
import { useGetCourse } from "../hooks/useGetCourse";
import { CourseHome } from "./CourseInfo";
import "./styles/home.css";
import heroImg from "./sources/student.png";

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
    getCourse(url, cursos.angular, setCurso5);

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
          <h2>Algunos de nuestros cursos</h2>
          <div className="course-home-cont center">
            <CourseHome courseData={curso1}></CourseHome>
            <CourseHome courseData={curso2}></CourseHome>
            <CourseHome courseData={curso3}></CourseHome>
            <CourseHome courseData={curso4}></CourseHome>
            <CourseHome courseData={curso5}></CourseHome>
          </div>
          <h4>
            Crea tu perfil de Linkedin y busca tu empleo con lo aprendido aqui!
          </h4>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic
          nemo minima id quod, suscipit iure tempore neque temporibus soluta
          quidem sapiente esse earum, aspernatur officiis! Molestias eius
          tempora libero? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Doloremque nobis a beatae natus voluptatibus voluptate
          perferendis eum reprehenderit? Sapiente ipsa iure cupiditate
          laudantium, ullam a esse libero minima minus iusto! Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Quod harum nemo magnam sapiente
          exercitationem pariatur facere et consectetur mollitia similique
          recusandae placeat asperiores ex adipisci suscipit in, unde minima
          dolor! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Laborum ipsam, ipsa labore quo, mollitia repellendus amet accusantium
          voluptatibus maxime quas recusandae optio excepturi laboriosam?
          Cupiditate at aliquam libero quis nulla.
          <label htmlFor=""></label>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
};
export { Home };
