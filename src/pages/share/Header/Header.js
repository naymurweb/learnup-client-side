import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-2 bg-cyan-700">
         <div className="navbar bg-base-100 container mx-auto bg-cyan-700">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Skilify</a>
      </div>
      <div className="flex-none gap-2">
        <div className="">
        
          <Link to='/home' className="mr-5">Home</Link>
          <Link to='/course' className="mr-5">Course</Link>


          <a href="#" className="mr-5">
            {" "}
            FAQ{" "}
          </a>
          <a href="#" className="mr-5">
            {" "}
            Blog
          </a>
          <a href="#" className="mr-5">
            {" "}
            Login
          </a>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <label className="cursor-pointer label">
          <span className="label-text"></span>
          <input type="checkbox" className="toggle toggle-primary" defaultChecked />
        </label>
      </div>
    </div>
    </div>
   
  );
};

export default Header;
