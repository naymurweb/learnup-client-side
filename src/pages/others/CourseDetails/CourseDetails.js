import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const { img, title, about } = useLoaderData();
  return (
    <div className="container mx-auto my-14 border border-slate-300 ">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-2/4 w-full">
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body lg:w-0">
          <h2 className="card-title">{title}</h2>
          <p>{about}</p>
          <div className="card-actions justify-end">
            <Link to="/courses">
              <button className="btn btn-primary">back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
