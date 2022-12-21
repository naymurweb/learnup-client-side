import React from "react";
import { useLoaderData } from "react-router-dom";

const PremiumAccess = () => {
  const { img, title } = useLoaderData();
  return (
    <div className="container mx-auto">
      <div className="card w-96 bg-base-100 shadow-xl image-full my-14 mx-auto">
        <figure>
          <img src={img} alt="Shoes" />
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

export default PremiumAccess;
