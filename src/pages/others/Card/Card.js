import React from "react";
import { Link } from "react-router-dom";

const Card = ({ course }) => {
  const { image, title, body,id } = course;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl px-0 py-4">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body.slice(0,147)}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <Link to={`/course/${id}`}>Buy Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
