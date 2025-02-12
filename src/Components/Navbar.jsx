import { useContext, useEffect } from "react"; // Import useState and useEffect
import { NavLink } from "react-router-dom";
import { AuthC } from "../Provider/AuthProviderx";
import logo from '../assets/logo-removebg-preview.png';
import { BiMenu, BiMoon, BiSun } from "react-icons/bi";
import Loading from "./Loading";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
    const { user, logOut, loading } = useContext(AuthC);
    const { theme, setTheme } = useContext(ThemeContext);
   

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme); // Set theme on root
        localStorage.setItem('theme', theme); // Save theme to localStorage
    }, [theme]); // Run effect when theme changes

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="mb-40">
            <div className="navbar px-4 text-slate-950 dark:text-[#a2d5fd]   mx-auto bg-transparent dark:bg-cyan-950 top-0 backdrop-blur-3xl border-transparent">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <BiMenu className="text-3xl" />
                        </div>
                        <div
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-400 rounded-box z-[1] mt-3 w-60 p-2 shadow-2xl"
                        >
                            <img src={logo} alt="" />
                            <ul className="flex flex-col gap-y-5 justify-center mx-auto mt-10 mb-3">
                                <NavLink to="/"> <li className="btn w-full ">Home</li></NavLink>
                                <NavLink to="/rooms"> <li className="btn w-full ">Rooms</li></NavLink>
                                {user && user?.email ? (
                                    <div onClick={logOut}><li className="btn w-full">LogOut</li></div>
                                ) : (
                                    <NavLink to="/login"><li className="btn w-full">Login</li></NavLink>
                                )}
                                {user && user?.email ? (
                                    <NavLink to="/mybookings"><li className="btn w-full">My Bookings</li></NavLink>
                                ) : (
                                    <NavLink to="/register"><li className="btn w-full">Register</li></NavLink>
                                )}
                                <NavLink to="/rooms"> <li className="btn w-full ">About Us</li></NavLink>
                                <NavLink to="/rooms"> <li className="btn w-full ">Contact Us</li></NavLink>
                                {/* Theme Toggle (Mobile) */}
                                <li className="btn w-full" onClick={toggleTheme}>
                                    {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img className="invisible lg:visible h-20" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-x-2 text-2xl">
                        <NavLink to="/"> <li className="btn">Home</li></NavLink>
                        <NavLink to="/rooms"> <li className="btn w-full ">Rooms</li></NavLink>
                        {user && user?.email ? (
                            <div onClick={logOut}><li className="btn w-full">LogOut</li></div>
                        ) : (
                            <NavLink to="/login"><li className="btn w-full">Login</li></NavLink>
                        )}
                        {user && user?.email ? (
                            <NavLink to="/mybookings"><li className="btn w-full">My Bookings</li></NavLink>
                        ) : (
                            <NavLink to="/register"><li className="btn w-full">Register</li></NavLink>
                        )}
                        <NavLink to="/rooms"> <li className="btn w-full ">About Us</li></NavLink>
                        <NavLink to="/rooms"> <li className="btn w-full ">Contact Us</li></NavLink>
                        {/* Theme Toggle (Desktop) */}
                        <li className="btn rounded-full p-0" onClick={toggleTheme}>
                            {theme === 'light' ? <div className="text-2xl">
                            <BiMoon></BiMoon>
                            </div>:<div className="text-2xl">
                            <BiSun></BiSun>
                                </div>}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;