import "./App.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./route/Route";

function App() {
  return (
    <div className="">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
