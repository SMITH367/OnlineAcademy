import React from "react";
import { Link } from "react-router-dom";

const CourseInformation = () => {
  return (
    <>
      <p>.</p>
      <div className="container">
        logo <h1>Bienvenido al curso tal</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          accusantium iusto ipsum sequi neque officiis corrupti voluptate,
          provident expedita numquam. Maxime, commodi officia alias earum facere
          ad in recusandae placeat.
        </p>
        level
        <Link to="/">ve al curso</Link>
      </div>
    </>
  );
};

export { CourseInformation };
