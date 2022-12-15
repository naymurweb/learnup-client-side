import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Course from "../pages/Course/Course";
import Home from "../pages/Home/Home";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/home", element: <Home></Home> },
      { path: "/course", element: <Course> </Course>, loader: ()=>{
        return fetch('https://skilify-server.vercel.app/course')
      } },
    ],
  },
]);
