import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../pages/Blog/Blog";
import Courses from "../pages/Courses/Courses";
import Faq from "../pages/Faq/Faq";
import Home from "../pages/Home/Home";
import Category from "../pages/others/Category/Category";
import CourseDetails from "../pages/others/CourseDetails/CourseDetails";
import Register from "../pages/Register/Register";
import Error from "../pages/shared/Error/Error";
import Login from "../pages/shared/Login/Login";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "home", element: <Home></Home> },
      {
        path: "courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://learnup-hazel.vercel.app/courses"),
      },

      { path: "blog", element: <Blog></Blog> },
      { path: "faq", element: <Faq></Faq> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`https://learnup-hazel.vercel.app/category/${params.id}`),
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(`https://learnup-hazel.vercel.app/courses/${params.id}`),
      },
    ],
  },
  { path: "*", element: <Error></Error> },
]);
