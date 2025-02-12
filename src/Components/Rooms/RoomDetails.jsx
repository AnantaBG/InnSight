/* eslint-disable no-unused-vars */
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
import { FaTruckRampBox } from "react-icons/fa6";
// import ReviewCard from "../ReviewSystem/ReviewCard";

const RoomDetails = () => {
    const {user, loading} = useContext(AuthC);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [isRoomAvailable, setIsRoomAvailable] = useState(true); // Assume room is available initially
    const room = useLoaderData();
    const [currentDate, setCurrentDate] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [showreviews, setShowReviews] = useState(false);

    // const [loading2, setLoading2] = useState(true);

  const handleShowReview = () =>{
    setShowReviews(true)
  }
  const handleCloseReview = () =>{
    setShowReviews(false)
  }
    



    const handleBookNow = (room) => {
        setSelectedRoom(room);
         (room._id)
        checkRoomAvailability(room._id, user.email) // Pass user email
          .then((available) => {
            setIsRoomAvailable(available);
            if (available) {
              setIsModalOpen(true);
            } else {
            //   Display appropriate message based on availability and booking status

               
                 ("Room unavailable (general)");
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
           (response)
                if (response.ok) { 
                  const data = await response.json();
                   (data)
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
                  title: 'You have Already Booked',
                  text: 'Cannot book again',
                });
                setIsModalOpen(false)
              }
            };


        const checkRoomAvailability = async (roomId) => {
           (roomId)
            try {
              const response = await fetch(`https://inn-sight-server.vercel.app/checkAvailability/${roomId}`);
               (response)
              const data = await response.json();
                 (data)
                if (user.email !== data.email) {
                   (data.email)
                  return true;
                   // Room is available and user can book
                } else if (user.email === data.email) {
                   (data.email)
                  return false;
                }
              } 
             catch (error) {
              console.error("Error checking availability:", error);
              return false; // Assume unavailable if error occurs
            }
          };
        




        const location2 = useLocation();
        useEffect(() => {
          const fetchData = async () => {
            try {
              const response = await fetch(`https://inn-sight-server.vercel.app/RoomReviews/`);
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
        //  (reviews.username)
        const filteredReviews = reviews.filter(({  id }) =>
           id ===_id
        );
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
                        <div className="card w-full py-5 bg-transparent backdrop-blur-3xl border-transparent shadow-2xl shadow-orange-300">
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

                                <ul className="grid grid-cols-2 md:grid-cols-3 mx-auto w-full gap-1 pl-4 ">
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
                <div className="fixed justify-center z-10 mx-auto top-32 right-0 left-0 bottom-32 rounded-xl w-[300px] md:w-[400px] lg:w-[500px] bg-current h-auto  flex flex-col text-center " style={{ 
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
                        <div className=" flex justify-center mx-auto mt-10">



                        {
                          showreviews && (
                            <input type="submit" value="Close Reviews" className="btn  btn-primary flex  justify-center bottom-0 bg-transparent backdrop-blur-3xl  shadow-md border-transparent 
                            shadow-red-600" onClick={handleCloseReview}  />
                          )
                        }
                        {
                          !showreviews && (
                            <input type="submit" value="Show Reviews" className="btn  btn-primary flex  justify-center bottom-0 bg-transparent backdrop-blur-3xl  shadow-md
                            border-transparent shadow-green-600" onClick={handleShowReview}  />
                          )
                        }

                        </div>

                         
                        

                    </div>
                    
                    { showreviews && (
        filteredReviews.length > 0?  (
          filteredReviews.map(({ username, roomName, _id, comment, timestamp, rating }) => (
            <div key={_id} className="card bg-primary text-primary-content mt-10 w-11/12 mt-29 mx-auto">
            <div className="card-body">
                  <h2 className="card-title text-white opacity-70 text-sm">{username} has a review for {roomName}<br /> With a Rating of {rating} star</h2>
                  <p className="text-xl font-mono ">{comment}</p>
                  <div className="card-actions text-white justify-end">
            <h2>{timestamp}</h2>
                    </div>
                </div>
              </div>
          ))
        ) : (
          <p className="text-3xl  w-11/12 mx-auto flex justify-center mt-10 font-mono font-bold">No reviews found.</p>
        )
      )}


                    <Footer></Footer>
            </div>
    );
};

export default RoomDetails;