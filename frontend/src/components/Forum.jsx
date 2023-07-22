import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FetchData } from "./services/fetchData";
import "./styles/forum.css";
import { getBACKENDurl } from "../components/services/getBACKENDurl";
const Forum = () => {
  const url = `${getBACKENDurl}/comments/all`;
  const [dataCourses, setDataCourses] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const getData = new FetchData(url);
      const courses = await getData.FetchDataApiGet();
      if (courses !== null && courses !== undefined) setDataCourses(courses);
    };
    fetch();
  }, [url]);

  return (
    <>
      <p>.</p>
      {dataCourses !== undefined && Object.keys(dataCourses).length > 0 ? (
        <article className="container">
          <h1 className="center">Comunidad de TL Academy</h1>
          <section className="forum-hero center">
            <div>
              <p className="h4">
                Participa en los grupos de discusion de nuestro foro, comparte y
                aprende sobre las habilidades digitales que necesitas.
              </p>
            </div>
            <div>
              <img
                src="https://static.platzi.com/static/images/Forum/foro_ilustracion.png"
                alt=""
              />
            </div>
          </section>

          <section className="forum-section">
            <h4 className="center">Foro de TL Academy</h4>
            {dataCourses.map((course, id) => (
              <div className="forum-data" key={id}>
                {course.comments.length > 0 && (
                  <>
                    {course.comments.map((el, key) => (
                      <div key={key} className="forum-data-el">
                        {key <= 1 && (
                          <div className="comment-data">
                            <div>
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
                            </div>
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
