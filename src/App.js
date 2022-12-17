import "./App.css";
import { RouterProvider } from "react-router-dom";
import { route } from "./route/Route";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1><br />
      <button className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">Button</button>

      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
