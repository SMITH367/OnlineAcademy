import React from "react";
import { Link } from "react-router-dom";
const CourseHome = ({ courseData }) => {
  return (
    <>
      {courseData.url_course !== undefined ? (
        <Link to={courseData.url_course} className="course-data-home">
          <p>{courseData.name}</p>
          <img src={courseData.logo} alt="" />
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

export { CourseHome };
