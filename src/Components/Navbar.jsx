import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthC } from "../Provider/AuthProviderx";

const Navbar = () => {
    const {user, logOut} = useContext(AuthC);
    // console.log(user)

    return (
        <div>
            <div className="navbar md:w-10/12 mx-auto bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <div
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl">
                        <img src="/src/assets/logo-removebg-preview.png" alt="" />
                    <ul className="flex flex-col gap-y-5  justify-center mx-auto mt-10 mb-3">

                    <NavLink to="/"> <li className="btn  w-full ">Home</li></NavLink>
                    <NavLink to="/rooms"> <li className="btn  w-full ">Rooms</li></NavLink>

                    {
                user && user?.email ?
                <div onClick={logOut}><li className="btn w-full">LogOut</li></div>
                : <NavLink to="/login"><li className="btn w-full">Login</li></NavLink>
            }
            {
                user && user?.email ?
                <NavLink to="/mybookings"><li className="btn w-full">My Bookings</li></NavLink>
                : <NavLink to="/register"><li className="btn w-full">Register</li></NavLink>
            }
                    </ul>

                    </div>
                    </div>
                    <img className="invisible  lg:visible h-20" src="/src/assets/logo-removebg-preview.png" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-x-2 text-2xl">
                    <NavLink to="/"> <li className="btn">Home</li></NavLink>
                    <NavLink to="/rooms"> <li className="btn  w-full ">Rooms</li></NavLink>
                    {
                user && user?.email ?
                <div onClick={logOut}><li className="btn w-full">LogOut</li></div>
                : <NavLink to="/login"><li className="btn w-full">Login</li></NavLink>
            }
            {
                user && user?.email ?
                <NavLink to="/mybookings"><li className="btn w-full">My Bookings</li></NavLink>
                : <NavLink to="/register"><li className="btn w-full">Register</li></NavLink>
            }
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>
                        
        </div>
    );
};

export default Navbar;