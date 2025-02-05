import {  useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { AuthC } from "../Provider/AuthProviderx";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Login = () => {
const {logIn, setUser, googleSignIn} = useContext(AuthC);
const location = useLocation();
const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
  const handleSubmit=(e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email?.value;
    const password = form.password?.value;





    logIn(email, password)
    .then(result =>{
      const user = result.user;
      setUser(user);
      navigate(location?.state ? location.state : "/")
      toast.success(`${user.displayName} Signed in`)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorCode, errorMessage)
    });
  }
  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(() => {
      navigate("/")
    })
  }
    return (
      <div>
        <Navbar></Navbar>
        <div className="min-h-screen  flex justify-center items-center">
            <Helmet>
                <title>Login Account</title>
            </Helmet>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 shadow-xl">
        <h2 className="text-3xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email" id="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
            <button className="ml-80 -translate-y-8 " type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
            </button>

          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-400">Login</button>
          </div>
          
        </form>
        <div onClick={handleGoogleSignIn} className="form-control mt-6">
            <button className="btn bg-gray-400"><FcGoogle className="text-2xl"></FcGoogle> Login With Google</button>
          </div>
        <p>Dont have a Account? <Link  className="text-red-500 underline" to="/register">Register!</Link></p>
      </div>
        </div>
        <Footer></Footer>
      </div>

    );
};

export default Login;