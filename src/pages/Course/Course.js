import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "../others/Card/Card";

const Course = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div>
      <div className="container mx-auto grid grid-cols-5 ">
        <div className="col-span-4 bg-blue-900 p-5">
          <div className="grid grid-cols-3 gap-4">
            {courses.map((course) => (
              <Card course={course} key={course.id}></Card>
            ))}
          </div>
        </div>
        <div className="col-span-1 bg-blue-500 ">
          <ul className="menu bg-base-100 mt-44 ">
            <li>
              <Link to="/categories/english">English Course</Link>
              <Link to="/categories/graphic">Graphic Design</Link>
              <Link to="/categories/marketing">Digital Marketing</Link>
              <Link to="/categories/programming">programming</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Course;
