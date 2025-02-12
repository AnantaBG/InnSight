import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { AuthC } from "../Provider/AuthProviderx";
import Navbar from "./Navbar";
import { toast } from "react-toastify";
import Footer from "./Footer";


const Register = () => {
  const {createNewUser, setUser, updateP, googleSignIn} = useContext(AuthC);
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
const navigate = useNavigate();
  const handleSubmit=(e) =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const Name = form.get("Name");
    const Email = form.get("Email");
    const Photo = form.get("Photo");
    const Password = form.get("Password");
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(!passwordRegex.test(Password)){
      setError({...error, Password:"Password must have at least 6 characters, One Uppercase letter, and One Lowercase letter."})
      return;
    }

    createNewUser(Email, Password)
    .then(result =>{
      const user = result.user;
      setUser(user);
      navigate(location?.state ? location.state : "/")
      toast.success(`${user.displayName} Account Successfully Created`)
      updateP({displayName:Name, photoURL:Photo})
      .then(
        () => {
          navigate("/")
        }
      );
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorCode, errorMessage)
    });
  }
  const handleGoogleSignUp = () => {
    googleSignIn()
    .then(() => {
      navigate("/")
    })
  }
    return (
<div>
  <Navbar></Navbar>
<div className="min-h-screen flex justify-center items-center">
            <Helmet>
                <title>Register New Account</title>
            </Helmet>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 p-10 shadow-xl">
        <h2 className="text-3xl font-bold text-center">Register</h2>
        <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name="Name" type="text" placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input name="Photo" type="text" placeholder="Photo_Url" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="Email" type="email" placeholder="email" className="input input-bordered" required />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name="Password" type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
            <button className="ml-80 -translate-y-8 " type="button" onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
        </button>
          </div>
          {
              error.Password && (
                <label className="label text-xs text-red-600">
                {
                  error.Password
                }
              </label>
              )
            }
          <div className="form-control mt-6">
            <button className="btn bg-gray-400 dark:bg-[#496b84]">Register</button>
          </div>
        </form>
        <div onClick={handleGoogleSignUp} className="form-control mt-6">
            <button className="btn bg-gray-400 dark:bg-[#496b84]"><FcGoogle className="text-2xl"></FcGoogle> SignUp With Google</button>
          </div>
        <p>Already Have an Account! <Link  className="text-red-500 underline" to="/login">Login Now!</Link></p>
      </div>
        </div>
        <Footer></Footer>
</div>
    );
};

export default Register;