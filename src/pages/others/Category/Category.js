import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Category = () => {
  const category = useLoaderData();
  //   console.log(category);
  return (
    <div className="grid lg:grid-cols-5 container mx-auto">
      <div className="col-span-4 bg-blue-500">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-4 gap-3">
          {category.map((data) => (
            <Course key={data.id} data={data}></Course>
          ))}
        </div>
      </div>

      <div className="lg:col-span-1 col-span-2 bg-blue-400 p-4 ">
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
      </div>
    </div>
  );
};

export default Category;
