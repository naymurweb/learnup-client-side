import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Card from "../others/Card/Card";

const Course = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div className="container mx-auto grid grid-cols-5 ">
        <div className="col-span-4 bg-orange-100 p-5">
          <div className="grid grid-cols-3 gap-4">
            {courses.map((course) => (
              <Card course={course} key={course.id}></Card>
            ))}
          </div>
        </div>
        <div className="col-span-1 bg-purple-500">
          <ul className="menu bg-base-100 w-56">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a className="active">Item 2</a>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Course;
