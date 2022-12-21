import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import bg from "../../images/header-bkg.jpg";
import Course from "../others/Course/Course";
const Home = () => {
  const data = useLoaderData();
  return (
   <div>
     <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w">
          <small className="text-lg text-blue-500">
            IMPROVE YOUR SKILL & GROW YOUR CAREER
          </small>
          <h1 className="my-5 text-7xl font-semibold text-white">
            Learn from the best <br /> learning platform
          </h1>
          <p className="mb-5">
          Start, switch, or advance your career with more than 15 courses, Professional Certificates, <br></br> and degrees from world-class universities and companies.
          </p>
          <Link to="/courses">
            <button className="btn btn-primary">Our Courses</button>
          </Link>
        </div>
      </div>
    </div>
    
   <div className="bg-violet-900 py-40">
    <h2 className="py-7 text-5xl font-semibold text-center text-white" >Our Popular Courses</h2>
   <div className="grid lg:grid-cols-5 container mx-auto">
      <div className="col-span-5 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 gap-5">
          {data.map((data) => (
            <Course key={data.id} data={data}></Course>
          ))}
        </div>
      </div>
    </div>
   </div>
   </div>
  );
};

export default Home;
