import { useContext } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import { AuthC } from "../../Provider/AuthProviderx";
import Loading from "../Loading";

const TopRatedRooms = () => {
    const rooms = useLoaderData();
    const {loading} = useContext(AuthC);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <section className="w-11/12 mt-10 mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono flex justify-center mb-5 mx-auto dark:text-[#a2d5fd] ">Top Rated Rooms</h2>
        
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-between mx-auto">
          {rooms.map((room) => (
  
  
            <Link key={room._id} to={`/room-details/${room._id}`}>
                <div key={room._id} className="card bg-base-200 h-full  backdrop-blur-3xl border-transparent shadow-2xl  bg-transparent dark:bg-[#1f1f38] shadow-orange-800 dark:shadow-indigo-800">
            <figure className="px-10 pt-10">
              <img
                src={room.BannerimageUrl}
                alt={room.name}
                className="rounded-xl w-96 h-60" />
            </figure>
            <div className="card-body">
            <h2 className="card-title  font-mono font-extrabold text-white dark:text-[#a2d5fd] text-2xl">{room.name}</h2>
                <p><strong className="text-black font-mono dark:text-[#a2d5fd]  font-extrabold text-xl">Room Description:</strong> <span className="opacity-75  font-serif">{room.description}</span></p>
                <p><strong className="text-black font-mono font-extrabold text-xl dark:text-[#a2d5fd] ">Rating:</strong> <span className="opacity-75 font-serif">{room.rating}</span></p>
                <p><strong className="text-black font-mono font-extrabold text-xl dark:text-[#a2d5fd] ">Rent:</strong> <span className="opacity-75 font-serif">{room.price}</span></p>
  
            </div>
            </div>
  </Link>
          ))}
        </div>
        <NavLink to={"/rooms"} className="btn hover:bg-transparent hover:backdrop-blur-3xl hover:border-transparent hover:shadow-2xl hover:shadow-orange-300 dark:text-[#a2d5fd] hover:text-white w-full mt-5">See All Rooms</NavLink>
      </section>
    );
};

export default TopRatedRooms;