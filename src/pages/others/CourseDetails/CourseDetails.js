import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const { img, title, about,id } = useLoaderData();
  return (
   <div className="bg-blue-500">
     <div className="container mx-auto lg:py-40">
      <div className="card lg:card-side bg-blue-900 shadow-xl">
        <figure className="lg:w-2/4 w-full">
          <img src={img} alt="Album" />
        </figure>
        <div className="card-body lg:w-0">
          <h2 className="card-title">{title}</h2>
          <p>{about}</p>

          <div className="card-actions justify-end mr-5">
            <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
              <button className="mr-4 btn btn-active">Download</button>
              <Link to={`/premium/courses/${id}`}>
              <button className="btn mr-1">Premium Access</button>
              </Link>
              <Link to="/courses">
                <button className="btn">Back</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default CourseDetails;
