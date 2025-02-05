import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthC } from "../../Provider/AuthProviderx";
import {NavLink, useLoaderData, useLocation } from "react-router-dom";
import Loading from "../Loading";
import Navbar from "../Navbar";
import modalimage from '../../assets/4.png'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Helmet } from "react-helmet";
import Footer from "../Footer";
// import ReviewCard from "../ReviewSystem/ReviewCard";

const RoomDetails = () => {
    const {user, loading} = useContext(AuthC);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [isRoomAvailable, setIsRoomAvailable] = useState(true); // Assume room is available initially
    const room = useLoaderData();
    const [currentDate, setCurrentDate] = useState(null);
    const [reviews, setReviews] = useState([]);
    // const [loading2, setLoading2] = useState(true);


    



    const handleBookNow = (room) => {
        setSelectedRoom(room);
        console.log(room._id)
        checkRoomAvailability(room._id, user.email) // Pass user email
          .then((available) => {
            setIsRoomAvailable(available);
            if (available) {
              setIsModalOpen(true);
            } else {
            //   Display appropriate message based on availability and booking status

               
                console.log("Room unavailable (general)");
                Swal.fire({
                  icon: 'error',
                  title: 'Room Unavailable',
                  text: 'The room is currently unavailable.'
                });
              
            }
          })
          .catch((error) => {
            console.error("Error checking availability:", error);
            setIsRoomAvailable(false); // Set to false for error handling
            Swal.fire({
              icon: 'error',
              title: 'Error Checking Availability',
              text: 'An error occurred while checking room availability. Please try again later.'
            });
          });
      };
      const handleCloseModal = () => {
        setIsModalOpen(false);
    };  

    const {_id, BannerimageUrl, location, amenities, description, imageUrl1, imageUrl2,  name, price, rating} = room;
    


        const handleBookRoom = async (ev) => {
            ev.preventDefault();
            const form = ev.target;
            const email = form.email.value;
            const FirstName = form.FirstName.value;
            const LastName = form.LastName.value;
            const date = form.date.value;
            const rent = form.rent.value;
            const photo = form.photo.value;
            const name = form.name.value;
            
            

            const AppliedRoom = { _id, email, FirstName, LastName, date, rent, photo, name}
            // send data to the server
            try {
                const response = await fetch(`https://inn-sight-server.vercel.app/BookedRoom`, {
                  method: 'POST',
                  headers: {
                    'content-type': 'application/json',
                  },
                  body: JSON.stringify(AppliedRoom),
                });
          console.log(response)
                if (response.ok) { 
                  const data = await response.json();
                  console.log(data)
                    Swal.fire({
                      icon: 'success',
                      title: 'Congratualtions!',
                      text: 'Room Booking Successsfull!',
                    });

                          setIsModalOpen(false);

                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Booking Error',
                        text: 'An error occurred while booking the room. Please try again later.',
                      });
                  } 
              } catch (error) {
                console.error("Error booking room:", error);
                Swal.fire({
                  icon: 'error',
                  title: 'You have Booked',
                  text: 'Cannot book again',
                });
              }
            };


        const checkRoomAvailability = async (roomId) => {
          console.log(roomId)
            try {
              const response = await fetch(`http://localhost:5000/checkAvailability/${roomId}`);
              console.log(response)
              const data = await response.json();
                console.log(data)
                if (user.email !== data.email) {
                  console.log(data.email)
                  return true;
                   // Room is available and user can book
                } else if (user.email === data.email) {
                  console.log(data.email)
                  return false;
                }
              } 
             catch (error) {
              console.error("Error checking availability:", error);
              return false; // Assume unavailable if error occurs
            }
          };
        



        // useEffect(() => {
        //   const fetchData = async () => {
        //     try {
        //       const response = await fetch(`http://localhost:5000/RoomReviews/${_id}`);
        //       const data = await response.json();
        //       setReviews(data); 
        //       setLoading2(false); 
        //       // console.log(reviews.comment)// Set loading to false after data is fetched
        //     } catch (error) {
        //       console.error('Error fetching data:', error);
        //       setLoading2(false); // Set loading to false even on error
        //     }
        //   },[_id];
      
        //   fetchData();
        // });
        const location2 = useLocation();
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch(`http://localhost:5000/RoomReviews/${_id}`);
              const data = await response.json();
              setReviews(data);
              // setLoading2(false);
            } catch (error) {
              console.error('Error fetching data:', error);
              // setLoading2(false); // Set loading to false even on error
            }
          };
      
          fetchData();
        }, [_id]);
        // console.log(reviews.username)

        const getAmenitiesArray = (amenitiesData) => {
            if (Array.isArray(amenitiesData)) {
              return amenitiesData; // Already an array, return directly
            } else if (typeof amenitiesData === "string") {
              return amenitiesData.split(', '); // Split string into array
            } else {
              return []; // Handle other data types (return empty array)
            }
          };
        
          const amenitiesList = getAmenitiesArray(amenities);






        if (loading) {
          return <Loading></Loading>;
        }
        return (
            <div className="mb-10">
                <Helmet>
                <title>{name} Details</title>
               </Helmet>
                <Navbar></Navbar>
                    <div className="w-11/12 md:h-3/5 lg:w-1/2 mt-10 mx-auto">
                        <div className="card bg-base-100 w-full py-5 shadow-xl">
                            <figure className="px-10 pt-10">
                            <div className="carousel rounded-box w-[500px]">
                            <div className="carousel-item w-full">
                                <img
                                src={BannerimageUrl}
                                className="w-full"
                                alt="Tailwind CSS Carousel component" />
                            </div>
                            <div className="carousel-item w-full">
                                <img
                                src={imageUrl1}
                                className="w-full"
                                alt="Tailwind CSS Carousel component" />
                            </div>
                            <div className="carousel-item w-full">
                                <img
                                src={imageUrl2}
                                className="w-full"
                                alt="Tailwind CSS Carousel component" />
                            </div>
                            </div>
                            </figure>

    
                            <div className="card-body items-start p-10">
                            <h2 className="card-title  font-mono font-extrabold text-white text-2xl">{name}</h2>
                                <p><strong className="text-black font-mono font-extrabold text-xl">Room Description:</strong> <span className="opacity-75 font-serif">{description}</span></p>
                                <p><strong className="text-black font-mono font-extrabold text-xl">Rating:</strong> <span className="opacity-75 font-serif">{rating}</span></p>
                                <p><strong className="text-black font-mono font-extrabold text-xl">Rent:</strong> <span className="opacity-75 font-serif">{price}</span></p>
                                <p><strong className="text-black font-mono font-extrabold text-xl">Location:</strong> <span className="opacity-75 font-serif">{location.description}</span></p>

                                <ul className="grid grid-cols-2 md:grid-cols-3 mx-auto w-full gap-1 pl-4">
                                {amenitiesList.length > 0 ? (
                                    amenitiesList.map((amenity, index) => (
                                    <li className="btn " key={index}>{amenity}</li>
                                    ))
                                ) : (
                                    <li>No amenities available</li>
                                )}
                                </ul>
                                
                            


                                { user &&(

                                <div className="">
                                <button
                                disabled={!isRoomAvailable} // Disable button if room is unavailable
                                onClick={() => handleBookNow(room)}
                                className={`btn w-full mt-10 bg-blue-300 ${
                                    !isRoomAvailable ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                                >
                                {isRoomAvailable ? "Book Now" : "Room Unavailable"}
                                </button>
                                </div>


                                )

                                }
                                { !user && (
                                   <NavLink state={location2.pathname} to={"/login"}> <button className="btn mt-5 w-full bg-blue-300">Login to Book now</button>
                                   </NavLink>
                                    
                                )

                                }
    
                                
                            </div>
                        </div>
                        {isModalOpen && (
                <div className="fixed justify-center mx-auto top-32 right-0 left-0 bottom-32 rounded-xl w-[300px] md:w-[400px] lg:w-[500px] h-auto  flex flex-col text-center " style={{ 
                    backgroundImage: `url(${modalimage})`
                    
                  }}>
                    <div  className=' w-11/12  m-auto'>
                    <form onSubmit={handleBookRoom} className="card-body">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input name="email" id="email" type="email" defaultValue={user.email} className="input input-bordered" required readOnly />
                        </div>
                        <div className="form-control flex-row ">
                            
                            <input type="text" name="FirstName" placeholder="First Name" className="input input-bordered w-1/2 placeholder:text-white" required />
                            <input type="text" name="LastName" placeholder="Last Name" className="input input-bordered placeholder:text-white w-1/2" required />
                        </div>
                        <DatePicker
                        placeholderText="Select Date"
                         className="input input-bordered w-full placeholder:text-white" 
                        selected={currentDate} name="date"
                         onChange={date => setCurrentDate(date)}
                         minDate={new Date()}
                        required
                         />
                        <input type="text" readOnly name="rent" className="input input-bordered"  defaultValue={price} />
                        <input type="url" readOnly name="photo" className="input hidden input-bordered"  defaultValue={BannerimageUrl} /> 
                        <input type="text" readOnly name="name" className="input hidden input-bordered"  defaultValue={name} /> 
                        <input type="text" readOnly name="id" className="input hidden input-bordered"  defaultValue={_id} /> 


                        <input type="submit"  value="Book" className="btn  btn-primary flex w-full justify-center bottom-0" /> 
                        
                        
                    </form>
                    <input type="submit" value="Close" className="btn  btn-primary flex  justify-center bottom-0" onClick={handleCloseModal}  /> 
                    </div>
    
                </div>
                        )}
                    </div>

      {/* <div>

        <div>
          <h2>{reviews.username}</h2>
          <h2>{reviews.comment}</h2>
          <h2>{reviews.id}</h2>
        </div>
        
        </div> */}
                    <Footer></Footer>
            </div>
    );
};

export default RoomDetails;