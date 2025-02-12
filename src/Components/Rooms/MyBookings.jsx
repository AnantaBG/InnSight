/* eslint-disable no-unused-vars */
import Navbar from "../Navbar";
import { NavLink, useLoaderData } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthC } from "../../Provider/AuthProviderx";
import Loading from "../Loading";
import DatePicker from "react-datepicker";
import { Helmet } from "react-helmet";
import Footer from "../Footer";
import modalimage from '../../assets/4.png'
import ReviewForm from "../ReviewSystem/ReviewForm";
import img1 from '../../assets/1.png'
import img2 from '../../assets/21.png'
import { ThemeContext } from "../ThemeContext";


const MyBookings = () => {
  const { theme } = useContext(ThemeContext);
          const getBackgroundImage = () => {
              return theme === 'light' ? img2 : img1;
          };

    const BookedRoom = useLoaderData();
    const [rooms, setRooms] = useState(BookedRoom);
    const { user, loading } = useContext(AuthC);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentDate, setCurrentDate] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [isReviewOpen, setIsReviewOpen] = useState(false); // Initialize isReviewOpen
    const [selectedRoomId, setSelectedRoomId] = useState(null); // Initialize selectedRoomId

    const [roomReviews, setRoomReviews] = useState([]);


    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://inn-sight-server.vercel.app/RoomReviews'); 
          const data = await response.json();
          setRoomReviews(data); 
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData(); 
    }, []);



    const filteredName = rooms.find(({ _id }) => _id === selectedRoomId)?.name;

    
    const handleReviewToggle = (_id) => {
      if (BookedRoom.find(room => room._id === _id)) { 
        
        setSelectedRoomId(_id);
        setIsReviewOpen(true); 
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'You can only review rooms you have booked.'
        });
      }

    };
    const handleReviewSubmit = async (reviewData) => {

      
      try {
        const response = await fetch(`https://inn-sight-server.vercel.app/RoomReviews`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(reviewData),
          
        });
                if (response.ok) { 
                  const data = await response.json();
                   (data)
                  Swal.fire({
                    icon: 'success',
                    title: 'Congrats!',
                    text: 'Your review has been submitted'
                  });

                  setIsReviewOpen(false);

                }        
        
      } catch (error) {
        console.error("Error booking room:", error);
Swal.fire({
        icon: 'error',
        title: 'Review Error',
        text: 'Review Cannot Be Given By You.',
        });
      }

    };







    const handleUpdate = _id => {
        setSelectedRoom(filteredRooms[0]._id);
        setIsModalOpen(true);

      };
      


    const updateRoomData = async (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const date = form.date.value;
        const _id = selectedRoom

        const updatedRoomDate = {_id, date}
            try {
                const response = await fetch(`https://inn-sight-server.vercel.app/BookedRooms/${_id}`, {
                  method: 'PUT',
                  headers: {
                    'content-type': 'application/json',
                  },
                  body: JSON.stringify(updatedRoomDate),
                });
          
                if (response.ok) { 
                  const data = await response.json();
                   (data)
                    Swal.fire({
                      icon: 'success',
                      title: 'Congratualtions!',
                      text: 'Room UpDate Successsfull!',
                    });
                    const newDate = rooms.filter(room => room._id !== _id)
                    setCurrentDate(newDate);
                    
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
                  title: 'Booking Error',
                  text: 'An error occurred while booking the room. Please try again later.',
                });
              }

    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };  
  
    const handleCancel = _id => {
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, cancel it!",
          
        }).then((result) => {
          if (result.isConfirmed) {
  
            fetch(`https://inn-sight-server.vercel.app/BookedRooms/${_id}`,
              {
                 method: 'DELETE'
              }
            )
                Swal.fire({
                    title: "Canceled!",
                    text: "Your Application Has Been Canceled.",
                    icon: "success"
                    
                  });
                  const remaining = BookedRoom.filter(room => room._id !== _id)
                  setRooms(remaining);
  
          }
        });
    };

  
    if (loading) {
      return <Loading></Loading>;
    }
  
  
  const filteredRooms = rooms.filter(({ email, FirstName }) => 
      email === user.email && FirstName !== undefined
    );




    return (
      <div className={`-mt-20 pt-20 ${theme === 'dark' ? 'dark' : ''} min-h-screen`}
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        backgroundSize: 'cover',
        height:'1280px',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 0.3s ease'
      }}>
            <Helmet>
                <title>Bookings Page</title>
            </Helmet>
            <Navbar/>
            <div className="  w-11/12 mx-auto mt-10">

          {filteredRooms.map(({ _id, photo, name, rent, email, FirstName, LastName, date }) => (
            <div key={_id} className="overflow-x-auto dark:text-white">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={photo} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {FirstName} {LastName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{date}</span>
                  </td>
                  <td>{rent}</td>
                  <th className="flex justify-around">
                    <button 
                    onClick={() => handleCancel(_id)}
                    className="btn ">Cancel</button>
                    <button 
                    onClick={() => handleUpdate(BookedRoom)} className="btn">Update</button>
                       <button 
            className="btn" 
            onClick={() => handleReviewToggle(_id)} 
          >
            Review
          </button> 
                  </th>
                </tr>
              </tbody>
              {/* foot */}
            </table>

          </div>
          ))}
      {/* Review Form (moved outside the map function) */}
      {isReviewOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/50  z-50"> 
          <div className="bg-white dark:bg-[#496b84] p-6 rounded-lg shadow-md max-w-md"> 
            <ReviewForm 
              roomName={filteredName}
              roomId={selectedRoomId} 
              onSubmit={handleReviewSubmit} 
              onClose={() => setIsReviewOpen(false)} 
            />
          </div>
        </div>
      )}
        



            </div>
            {isModalOpen && (
                            <div className="fixed justify-center mx-auto top-32 right-0 left-0 bottom-32 rounded-xl w-[300px] md:w-[400px] lg:w-[500px] h-auto  flex flex-col text-center " style={{ 
                                
                                backgroundImage: `url(${modalimage})`
                              }}>
                                <div  className=' w-11/12  m-auto'>
                                <form onSubmit={updateRoomData} className="card-body">
                                <DatePicker
                                    placeholderText="Select Date"
                                     className="input input-bordered w-full placeholder:text-white dark:placeholder:text-black" 
                                    selected={currentDate} name="date"
                                     onChange={date => setCurrentDate(date)}
                                     minDate={new Date()}
                                    required
                                     />
            
                                    <input type="text" name="_id" className="input hidden input-bordered w-1/2 placeholder:text-white dark:placeholder:text-black" defaultValue="_id" />
                                    <input type="submit"  value="Update Date" className="btn  btn-primary flex w-full justify-center bottom-0" /> 
                                    
                                    
                                </form>
                                <input type="submit" value="Close" className="btn  btn-primary flex  justify-center bottom-0" onClick={handleCloseModal}  />
                                <NavLink to={"/"}><p className="text-2xl font-mono text-white ">Please Return to Home Page and Come Back Again To Implement the Changes</p></NavLink> 
                                </div>
                
                            </div>
                                    )}
                                    <Footer></Footer>
      </div>
    );
};

export default MyBookings;