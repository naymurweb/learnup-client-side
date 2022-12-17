import React from "react";
import { Link } from "react-router-dom";
import loginImg from "../../../images/login.webp";
import { FaGoogle, FaGithub } from "react-icons/fa";
const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <img src={loginImg} alt="" />

            <div className="text-center">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent mb-4">
                <FaGoogle></FaGoogle> Continue with Google
              </button>
              <br />
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent">
                <FaGithub></FaGithub> Continue with Github
              </button>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-16 order-1 lg:order-2 ">
            <div className="card-body">
              <h1 className="text-4xl font-bold">Login now!</h1>
              <p className="py-4">
                Do not share your login information with anyone.
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary mb-3">Login</button>
                <p>
                  Don't have an account?
                  <Link to="register">
                    <button className="btn-success btn-active btn-link">
                      Register
                      {/* <p>Already a Member? Go to login</p> */}
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
