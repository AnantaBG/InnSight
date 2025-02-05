import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar";
import { useContext } from "react";
import { AuthC } from "../../Provider/AuthProviderx";
import Loading from "../Loading";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import Footer from "../Footer";

const Rooms = () => {
    const allRooms = useLoaderData();
    const {loading} = useContext(AuthC);
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Navbar/>
            <Helmet>
                <title>All Availiable Rooms</title>
            </Helmet>
            <section className="w-11/12 mx-auto my-10">
        <Slide>
        <h2 className="text-4xl flex justify-center mx-auto">All Rooms Availiable: {allRooms.length}</h2>
        </Slide>
        <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between mx-auto">
            {allRooms.map((Room) => (
    
            <Link key={Room._id} to={`/room-details/${Room._id}`}>
              <div key={Room._id} className="card bg-base-200 h-[550px] shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={Room.BannerimageUrl}
                  alt={Room.name}
                  className="rounded-xl w-96 h-48" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-center font-mono font-extrabold text-white text-2xl">{Room.name}</h2>
                <p><strong className="text-black font-mono font-extrabold text-xl">Room Description:</strong> <span className="opacity-75 font-serif">{Room.description}</span></p>
                <p><strong className="text-black font-mono font-extrabold text-xl">Rating:</strong> <span className="opacity-75 font-serif">{Room.rating}</span></p>
                <p><strong className="text-black font-mono font-extrabold text-xl">Rent:</strong> <span className="opacity-75 font-serif">{Room.price}</span></p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </section>
            <Footer></Footer>
        </div>
    );
};

export default Rooms;