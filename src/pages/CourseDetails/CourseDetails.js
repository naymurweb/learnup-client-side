import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const { title, body, image } = useLoaderData();
  return (
    <div className=" container mx-auto my-24">
      <div className="card lg:card-side bg-base-100 shadow-xl grid grid-cols-3 border-2 border-indigo-500">
        <figure className="col-span-1">
          <img src={image} alt="Album" />
        </figure>

        <div className="card-body col-span-2">
          <h2 className="card-title text-3xl text-indigo-500">{title}</h2>
          <p>{body.slice(0)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
                <Link to='/course'>back</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
