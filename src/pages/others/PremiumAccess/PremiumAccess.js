import React from "react";
import { useLoaderData } from "react-router-dom";

const PremiumAccess = () => {
  const { img, title } = useLoaderData();
  return (
   <div className="bg-violet-900 ">
     <div className="container mx-auto p-40">
    <h3 className="text-center py-7 text-3xl text-white">{title}</h3>

      <div className="card w-96 bg-blue-900 shadow-xl image-full my-14 mx-auto">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
      </div>

    </div>
   </div>
  );
};

export default PremiumAccess;
