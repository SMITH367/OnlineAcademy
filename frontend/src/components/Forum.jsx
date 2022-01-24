import React, { useState, useEffect } from "react";
import { FetchData } from "./services/fetchData";
const Forum = () => {
  const url = "http://localhost:3000/comments/all";
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
          <section>
            <h1 className="center">Comunidad de TL Academy</h1>
            {dataCourses.map((course, id) => (
              <div key={id}>
                {course.comments.length > 0 && (
                  <>
                    {course.comments.map((el, key) => (
                      <div key={key}>
                        {key <= 1 && (
                          <>
                            <p>{el.name}</p>
                            <p>{el.comment}</p>
                            <p>{course.name}</p>
                            <p>{key}</p>
                          </>
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
