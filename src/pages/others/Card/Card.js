import React from "react";

const Card = ({ course }) => {
  const { image, title } = course;
  console.log(course);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl px-0 py-4">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
