import React, { useState, useEffect, useRef } from "react";
import { getRoute } from "./services/getRoute";
import { useGetCourse } from "../hooks/useGetCourse";
import useUser from "../hooks/useUser";
import { useSendComment } from "../hooks/useSendComment";
import ReactPlayer from "react-player";
import "./styles/viewcourse.css";

const ViewCourse = () => {
  const getCourse = useGetCourse;
  const sendCommentData = useSendComment;
  const [commentSend, setCommentSend] = useState(false);
  const [dataCourses, setDataCourses] = useState({});
  const [comment, setComment] = useState("");
  const refComment = useRef();

  const url = "http://localhost:3000/view";
  const course = getRoute(window.location.href);
  const userData = useUser();

  useEffect(() => {
    getCourse(url, course, setDataCourses);
  }, [course, getCourse, commentSend]);

  const sendComment = (e) => {
    if (comment.length > 1) {
      sendCommentData(
        e,
        userData.name,
        comment,
        course,
        userData.email,
        setCommentSend,
        setComment
      );

      refComment.current.value = "";
      setComment(refComment.current.value);
    } else {
      alert("No puedes ingresar campos vacios");
    }
  };

  return (
    <>
      <p>.</p>
      <div
        className="course-view-cont"
        style={{ backgroundColor: "rgb(0, 12, 94)", color: "#fff" }}
      >
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
                <div className="course-presentation ">
                  {" "}
                  <img
                    src={dataCourses.logo}
                    alt=""
                    className="logo-view-course"
                  />
                  <h4>Curso de {dataCourses.name}</h4>
                </div>

                <aside className="mg-em">
                  <p>Instructor: {dataCourses.instructor}</p>
                  <h5>Proyecto: </h5>
                  {dataCourses.proyectDescription}
                </aside>
              </section>

              <section className="comentaries mg-em">
                <h5 className="center">Comentarios</h5>
                {userData.name !== null && userData.login === "true" && (
                  <form className="center">
                    <textarea
                      ref={refComment}
                      type="text"
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <input
                      className="coment-course-submit"
                      type="submit"
                      onClick={sendComment}
                    />
                  </form>
                )}

                {dataCourses.comments.map((el, id) => (
                  <div key={id}>
                    <p>
                      {el.name} : {el.comment}
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
