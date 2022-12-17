import React from "react";
import { Link } from "react-router-dom";
import error from "../../../images/error.png";

const Error = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div>
            <img src={error} alt="" />
            <h3 className="text-3xl font-bold mt-3">
              Oops! That page can't be found
            </h3>
          </div>
          <p className="py-6">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <Link to="/">
            <button className="btn btn-primary">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
