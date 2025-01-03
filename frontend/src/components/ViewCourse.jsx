import React, { useState, useEffect, useRef } from "react";
import { getRoute } from "./services/getRoute";
import { useGetCourse } from "../hooks/useGetCourse";
import useUser from "../hooks/useUser";
import { useSendComment } from "../hooks/useSendComment";
import { useDeleteComment } from "../hooks/useDeleteComment";
import ReactPlayer from "react-player";
import { getBACKENDurl } from "../components/services/getBACKENDurl";
import "./styles/viewcourse.css";

const ViewCourse = () => {
  const getCourse = useGetCourse;
  const sendCommentData = useSendComment;
  const deleteComment = useDeleteComment;
  const [commentSend, setCommentSend] = useState(false);
  const [dataCourses, setDataCourses] = useState({});
  const [comment, setComment] = useState("");
  const refComment = useRef();

  const url = `${getBACKENDurl}/view`;
  const course = getRoute(window.location.href);
  const userData = useUser();

  useEffect(() => {
    getCourse(url, course, setDataCourses);
  }, [course, getCourse, commentSend, url]);

  const sendComment = (e) => {
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
            <h1 className="center">Bienvenido {userData.name} </h1>
            <article className="course-view-container">
              <section className="course-player">
                <ReactPlayer
                  url={dataCourses.video}
                  width="100%"
                  height="100%"
                  controls
                />
                <div className="course-presentation">
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
                  <p>{dataCourses.proyectDescription}</p>

                  <p>
                    Mirar los recursos:
                    <a
                      className="view-resourses"
                      target="_blank"
                      rel="noreferrer"
                      href={dataCourses.resourses}
                    >
                      Aqui
                    </a>
                  </p>
                </aside>
              </section>

              <section className="comentaries mg-em">
                <h5 className="center">Comentarios</h5>
                {userData.name !== null && userData.login === "true" && (
                  <form className="center form-send-data">
                    <textarea
                      className="comment-send-txt"
                      ref={refComment}
                      type="text"
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Escribe un comentario"
                    />
                    <input
                      className="coment-course-submit"
                      type="submit"
                      onClick={sendComment}
                    />
                  </form>
                )}

                {dataCourses.comments.map((el, id) => (
                  <aside className="comments-data" key={id}>
                    <section className="comments-info">
                      <>
                        {userData.email === el.email ? (
                          <label className="comments-username">
                            {userData.name}:
                          </label>
                        ) : (
                          <label className="comments-username">
                            {el.name} :
                          </label>
                        )}
                      </>
                      <label className="comment">{el.comment}</label>
                      {userData.email === el.email && (
                        <button
                          className="button-delete-comment"
                          onClick={(e) =>
                            deleteComment(
                              e,
                              userData.email,
                              el.comment,
                              course,
                              setCommentSend
                            )
                          }
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="icon icon-tabler icons-tabler-outline icon-tabler-trash text-white"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                          </svg>
                        </button>
                      )}
                    </section>
                  </aside>
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
