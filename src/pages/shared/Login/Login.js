import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../../images/login.webp";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../UserContext/UserContext";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const { userGoogleSign, userGithubSign, forgotPassword, user, userLogin } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate=useNavigate()

  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const googleClickHandeler = () => {
    const googleProvider = new GoogleAuthProvider();
    userGoogleSign(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
      })
      .catch((error) => console.log(error));
  };

  const githubClickHandeler = () => {
    const githubProvider = new GithubAuthProvider();
    userGithubSign(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, {replace: true});
      })
      .catch((error) => console.log(error));
  };

  const loginHandaler = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, {replace: true});
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const forgotPasswordHandel = () => {
    forgotPassword(user.email)
      .then(() => {
        console.log("Password reset email sent!");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-violet-800">
      <div className="container mx-auto">
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <img src={loginImg} alt="" />

            <div className="text-center">
              <button
                onClick={googleClickHandeler}
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent mb-4"
              >
                <FaGoogle></FaGoogle> Continue with Google
              </button>
              <br />
              <button
                onClick={githubClickHandeler}
                className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-accent"
              >
                <FaGithub></FaGithub> Continue with Github
              </button>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-blue-900 mt-16 order-1 lg:order-2 ">
            <form className="card-body" onSubmit={loginHandaler}>
              <h1 className="text-4xl font-bold">Login now!</h1>
              <p className="py-4">
                Do not share your login information with anyone.
              </p>
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
                <label className="label">
                  <a
                    onClick={forgotPasswordHandel}
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
                <div>
                  {error.length !== 0 ? (
                    <small className="text-red-400">{error}</small>
                  ) : (
                    <small></small>
                  )}
                </div>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary mb-3">Login</button>
                <div>
                  {user.email ? (
                    <p>Already have an Account?</p>
                  ) : (
                    <p>
                      Don't have an account?
                      <Link to="/register">
                        <button className="btn btn-link">Register</button>
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
