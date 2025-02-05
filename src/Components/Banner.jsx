import { NavLink } from "react-router-dom";
import Img1 from "../assets/banner1.png"
import Img2 from "../assets/banner2.png"
import Img3 from "../assets/banner3.png"
import Img4 from "../assets/banner4.png"

const Banner = () => {
    return (
        <div className="mt-10 w-11/12  mx-auto">
            <div className="carousel rounded-box w-full max-h-96">
            <div className="card overflow-clip carousel-item w-full">
                <img
                src={Img1}
                className="w-full max-h-96 brightness-50"
                alt="Tailwind CSS Carousel component" />
                            <div className="card-body text-white bg-base-content text-center items-center w-full flex flex-col justify-center brightness-200 top-20 absolute ">
                            <h2 className="card-title text-2xl md:text-4xl">Luxurious Hotel Reception

</h2>
                            <p className="text-xl lg:text-2xl">The overall impression is one of luxury, sophistication, and efficiency.</p>
                            <div className="card-actions justify-end">
                                <NavLink to="/rooms">
                                <button className="btn mt-5 btn-primary">Learn More</button>
                                </NavLink>
                            
                            </div>
            </div>
            </div>
            <div className="card overflow-clip carousel-item w-full">
                <img
                src={Img2}
                className="w-full max-h-96 brightness-50"
                alt="Tailwind CSS Carousel component" />
            <div className="card-body text-white bg-base-content text-center items-center w-full flex flex-col justify-center brightness-200 top-10 md:top-20 absolute ">
                            <h2 className="card-title text-2xl md:text-4xl">Expansive City Views from a Luxurious Suite</h2>
                            <p className="text-xl lg:text-2xl w-auto md:w-3/4">The window fills the entire wall, offering an expansive panorama of towering skyscrapers and urban landscapes stretching out into the distance. </p>
                            <div className="card-actions justify-end">
                            <NavLink to="/rooms">
                                <button className="btn btn-primary mt-5">Learn More</button>
                                </NavLink>                            </div>
            </div>
            </div>
            <div className="card overflow-clip carousel-item w-full">
                <img
                src={Img3}
                className="w-full max-h-96 brightness-50"
                alt="Tailwind CSS Carousel component" />
                <div className="card-body text-white bg-base-content text-center items-center w-full flex flex-col justify-center brightness-200 top-10 lg:top-20 absolute ">
                            <h2 className="card-title text-2xl md:text-4xl">Tropical Oasis: Poolside Paradise</h2>
                            <p className="text-xl w-auto lg:w-3/4 lg:text-2xl"> A large, inviting swimming pool stretches across the frame, its crystal-clear water reflecting the vibrant blue sky. Lush palm trees and tropical greenery frame the pool, creating a sense of tranquility and seclusion. </p>
                            <div className="card-actions justify-end">
                            <NavLink to="/rooms">
                                <button className="btn btn-primary mt-5">Learn More</button>
                                </NavLink>                            </div>
            </div>
            </div>
            <div className="card overflow-clip carousel-item w-full">
                <img
                src={Img4}
                className="w-full max-h-96 brightness-50"
                alt="Tailwind CSS Carousel component" />
                <div className="card-body text-white bg-base-content text-center items-center w-full flex flex-col justify-center brightness-200 top-10 lg:top-20 absolute ">
                            <h2 className="card-title text-2xl md:text-4xl">Luxurious Dining Experience Awaits</h2>
                            <p className="text-xl w-auto lg:w-3/4 lg:text-2xl"> The tables are meticulously set with pristine linens and elegant tableware, hinting at a refined and unforgettable culinary experience.</p>
                            <div className="card-actions justify-end">
                            <NavLink to="/rooms">
                                <button className="btn btn-primary mt-5">Learn More</button>
                                </NavLink>                            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Banner;