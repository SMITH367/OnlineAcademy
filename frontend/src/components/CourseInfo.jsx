import React from "react";
import { Link } from "react-router-dom";
const CourseHome = ({ courseData }) => {
  return (
    <>
      {courseData.ident !== undefined ? (
        <Link to={`/course/${courseData.ident}`} className="course-data-home">
          <img src={courseData.logo} alt="" />
          <p>{courseData.name}</p>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

export { CourseHome };
