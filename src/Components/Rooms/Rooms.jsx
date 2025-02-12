import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Navbar";
import { useContext, useState, useEffect } from "react"; // Import useState and useEffect
import { AuthC } from "../../Provider/AuthProviderx";
import Loading from "../Loading";
import { Slide } from "react-awesome-reveal";
import { Helmet } from "react-helmet";
import Footer from "../Footer";
import { ThemeContext } from "../ThemeContext";
import img1 from '../../assets/1.png'
import img2 from '../../assets/21.png'

const Rooms = () => {
    const { theme } = useContext(ThemeContext);
      const getBackgroundImage = () => {
          return theme === 'light' ? img2 : img1;
      };
  
    useEffect(() => {
        document.body.classList.add('bg-fixed'); // Add bg-fixed class to body
        document.body.classList.toggle('dark', theme === 'dark'); // Toggle the dark class
        return () => {
            document.body.classList.remove('bg-fixed'); // Remove on unmount (important!)
        };
    });
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
        <div className={`-mt-20 pt-20 ${theme === 'dark' ? 'dark' : ''} min-h-screen`}
        style={{
          backgroundImage: `url(${getBackgroundImage()})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 0.3s ease'
        }}>
            <Navbar />
            <Helmet>
                <title>All Available Rooms</title>
            </Helmet>
            <section className="w-11/12 mx-auto my-10">
                <Slide>
                    <h2 className="text-4xl mb-5 flex justify-center dark:text-[#a2d5fd] mx-auto">
                        All Rooms Available: {filteredRooms.length} {/* Show filtered count */}
                    </h2>
                </Slide>

                {/* Price Range Filter */}
                <div className="mb-5">
                    <label htmlFor="priceRange" className="mr-2 font-bold dark:text-[#a2d5fd]">Filter by Price:</label>
                    <select
                        id="priceRange"
                        value={priceRange}
                        onChange={handlePriceRangeChange}
                        className="border bg-transparent dark:bg-black backdrop-blur-3xl  shadow-2xl shadow-orange-300 rounded-xl px-3 py-2"
                    >
                        <option value="all">All</option>
                        <option value="0-99">0 - 99$</option>
                        <option value="100-149">100 - 149$</option>
                        <option value="150-250">150 - 200$</option>
                        {/* Add more price ranges as needed */}
                    </select>
                </div>

                <div className="grid mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between mx-auto">
                    {filteredRooms.map((Room) => ( // Map over filteredRooms
                        <Link key={Room._id} to={`/room-details/${Room._id}`}>
                            <div
                                key={Room._id}
                                className="card bg-base-200 h-[550px] backdrop-blur-3xl border-transparent  shadow-2xl bg-transparent dark:bg-[#1f1f38] shadow-orange-800 dark:shadow-indigo-800"
                            >
                                <figure className="px-10 pt-10">
                                    <img
                                        src={Room.BannerimageUrl}
                                        alt={Room.name}
                                        className="rounded-xl w-96 h-48"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-center font-mono font-extrabold text-white text-2xl dark:text-[#a2d5fd]">
                                        {Room.name}
                                    </h2>
                                    <p>
                                        <strong className="text-black font-mono font-extrabold text-xl dark:text-[#a2d5fd]">
                                            Room Description:
                                        </strong>{" "}
                                        <span className="opacity-75 font-serif">{Room.description}</span>
                                    </p>
                                    <p>
                                        <strong className="text-black dark:text-[#a2d5fd] font-mono font-extrabold text-xl">Rating:</strong>{" "}
                                        <span className="opacity-75 font-serif">{Room.rating}</span>
                                    </p>
                                    <p>
                                        <strong className="text-black dark:text-[#a2d5fd] font-mono font-extrabold text-xl">Rent:</strong>{" "}
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