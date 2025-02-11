import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar";
import { useContext, useState, useEffect } from "react"; // Import useState and useEffect
import { AuthC } from "../../Provider/AuthProviderx";
import Loading from "../Loading";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import Footer from "../Footer";

const Rooms = () => {
    const allRooms = useLoaderData();
    const { loading } = useContext(AuthC);
    const [filteredRooms, setFilteredRooms] = useState(allRooms); // State for filtered rooms
    const [priceRange, setPriceRange] = useState("all"); // State for selected price range

    useEffect(() => {
      let filtered = [...allRooms];

      if (priceRange !== "all") {
          const [min, max] = priceRange.split("-").map(Number);

          filtered = filtered.filter(room => {
              const roomPrice = parseFloat(room.price.replace("$", "")); // Parse price string to number
              return roomPrice >= min && roomPrice <= max;
          });
      }

      setFilteredRooms(filtered);
  }, [priceRange, allRooms]);

    const handlePriceRangeChange = (event) => {
        setPriceRange(event.target.value);
    };

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div>
            <Navbar />
            <Helmet>
                <title>All Availiable Rooms</title>
            </Helmet>
            <section className="w-11/12 mx-auto my-10">
                <Slide>
                    <h2 className="text-4xl flex justify-center mx-auto">
                        All Rooms Availiable: {filteredRooms.length} {/* Show filtered count */}
                    </h2>
                </Slide>

                {/* Price Range Filter */}
                <div className="mb-5">
                    <label htmlFor="priceRange" className="mr-2 font-bold">Filter by Price:</label>
                    <select
                        id="priceRange"
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                        className="border bg-transparent backdrop-blur-3xl  shadow-2xl shadow-orange-300 rounded-xl px-3 py-2"
                    >
                        <option value="all">All</option>
                        <option value="0-99">0 - 99</option>
                        <option value="100-149">100 - 149</option>
                        <option value="150-250">150 - 200</option>
                        {/* Add more price ranges as needed */}
                    </select>
                </div>

                <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between mx-auto">
                    {filteredRooms.map((Room) => ( // Map over filteredRooms
                        <Link key={Room._id} to={`/room-details/${Room._id}`}>
                            <div
                                key={Room._id}
                                className="card bg-base-200 h-[550px] bg-transparent backdrop-blur-3xl border-transparent shadow-2xl shadow-orange-300"
                            >
                                <figure className="px-10 pt-10">
                                    <img
                                        src={Room.BannerimageUrl}
                                        alt={Room.name}
                                        className="rounded-xl w-96 h-48"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center font-mono font-extrabold text-white text-2xl">
                                        {Room.name}
                                    </h2>
                                    <p>
                                        <strong className="text-black font-mono font-extrabold text-xl">
                                            Room Description:
                                        </strong>{" "}
                                        <span className="opacity-75 font-serif">{Room.description}</span>
                                    </p>
                                    <p>
                                        <strong className="text-black font-mono font-extrabold text-xl">Rating:</strong>{" "}
                                        <span className="opacity-75 font-serif">{Room.rating}</span>
                                    </p>
                                    <p>
                                        <strong className="text-black font-mono font-extrabold text-xl">Rent:</strong>{" "}
                                        <span className="opacity-75 font-serif">{Room.price}</span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Rooms;