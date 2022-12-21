import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import bg from "../../images/header-bkg.jpg";
import Course from "../others/Course/Course";
const Home = () => {
  const data = useLoaderData();
  console.log(data);
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <Link to="/courses">
            <button className="btn btn-primary">Our Courses</button>
          </Link>
        </div>
      </div>
    </div>
    
   <div className="bg-primary">
    <h2 className="py-7 text-5xl font-semibold text-center text-white" >Our Popular Courses</h2>
   <div className="grid lg:grid-cols-5 container mx-auto">
      <div className="col-span-5 ">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 gap-5">
          {data.map((data) => (
            <Course key={data.id} data={data}></Course>
          ))}
        </div>
      </div>

      {/* <div className="lg:col-span-1 col-span-2 bg-blue-400 p-4 ">
        <ul className="menu bg-blue-900 w-full card  shadow-xl lg:sticky top-3">
          <li>
            <Link to={`/category/all`} className="active">
              ALL Skills Learning Courses
            </Link>
          </li>
          <li>
            <Link to={`/category/english`}>English Language Learning</Link>
            <Link to={`/category/design`}>Design & Creative Courses</Link>
            <Link to={`/category/freelancing`}>Freelancing Courses</Link>
            <Link to={`/category/skills`}>Skills & IT Courses</Link>
          </li>
        </ul>
      </div> */}
    </div>
   </div>
   </div>
  );
};

export default Home;
