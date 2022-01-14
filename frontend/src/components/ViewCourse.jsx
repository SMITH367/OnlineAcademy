import React, { useState, useEffect } from "react";
import { getRoute } from "./services/getRoute";
import { useGetCourse } from "../hooks/useGetCourse";

const ViewCourse = () => {
  const getCourse = useGetCourse;
  const [dataCourses, setDataCourses] = useState({});
  const url = "http://localhost:3000/course";
  const course = getRoute(window.location.href);
  console.log(course);

  useEffect(() => {
    getCourse(url, course, setDataCourses);
  }, []);

  console.log(dataCourses);

  return (
    <>
      <p>.</p>
      <div className="container">
        <h1>vista del curso de </h1>
      </div>
    </>
  );
};

export { ViewCourse };
