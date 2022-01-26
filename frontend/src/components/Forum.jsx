import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchData } from "./services/fetchData";
import "./styles/forum.css";

const Forum = () => {
  const url = "https://onlineacademyp.herokuapp.com/comments/all";
  const [dataCourses, setDataCourses] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const getData = new FetchData(url);
      const courses = await getData.FetchDataApiGet();
      if (courses !== null && courses !== undefined) setDataCourses(courses);
      console.log("asd");
    };
    fetch();
  }, []);

  return (
    <>
      <p>.</p>
      {dataCourses !== undefined && Object.keys(dataCourses).length > 0 ? (
        <article className="container">
          <h1 className="center">Comunidad de TL Academy</h1>
          <section className="forum-hero center">
            <div>
              <h2>
                Participa el grupos de discusion de nuestro foro, comparte y
                aprende sobre las habilidades digitales que necesitas
              </h2>
            </div>
            <div>
              <img
                src="https://static.platzi.com/static/images/Forum/foro_ilustracion.png"
                alt=""
              />
            </div>
          </section>

          <section className="forum-section">
            <h3 className="center">Foro de TL Academy</h3>
            {dataCourses.map((course, id) => (
              <div className="forum-data" key={id}>
                {course.comments.length > 0 && (
                  <>
                    {course.comments.map((el, key) => (
                      <div key={key} className="forum-data-el">
                        {key <= 1 && (
                          <div className="comment-data">
                            <p>
                              <label className="user-data-name">
                                {el.name}:
                              </label>
                              <p> {el.comment}</p>
                              <label>
                                En el curso de:{" "}
                                <Link to={`/view/${course.ident}`}>
                                  {" "}
                                  {course.name.toLowerCase()}
                                </Link>
                              </label>
                            </p>
                          </div>
                        )}
                      </div>
                    ))}
                  </>
                )}
              </div>
            ))}
          </section>
        </article>
      ) : (
        <></>
      )}
    </>
  );
};

export { Forum };
