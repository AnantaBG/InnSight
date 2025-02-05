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
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono flex justify-center mb-5 mx-auto">Top Rated Rooms</h2>
        
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-between mx-auto">
          {rooms.map((room) => (
  
  
            <Link key={room._id} to={`/room-details/${room._id}`}>
                <div key={room._id} className="card bg-base-200 h-full  shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={room.BannerimageUrl}
                alt={room.name}
                className="rounded-xl w-96 h-60" />
            </figure>
            <div className="card-body">
            <h2 className="card-title  font-mono font-extrabold text-white text-2xl">{room.name}</h2>
                <p><strong className="text-black font-mono font-extrabold text-xl">Room Description:</strong> <span className="opacity-75 font-serif">{room.description}</span></p>
                <p><strong className="text-black font-mono font-extrabold text-xl">Rating:</strong> <span className="opacity-75 font-serif">{room.rating}</span></p>
                <p><strong className="text-black font-mono font-extrabold text-xl">Rent:</strong> <span className="opacity-75 font-serif">{room.price}</span></p>
  
            </div>
            </div>
  </Link>
          ))}
        </div>
        <NavLink to={"/rooms"} className="btn w-full mt-5">See All Rooms</NavLink>
      </section>
    );
};

export default TopRatedRooms;