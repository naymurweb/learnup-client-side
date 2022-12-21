import React from "react";
import { Link } from "react-router-dom";

const Course = ({ data }) => {
  const { img, title, about,id } = data;

  return (
    <div className="card w-96 bg-blue-900 shadow-xl py-4">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{about.slice(0, 120)}</p>
        <div className="card-actions justify-end">
          <Link to={`/courses/${id}`} ><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Course;
