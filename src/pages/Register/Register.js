import React, { useContext } from "react";
import { Link } from "react-router-dom";
import regImg from "../../images/reg-img-four.png";
import { AuthContext } from "../../UserContext/UserContext";
const Register = () => {
  const {name}=useContext(AuthContext)
  console.log(name);
  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <img src={regImg} alt="" />

            <div className="text-center"></div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-16 order-1 lg:order-2 ">
            <div className="card-body">
              <h1 className="text-4xl font-bold ">Register Your Account</h1>
              <p className="py-4 ">
                Inter your valid email address and password to register your
                account
              </p>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  placeholder="User Name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="text"
                  placeholder="PhotoURL"
                  className="input input-bordered"
                />
              </div>
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
                  Already have an Account?
                  <Link to="/login">
                    <button className="btn btn-link">Login</button>
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

export default Register;
