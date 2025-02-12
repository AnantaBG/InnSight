import {  useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { AuthC } from "../Provider/AuthProviderx";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img1 from '../assets/1.png'
import img2 from '../assets/21.png'
import { ThemeContext } from "./ThemeContext";
const Login = () => {
  const { theme } = useContext(ThemeContext);
        const getBackgroundImage = () => {
            return theme === 'light' ? img2 : img1;
        };
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
      <div className={`-mt-20 pt-20 ${theme === 'dark' ? 'dark' : ''} min-h-screen`}
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.3s ease'
      }}>
        <Navbar></Navbar>
        <div className="min-h-screen  flex justify-center items-center">
            <Helmet>
                <title>Login Account</title>
            </Helmet>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 shadow-xl">
        <h2 className="text-3xl font-bold text-center dark:text-[#a2d5fd]">Login</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-[#a2d5fd]">Email</span>
            </label>
            <input name="email" id="email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text dark:text-[#a2d5fd]">Password</span>
            </label>
            <input name="password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
            <button className="ml-80 -translate-y-8 " type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
            </button>

          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-400 dark:bg-[#496b84]">Login</button>
          </div>
          
        </form>
        <div onClick={handleGoogleSignIn} className="form-control mt-6">
            <button className="btn bg-gray-400 dark:bg-[#496b84]"><FcGoogle className="text-2xl"></FcGoogle> Login With Google</button>
          </div>
        <p>Dont have a Account? <Link  className="text-red-500 underline" to="/register">Register!</Link></p>
      </div>
        </div>
        <Footer></Footer>
      </div>

    );
};

export default Login;