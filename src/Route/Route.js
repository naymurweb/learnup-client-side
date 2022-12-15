import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Categories from "../pages/Categories/Categories";
import Course from "../pages/Course/Course";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../Register/Register";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/home", element: <Home></Home> },
      {
        path: "/course",
        element: <Course> </Course>,
        loader: () => {
          return fetch("https://skilify-server.vercel.app/course");
        },
      },
      {
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => {
          return fetch(`https://skilify-server.vercel.app/course/${params.id}`);
        },
      },
      {
        path: "/categories/:id",
        element: <Categories></Categories>,
        loader: ({ params }) => {
          return fetch(
            `https://skilify-server.vercel.app/categories/${params.id}`
          );
        },
      },
      { path: "/login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
    ],
  },
]);
