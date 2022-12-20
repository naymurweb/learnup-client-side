import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import regImg from "../../images/reg-img-four.png";
import { AuthContext } from "../../UserContext/UserContext";

const Register = () => {
  const { userCreate, userProfileUpdate, user } = useContext(AuthContext);
  const [error, setError] = useState("");

const navigate=useNavigate()

  const registerBtnHandal = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userCreate(email, password)
      .then((result) => {
        const user = result.user;
        userProfileUpdate(userName, photoURL);
        console.log(user);
        form.reset();
        navigate('/')
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="container mx-auto">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <img src={regImg} alt="" />

            <div className="text-center"></div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-16 order-1 lg:order-2 ">
            <form className="card-body" onSubmit={registerBtnHandal}>
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
                  name="name"
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
                  name="photo"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div>
                {error.length !== 0 ? (
                  <small className="text-red-400">{error}</small>
                ) : (
                  <small></small>
                )}
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary mb-3">Register</button>
                <div>
                  <p>
                    Already have an Account?
                    <Link to="/login">
                      <button className="btn btn-link">Login</button>
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
