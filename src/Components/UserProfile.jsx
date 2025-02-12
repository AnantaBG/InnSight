import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthC } from "../Provider/AuthProviderx";
import Navbar from "./Navbar";
import Footer from "./Footer";

const UserProfile = () => {
    const {user} = useContext(AuthC);
    console.log(user);
    // const date = new Date(user.metadata.lastSignInTime)
    // console.log(date)
    return (
        <div className="flex flex-col  mx-auto">
          <Helmet>
                <title>Your Profile</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="card md:w-1/2 w-11/12 bg-base-200 mx-auto  bg-transparent backdrop-blur-3xl border-transparent dark:bg-[#1f1f38] shadow-orange-800 dark:shadow-indigo-800 shadow-2xl ">
  
      <div className="flex flex-col items-center pb-10">
      <figure className="px-10 pt-10">
        <img
          alt={user.displayName}
          height="80"
          src={user.photoURL}
          width="80"
          className="mb-3 rounded-full shadow-lg"
        />
        </figure>
        <div className="card-body">
        <h5 className="card-title  font-mono font-extrabold text-white dark:text-[#a2d5fd] text-2xl">{user.displayName}</h5>
        <span className="text-sm text-white opacity-80 dark:text-[#a2d5fd]">{user.email}</span>
        <div className="mt-5">
        <p>Last Logged in on:<span className="text-sm text-white dark:text-[#a2d5fd] opacity-80"> {user.metadata.lastSignInTime}</span></p>
        </div>
        </div>
      </div>
      </div>
      <Footer></Footer>     
        </div>
    );
};

export default UserProfile;